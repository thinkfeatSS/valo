import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import Image from "next/image";

import React from 'react'
import { GlareCard } from "./glare-card";

const Slider = () => {
    const images = ["/images/chr_two.png", "/images/chr_three.png", "/images/chr_two.png", "/images/chr_three.png", "/images/chr_two.png"]
    return (
        <div className="flex items-center justify-center gap-2">
                {/* <div className="flex"> */}

            <GoArrowLeft className="w-8 h-8 text-white " />
            <div className="flex">

                    <div className="relative -z-10 left-32">
                        <Image src={images[2]} height={244} width={160} alt="not found" className="relative w-[160px] h-[244px] rounded-3xl"></Image>
                        <div className="absolute inset-0  side-gradient-one w-[160px] h-[244px] rounded-3xl "></div>
                        <div className="absolute inset-0  side-gradient-three w-[160px] h-[244px] rounded-3xl"></div>
                        <div className="absolute inset-0  side-gradient-four w-[160px] h-[244px] rounded-3xl"></div>
                    </div>
                
                    <GlareCard className="relative flex justify-center rounded-3xl z-10">

                        <Image src="/images/chr_two.png" height={260} width={170} alt="not found" className="relative w-[170px] h-[260px] rounded-3xl"></Image>
                        <div className="w-[170px] h-[260px] rounded-3xl absolute inset-0  custom-gradient"></div>

                        <h1 className="absolute bottom-2 font-black text-xl z-50 text-white">YORU</h1>

                    </GlareCard>
                    <div className="relative right-24 -z-10">
                        <Image src={images[1]} height={244} width={160} alt="not found" className="w-[160px] h-[244px] rounded-3xl"></Image>
                        <div className="absolute inset-0  side-gradient-one w-[160px] h-[244px] rounded-3xl "></div>
                        <div className="absolute inset-0  side-gradient-two w-[160px] h-[244px] rounded-3xl"></div>
                        <div className="absolute inset-0  side-gradient-four w-[160px] h-[244px] rounded-3xl"></div>
                    </div>
                    </div>

                {/* </div> */}

            <GoArrowRight className="w-8 h-8 text-white" />
        </div>
    )
}

export default Slider
