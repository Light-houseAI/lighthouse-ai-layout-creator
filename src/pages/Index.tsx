import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Problems from "@/components/landing/Problems";
import Solution from "@/components/landing/Solution";
import HowItWorks from "@/components/landing/HowItWorks";
import Newsletter from "@/components/landing/Newsletter";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Problems />
      <Solution />
      <HowItWorks />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
