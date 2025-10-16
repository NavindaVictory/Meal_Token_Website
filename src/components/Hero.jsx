import React, { useState, useEffect } from 'react';
import img2 from '../assets/img2.jpg';
import img1 from '../assets/img1.png';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.png';

const images = [img2, img1, img3, img4, img5];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-left bg-no-repeat"
      aria-label="Welcome section"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 to-black/75" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-nowrap justify-between items-center gap-6 max-w-[1400px] w-full mx-auto pt-[120px] pb-24 px-7">
        {/* Left: Text Content */}
        <div className="flex-1 min-w-0">
          <p className="text-xl tracking-[0.35em] uppercase opacity-80 mb-10 ml-[200px] animate-[fadeDown_0.8s_ease_0.2s_both]">
            Welcome to
          </p>

          <h1 className="text-[clamp(48px,10vw,110px)] m-0 -ml-2.5 font-extrabold tracking-wide text-transparent bg-gradient-to-b from-[#13a395] via-[#0e3834] to-[#16a6a1] bg-clip-text animate-[slideLeft_900ms_cubic-bezier(0.2,0.8,0.2,1)_0.15s_both]">
            VICTORY
          </h1>

          <h2 className="text-[clamp(44px,9vw,96px)] -mt-8 mb-1.5 font-bold text-transparent bg-gradient-to-b from-white via-[#319088] to-[#0e9189] bg-clip-text ml-[225px] animate-[slideRight_900ms_cubic-bezier(0.2,0.8,0.2,1)_0.25s_both]">
            MealPass
          </h2>

          <p className="max-w-[680px] m-0 mb-[34px] text-lg opacity-90 ml-64 tracking-[2.5px] animate-[fadeUp_0.9s_ease_0.35s_both]">
            Digital Dining for a Smarter Workplace
          </p>

          <div className="flex gap-4 items-center flex-wrap ml-[285px] animate-[fadeUp_0.9s_ease_0.5s_both]">
            <a
              className="inline-flex items-center gap-2.5 py-3 px-[18px] rounded-xl bg-gradient-to-b from-[#34d0c3] to-[#057a79] text-[#001b1a] font-bold uppercase tracking-wider shadow-[0_10px_28px_rgba(0,255,230,0.18)]"
              href="#demo"
            >
              <span>Watch Demo</span>
            </a>

            <a
              className="inline-flex items-center gap-2.5 py-3 px-[18px] rounded-xl bg-transparent text-[#d9fffb] border border-white/25 font-bold uppercase tracking-wider hover:bg-white/5 transition-all group"
              href="#learn-more"
            >
              <span>Learn More</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="transition-transform group-hover:translate-y-0.5"
              >
                <path fill="currentColor" d="M7 10l5 5 5-5H7z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right: Image Slider */}
        <div className="flex-[0_0_600px] h-[500px] relative overflow-hidden">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index}`}
              className={`absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-1000 z-[1] ${index === currentSlide ? 'opacity-100' : ''
                }`}
            />
          ))}
          {/* Left fade gradient */}
          <div className="absolute top-0 left-0 w-[5%] h-full bg-gradient-to-r from-black to-transparent z-[2] pointer-events-none" />
        </div>
      </div>

      {/* Bottom Gradient Divider */}
      <div
        className="absolute left-0 right-0 -bottom-px h-[100px] bg-[radial-gradient(80%_120%_at_50%_0%,rgba(31,32,32,0.4),rgba(0,255,230,0)_70%),linear-gradient(180deg,rgba(0,255,230,0),rgba(0,255,230,0.35))]"
        aria-hidden="true"
      />

      <style jsx>{`
        @keyframes slideLeft {
          from {
            transform: translateX(-24px);
            opacity: 0;
          }
          to {
            transform: none;
            opacity: 1;
          }
        }
        @keyframes slideRight {
          from {
            transform: translateX(24px);
            opacity: 0;
          }
          to {
            transform: none;
            opacity: 1;
          }
        }
        @keyframes fadeUp {
          from {
            transform: translateY(12px);
            opacity: 0;
          }
          to {
            transform: none;
            opacity: 1;
          }
        }
        @keyframes fadeDown {
          from {
            transform: translateY(-8px);
            opacity: 0;
          }
          to {
            transform: none;
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}