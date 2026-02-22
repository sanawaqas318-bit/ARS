
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Globe, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
            <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
              Ready to start your next project? Drop me a message and let's build something amazing together.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-2 space-y-8">
              <div className="bg-background p-8 rounded-3xl border-2 border-primary/20">
                <h3 className="font-headline text-2xl font-bold mb-8">Contact Info</h3>
                <div className="space-y-6">
                  <a href="mailto:arham.waqas@gmail.com" className="flex items-center gap-4 group">
                    <div className="p-3 bg-primary rounded-xl group-hover:bg-secondary transition-colors">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-bold uppercase">Email</p>
                      <p className="font-medium group-hover:text-secondary transition-colors">arham.waqas@gmail.com</p>
                    </div>
                  </a>
                  <a href="tel:03324800263" className="flex items-center gap-4 group">
                    <div className="p-3 bg-primary rounded-xl group-hover:bg-secondary transition-colors">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-bold uppercase">Phone</p>
                      <p className="font-medium group-hover:text-secondary transition-colors">0332 4800263</p>
                    </div>
                  </a>
                  <a href="https://deveryx.dev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                    <div className="p-3 bg-primary rounded-xl group-hover:bg-secondary transition-colors">
                      <Globe className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-bold uppercase">Reference</p>
                      <p className="font-medium group-hover:text-secondary transition-colors">deveryx.dev</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="md:col-span-3">
              <form className="bg-white p-8 md:p-12 rounded-3xl border shadow-xl space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-tight">Full Name</label>
                    <Input placeholder="John Doe" className="bg-background border-none h-12 rounded-xl focus-visible:ring-primary" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-tight">Email Address</label>
                    <Input type="email" placeholder="john@example.com" className="bg-background border-none h-12 rounded-xl focus-visible:ring-primary" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-tight">Project Subject</label>
                  <Input placeholder="Website Redesign" className="bg-background border-none h-12 rounded-xl focus-visible:ring-primary" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-tight">Your Message</label>
                  <Textarea placeholder="Tell me about your project ideas..." className="bg-background border-none min-h-[150px] rounded-xl focus-visible:ring-primary" />
                </div>
                <Button className="w-full bg-primary hover:bg-secondary text-foreground rounded-xl h-14 text-base font-bold shadow-lg transition-all hover:scale-[1.02] active:scale-95">
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
