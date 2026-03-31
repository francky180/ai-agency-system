import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import ThreeSteps from "@/components/ThreeSteps";
import ValueBridge from "@/components/ValueBridge";
import EntryOffer from "@/components/EntryOffer";
import PremiumOffer from "@/components/PremiumOffer";
import BookCall from "@/components/BookCall";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <SocialProof />
        <ThreeSteps />
        <ValueBridge />
        <EntryOffer />
        <PremiumOffer />
        <BookCall />
        <FAQ />
        <FinalCTA />
      </main>
    </>
  );
}
