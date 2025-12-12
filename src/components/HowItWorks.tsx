import { Search, MapPin, ShoppingBag } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: 'Search for any product',
      description: 'Type what you need, from groceries to electronics to specialty items.'
    },
    {
      icon: MapPin,
      title: 'We find the nearest store',
      description: 'Real-time stock tracking shows exactly which local shops have your item.'
    },
    {
      icon: ShoppingBag,
      title: 'Choose pickup or delivery',
      description: 'Get it delivered in minutes or walk in to pick it up yourself.'
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#fdfefc]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl text-[#432758] mb-6">
            How QikCat Works
          </h2>
          <p className="text-xl text-[#582e50]/70">
            One app for discovery, shopping, and instant delivery.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#582e50]/20 to-transparent" />
              )}
              
              <div className="relative bg-gradient-to-br from-[#ededec] to-white rounded-3xl p-8 border border-[#582e50]/5 hover:border-[#d35e37]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#d35e37]/10">
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-[#582e50] text-white rounded-xl flex items-center justify-center shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-[#582e50] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#582e50]/20">
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl text-[#432758] mb-4">
                  {step.title}
                </h3>
                <p className="text-[#582e50]/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}