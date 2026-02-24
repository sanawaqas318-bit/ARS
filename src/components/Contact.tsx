"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Globe, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Contact</span>
            <h2 className="font-headline text-4xl md:text-5xl font-black mb-6 text-foreground">Get In Touch</h2>
            <p className="text-foreground/60 max-w-xl mx-auto text-lg">
              Ready to start your next project? Let's build something amazing together.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-16">
            <div className="md:col-span-2 space-y-10">
              <div className="space-y-8">
                <h3 className="font-headline text-2xl font-black text-foreground">Contact Info</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-background border border-border rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs text-foreground/40 font-black uppercase tracking-widest">Email</p>
                      <p className="font-bold text-lg text-foreground">arham.waqas@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-background border border-border rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs text-foreground/40 font-black uppercase tracking-widest">Phone</p>
                      <p className="font-bold text-lg text-foreground">0332 4800263</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 bg-background border border-border rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <Globe className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs text-foreground/40 font-black uppercase tracking-widest">Reference</p>
                      <p className="font-bold text-lg text-foreground">deveryx.dev</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-3">
              <form className="bg-background p-8 md:p-12 rounded-[2.5rem] border border-border shadow-2xl space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest ml-1 text-foreground/40">Full Name</label>
                    <Input placeholder="John Doe" className="bg-muted border-border h-16 rounded-2xl focus-visible:ring-primary text-lg" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest ml-1 text-foreground/40">Email Address</label>
                    <Input type="email" placeholder="john@example.com" className="bg-muted border-border h-16 rounded-2xl focus-visible:ring-primary text-lg" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest ml-1 text-foreground/40">Subject</label>
                  <Input placeholder="Project Idea" className="bg-muted border-border h-16 rounded-2xl focus-visible:ring-primary text-lg" />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest ml-1 text-foreground/40">Message</label>
                  <Textarea placeholder="Tell me more..." className="bg-muted border-border min-h-[150px] rounded-2xl focus-visible:ring-primary text-lg p-6" />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl h-16 text-lg font-black shadow-lg shadow-primary/20 transition-all hover:translate-y-[-2px] active:scale-95">
                  Send Message <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}