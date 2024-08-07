"use client";
import { GlareCard } from "./glare-card";
import Image from "next/image";
import { useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  { path: "/images/chr_one.png", name: "SOVA" },
  { path: "/images/chr_two.png", name: "SKYE" },
  { path: "/images/chr_three.png", name: "YORU" },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="flex items-center justify-center gap-9">
      <GoArrowLeft
        className="w-8 h-8 text-white relative z-50 cursor-pointer"
        onClick={prevSlide}
      />
      <div className="relative">
      <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.2 }}
            className="relative"
          >
        <div className="w-[160px] h-[244px] absolute right-10 top-0">
          <Image
            src={
              images[(currentIndex - 1 + images.length) % images.length].path
            }
            height={244}
            width={160}
            alt="not found"
            className="w-[160px] h-[244px] rounded-3xl absolute inset-0"
          />
          <div className="absolute inset-0 side-gradient-three w-[160px] h-[244px] rounded-3xl"></div>
        </div>
          </motion.div>
          </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.2 }}
            className="relative"
          >
            <GlareCard className="w-[170px] h-[260px] relative z-50">
              <Image
                src={images[currentIndex].path}
                height={260}
                width={170}
                alt="not found"
                className="w-[170px] h-[260px] rounded-3xl inset-0 absolute"
              />
              <div className="w-[170px] h-[260px] rounded-3xl inset-0 absolute custom-gradient"></div>
              <h1 className="absolute bottom-2 font-black text-xl z-50 text-white left-14">
                {images[currentIndex].name}
              </h1>
            </GlareCard>
          </motion.div>
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.2 }}
            className="w-[160px] h-[244px] absolute top-0 left-16 -z-10">
          <Image
            src={
              images[(currentIndex + 1 + images.length) % images.length].path
            }
            height={260}
            width={170}
            alt="not found"
            className="w-[160px] h-[244px] rounded-3xl inset-0 absolute"
          />
          <div className="inset-0 absolute side-gradient-one w-[160px] h-[244px] rounded-3xl"></div>
          <div className="inset-0 absolute side-gradient-two w-[160px] h-[244px] rounded-3xl"></div>
          <div className="inset-0 absolute side-gradient-three w-[160px] h-[244px] rounded-3xl"></div>
        </motion.div>
        </AnimatePresence>
      </div>
      <GoArrowRight
        className="w-8 h-8 text-white cursor-pointer"
        onClick={nextSlide}
      />
    </div>
  );
};

export default Slider;
