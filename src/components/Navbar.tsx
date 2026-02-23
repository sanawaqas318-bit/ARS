"use client";

import React from "react";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
      <nav className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="font-headline text-2xl font-black tracking-tighter">
          PANTHA<span className="text-primary">.</span>
        </Link>
        <div className="hidden md:flex items-center gap-10">
          <Link href="#about" className="text-sm font-semibold hover:text-primary transition-colors">About</Link>
          <Link href="#services" className="text-sm font-semibold hover:text-primary transition-colors">Services</Link>
          <Link href="#portfolio" className="text-sm font-semibold hover:text-primary transition-colors">Portfolio</Link>
          <Link href="#contact" className="text-sm font-semibold hover:text-primary transition-colors">Contact</Link>
        </div>
        <button className="md:hidden text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </button>
      </nav>
    </header>
  );
}
