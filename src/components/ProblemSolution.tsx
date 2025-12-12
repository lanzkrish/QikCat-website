import { X, Check } from 'lucide-react';

export function ProblemSolution() {
  const problems = [
    '₹50 delivery fee on a ₹30 product',
    'Running to multiple stores to find one item',
    'Quick-commerce not having the exact brand',
    'Local shops losing customers to online giants'
  ];

  const solutions = [
    'Walk-in pickup option with zero fees',
    'Real-time product locator across all stores',
    'Instant availability checks for specific brands',
    'Empowering retail stores with digital tools'
  ];

  return (
    <section className="py-24 md:py-32 bg-[#ededec]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl text-[#432758] mb-6">
            The Problem We Solve
          </h2>
          <p className="text-xl text-[#582e50]/70">
            Traditional shopping and quick-commerce both have gaps. We fill them.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Problems */}
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-red-100 shadow-lg shadow-red-50">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                <X className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-2xl text-[#432758]">
                Everyday Frustrations
              </h3>
            </div>

            <div className="space-y-4">
              {problems.map((problem, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-red-50/50 border border-red-100"
                >
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-4 h-4 text-red-600" />
                  </div>
                  <p className="text-[#582e50]">
                    {problem}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div className="bg-gradient-to-br from-[#582e50] to-[#432758] rounded-3xl p-8 md:p-12 text-white shadow-2xl shadow-[#582e50]/20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <Check className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl">
                QikCat's Solution
              </h3>
            </div>

            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                >
                  <div className="w-6 h-6 rounded-full bg-[#d35e37] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-white/90">
                    {solution}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-white/70 text-sm leading-relaxed">
                By connecting customers directly with local retail inventory, we create a win-win ecosystem that's faster, cheaper, and more sustainable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}