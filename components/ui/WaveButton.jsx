import React from "react";

function WaveButton({ children, ...props }) {
  return (
    <button
      {...props}
      className={`group w-14 aspect-square sm:w-16 p-3 rounded-full flex justify-center items-center relative shadow-[0_0_0.5rem_0_#00000030]`}
    >
      <div className="relative z-50 transition-all duration-500 text-light group-hover:scale-110">
        {children}
      </div>
      <div className="transition-all duration-500 group-hover:scale-110 w-full h-full rounded-full absolute absCenter z-30 bg-gradient-to-br from-sec to-secD"></div>
      <div
        className="w-full h-full bg-gradient-to-br from-sec/40 to-secD/40 rounded-full absolute waveCenter z-20"
        style={{ animationDelay: "2s" }}
      ></div>
      <div className="w-full h-full bg-gradient-to-br from-sec/40 to-secD/40 rounded-full absolute waveCenter z-10"></div>
    </button>
  );
}

export default WaveButton;
