"use client";

import { useState, useEffect } from "react";
import { LINKS } from "@/lib/links";

export default function MobileStickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/90 backdrop-blur-xl px-4 py-3 sm:hidden">
      <div className="flex items-center gap-3">
        <a
          href={LINKS.entry}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 rounded-full bg-accent py-3 text-center text-xs font-bold text-background tracking-wide"
        >
          Get Started — $250
        </a>
        <a
          href="#book-call"
          className="rounded-full border border-border px-4 py-3 text-xs font-semibold text-muted tracking-wide"
        >
          Free Call
        </a>
      </div>
    </div>
  );
}
