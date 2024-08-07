'use client'; // Mark this component as a client component
import Image from "next/image";
import Map from "./Map";
import Button from "./Button";
import { FaPlay } from "react-icons/fa";
import Slider from "./Slider";

export default function Home() {

  return (
    <main className=" flex flex-col items-center justify-center md:flex-row  md:items-start w-screen">
      <Image src="/images/bg.png" alt='not found' width={1280} height={832} className="fixed top-0  h-full  -z-10 -right-[33%] 2xl:right-0" />
      <div className="relative w-screen h-full top-0 side-gradient-five -z-10 md:hidden"></div>
      <div className="flex flex-col items-center gap-10 md:flex-col-reverse md:gap-28 pt-14 md:pt-28">
        <Slider />
        <Button label="ASCENT" onClick={()=>{console.log("Button clicked")}} icon={FaPlay} />
      </div>
      <Map />
    </main>
  );
}
