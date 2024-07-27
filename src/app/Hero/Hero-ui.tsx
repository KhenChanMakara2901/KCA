"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/src/components/ui/Hero/images-slider";

export function ImagesSliderDemo() {
  const images = [
    "https://img.freepik.com/free-photo/robot-working-as-teacher-instead-humans_23-2150912075.jpg?t=st=1722007623~exp=1722011223~hmac=8fe29b27abd0a500e34add1a9b0cb51d6d453602172402ec0f195e357bf4e0e5&w=2000",
    "https://img.freepik.com/free-photo/view-futuristic-robot-school-environment_23-2151110113.jpg?t=st=1722007723~exp=1722011323~hmac=07ebe57e39752b499f24e872c487e3dc3b35df2af6bf166a340f8809e068990f&w=2000",
    "https://img.freepik.com/free-photo/ordinary-human-job-performed-by-anthropomorphic-robot_23-2151008341.jpg?t=st=1722007751~exp=1722011351~hmac=22a064cdd3ae6a6fe904165c4ce5f63fda4a1c248dba94f297ab27d50ca8c5fd&w=2000",
  ];
  return (
    <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-extrabold text-3xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          WELCOME TO <br /> KHMER CODE ACADEMY (KCA)
        </motion.p>
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4 hover:bg-green-500">
          <span>Get Started →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
