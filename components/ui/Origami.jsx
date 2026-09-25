"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const DELAY_IN_MS = 3500;
const TRANSITION_DURATION_IN_SECS = 1.5;

export const Origami = ({ children, inverse }) => {
  return (
    <LogoRolodex
      items={
        inverse
          ? [
              <LogoItem key={1} className="bg-main text-light">
                {children}
              </LogoItem>,
              <LogoItem key={2} className="bg-sec text-light">
                {children}
              </LogoItem>,
            ]
          : [
              <LogoItem key={2} className="bg-sec text-light">
                {children}
              </LogoItem>,
              <LogoItem key={1} className="bg-main text-light">
                {children}
              </LogoItem>,
            ]
      }
    />
  );
};

const LogoRolodex = ({ items }) => {
  const intervalRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((pv) => pv + 1);
    }, DELAY_IN_MS);

    return () => {
      clearInterval(intervalRef.current || undefined);
    };
  }, []);

  return (
    <div
      style={{
        transform: "rotateY(-20deg)",
        transformStyle: "preserve-3d",
      }}
      className="relative z-0 h-full w-full shrink-0 rounded-xl border-4 border-transparent bg-dark/20"
    >
      <AnimatePresence mode="sync">
        <motion.div
          style={{
            y: "-50%",
            x: "-50%",
            clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
            zIndex: -index,
            backfaceVisibility: "hidden",
          }}
          key={index}
          transition={{
            duration: TRANSITION_DURATION_IN_SECS,
            ease: "easeInOut",
          }}
          initial={{ rotateX: "0deg" }}
          animate={{ rotateX: "0deg" }}
          exit={{ rotateX: "-180deg" }}
          className="absolute left-1/2 top-1/2 w-full h-full"
        >
          {items[index % items.length]}
        </motion.div>
        <motion.div
          style={{
            y: "-50%",
            x: "-50%",
            clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)",
            zIndex: index,
            backfaceVisibility: "hidden",
          }}
          key={(index + 1) * 2}
          initial={{ rotateX: "180deg" }}
          animate={{ rotateX: "0deg" }}
          exit={{ rotateX: "0deg" }}
          transition={{
            duration: TRANSITION_DURATION_IN_SECS,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 w-full h-full"
        >
          {items[index % items.length]}
        </motion.div>
      </AnimatePresence>

      {/* <hr
        style={{
          transform: "translateZ(1px)",
        }}
        className="absolute left-0 right-0 top-1/2 z-[999999999] -translate-y-1/2 border-t-2 border-dark/20"
      /> */}
    </div>
  );
};

const LogoItem = ({ children, className }) => {
  return (
    <div className={twMerge("w-full h-full flex rounded-lg", className)}>
      {children}
    </div>
  );
};
