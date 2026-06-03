import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Philosophy } from "@/components/sections/Philosophy";
import { Founder } from "@/components/sections/Founder";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Goals } from "@/components/sections/Goals";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Consultation } from "@/components/sections/Consultation";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main">
        {/* 1. Who we are + the promise */}
        <Hero />
        {/* 2. Instant credibility */}
        <TrustBar />
        {/* 3. How we think (differentiation) */}
        <Philosophy />
        {/* 4. Who you're trusting */}
        <Founder />
        {/* 5. What we do */}
        <Services />
        {/* 6. How it works (reduce friction) */}
        <Process />
        {/* 7. Make the outcome tangible */}
        <Goals />
        {/* 8. Social proof */}
        <Testimonials />
        {/* 9. Handle objections */}
        <FAQ />
        {/* 10. Convert */}
        <Consultation />
      </main>
      <Footer />
    </>
  );
}
