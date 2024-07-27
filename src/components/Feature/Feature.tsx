import React from "react";
import Image from "next/image";
import Features from "@/public/Features/Features.jpg";
import Features2 from "@/public/Features/Features2.jpg";
import Image4 from "@/public/Features/Image4.png";

export default function Feature() {
  return (
    <section className="py-10 bg-gradient-to-r from-fuchsia-600 to-blue-600 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-stretch gap-y-10 md:grid-cols-2 md:gap-x-20">
          <div className="relative grid grid-cols-2 gap-6 mt-10 md:mt-0">
            <div className="overflow-hidden aspect-w-3 aspect-h-5">
              <Image
                className="object-cover object-top origin-top scale-150"
                src={Features}
                alt="Img"
              />
            </div>

            <div className="relative">
              <div className="h-full overflow-hidden aspect-w-3 aspect-h-4">
                <Image
                  className="object-cover scale-150 h-100 w-100 lg:origin-bottom-right"
                  src={Features2}
                  alt="img"
                />
              </div>
            </div>
            <div className="absolute -translate-x-1/2 left-1/2 -top-16">
              <Image className="w-32 h-32" src={Image4} alt="img" />
            </div>
          </div>
          <div className="flex flex-col items-start xl:px-16">
            <h2 className="text-xl font-bold leading-tight text-black sm:text-2xl lg:text-3xl">
              THE ONLINE COURSE WILL
              <br />
              ALL OF YOUR TROUBLES
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>

            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-4 mt-8 text-base font-semibold text-white transition-all duration-200 rounded-md hover:opacity-90 focus:opacity-90 lg:mt-auto bg-blue-700 hover:bg-green-700"
            >
              LEARN MORE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
