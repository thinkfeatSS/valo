import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import Image from "next/image";

import React from 'react'

const Slider = () => {
    const images = ["/images/chr_two.png","/images/chr_three.png","/images/chr_two.png","/images/chr_three.png","/images/chr_two.png"]
    return (
        <div className="flex items-center justify-center gap-6 relative">
            <GoArrowLeft className="w-8 h-8 text-white " />
            <div className="flex items-center justify-center flex-col">
                {/* {images.map((_,i) =>( */}
                    <div  className="flex justify-center rounded-3xl">
                        <Image  src={images[images.length-1]} height={160} width={244} alt="not found" className="relative w-[160px] h-[244px] rounded-3xl z-10"></Image>
                        <Image  src={images[1]} height={260} width={170} alt="not found" className="relative w-[170px] h-[260px] rounded-3xl z-20"></Image>
                        <Image  src={images[2]} height={260} width={170} alt="not found" className="relative w-[160px] h-[244px] rounded-3xl z-10"></Image>
                        <h1 className="absolute bottom-2 font-black text-xl ">YORU</h1>

                    </div>

                {/* ))} */}
            </div >
            <GoArrowRight className="w-8 h-8 text-white" />
        </div>
    )
}

export default Slider
