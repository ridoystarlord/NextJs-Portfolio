'use server';
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="relative bg-[#2B2D33] py-5 text-white md:py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-xl font-semibold text-orange-500">
            Testimonials
          </h2>
          <h3 className="mt-2 text-4xl font-bold">What My Clients Say</h3>
          <p className="mt-4 text-gray-400">
            Most common methods for designing websites that work well on desktop
            is responsive and adaptive design
          </p>

          <div className="mt-8">
            <div className="relative mx-auto w-full max-w-4xl rounded-lg p-10">
              <Carousel
                opts={{
                  align: 'start',
                  loop: true,
                }}
              >
                <CarouselContent>
                  <CarouselItem>
                    <div className="flex flex-col items-center">
                      <p className="text-xl italic leading-relaxed text-slate-300">
                        Loved the template design, documentation,
                        customizability and the customer support from Marketify
                        team! I am a noob in programming with very little
                        knowledge about coding but the Marketify team helped me
                        to launch my resume website successfully. Much
                        recommended!
                      </p>
                      <div className="mt-8 flex items-center">
                        <img
                          src="/client/client-1.jpg"
                          alt="Alan Walker"
                          className="h-12 w-12 rounded-full"
                        />
                        <div className="ml-4">
                          <p className="text-lg font-semibold">Alan Walker</p>
                          <p className="text-gray-500">Web Designer</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="flex flex-col items-center">
                      <p className="text-xl italic leading-relaxed">
                        Loved the template design, documentation,
                        customizability and the customer support from Marketify
                        team! I am a noob in programming with very little
                        knowledge about coding but the Marketify team helped me
                        to launch my resume website successfully. Much
                        recommended!
                      </p>
                      <div className="mt-8 flex items-center">
                        <img
                          src="/client/client-1.jpg"
                          alt="Alan Walker"
                          className="h-12 w-12 rounded-full"
                        />
                        <div className="ml-4">
                          <p className="text-lg font-semibold">Alan Walker</p>
                          <p className="text-gray-500">Web Designer</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="flex flex-col items-center">
                      <p className="text-xl italic leading-relaxed">
                        Loved the template design, documentation,
                        customizability and the customer support from Marketify
                        team! I am a noob in programming with very little
                        knowledge about coding but the Marketify team helped me
                        to launch my resume website successfully. Much
                        recommended!
                      </p>
                      <div className="mt-8 flex items-center">
                        <img
                          src="/client/client-1.jpg"
                          alt="Alan Walker"
                          className="h-12 w-12 rounded-full"
                        />
                        <div className="ml-4">
                          <p className="text-lg font-semibold">Alan Walker</p>
                          <p className="text-gray-500">Web Designer</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="hover:text-accent-white bg-gradient-to-r from-gray-800 via-gray-900 to-black" />
                <CarouselNext className="hover:text-accent-white bg-gradient-to-r from-gray-800 via-gray-900 to-black" />
              </Carousel>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-10 hidden md:block">
          <img src="/testimonial-right.png" alt={`Background Icon`} />
        </div>
        <div className="absolute bottom-10 left-0 hidden md:block">
          <img src="/testimonial-right.png" alt={`Background Icon`} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
