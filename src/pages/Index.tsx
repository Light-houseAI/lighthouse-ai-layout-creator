import TopBanner from "@/components/landing/TopBanner";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import ProcessVisualization from "@/components/landing/ProcessVisualization";
import HowToPrepare from "@/components/landing/HowToPrepare";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBanner />
      <Header />
      <Hero />
      <ProcessVisualization />
      <HowToPrepare />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
