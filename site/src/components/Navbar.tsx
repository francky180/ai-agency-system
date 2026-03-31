"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { LINKS } from "@/lib/links";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 sm:px-10 py-4 max-w-6xl mx-auto">
        <a href="#" className="text-sm font-bold tracking-tight text-foreground">
          Client<span className="text-accent">Flow</span>
        </a>

        <div className="hidden sm:flex items-center gap-8 text-xs font-medium text-muted">
          <a href="#how-it-works" className="transition-colors hover:text-foreground">How It Works</a>
          <a href="#pricing" className="transition-colors hover:text-foreground">Pricing</a>
          <a href="#book-call" className="transition-colors hover:text-foreground">Contact</a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={LINKS.entry}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-accent px-5 py-2 text-xs font-semibold text-background transition-all hover:bg-accent-light hover:shadow-[0_0_20px_rgba(201,168,76,0.2)]"
          >
            Get Started
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden flex flex-col items-center justify-center w-8 h-8 gap-1.5"
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-5 bg-foreground transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-1" : ""}`} />
            <span className={`block h-0.5 w-5 bg-foreground transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-1" : ""}`} />
          </button>
        </div>
      </div>

      <div className={`sm:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-56" : "max-h-0"}`}>
        <div className="flex flex-col gap-4 px-6 pb-6 text-sm font-medium text-muted">
          <a href="#how-it-works" onClick={() => setMenuOpen(false)} className="transition-colors hover:text-foreground">How It Works</a>
          <a href="#pricing" onClick={() => setMenuOpen(false)} className="transition-colors hover:text-foreground">Pricing</a>
          <a href="#book-call" onClick={() => setMenuOpen(false)} className="transition-colors hover:text-foreground">Contact</a>
          <a
            href={LINKS.premium}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="text-accent font-bold transition-colors hover:text-accent-light"
          >
            Done-For-You — $1,500
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
