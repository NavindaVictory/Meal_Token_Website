import React, { useState } from 'react';

const slides = [
  { label: 'DESIGN', image: '/img1.png' },
  { label: '', image: '/img2.jpg' },
  { label: '', image: '/img3.jpg' },
];

export function ImageSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="bg-[#0a0a0a] py-20 px-8 flex justify-center items-center">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-[1200px] w-full relative">
        {/* Left Arrow */}
        <button
          className="text-5xl md:text-[5rem] text-white bg-transparent border-none cursor-pointer transition-colors duration-200 hover:text-[#05ac95] order-2 md:order-1"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          ‹
        </button>

        {/* Slide Container */}
        <div className="flex-1 flex justify-center order-1 md:order-2">
          <div className="relative w-full max-w-[800px]">
            <img
              src={slides[current].image}
              alt={`Slide ${current + 1}`}
              className="w-full h-auto rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
            />
            {current === 0 && (
              <h2 className="absolute top-[8%] left-1/2 -translate-x-1/2 text-3xl md:text-5xl font-bold text-white uppercase bg-black/40 py-2 px-4 rounded-lg">
                {slides[current].label}
              </h2>
            )}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          className="text-5xl md:text-[5rem] text-white bg-transparent border-none cursor-pointer transition-colors duration-200 hover:text-[#05ac95] order-3"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          ›
        </button>
      </div>
    </section>
  );
}