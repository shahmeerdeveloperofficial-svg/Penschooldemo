"use client";

import dynamic from "next/dynamic";
import React from "react";

const MatterBlocks = dynamic(() => import("./ui/MatterBlocks"), {
  ssr: false,
});

const Dragables = () => {
  const labels = [
    {
      title: "01",
      sub: "Pakpattan Campus",
      custom: "text-light bg-dark border-light",
    },
    {
      title: "24/7",
      sub: "Admission Support",
      custom: "text-light bg-main border-main",
    },
    {
      title: "100%",
      sub: "Student Care",
      custom: "text-light bg-sec border-main",
    },
  ];

  return (
    <div className="maxWSec select-none h-[24rem] sm:h-[30rem] w-full flex relative overflow-hidden">
      <div className="flex-1 max-sm:pointer-events-none flex relative">
        <div className="flex-1 relative z-10 overflow-hidden">
          <MatterBlocks>
            {labels.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`${item.custom} left-[-100vw] top-[-100vh] rounded-[2rem] sm:rounded-[3rem] absolute h-24 md:h-44 w-[10rem] sm:w-[18rem] flex-1 flex flex-col justify-center items-center cursor-grab z-20 dragableLabels pointer-events-none`}
                >
                  <h2 className="h1 text-center">{item.title}</h2>
                  <p className="text-base md:text-2xl leading-snug text-center">
                    {item.sub}
                  </p>
                </div>
              );
            })}
            {Array.from({ length: 20 }).map((_, index) => {
              const classes = (() => {
                switch (index % 3) {
                  case 0:
                    return "bg-sec border-main";
                  case 1:
                    return "bg-main border-sec";
                  case 2:
                    return "bg-dark border-light";
                  default:
                    return "";
                }
              })();

              return (
                <div
                  key={index}
                  className={`${classes} left-[-100vw] top-[-100vh] rounded-[1rem] sm:rounded-[1.5rem] h-8 w-8 sm:h-12 sm:w-12 absolute cursor-grab z-20 dragableLabels pointer-events-none`}
                ></div>
              );
            })}
          </MatterBlocks>
        </div>
      </div>
    </div>
  );
};

export default Dragables;
