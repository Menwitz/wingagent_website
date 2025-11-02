import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import Hero from "./_sections/Hero";
import Stats from "./_sections/Stats";
import FeaturedIn from "./_sections/FeaturedIn";
import HowItWorks from "./_sections/HowItWorks";
import WhyChoose from "./_sections/WhyChoose";
import Pricing from "./_sections/Pricing";
import FAQ from "./_sections/FAQ";
import FinalCTA from "./_sections/FinalCTA";

export default function Page() {
  return (
    <>
      <div className="bg-radial-fade">
        <Navbar />
        <main id="top" className="relative">
          <Hero />
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <Stats />
          <FeaturedIn />
          <div className="h-px w-full bg-gradient-to-r from-transparent via-fuchsia-500/20 to-transparent" />
          <HowItWorks />
          <WhyChoose />
          <div className="h-px w-full bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
          <Pricing />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </>
  );
}