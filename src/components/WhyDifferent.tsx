import { Warehouse, Map, DollarSign, TrendingUp, Store } from 'lucide-react';

export function WhyDifferent() {
  const innovations = [
    {
      icon: Warehouse,
      title: 'No Warehouses. Zero Delays.',
      description: 'We use local retail stores as real-time inventory hubs. No dark stores, no waste.'
    },
    {
      icon: Map,
      title: 'Product Availability Map',
      description: 'Shows exact shops that have exactly what you\'re searching for, in real-time.'
    },
    {
      icon: DollarSign,
      title: 'No Minimum Order Value',
      description: 'Order even a ₹20 item without thinking twice. No hidden fees, no catches.'
    },
    {
      icon: TrendingUp,
      title: 'Multi-Store Smart Pickup',
      description: 'Need items from different shops? Our delivery partners handle it seamlessly.'
    },
    {
      icon: Store,
      title: 'Store-Friendly Platform',
      description: 'Low commissions, fast settlements, integrated billing, and easy onboarding.'
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-4 py-2 bg-black/5 rounded-full mb-6">
            <span className="text-sm text-black/70">Key Innovations</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-black mb-6">
            Why We're Different
          </h2>
          <p className="text-xl text-gray-600">
            Built for local shops, designed for instant gratification, powered by real-time technology.
          </p>
        </div>

        {/* Innovation Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {innovations.map((item, index) => (
            <div 
              key={index}
              className="group bg-white rounded-3xl p-8 border border-black/10 hover:border-black/20 transition-all duration-300 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-black/5">
                <item.icon className="w-7 h-7 text-black" />
              </div>

              {/* Content */}
              <h3 className="text-xl text-black mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}

          {/* CTA Card */}
          <div className="group bg-gradient-to-br from-black to-gray-900 rounded-3xl p-8 text-white hover:shadow-2xl hover:shadow-black/20 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
            <div>
              <h3 className="text-xl mb-3">
                Ready to experience the difference?
              </h3>
              <p className="text-white/70 leading-relaxed mb-6">
                Join thousands of users who are shopping smarter with QikCat.
              </p>
            </div>
            <button className="px-6 py-3 bg-white text-black rounded-xl hover:bg-gray-100 transition-colors self-start">
              Download Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
