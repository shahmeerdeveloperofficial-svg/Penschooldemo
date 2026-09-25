"use client";

import React, { useEffect, useRef } from "react";

const teamMembers = [
  {
    name: "School Leadership",
    title: "Academic guidance and school direction",
    description:
      "Our leadership team works to maintain discipline, educational quality, and a safe learning environment for every student.",
  },
  {
    name: "Administration",
    title: "Student support and parent coordination",
    description:
      "The administrative team helps families with admissions, communication, scheduling, and day-to-day school coordination.",
  },
  {
    name: "Teaching Team",
    title: "Dedicated classroom mentorship",
    description:
      "Our teachers focus on concept clarity, values, confidence building, and the personal progress of each learner.",
  },
];

export default function Team() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    const interval = setInterval(() => {
      if (!slider) return;

      slider.scrollLeft += 1;

      if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
        slider.scrollLeft = 0;
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="Team"
      className="maxWSec px-6 sm:px-12 py-12 flex flex-col gap-12"
    >
      <h2 className="h2 text-center">
        Meet the <span className="text-main">Leadership</span>
      </h2>

      <div ref={sliderRef} className="w-full overflow-x-hidden">
        <div className="flex gap-8 w-max">
          {[...teamMembers, ...teamMembers].map((member, index) => (
            <div
              key={index}
              className="min-w-[350px] flex flex-col items-center gap-4"
            >
              <div className="h-[29rem] w-full overflow-hidden rounded-lg bg-gradient-to-br from-sec via-[#232d6a] to-main p-8 text-light flex flex-col justify-end">
                <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur p-6">
                  <p className="text-sm uppercase tracking-[0.25em] text-white/70">
                    PEN School System
                  </p>
                  <h4 className="font-berlin text-3xl leading-tight mt-3">
                    {member.name}
                  </h4>
                  <p className="text-base text-white/90 mt-3">
                    {member.description}
                  </p>
                </div>
              </div>

              <div className="text-center">
                <h4 className="font-semibold text-lg">{member.name}</h4>
                <p className="text-sm text-gray-600">
                  {member.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
