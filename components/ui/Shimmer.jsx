import React from "react";
import { cn } from "../../utils/cn";

const Shimmer = ({ children, color = "#F58634", border = "bg-main/30" }) => {
  return (
    <div
      className={cn(
        "w-full h-full rounded-2xl flex p-[1px] relative overflow-hidden",
        border
      )}
    >
      <div
        className={cn(
          "bg-white overflow-hidden flex-1 rounded-[calc(1rem-1px)] relative z-10 flex"
        )}
      >
        {children}
      </div>
      <div
        style={{ "--conic-color": color }}
        className={`ConicGradient ConicRotate absolute inset-0 w-[200%] h-[200%] left-1/2 top-1/2 -transform-x-1/2 -transform-y-1/2`}
      ></div>
    </div>
  );
};

export default Shimmer;
