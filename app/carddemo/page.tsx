"use client"
import { GlareCard } from "../glare-card";
import Image from "next/image";

export default function GlareCardDemo() {
    return (
        // <GlareCard className="relative flex justify-center rounded-3xl">

        //     <Image src="/images/chr_two.png" height={260} width={170} alt="not found" className="relative w-[170px] h-[260px] rounded-3xl z-20"></Image>
        //     <h1 className="absolute bottom-2 font-black text-xl z-50 text-white">YORU</h1>

        // </GlareCard>
        <div className="">
            <div className="relative">
                <Image src="/images/chr_two.png" height={260} width={170} alt="not found" className="absolute w-[160px] h-[244px] rounded-3xl -z-10 left-10"></Image>

                <div className="absolute inset-0  side-gradient-one w-[160px] h-[244px] rounded-3xl -z-10 left-10"></div>
                <div className="absolute inset-0  side-gradient-two w-[160px] h-[244px] rounded-3xl -z-10 left-10"></div>
                <div className="absolute inset-0  side-gradient-four w-[160px] h-[244px] rounded-3xl -z-10 left-10"></div>
            </div>
            <GlareCard className="relative flex justify-center rounded-3xl z-10">

                <Image src="/images/chr_two.png" height={260} width={170} alt="not found" className="relative w-[170px] h-[260px] rounded-3xl"></Image>
                <div className="w-[170px] h-[260px] rounded-3xl absolute inset-0  custom-gradient"></div>

                <h1 className="absolute bottom-2 font-black text-xl z-50 text-white">YORU</h1>

            </GlareCard>
            <div className="relative">
                <Image src="/images/chr_two.png" height={260} width={170} alt="not found" className="absolute w-[160px] h-[244px] rounded-3xl -z-10 left-10"></Image>

                <div className="absolute inset-0  side-gradient-one w-[160px] h-[244px] rounded-3xl -z-10 left-10"></div>
                <div className="absolute inset-0  side-gradient-three w-[160px] h-[244px] rounded-3xl -z-10 left-10"></div>
                <div className="absolute inset-0  side-gradient-four w-[160px] h-[244px] rounded-3xl -z-10 left-10"></div>
            </div>
            {/* <div className="relative">
                <Image src="/images/chr_two.png" height={260} width={170} alt="not found" className="absolute w-[160px] h-[244px] rounded-3xl -z-10 left-[6rem]"></Image>

                <div className="absolute inset-0  side-gradient-one w-[160px] h-[244px] rounded-3xl -z-10 left-[6rem]"></div>
                <div className="absolute inset-0  side-gradient-three w-[160px] h-[244px] rounded-3xl -z-10 left-[6rem]"></div>
                <div className="absolute inset-0  side-gradient-four w-[160px] h-[244px] rounded-3xl -z-10 left-[6rem]"></div>
            </div> */}

        </div>
    );
}
