import React from 'react';

export function WatchDemo({ videoSrc = '/WatchDemo.png', ctaHref, title = 'DEMO' }) {
  const link = ctaHref ?? videoSrc;

  return (
    <section
      className="bg-[#0a0a0a] text-white grid grid-cols-1 lg:grid-cols-[minmax(280px,680px)_1fr] items-center gap-[clamp(12px,2vw,32px)] py-[clamp(12px,2vw,24px)] px-[clamp(12px,3vw,32px)] mt-0 lg:gap-[clamp(12px,2vw,32px)]"
      aria-labelledby="watch-demo-heading"
    >
      {/* Left: video/image */}
      <div
        className="w-full flex justify-center order-2 lg:order-1"
        role="region"
        aria-label="Product demo image"
      >
        <div className="w-full aspect-video rounded-[14px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.6),0_0_0_2px_rgba(255,255,255,0.5)] bg-[#111]">
          <img
            className="w-full max-w-[800px] h-auto rounded-lg bg-black"
            src={videoSrc}
            alt="Product demo"
            loading="lazy"
          />
        </div>
      </div>

      {/* Right: text and CTA */}
      <div className="grid content-center gap-[clamp(8px,1.2vw,16px)] px-[clamp(4px,1vw,12px)] order-1 lg:order-2 text-left lg:text-left">
        <p className="m-0 text-[clamp(18px,4vw,44px)] tracking-[0.35em] text-[#f4f4f4] uppercase">
          WATCH
        </p>

        <h1
          id="watch-demo-heading"
          className="m-0 mb-[clamp(10px,2vw,24px)] font-extrabold leading-[0.88] lg:leading-[0.88] text-[clamp(64px,20vw,240px)] tracking-wide"
        >
          {title}
        </h1>

        <a
          className="inline-flex items-center gap-2.5 w-fit py-3 px-[18px] rounded-[10px] border-[1.5px] border-white/70 text-white no-underline font-semibold tracking-wider transition-all duration-150 bg-transparent hover:border-[#05ac95] hover:bg-[#05ac95]/14 active:translate-y-px"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          WATCH NOW
          <svg
            className="w-[18px] h-[18px]"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M5 12h12m0 0-5-5m5 5-5 5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}