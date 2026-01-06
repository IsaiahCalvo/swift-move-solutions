import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Industries from "@/components/Industries";
import FAQ from "@/components/FAQ";
import QuoteSection from "@/components/QuoteSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <HowItWorks />
        <Industries />
        <FAQ />
        <QuoteSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
