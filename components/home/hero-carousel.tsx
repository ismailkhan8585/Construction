// components/hero-carousel.tsx
"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import carsole1 from "@/public/carsole1.jpg";
import carsole2 from "@/public/carsole2.jpg";
import carsole3 from "@/public/carsole3.jpg";
import carsole4 from "@/public/carsole4.jpg";

const carouselImages = [
  {
    id: 1,
    title: "Innovative Solutions",
    description: "Transforming ideas into reality with cutting-edge technology",
    buttonText: "Explore Innovation",
    image: carsole1,
  },
  {
    id: 2,
    // title: "Global Projects",
    // description: "Delivering excellence across international borders",
    buttonText: "View Projects",
    image:
      carsole2,
  },
  {
    id: 3,
    // title: "Team Excellence",
    // description: "Our dedicated team driving success forward",
    buttonText: "Meet Our Team",
    image:
      carsole3,
  },
  {
    id: 4,
    // title: "Sustainable Growth",
    // description: "Building a better future through sustainable practices",
    buttonText: "Learn More",
    image:
      carsole4,
  },
];

const HeroCarousel = () => {
  return (
    <section className="relative pb-32 md:pb-44">
      <Carousel
        className="w-full"
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {carouselImages.map((item) => (
            <CarouselItem key={item.id}>
              <Card className="overflow-hidden border-0 shadow-xl md:shadow-2xl">
                <div className="relative h-64 sm:h-80 md:h-96 lg:h-120 xl:h-150 w-full">
                  {/* Background Image with Gradient Overlay */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                   style={{ backgroundImage: `url(${item.image.src})` }}

                  />
                  <div className="absolute inset-0 " />

                  {/* Content */}
                  <CardContent className="relative flex flex-col justify-end md:justify-center h-full p-4 sm:p-6 md:p-8 text-white">
                    <div className="max-w-2xl">
                      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 md:mb-6">
                        {item.title}
                      </h2>
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4 md:mb-10 text-gray-200">
                        {item.description}
                      </p>
                      <Button
                        size="sm"
                        className="bg-white text-black hover:bg-gray-100 group text-sm md:text-base px-4 md:px-8 py-2 md:py-6 rounded-full"
                      >
                        {item.buttonText}
                        <ArrowRight className="ml-2 md:ml-3 h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-1 md:group-hover:translate-x-2" />
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex left-2 md:left-4 lg:left-8 h-8 w-8 md:h-12 md:w-12 lg:h-14 lg:w-14" />
        <CarouselNext className="hidden sm:flex right-2 md:right-4 lg:right-8 h-8 w-8 md:h-12 md:w-12 lg:h-14 lg:w-14" />
      </Carousel>

      {/* Mobile Indicators */}
      <div className="flex justify-center gap-2 mt-4 sm:hidden">
        {carouselImages.map((_, index) => (
          <div
            key={index}
            className="w-2 h-2 rounded-full bg-muted-foreground/50"
          ></div>
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
