import { ArrowRight, Smartphone } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fdfefc] via-[#ededec] to-[#fdfefc]" />
      
      {/* Glass effect overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(211,94,55,0.08),transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#582e50]/5 backdrop-blur-sm border border-[#582e50]/10">
              <div className="w-2 h-2 rounded-full bg-[#d35e37] animate-pulse" />
              <span className="text-sm text-[#582e50]/70">Hyperlocal Commerce Reimagined</span>
            </div>

            <h1 className="text-5xl md:text-7xl tracking-tight text-[#432758]">
              The Future of
              <br />
              <span className="bg-gradient-to-r from-[#582e50] via-[#d35e37] to-[#582e50] bg-clip-text text-transparent">
                Hyperlocal Shopping.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-[#582e50]/70 max-w-xl">
              Order anything. Find everything. Deliver instantly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group px-8 py-4 bg-[#582e50] text-white rounded-2xl hover:bg-[#432758] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#582e50]/20 hover:shadow-xl hover:shadow-[#582e50]/30">
                <Smartphone className="w-5 h-5" />
                Lunching Very soon
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="px-8 py-4 bg-white text-[#582e50] rounded-2xl hover:bg-[#ededec] transition-all duration-300 border border-[#582e50]/20 shadow-sm hover:shadow-md">
                Partner with Us
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-[#582e50]/10">
              <div>
                <div className="text-3xl text-[#432758]">10K+</div>
                <div className="text-sm text-[#582e50]/60">Active Users</div>
              </div>
              <div>
                <div className="text-3xl text-[#432758]">500+</div>
                <div className="text-sm text-[#582e50]/60">Partner Stores</div>
              </div>
              <div>
                <div className="text-3xl text-[#432758]">15 Min</div>
                <div className="text-sm text-[#582e50]/60">Avg Delivery</div>
              </div>
            </div>
          </div>

          {/* Right Content - App Mockups */}
          <div className="relative">
            <div className="relative z-10 flex items-center justify-center gap-4">
              {/* Phone mockup container */}
              <div className="relative">
                <div className="w-72 h-[600px] rounded-[3rem] bg-[#432758] p-3 shadow-2xl shadow-[#582e50]/30">
                  <div className="w-full h-full rounded-[2.5rem] overflow-hidden bg-white">
                    <ImageWithFallback 
                      src="https://eu0yhcfg0e.ufs.sh/f/rKAT0N5cfFSdkvFSHJZncBaZ8sKRIb4e6qAQSHfdOLVlDizx"
                      alt="QikCat Customer App"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Notch */}
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#432758] rounded-full" />
                </div>
                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 px-4 py-2 bg-white rounded-xl shadow-lg border border-[#582e50]/10">
                  <div className="text-xs text-[#582e50]/70">Customer App</div>
                </div>
              </div>

              {/* Second phone mockup (shop owner) */}
              <div className="relative -ml-8 mt-20 hidden md:block">
                <div className="w-64 h-[520px] rounded-[2.5rem] bg-[#582e50] p-2.5 shadow-2xl shadow-[#582e50]/20">
                  <div className="w-full h-full rounded-[2rem] overflow-hidden bg-[#ededec]">
                    <ImageWithFallback 
                      src="https://eu0yhcfg0e.ufs.sh/f/rKAT0N5cfFSd1CZuEy7rRxietHoFyWu95K6phJZfU2zaOwCD"
                      alt="QikCat Shop Owner App"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 px-4 py-2 bg-white rounded-xl shadow-lg border border-[#582e50]/10">
                  <div className="text-xs text-[#582e50]/70">Shop Owner App</div>
                </div>
              </div>
            </div>

            {/* Decorative blur circles */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#d35e37]/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#582e50]/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-[#582e50]/20 flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#582e50]/40" />
        </div>
      </div>
    </section>
  );
}