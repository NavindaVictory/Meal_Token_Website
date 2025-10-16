import React, { useState } from 'react';

const features = [
  { title: 'Authentication (Login/Sign-up)', intro: 'Secure access to the system.' },
  { title: 'Dashboard', intro: 'User-specific overview and navigation.' },
  { title: 'Admin Panel', intro: 'Central management of employees, suppliers, meals, costs and reports.' },
  { title: 'Employee Management', intro: 'Add, edit or deactivate employees.' },
  { title: 'Supplier Management', intro: 'Manage catering/food suppliers.' },
  { title: 'Meal Configuration', intro: 'Define meal types, sub-types, tokens, and add-ons.' },
  { title: 'Meal Cost Management', intro: 'Configure and track supplier costs, company shares and employee contributions.' },
  { title: 'Reports', intro: 'Generate and export data in multiple formats' },
  { title: 'Request Management', intro: 'Create, approve, and track requests for meals/snacks/beverages.' },
  { title: 'Settings', intro: 'Generate and export data in multiple formats.' },
];

export function SplitFeatures() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const left = features.slice(0, 5);
  const right = features.slice(5);

  const renderColumn = (items, offset = 0) =>
    items.map((item, idx) => {
      const index = idx + offset;
      const isActive = index === activeIndex;

      return (
        <div
          className={`bg-[#073c36] text-white p-4 px-5 rounded-[10px] transition-all duration-300 ${isActive ? 'bg-[#0a4d45]' : ''}`}
          key={index}
        >
          <button
            className="bg-transparent border-none text-white text-base font-semibold w-full flex items-center gap-3 cursor-pointer text-left"
            onClick={() => toggle(index)}
          >
            <span className={`text-xl text-[#05ac95] transition-transform duration-300 ${isActive ? 'rotate-90' : ''}`}>
              ›
            </span>
            <span className="flex-1">{item.title}</span>
          </button>
          {isActive && (
            <p className="mt-2 text-[0.95rem] text-[#f4f4f4] opacity-90">
              {item.intro}
            </p>
          )}
        </div>
      );
    });

  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 items-start bg-black text-white py-16 px-8">
      {/* Left Column */}
      <div className="flex flex-col gap-4">
        {renderColumn(left)}
      </div>

      {/* Center Heading */}
      <div className="text-center mt-[70px] hidden lg:block">
        <h2 className="text-[2.5rem] font-bold uppercase leading-tight">
          FEATURES & <br />BENEFITS
        </h2>
      </div>

      {/* Mobile Heading */}
      <div className="text-center lg:hidden col-span-full">
        <h2 className="text-[2rem] font-bold uppercase leading-tight">
          FEATURES & <br />BENEFITS
        </h2>
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-4">
        {renderColumn(right, 5)}
      </div>
    </section>
  );
}