'use client'
import Image from 'next/image'
import React,{useState} from 'react'
import { FaPlusCircle,FaMinusCircle } from "react-icons/fa";


const Map = () => {
  const [value, setValue] = useState(0);
  const min = 0;
  const max = 100;
  const step = 10; // Define the step size

  const handleChange = (event: any) => {
    let newValue = Number(event.target.value);
    newValue = Math.max(min, Math.min(max, newValue));
    setValue(newValue);
  };

  const increment = () => {
    setValue((prevValue) => Math.min(prevValue + step, max));
  };

  const decrement = () => {
    setValue((prevValue) => Math.max(prevValue - step, min));
  };
  const scale = 1 + (value / max) * 1; // 1.0 is the base zoom level

  return (
    <div className='flex flex-col items-center justify-center mt-[5%]'>
        <div className='flex flex-col rounded-lg shadow-md w-full max-w-xs'>
            <div className="flex items-center gap-2">
                <FaMinusCircle className='text-4xl text-white rounded-full' onClick={decrement} />
                <div className="relative w-full">
                    <input
                        type="range"
                        min="0"
                        max="100"
                        step="10"
                        value={value}
                        onChange={handleChange}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                    />

                    <div className="h-2 bg-gray-200 rounded-full">
                        <div
                            className="absolute inset-0 bg-blue-500 rounded-full"
                            style={{ width: `${value}%` }}
                        />
                    </div>
                </div>
                <FaPlusCircle className='text-4xl text-white rounded-full' onClick={increment} />
            </div>
            <div className="mt-4 text-center">
                <span className="text-xl font-bold text-white">{value} Zoom Value</span>
            </div>
        </div>
        <div className="relative w-64 h-64 ml-6">
        <div
          className="relative w-full h-full overflow-hidden -z-10"
          style={{ transform: `scale(${scale})`, transformOrigin: 'center' }}
        >
          <Image
            src="/images/map_one.png"
            alt="Zoom Effect"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  )
}

export default Map
