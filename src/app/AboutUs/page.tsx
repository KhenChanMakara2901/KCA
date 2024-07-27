import React from "react";
import Image from "next/image";
import Image1 from "@/public/About Us/Image1.png";
import Image2 from "@/public/About Us/Image2.png";
import Image3 from "@/public/About Us/Image3.png";
export default function page() {
  return (
    <div className="py-10 bg-slate-200 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl">
            ABOUT US
          </h2>
        </div>

        <div className="grid grid-cols-1 mt-12 lg:mt-24 gap-y-12 md:grid-cols-3 gap-x-6">
          <div className="md:px-4 lg:px-10">
            <Image className="-rotate-1" src={Image1} alt="img" />
            <h3 className="mt-8 text-xl font-semibold leading-tight text-black">
              Join as a team
            </h3>
            <p className="mt-4 text-base text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </p>
          </div>

          <div className="md:px-4 lg:px-10">
            <Image className="rotate-1" src={Image2} alt="img" />
            <h3 className="mt-8 text-xl font-semibold leading-tight text-black">
              Work from anywhere
            </h3>
            <p className="mt-4 text-base text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </p>
          </div>

          <div className="md:px-4 lg:px-10">
            <Image className="-rotate-1" src={Image3} alt="img" />
            <h3 className="mt-8 text-xl font-semibold leading-tight text-black">
              Get success
            </h3>
            <p className="mt-4 text-base text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
