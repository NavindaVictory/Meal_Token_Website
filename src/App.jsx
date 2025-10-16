import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WatchDemo } from './components/WatchDemo';
import { ProblemSolution } from './components/ProblemSolution';
import { ImageSlider } from './components/ImageSlider';
import { SplitFeatures } from './components/SplitFeatures';
import { Footer } from './components/Footer';


function App() {
  const sections = [
    {
      title: 'PROBLEM & SOLUTION',
      kicker: 'The Reason Behind VICTORY MealPass',
      body: '"No more problem. Heres why VICTORY MealPass changes everything."',
      href: '#',
    },
    {
      title: 'SHOWCASE DESIGN',
      kicker: 'What VICTORY MealPass Looks Like',
      body: '"Designed with simplicity and usability at its core."',
      href: '#',
    },
    {
      title: 'FEATURES & BENEFITS',
      kicker: 'Your Possibilities with VICTORY MealPass',
      body: '"Packed with powerful tools to help you achieve more, faster."',
      href: '#',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-[#e8f4f3]">
      <Navbar />
      <Hero />

      {/* Info Section */}
      <section className="relative overflow-hidden py-12 md:py-20 lg:py-24 bg-[radial-gradient(60%_80%_at_18%_20%,rgba(255,255,255,0.06)_0%,transparent_60%),radial-gradient(45%_22%_at_50%_100%,rgba(255,255,255,0.08)_0%,transparent_60%),#0a0a0a]">
        {/* Bottom glow effect */}
        <div className="absolute left-0 right-0 -bottom-10 h-[140px] bg-[radial-gradient(60%_120%_at_50%_0%,rgba(255,255,255,0)_0%,transparent_70%)] blur-sm pointer-events-none" />

        <div className="relative w-[min(1200px,92%)] mx-auto grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-8 md:gap-12 lg:gap-20 items-center">
          {/* Left: Headline */}
          <div>
            <h1 className="m-0 font-semibold leading-[1.12] tracking-[0.62px] text-[clamp(36px,6vw,60px)] text-[#e8f4f3]">
              Designed to bring
              <br />
              accuracy, security and
              <br />
              efficiency{' '}
              <span className="font-light text-[60px] italic" style={{ fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif" }}>
                smarter
              </span>{' '}
              <span className="font-light text-[60px] italic text-white" style={{ fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif" }}>
                and
              </span>{' '}
              <span className="font-light text-[60px] italic" style={{ fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif" }}>
                simpler than ever.
              </span>
            </h1>
          </div>

          {/* Right: Description */}
          <div>
            <p className="m-0 max-w-[70ch] text-xl leading-[1.9] text-[#f4f4f4]">
              The Biometric Meal Management System is designed to streamline the process of managing employee meals through biometric authentication. This manual provides users with step-by-step guidance on how to use the system effectively.
            </p>
          </div>
        </div>

        {/* Bottom divider gradient */}
        <div className="absolute left-0 right-0 -bottom-px h-[60px] bg-[radial-gradient(40%_120%_at_50%_0%,rgba(31,32,32,0.4),rgba(0,255,230,0)),linear-gradient(180deg,rgba(34,69,65,0),rgba(255,254,254,0.638))]" />
      </section>

      {/* Sections Block */}
      <section className="bg-[#0a0a0a] py-24">
        <div className="flex justify-center gap-0 max-w-[1200px] mx-auto">
          {sections.map((s, idx) => (
            <div className="relative flex-1 px-8" key={s.title}>
              <article className="flex flex-col items-center text-center text-white">
                <h2 className="text-[1.8rem] font-bold uppercase mb-2">
                  {s.title}
                </h2>
                <p className="text-base mb-2">
                  {s.kicker}
                </p>
                <p className="text-[0.9rem] italic mb-4">
                  {s.body}
                </p>
                <a
                  className="py-2 px-4 border border-white text-white no-underline font-extralight rounded text-[10px] hover:bg-white/10 transition-colors"
                  href={s.href}
                  aria-label="Learn more"
                >
                  LEARN MORE →
                </a>
              </article>

              {/* Vertical divider */}
              {idx < sections.length - 1 && (
                <span
                  className="absolute top-0 right-0 w-px h-full bg-cyan-400 opacity-40"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Watch Demo Section */}
      <WatchDemo
        videoSrc="/WatchDemo.png"
        title="  Demo"
        ctaHref="/WatchDemo.mp4"
      />

      <ProblemSolution />
      <ImageSlider />
      <SplitFeatures />
      <Footer />
    </div>
  );
}

export default App;