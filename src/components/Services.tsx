
"use client";

import { Button } from "@/components/ui/button";
import { Laptop, Layout, Store, Zap } from "lucide-react";
import Link from "next/link";

export function Services() {
  const services = [
    {
      icon: <Laptop className="h-8 w-8" />,
      title: "Website Development",
      description: "End-to-end website creation tailored to your specific business needs and goals."
    },
    {
      icon: <Layout className="h-8 w-8" />,
      title: "UI/Frontend Implementation",
      description: "Converting your designs into clean, semantic, and high-performance React/Next.js code."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Responsive Design",
      description: "Ensuring your website looks and functions perfectly across all devices and screen sizes."
    },
    {
      icon: <Store className="h-8 w-8" />,
      title: "Custom Web Stores",
      description: "Building fast and user-friendly online stores that help you sell more effectively."
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">What I Offer</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col h-full bg-background p-8 rounded-3xl border shadow-sm hover:shadow-lg transition-all">
              <div className="mb-6 p-4 bg-primary rounded-2xl w-fit">
                {service.icon}
              </div>
              <h3 className="font-headline text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-8 flex-grow leading-relaxed">
                {service.description}
              </p>
              <Button asChild variant="link" className="p-0 text-secondary hover:text-foreground font-bold group w-fit">
                <Link href="#contact" className="flex items-center">
                  Hire Me <Zap className="ml-2 h-4 w-4 transition-transform group-hover:scale-125" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
