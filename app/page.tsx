'use client'; // Mark this component as a client component
import Image from "next/image";
import Map from "./Map";
import Button from "./Button";
import { FaPlay } from "react-icons/fa";
import Slider from "./Slider";
// import { GoArrowRight } from "react-icons/go";
export default function Home() {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log('Button clicked');
  };
  return (
    <main className="bg-black text-white min-h-screen flex  justify-center md:justify-start xl:justify-center">
      <Image src="/images/bg.png" alt='not found' width={1280} height={832} className="fixed left-[37%] h-screen z-0" />
      {/* bg */}
      {/* main */}
      <div className="flex items-center justify-center md:items-start md:justify-start gap-10 flex-col md:flex-row z-10 mx-10">
        {/* right */}
        <div className="flex flex-col items-center justify-center gap-8 mt-[13%]">
          <Button label="ASCENT" onClick={handleClick} icon={FaPlay} />
          <Slider />
        </div>
        {/* left */}
        <Map />

      </div>

    </main>
  );
}
