require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.MONGODB_DB || "qikcat";
const PORT = process.env.PORT || 4000;

if (!MONGODB_URI) {
  console.error("Missing MONGODB_URI in environment. See .env.example");
}

async function main() {
  const client = new MongoClient(MONGODB_URI);
  await client.connect();
  console.log("Connected to MongoDB");
  const db = client.db(MONGODB_DB);
  const waitlist = db.collection("waitlist");

  // ensure unique index on email
  try {
    await waitlist.createIndex({ email: 1 }, { unique: true });
  } catch (err) {
    console.warn("Index creation warning:", err.message);
  }

  app.post("/api/waitlist", async (req, res) => {
    try {
      const { email } = req.body || {};
      if (!email || typeof email !== "string") {
        return res
          .status(400)
          .json({ status: "error", message: "Missing email" });
      }
      const emailLower = email.trim().toLowerCase();
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(emailLower)) {
        return res
          .status(400)
          .json({ status: "error", message: "Invalid email" });
      }

      const existing = await waitlist.findOne({ email: emailLower });
      if (existing) {
        return res.json({ status: "exists" });
      }

      await waitlist.insertOne({ email: emailLower, createdAt: new Date() });
      return res.json({ status: "success" });
    } catch (err) {
      // duplicate key
      if (err && err.code === 11000) {
        return res.json({ status: "exists" });
      }
      console.error(err);
      return res.status(500).json({ status: "error" });
    }
  });

  app.get("/api/health", (req, res) => res.json({ status: "ok" }));

//------------------------------------------------------------------------------
// Stress test endpoint
//------------------------------------------------------------------------------
  app.post("/api/stress-test", async (req, res) => {
  try {
    await waitlist.insertOne({
      email: `test_${Date.now()}_${Math.random()}@stress.com`,
      createdAt: new Date(),
    });
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ ok: false });
  }
});

//------------------------------------------------------------------------------
// End of Stress test endpoint
//------------------------------------------------------------------------------

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ status: "error" });
});

  app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
}

main().catch((err) => {
  console.error("Failed to start server", err);
  process.exit(1);
});
