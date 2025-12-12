# QikCat Backend (Waitlist API)

Simple Express server that exposes an endpoint to add emails to a MongoDB `waitlist` collection.

Quick start:

1. cd server
2. npm install
3. Create a `.env` file based on `.env.example` and set `MONGODB_URI`.
4. npm run dev

Endpoint:

- POST /api/waitlist { email }
  - Responses: `{ status: 'success' }`, `{ status: 'exists' }`, or `{ status: 'error' }`

Deploying to Render

1. Push your repository to GitHub (if not already).
2. In Render dashboard, create a new Web Service and connect your GitHub repo.

- Build command: `cd server && npm install`
- Start command: `cd server && npm run start`
- Environment: `Node`
- Port: leave empty (Render provides a port via `PORT` env var) or set to `4000`.

3. Add the `MONGODB_URI` as a secret environment variable in the Render service settings.
4. (Optional) Add `MONGODB_DB` and `PORT` env vars; `MONGODB_DB` defaults to `qikcat`.

You can also use the provided `render.yaml` at the repo root to enable Infrastructure-as-Code deployment with Render. The `MONGODB_URI` should be added in Render as a secret (do not commit it to the repo).

Frontend notes:

- If your frontend is served separately, update the fetch URL in `src/components/DownloadApp.tsx` to the Render service URL (`https://<your-service>.onrender.com/api/waitlist`).
- Alternatively, configure a proxy in `vite.config.ts` during local development to forward `/api` to your Render service or local server.
