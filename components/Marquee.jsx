"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

const DefaultList = [
  "A caring and disciplined school environment for growing minds.",
];

export default function Marquee({ List = DefaultList, direction, speed }) {
  const marquee = useRef();
  const first = useRef();
  const second = useRef();
  let xPercent = 0;
  const ArrayData = [...List, ...List, ...List, ...List];

  useEffect(() => {
    const rightAnimation = () => {
      if (xPercent > 0) {
        xPercent = -100;
      }
      if (first.current && second.current) {
        gsap.to([first.current, second.current], {
          xPercent: xPercent,
          duration: 0,
          ease: "none",
        });
      }
      requestAnimationFrame(rightAnimation);
      xPercent += speed / 10;
    };

    const leftAnimation = () => {
      if (xPercent < -100) {
        xPercent = 0;
      }
      if (first.current && second.current) {
        gsap.to([first.current, second.current], {
          xPercent: xPercent,
          duration: 0,
          ease: "none",
        });
      }
      requestAnimationFrame(leftAnimation);
      xPercent -= speed / 10;
    };

    if (direction === "left") {
      requestAnimationFrame(leftAnimation);
    } else {
      requestAnimationFrame(rightAnimation);
    }
  }, [direction, speed]);

  return (
    <section
      style={{
        maskImage: `linear-gradient(
        to right,
        transparent 5%,
        black 25%,
        black 75%,
        transparent 95%
      )`,
        WebkitMaskImage: `linear-gradient(
        to right,
        transparent 5%,
        black 25%,
        black 75%,
        transparent 95%
      )`,
      }}
      className="maxWSec w-full flex justify-center items-center py-8 sm:py-16 overflow-hidden"
    >
      <div
        ref={marquee}
        className="h-fit w-fit flex-nowrap relative flex border-y border-main flex-shrink-0"
      >
        <div
          className="h-full flex-1 flex w-fit flex-nowrap items-center flex-shrink-0"
          ref={first}
        >
          {ArrayData.map((item, i) => {
            return (
              <div
                key={i}
                className="flex items-center w-fit py-3 px-2 sm:px-4 gap-4 sm:gap-8 flex-shrink-0"
              >
                <div className="text-lg sm:text-3xl text-dark whitespace-nowrap flex-shrink-0">
                  {item}
                </div>
                {i !== ArrayData.length && (
                  <Image
                    src={"/penlogo.png"}
                    width={120}
                    height={60}
                    alt="Logo"
                    loading="lazy"
                    className="h-10 sm:h-14 w-auto rounded-md"
                  />
                )}
              </div>
            );
          })}
        </div>
        <div
          ref={second}
          className="flex-shrink-0 h-full flex w-full flex-nowrap items-center absolute left-full top-0"
        >
          {ArrayData.map((item, i) => {
            return (
              <div
                key={i}
                className="flex items-center w-fit py-3 px-2 sm:px-4 gap-4 sm:gap-8 flex-shrink-0"
              >
                <div className="text-lg sm:text-3xl text-dark whitespace-nowrap flex-shrink-0">
                  {item}
                </div>
                {i !== ArrayData.length && (
                  <Image
                    src={"/penlogo.png"}
                    width={120}
                    height={60}
                    alt="Logo"
                    loading="lazy"
                    className="h-10 sm:h-14 w-auto rounded-md"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
