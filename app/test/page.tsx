"use client"
// components/RangeInput.js
import { useState } from 'react';
import Image from 'next/image';

const RangeInput = () => {
  const [value, setValue] = useState(50);
  const min = 0;
  const max = 100;
  const step = 10; // Step size of 10

  const handleChange = (event:any) => {
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

  // Calculate scale based on range value
  const scale = 1 + (value / max) * 1; // 1.0 is the base zoom level

  return (
    <div className="flex items-center p-6 bg-white rounded-lg shadow-md w-full max-w-4xl">
      <div className="flex-1 flex flex-col items-center">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">Minimalist Range Input</h2>
        <div className="flex items-center mb-4">
          <button
            onClick={decrement}
            className="px-4 py-2 bg-gray-300 rounded-l-lg text-gray-700 hover:bg-gray-400"
          >
            -
          </button>
          <div className="relative flex-1 mx-2">
            <input
              type="range"
              min={min}
              max={max}
              step={step}
              value={value}
              onChange={handleChange}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
            <div className="h-2 bg-gray-200 rounded-full relative">
              <div
                className="h-full bg-blue-500 rounded-full"
                style={{ width: `${value}%` }}
              />
            </div>
          </div>
          <button
            onClick={increment}
            className="px-4 py-2 bg-gray-300 rounded-r-lg text-gray-700 hover:bg-gray-400"
          >
            +
          </button>
        </div>
        <div className="mt-4 text-center">
          <span className="text-xl font-bold text-gray-700">{value}</span>
        </div>
      </div>
      <div className="relative w-64 h-64 ml-6">
        <div
          className="relative w-full h-full overflow-hidden"
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
  );
};

export default RangeInput;
