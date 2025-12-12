import { Zap, RefreshCw, Package, Route, CreditCard, Star, Users, TrendingUp } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Zap,
      title: 'Instant Delivery',
      description: 'Average delivery time under 15 minutes for most orders.'
    },
    {
      icon: RefreshCw,
      title: 'Real-Time Inventory Sync',
      description: 'See live stock updates from every partner store near you.'
    },
    {
      icon: Package,
      title: 'Reserve & Pickup',
      description: 'Hold items and collect them at your convenience with zero fees.'
    },
    {
      icon: Route,
      title: 'Smart Store Routing',
      description: 'Optimized multi-store pickups for complex orders.'
    },
    {
      icon: CreditCard,
      title: 'POS & Billing for Shops',
      description: 'Integrated point-of-sale system for seamless transactions.'
    },
    {
      icon: Star,
      title: 'Transparent Pricing',
      description: 'No hidden charges. What you see is what you pay.'
    },
    {
      icon: Users,
      title: 'Store Reviews & Ratings',
      description: 'Community-driven feedback helps you choose the best shops.'
    },
    {
      icon: TrendingUp,
      title: 'Community-driven Shopping',
      description: 'Discover trending products and local favorites in your area.'
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#fdfefc]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-4 py-2 bg-[#582e50]/5 rounded-full mb-6">
            <span className="text-sm text-[#582e50]/70">Comprehensive Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-[#432758] mb-6">
            Everything You Need,
            <br />
            All in One Place
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-b from-[#ededec] to-white rounded-2xl p-6 border border-[#582e50]/5 hover:border-[#d35e37]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#d35e37]/10"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-[#582e50] rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#582e50]/20">
                <feature.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-lg text-[#432758] mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-[#582e50]/70 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover accent */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#d35e37]/0 to-[#d35e37]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}