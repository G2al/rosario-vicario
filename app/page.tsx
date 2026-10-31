import About from "@/components/About";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Method from "@/components/Method";
import Motion from "@/components/Motion";
import Nav from "@/components/Nav";
import Pricing from "@/components/Pricing";
import Results from "@/components/Results";
import WhatsAppFab from "@/components/WhatsAppFab";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Method />
        <Results />
        <Pricing />
        <Certifications />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
      <Motion />
    </>
  );
}
