import { useState } from 'react';
import { Smartphone, QrCode, Apple, Clock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function DownloadApp() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleJoinWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    const emailLower = email.trim().toLowerCase();
    if (!emailLower || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(emailLower)) {
      setMessage('Please enter a valid email address.');
      return;
    }
    setLoading(true);
    try {
      const base = (import.meta.env.VITE_BACKEND_URL || '').replace(/\/+$/, '');
      const url = base ? `${base}/api/waitlist` : `/api/waitlist`;
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: emailLower }),
      });
      const data = await res.json();
      if (data.status === 'success') {
        setMessage('Successfully joined the waitlist!');
        setEmail('');
      } else if (data.status === 'exists') {
        setMessage('You have already joined the waitlist.');
      } else {
        setMessage('Something went wrong. Please try again.');
      }
    } catch (err) {
      setMessage('Error connecting to server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-[#582e50] to-[#432758] text-white relative overflow-hidden">
      {/* Background decorations */}
      
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#d35e37]/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-white" />
                <span className="text-sm text-white/90">Coming Soon</span>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl">
              Get QikCat on
              <br />
              Your Phone
            </h2>

            <p className="text-xl text-white/70 leading-relaxed">
              We're launching soon! Join the waitlist to be the first to experience the future of hyperlocal shopping.
            </p>

            {/* Waitlist Form */}
            <form onSubmit={handleJoinWaitlist} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="flex-1 px-6 py-4 bg-white text-[#432758] rounded-xl placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                  disabled={loading}
                />
                <button
                  type="submit"
                  className="px-6 py-4 bg-[#d35e37] text-white rounded-xl hover:bg-[#d35e37]/90 transition-all duration-300 shadow-xl whitespace-nowrap"
                  disabled={loading}
                >
                  {loading ? 'Joining...' : 'Join Waitlist'}
                </button>
              </div>
              <p className="text-sm text-white/60 mt-3">Get early access and exclusive launch offers</p>
              {message && (
                <div className="mt-2 text-sm" style={{ color: message.includes('success') ? '#4ade80' : '#f87171' }}>
                  {message}
                </div>
              )}
            </form>

            {/* Coming Soon badges */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="group px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white/50 rounded-2xl flex items-center justify-center gap-3">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs">Coming Soon</div>
                  <div className="text-sm">Google Play</div>
                </div>
              </div>

              <div className="group px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white/50 rounded-2xl flex items-center justify-center gap-3">
                <Apple className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs">Coming Soon</div>
                  <div className="text-sm">App Store</div>
                </div>
              </div>
            </div>

            {/* Notify options */}
            <div className="flex items-center gap-4 pt-8 border-t border-white/10">
              <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center p-3 border border-white/20">
                <Clock className="w-12 h-12 text-white/70" />
              </div>
              <div>
                <div className="text-sm text-white/70 mb-1">Be the first to know</div>
                <div className="text-white">We'll notify you when we launch</div>
              </div>
            </div>

            {/* Expected launch info */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <div className="text-2xl mb-1">Q1 2025</div>
                <div className="text-sm text-white/70">Expected Launch</div>
              </div>
              <div>
                <div className="text-2xl mb-1">2 Apps</div>
                <div className="text-sm text-white/70">Customer & Shop</div>
              </div>
              <div>
                <div className="text-2xl mb-1">Free</div>
                <div className="text-sm text-white/70">To Download</div>
              </div>
            </div>
          </div>

          {/* Right - App Mockups */}
          <div className="relative flex items-center justify-center">
            {/* Main phone */}
            <div className="relative z-10">
              <div className="w-80 h-[650px] rounded-[3.5rem] bg-[#432758] p-4 shadow-2xl shadow-black/50">
                <div className="w-full h-full rounded-[3rem] overflow-hidden bg-white">
                  <ImageWithFallback
                    src="https://eu0yhcfg0e.ufs.sh/f/rKAT0N5cfFSdRD7KjsrKhpGVqx1rNJL0WkZPUEDlem6ts4M5"
                    alt="QikCat App"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Notch */}
                <div className="absolute top-7 left-1/2 -translate-x-1/2 w-28 h-7 bg-[#432758] rounded-full" />
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-6 -left-6 px-4 py-2 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-xl">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-white" />
                <span className="text-sm text-white">Launching Soon</span>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 px-4 py-3 bg-white text-[#432758] rounded-xl shadow-xl">
              <div className="text-xs text-[#582e50]/70 mb-1">Waitlist</div>
              <div className="text-xl">500+</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
