'use client'
import React,{useState} from 'react'
import {motion, AnimatePresence} from 'framer-motion';

const page = () => {
    const images = [{ path: "/images/chr_one.png", name: "SOVA" }, { path: "/images/chr_two.png", name: "SKYE" }, { path: "/images/chr_three.png", name: "YORU" }]
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const prevImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
  return (
    <div>
        <div className="relative w-full max-w-[600px] h-[400px] overflow-hidden mx-auto">
      <AnimatePresence mode="wait">
        <motion.img
          key={images[currentImageIndex].path}
          src={images[currentImageIndex].path}
          alt={`Slide ${currentImageIndex + 1}`}
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute w-full h-full object-cover"
        />
      </AnimatePresence>
      <button 
        onClick={prevImage}
        className="absolute bottom-5 left-[40%] transform -translate-x-1/2 px-4 py-2 bg-black bg-opacity-50 text-white"
      >
        Previous Image
      </button>
      <button 
        onClick={nextImage}
        className="absolute bottom-5 left-[60%] transform -translate-x-1/2 px-4 py-2 bg-black bg-opacity-50 text-white"
      >
        Next Image
      </button>
    </div>
    </div>
  )
}

export default page
