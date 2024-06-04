import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HireMe = () => {
  return (
    <section id="aboutme">
      <div className="relative bg-[#2B2D33]">
        <div className="container flex h-full flex-col items-center justify-center gap-10 px-5 py-5 text-white md:flex-row md:px-0 md:py-20">
          <div className="relative flex flex-col items-center justify-center gap-6 md:w-1/2 md:flex-row md:justify-center">
            <div className="relative">
              <Image
                alt="Hire Me"
                src="/hire-me.jpg"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <div className="block w-full md:hidden">
              <div className="flex flex-col items-center gap-3 rounded-md bg-gray-700 p-4 shadow-lg">
                <span className="text-5xl font-semibold text-green-400">3</span>
                <span className="text-base font-medium">Years of Success</span>
              </div>
            </div>
            <div className="block w-full md:hidden">
              <div className="flex flex-col items-center gap-3 rounded-md bg-gray-700 p-4 shadow-lg">
                <span className="text-5xl font-semibold text-purple-400">
                  10
                </span>
                <span className="text-base font-medium">Total Projects</span>
              </div>
            </div>
            <div className="absolute left-0 top-1/4 z-10 hidden">
              <div className="flex w-36 items-center gap-3 rounded-md bg-gray-700 p-4 shadow-lg">
                <span className="text-5xl font-semibold text-green-400">3</span>
                <span className="text-base font-medium">Years of Success</span>
              </div>
            </div>
            <div className="absolute bottom-1/4 right-0 z-10 hidden">
              <div className="flex w-44 items-center gap-3 rounded-md bg-gray-700 p-4 shadow-lg">
                <span className="text-5xl font-semibold text-purple-400">
                  10
                </span>
                <span className="text-base font-medium">Total Projects</span>
              </div>
            </div>
          </div>
          <div className="space-y-6 text-center md:w-1/2 md:text-left">
            <h1 className="flex flex-col gap-3">
              <span className="text-xl text-orange-500">I'm a Developer</span>
              <span className="text-3xl font-medium text-white md:text-5xl">
                I Can Develop Anything You Want
              </span>
            </h1>
            <p className="text-justify text-base text-gray-300">
              Hello there! I'm a mid level Full stack developer, and I'm very
              passionate and dedicated to my work. With 3 years experience as a
              professional Full stack developer, I have acquired the skills and
              knowledge necessary to make your project a success. I enjoy every
              step of the design process, from discussion and collaboration. I
              like to build beautiful, responsive, and user-friendly websites
              using ReacJs, NextJs & NodeJs.
            </p>
            <div className="w-full">
              <Link
                href="/#contactme"
                className="block rounded-full bg-orange-600 px-10 py-3 font-bold text-white hover:bg-orange-500 md:inline-block"
              >
                Hire Me
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute left-5 top-5 w-[10%] md:left-10 md:top-10">
          <img src="/hire-bg-1.png" alt={`Background Icon`} />
        </div>
        <div className="absolute bottom-0 right-0">
          <img src="/hire-bg-2.png" alt={`Background Icon`} />
        </div>
      </div>
    </section>
  );
};

export default HireMe;
