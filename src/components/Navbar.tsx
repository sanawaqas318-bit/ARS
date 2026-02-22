
"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <nav className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-headline text-xl font-bold tracking-tight">
          ARHAM<span className="text-secondary">.</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="#about" className="text-sm font-medium hover:text-secondary transition-colors">About</Link>
          <Link href="#skills" className="text-sm font-medium hover:text-secondary transition-colors">Skills</Link>
          <Link href="#services" className="text-sm font-medium hover:text-secondary transition-colors">Services</Link>
          <Link href="#portfolio" className="text-sm font-medium hover:text-secondary transition-colors">Work</Link>
          <Button asChild variant="default" className="bg-primary hover:bg-secondary text-foreground rounded-full px-6">
            <Link href="#contact">Contact Me</Link>
          </Button>
        </div>
        <Button variant="ghost" size="icon" className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </Button>
      </nav>
    </header>
  );
}
