"use client";

import { Laptop, Layout, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Services() {
  const services = [
    {
      icon: <Laptop className="h-10 w-10" />,
      title: "UI UX Design",
      description: "Creating intuitive and aesthetically pleasing user interfaces that engage and delight users."
    },
    {
      icon: <Layout className="h-10 w-10" />,
      title: "Webflow Develop",
      description: "High-end development with precision and speed, ensuring a pixel-perfect final product."
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: "Product Design",
      description: "End-to-end product design focusing on functionality, market fit, and exceptional visuals."
    }
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Services</span>
          <h2 className="font-headline text-4xl md:text-5xl font-black mb-6 text-foreground">Expertise Service! Let's check it out</h2>
          <p className="text-foreground/60 leading-relaxed">
            I offer a wide range of digital services to help businesses grow and succeed in the modern online landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className={`border-border transition-all duration-300 hover:translate-y-[-10px] shadow-xl group ${index === 1 ? 'bg-primary text-primary-foreground' : 'bg-card text-foreground'}`}>
              <CardContent className="p-10 text-center flex flex-col items-center">
                <div className={`mb-8 p-6 rounded-[2rem] transition-colors ${index === 1 ? 'bg-background text-primary' : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground'}`}>
                  {service.icon}
                </div>
                <h3 className="font-headline text-2xl font-black mb-4">{service.title}</h3>
                <p className={`leading-relaxed ${index === 1 ? 'text-primary-foreground/70' : 'text-foreground/60'}`}>
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}