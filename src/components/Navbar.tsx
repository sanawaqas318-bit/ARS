"use client";

import React from "react";
import Link from "next/link";

export function Navbar() {
  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-white/5">
      <nav className="container mx-auto px-6 h-24 flex items-center justify-center">
        <div className="flex items-center gap-12">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              className={`text-sm font-bold uppercase tracking-widest transition-colors hover:text-primary ${
                link.name === "Home" ? "text-primary border-b-2 border-primary pb-1" : "text-muted-foreground"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
