
"use client";

import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-background border-t">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="font-headline text-xl font-bold tracking-tight">
            ARHAM<span className="text-secondary">.</span>
          </Link>
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} Arham Waqas. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="https://deveryx.dev" target="_blank" className="text-sm text-muted-foreground hover:text-secondary font-medium">deveryx.dev</Link>
            <Link href="#contact" className="text-sm text-muted-foreground hover:text-secondary font-medium">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
