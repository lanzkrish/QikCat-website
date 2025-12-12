import { Sparkles, ShieldCheck, Heart, Globe, Leaf } from 'lucide-react';

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Sparkles,
      title: 'Faster than competitors',
      description: 'For rare or specific items, we\'re often faster than Blinkit or Zepto because we tap into local inventory.',
      highlight: 'Speed'
    },
    {
      icon: ShieldCheck,
      title: '100% verified local shops',
      description: 'Every partner store is verified and vetted. Shop with confidence, support your community.',
      highlight: 'Trust'
    },
    {
      icon: Heart,
      title: 'Fair pricing for everyone',
      description: 'We balance customer affordability with fair compensation for shop owners. Everyone wins.',
      highlight: 'Fairness'
    },
    {
      icon: Globe,
      title: 'Built for all of India',
      description: 'Tier 1, Tier 2, and small towns. If there are local shops, QikCat works.',
      highlight: 'Accessibility'
    },
    {
      icon: Leaf,
      title: 'Eco-friendly approach',
      description: 'No warehouses means no wasted inventory. We work with what\'s already there.',
      highlight: 'Sustainability'
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-[#ededec] to-[#fdfefc]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl text-[#432758] mb-6">
            Why Choose QikCat
          </h2>
          <p className="text-xl text-[#582e50]/70">
            Trust, credibility, and a commitment to doing things the right way.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="relative group"
            >
              <div className="bg-white rounded-3xl p-8 border border-[#582e50]/10 hover:border-[#d35e37]/40 transition-all duration-300 h-full shadow-sm hover:shadow-xl hover:shadow-[#d35e37]/10">
                {/* Highlight badge */}
                <div className="absolute -top-3 right-6 px-3 py-1 bg-[#582e50] text-white text-xs rounded-full">
                  {reason.highlight}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-[#ededec] to-[#fdfefc] rounded-2xl flex items-center justify-center mb-6 border border-[#582e50]/10 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="w-7 h-7 text-[#582e50]" />
                </div>

                {/* Content */}
                <h3 className="text-xl text-[#432758] mb-4">
                  {reason.title}
                </h3>
                <p className="text-[#582e50]/70 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}

          {/* CTA Card */}
          <div className="md:col-span-2 lg:col-span-1 bg-gradient-to-br from-[#582e50] to-[#432758] rounded-3xl p-8 text-white flex flex-col justify-between shadow-xl shadow-[#582e50]/20">
            <div>
              <h3 className="text-2xl mb-4">
                Experience the QikCat difference today
              </h3>
              <p className="text-white/70 leading-relaxed mb-6">
                Join our growing community of smart shoppers and local businesses.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="px-6 py-3 bg-white text-[#582e50] rounded-xl hover:bg-[#ededec] transition-colors">
                Get Started
              </button>
              <button className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-xl hover:bg-white/20 transition-colors border border-white/20">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}