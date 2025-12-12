import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      type: 'Customer',
      name: 'Priya Sharma',
      role: 'Regular User',
      location: 'Mumbai',
      quote: 'I needed a specific brand of baby food at 10 PM. QikCat found it at a store 5 minutes away. Game changer for parents!',
      rating: 5
    },
    {
      type: 'Customer',
      name: 'Rahul Mehta',
      role: 'Tech Professional',
      location: 'Bangalore',
      quote: 'Finally, an app that doesn\'t force me to order ₹200 worth of stuff when I just need a ₹30 charger. Love the pickup option!',
      rating: 5
    },
    {
      type: 'Shop Owner',
      name: 'Suresh Kumar',
      role: 'Electronics Store Owner',
      location: 'Pune',
      quote: 'My sales have doubled since joining QikCat. The POS system is simple and customers love finding exactly what they need in stock.',
      rating: 5
    },
    {
      type: 'Shop Owner',
      name: 'Anjali Desai',
      role: 'Grocery Store Owner',
      location: 'Ahmedabad',
      quote: 'Best decision I made this year. Low commission, fast payments, and I get new customers every day without any marketing effort.',
      rating: 5
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-[#ededec] to-[#fdfefc]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl text-[#432758] mb-6">
            Loved by Customers
            <br />
            & Shop Owners
          </h2>
          <p className="text-xl text-[#582e50]/70">
            Real feedback from our growing community.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl p-8 border border-[#582e50]/10 hover:border-[#d35e37]/30 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-[#d35e37]/10"
            >
              {/* Type badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="px-3 py-1 bg-[#582e50]/5 rounded-full">
                  <span className="text-xs text-[#582e50]/70">{testimonial.type}</span>
                </div>
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#d35e37] text-[#d35e37]" />
                  ))}
                </div>
              </div>

              {/* Quote icon */}
              <Quote className="w-10 h-10 text-[#582e50]/10 mb-4" />

              {/* Quote */}
              <p className="text-[#582e50] leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-6 border-t border-[#582e50]/5">
                <div className="w-12 h-12 bg-gradient-to-br from-[#ededec] to-[#fdfefc] rounded-full flex items-center justify-center border border-[#582e50]/10">
                  <span className="text-lg text-[#582e50]">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-[#432758]">{testimonial.name}</div>
                  <div className="text-sm text-[#582e50]/70">
                    {testimonial.role} • {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}