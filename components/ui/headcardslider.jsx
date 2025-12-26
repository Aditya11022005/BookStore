"use client";
import React, { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button"; // adjust path

const slides = [
  {
    title: "Ipsum Dolor Si",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet.",
    img: "/images/slide1.png", // 👉 add your image here
  },
  {
    title: "Lorem Ipsum Title",
    desc: "Etiam volutpat mauris nec vestibulum, sed suscipit ligula faucibus.",
    img: "/images/slide2.png",
  },
  {
    title: "Dolor Sit Amet",
    desc: "Nam ac libero ut lectus bibendum elementum. Integer nec lorem.",
    img: "/images/slide3.png",
  },
];

const HeadCardSlider = () => {
  const [index, setIndex] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-white py-10 sm:py-20">
     {/* <div className="max-w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center py-20 "> */}
        
        {/* LEFT TEXT */}
        <div className="w-full max-w-[650px]">
          <h1 className="text-5xl lg:text-6xl font-bold text-[#173F5F] leading-[1.1]">
            {slides[index].title}
          </h1>
    
          <p className="mt-6 text-lg leading-relaxed text-[#173F5F] max-w-[600px]">
            {slides[index].desc}
          </p>
    
          <Button
            size="lg"
            className="rounded-none bg-transparent border border-[#173F5F] text-[#173F5F] hover:bg-[#173F5F] hover:text-white px-10 uppercase"
          >
            Read More <ChevronRight className="ml-2 w-4 h-4" />
          </Button>
    
          <div className="flex gap-2 pt-4">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full ${
                  index === i ? "bg-[#173F5F]" : "bg-gray-300"
                }`}
              ></button>
            ))}
          {/* </div> */}
        </div>
    
        {/* RIGHT IMAGE GRID */}
        {/* <div className="grid grid-cols-3 gap-4 justify-items-center">
          <img
            src={slides[index].img}
            className="w-32 sm:w-40 lg:w-48 drop-shadow-lg rounded-md"
          />
          <img
            src={slides[index].img2}
            className="w-32 sm:w-40 lg:w-48 drop-shadow-lg rounded-md"
          />
          <img
            src={slides[index].img3}
            className="w-32 sm:w-40 lg:w-48 drop-shadow-lg rounded-md"
          />
        </div> */}
      </div>
    </section>

  );
};

export default HeadCardSlider;
