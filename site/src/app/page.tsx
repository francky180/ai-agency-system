import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import ThreeSteps from "@/components/ThreeSteps";
import WhatYouGet from "@/components/WhatYouGet";
import ValueBridge from "@/components/ValueBridge";
import Pricing from "@/components/Pricing";
import Guarantee from "@/components/Guarantee";
import BookCall from "@/components/BookCall";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import MobileStickyBar from "@/components/MobileStickyBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <SocialProof />
        <ThreeSteps />
        <WhatYouGet />
        <ValueBridge />
        <Pricing />
        <Guarantee />
        <BookCall />
        <FAQ />
        <FinalCTA />
      </main>
      <MobileStickyBar />
    </>
  );
}
