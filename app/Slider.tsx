import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import Image from "next/image";

import React from 'react'

const Slider = () => {
    return (
        <div className="flex items-center justify-center gap-6 relative">
            <GoArrowLeft className="w-8 h-8 text-white " />
            <div className="flex items-center justify-center flex-col">

                <Image src="/images/chr_one.png" height={572} width={404} alt="not found" className="w-40 rounded-3xl shadow-left-right-glow "></Image>
                <h1 className="absolute bottom-2 font-black text-3xl ">YORU</h1>
            </div >
            <GoArrowRight className="w-8 h-8 text-white" />
        </div>
    )
}

export default Slider
