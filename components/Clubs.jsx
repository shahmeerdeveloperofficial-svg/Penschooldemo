"use client";
import Tag from "./ui/Tag";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import TiltCard from "./ui/TiltCard";
import Link from "next/link";

const List = [
  {
    slug: "/SocietyAndClubs",
    title: "Reading and Expression",
    desc: "Language growth, confidence, and thoughtful communication.",
  },
  {
    slug: "/SocietyAndClubs",
    title: "Sports and Wellbeing",
    desc: "Healthy routines, teamwork, movement, and discipline.",
  },
  {
    slug: "/SocietyAndClubs",
    title: "Creative Activities",
    desc: "Art, presentation, participation, and imagination.",
  },
];

const Clubs = ({ direction = "left", speed = 1 }) => {
  const marquee = useRef(null);
  const first = useRef(null);
  const second = useRef(null);
  const xPercent = useRef(0);

  const ArrayData = [...List, ...List, ...List, ...List];

  useEffect(() => {
    if (!first.current || !second.current) return;

    let rafId;

    const animate = () => {
      if (!first.current || !second.current) return;

      if (direction === "left") {
        if (xPercent.current < -100) xPercent.current = 0;
        xPercent.current -= speed / 10;
      } else {
        if (xPercent.current > 0) xPercent.current = -100;
        xPercent.current += speed / 10;
      }

      gsap.set([first.current, second.current], {
        xPercent: xPercent.current,
      });

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafId);
  }, [direction, speed]);

  return (
    <section
      id="Curriculum"
      className="maxW sm:px-12 py-12 flex gap-12 flex-col"
    >
      <h2 className="max-sm:px-4 h2 text-center">
        Student Life at <span className="text-main">PEN School System</span>
      </h2>

      <div className="flex gap-4 text-light">
        <section className="w-full overflow-hidden py-2 sm:py-8 lg:py-16">
          <div
            ref={marquee}
            className="h-fit w-fit flex-nowrap relative flex border-y"
          >
            <div
              ref={first}
              className="h-full flex-1 flex w-fit flex-nowrap items-center"
            >
              {ArrayData.map((item, i) => (
                <Link key={i} href={item.slug}>
                  <TiltCard
                    className={`${
                      i % 2 === 0
                        ? "bg-gradient-to-br from-main/30 to-mainD/30"
                        : "bg-gradient-to-br from-sec/30 to-secD/30"
                    } w-[220px] sm:w-[320px] lg:w-[430px] aspect-[.9] sm:aspect-[1.1] rounded-3xl mx-1 sm:mx-3 overflow-hidden relative`}
                    innerClassName={`${
                      i % 2 === 0
                        ? "bg-gradient-to-br from-main to-mainD"
                        : "bg-gradient-to-br from-sec to-secD"
                    } rounded-2xl p-6 sm:p-8 flex flex-col justify-between`}
                  >
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute -top-10 -right-6 h-40 w-40 rounded-full border-[18px] border-white/80" />
                      <div className="absolute bottom-10 left-6 h-24 w-24 rounded-full bg-white/20" />
                      <div className="absolute bottom-6 right-10 h-16 w-16 rounded-full border-[10px] border-white/60" />
                    </div>

                    <div className="relative z-10 flex flex-col h-full">
                      <Tag>{item.title}</Tag>
                      <div className="mt-auto">
                        <h3 className="font-berlin text-3xl sm:text-5xl leading-[0.95] text-white">
                          {item.title}
                        </h3>
                        <p className="mt-4 text-sm sm:text-lg text-white/90 max-w-[22ch]">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </TiltCard>
                </Link>
              ))}
            </div>

            <div
              ref={second}
              className="absolute left-full top-0 h-full flex w-full flex-nowrap items-center"
            >
              {ArrayData.map((item, i) => (
                <Link key={i} href={item.slug}>
                  <TiltCard
                    className={`${
                      i % 2 === 0
                        ? "bg-gradient-to-br from-main/30 to-mainD/30"
                        : "bg-gradient-to-br from-sec/30 to-secD/30"
                    } w-[220px] sm:w-[430px] aspect-[.9] sm:aspect-[1.1] rounded-3xl mx-1 sm:mx-3 overflow-hidden relative`}
                    innerClassName={`${
                      i % 2 === 0
                        ? "bg-gradient-to-br from-main to-mainD"
                        : "bg-gradient-to-br from-sec to-secD"
                    } rounded-2xl p-6 sm:p-8 flex flex-col justify-between`}
                  >
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute -top-10 -right-6 h-40 w-40 rounded-full border-[18px] border-white/80" />
                      <div className="absolute bottom-10 left-6 h-24 w-24 rounded-full bg-white/20" />
                      <div className="absolute bottom-6 right-10 h-16 w-16 rounded-full border-[10px] border-white/60" />
                    </div>

                    <div className="relative z-10 flex flex-col h-full">
                      <Tag>{item.title}</Tag>
                      <div className="mt-auto">
                        <h3 className="font-berlin text-3xl sm:text-5xl leading-[0.95] text-white">
                          {item.title}
                        </h3>
                        <p className="mt-4 text-sm sm:text-lg text-white/90 max-w-[22ch]">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </TiltCard>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Clubs;
