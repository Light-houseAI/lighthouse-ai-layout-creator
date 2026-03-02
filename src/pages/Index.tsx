import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import WhyKrama from "@/components/landing/WhyKrama";
import UseCases from "@/components/landing/UseCases";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <WhyKrama />
      <UseCases />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
