import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { WhyDifferent } from './components/WhyDifferent';
import { ProblemSolution } from './components/ProblemSolution';
import { Features } from './components/Features';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ShopOwnerBenefits } from './components/ShopOwnerBenefits';
import { Testimonials } from './components/Testimonials';
import { DownloadApp } from './components/DownloadApp';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <HowItWorks />
      <WhyDifferent />
      <ProblemSolution />
      <Features />
      <WhyChooseUs />
      <ShopOwnerBenefits />
      <Testimonials />
      <DownloadApp />
      <Footer />
    </div>
  );
}
