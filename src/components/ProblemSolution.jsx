import React from 'react';

export function ProblemSolution() {
  const bullets = [
    'To serve as a reference guide for administrators, employees, and approvers.',
    'To serve as a reference guide for administrators, employees, and approvers.',
    'To help users perform day-to-day operations efficiently.',
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 bg-[#0a0a0a] text-white py-16 px-8 gap-8 items-center">
      {/* Left: Heading */}
      <div className="flex justify-center items-center">
        <h2 className="text-6xl md:text-[6rem] font-medium uppercase text-left md:text-left leading-[1.1]">
          PROBLEM & <br />SOLUTION
        </h2>
      </div>

      {/* Right: Bullet Points */}
      <div className="flex flex-col gap-6">
        {bullets.map((text, idx) => (
          <div
            className="flex items-start bg-[#046054] py-8 px-5 rounded-lg"
            key={idx}
          >
            <span className="text-base mr-3 text-white">•</span>
            <p className="text-base text-white m-0">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}