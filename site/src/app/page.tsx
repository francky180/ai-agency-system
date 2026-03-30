import Hero from "@/components/Hero";
import ThreeSteps from "@/components/ThreeSteps";
import EntryOffer from "@/components/EntryOffer";
import PremiumOffer from "@/components/PremiumOffer";
import BookCall from "@/components/BookCall";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <ThreeSteps />
      <EntryOffer />
      <PremiumOffer />
      <BookCall />
      <FinalCTA />
    </main>
  );
}
