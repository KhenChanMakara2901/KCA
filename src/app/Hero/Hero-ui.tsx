"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/src/components/ui/Hero/images-slider";

export function ImagesSliderDemo() {
  const images = [
    "https://img.freepik.com/free-photo/cartoon-ai-robot-scene_23-2151658115.jpg?t=st=1722052963~exp=1722056563~hmac=39fdc0cbd07af4e6a942fdb9143161a6199755c6c2e3d363e8e1f294b8b13994&w=2000",
    "https://img.freepik.com/free-photo/cartoon-ai-robot-character-scene_23-2151658082.jpg?t=st=1722052826~exp=1722056426~hmac=f9d29a7812fc22aad600feb3eb4e5783dd138ec535758307402d5ad7c72ee041&w=2000",
    "https://img.freepik.com/free-photo/cartoon-ai-robot-scene_23-2151658112.jpg?t=st=1722053066~exp=1722056666~hmac=77e49b9cf62b83b2ad080c44f69e54a181a7f6f8c073813ee05c6763ca67d503&w=2000",
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
