
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase, Heart } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="space-y-6">
              <h3 className="font-headline text-2xl font-semibold">A Passionate Web Creator</h3>
              <p className="text-muted-foreground leading-relaxed">
                I am a driven frontend developer with a focus on building high-quality websites and digital storefronts. My goal is to create seamless user experiences that combine aesthetic appeal with functional excellence.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With a deep love for clean code and modern design, I strive to stay at the forefront of web technologies to deliver the best possible results for every project I undertake.
              </p>
            </div>

            <div className="grid gap-4">
              <Card className="border-none shadow-none bg-background p-4 hover:shadow-md transition-shadow">
                <CardContent className="p-0 flex items-start gap-4">
                  <div className="p-3 bg-primary rounded-xl">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-headline font-bold">Education</h4>
                    <p className="text-sm text-muted-foreground">Currently studying in O Level</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-none bg-background p-4 hover:shadow-md transition-shadow">
                <CardContent className="p-0 flex items-start gap-4">
                  <div className="p-3 bg-primary rounded-xl">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-headline font-bold">Experience</h4>
                    <p className="text-sm text-muted-foreground">Approx. 1 Year | Worked with deveryx.dev</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-none bg-background p-4 hover:shadow-md transition-shadow">
                <CardContent className="p-0 flex items-start gap-4">
                  <div className="p-3 bg-primary rounded-xl">
                    <Heart className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-headline font-bold">Focus</h4>
                    <p className="text-sm text-muted-foreground">Responsive stores & UI Implementation</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
