import React from 'react';
import logo from '../assets/logo.svg';

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 h-[72px] flex items-center justify-between px-7 z-30 bg-black/35 backdrop-blur-md">
      <a href="/" className="flex items-center gap-3 font-bold tracking-wide" aria-label="Victory MealPass">
        <img src={logo} alt="Victory MealPass" className="w-[150px] h-[150px]" />
      </a>

      <nav className="flex gap-7 items-center" aria-label="Primary">
        <a href="#home" className="opacity-90 transition-all duration-200 hover:opacity-100 hover:text-[#34d0c3]">
          Home
        </a>
        <a href="#demo" className="opacity-90 transition-all duration-200 hover:opacity-100 hover:text-[#34d0c3]">
          Demo
        </a>
        <a href="#contact" className="opacity-90 transition-all duration-200 hover:opacity-100 hover:text-[#34d0c3]">
          Contact
        </a>
        <a
          href="#login"
          className="border border-white/20 py-2 px-3.5 rounded-full opacity-90 transition-all duration-200 hover:opacity-100 hover:text-[#34d0c3] hover:border-[#34d0c3]/30"
        >
          Log in
        </a>
      </nav>
    </header>
  );
}