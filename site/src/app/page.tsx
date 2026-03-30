import Hero from "@/components/Hero";
import WhatThisIs from "@/components/WhatThisIs";
import WhatYouGet from "@/components/WhatYouGet";
import Process from "@/components/Process";
import SystemComparison from "@/components/SystemComparison";
import Trust from "@/components/Trust";
import CTA from "@/components/CTA";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <WhatThisIs />
      <WhatYouGet />
      <Process />
      <SystemComparison />
      <Trust />
      <CTA />
      <FinalCTA />
    </main>
  );
}
