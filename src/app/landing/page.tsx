import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import Intent from "@/components/Intent";
import Process from "@/components/Process";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Intent />
      <Process />
      <HowItWorks />
      <FAQ />
      <Pricing />
      <Testimonials />
      <Newsletter />
      <CTA />
      <Footer />
    </main>
  );
}






