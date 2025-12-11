import { TrendingUp, CreditCard, RefreshCw, Percent, BarChart3, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ShopOwnerBenefits() {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Increase walk-in + online sales',
      description: 'Reach customers who are actively searching for products you stock.'
    },
    {
      icon: CreditCard,
      title: 'Easy billing system (POS)',
      description: 'Integrated point-of-sale that handles both in-store and online orders.'
    },
    {
      icon: RefreshCw,
      title: 'Inventory updates automatically',
      description: 'Real-time sync keeps your stock levels accurate without manual effort.'
    },
    {
      icon: Percent,
      title: 'Lower commission rates',
      description: 'We charge less than any marketplace. You keep more of what you earn.'
    },
    {
      icon: BarChart3,
      title: 'Monthly analytics dashboard',
      description: 'Understand your sales patterns, popular products, and customer trends.'
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-4 py-2 bg-black/5 rounded-full mb-6">
            <span className="text-sm text-black/70">For Shop Owners</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-black mb-6">
            Grow Your Business
            <br />
            with QikCat
          </h2>
          <p className="text-xl text-gray-600">
            More customers. Better tools. Fair commissions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/10 border border-black/10">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1578303106101-56e5d0788a21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2NhbCUyMHNob3AlMjByZXRhaWwlMjBzdG9yZXxlbnwxfHx8fDE3NjU0NjcyOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Local retail store"
                className="w-full h-[500px] object-cover"
              />
              {/* Overlay card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-black/10">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl text-black mb-1">2.5x</div>
                    <div className="text-sm text-gray-600">Average sales increase</div>
                  </div>
                  <div className="h-12 w-px bg-black/10" />
                  <div>
                    <div className="text-3xl text-black mb-1">24hrs</div>
                    <div className="text-sm text-gray-600">Fast settlement</div>
                  </div>
                  <div className="h-12 w-px bg-black/10" />
                  <div>
                    <div className="text-3xl text-black mb-1">5%</div>
                    <div className="text-sm text-gray-600">Low commission</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative blur */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gray-300/30 rounded-full blur-3xl -z-10" />
          </div>

          {/* Right - Benefits */}
          <div className="order-1 lg:order-2 space-y-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-r from-gray-50 to-white rounded-2xl p-6 border border-black/5 hover:border-black/10 transition-all duration-300 hover:shadow-lg hover:shadow-black/5"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md shadow-black/10">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg text-black mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* CTA */}
            <div className="pt-6">
              <button className="group w-full sm:w-auto px-8 py-4 bg-black text-white rounded-2xl hover:bg-gray-900 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/20">
                Become a QikCat Partner
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-sm text-gray-600 mt-4">
                Free onboarding • No setup fees • Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
