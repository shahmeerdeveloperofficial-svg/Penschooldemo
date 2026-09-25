import { cn } from "@/utils/cn";
import React from "react";

const Button = ({
  children,
  full = false,
  rounded = false,
  btnType = "main",
  size = "default",
  className,
  ...props
}) => {
  const Types = {
    main: "bg-main hover:bg-mainD text-white",
    sec: "bg-sec hover:bg-secD text-white",
    custom: "", // allow override via className
  };

  const BTypes = {
    main: "border-main hover:border-mainD",
    sec: "border-sec hover:border-secD",
    custom: "", // allow override via className
  };

  const Sizes = {
    default: "gap-2 h-10 sm:h-12 px-4 text-base sm:text-xl",
    small: "gap-2 h-8 sm:h-10 px-3 text-sm sm:text-base",
  };

  const BSizes = {
    default: "border-[2px] p-[1px]",
    small: "border-[1px] p-[2px]",
  };

  const isFit = full ? "w-full" : "max-w-fit";

  return (
    <button
      {...props}
      className={cn(
        "group cursor-pointer border-opacity-0 bg-transparent transition-all duration-500 hover:border-opacity-100",
        isFit,
        rounded ? "rounded-full" : "rounded-[calc(0.5rem+3px)]",
        BTypes[btnType],
        BSizes[size],
        className
      )}
    >
      <div
        className={cn(
          "relative transition-all duration-500 overflow-hidden !leading-[1.1] flex items-center",
          isFit,
          rounded ? "rounded-full" : "rounded-lg",
          Types[btnType],
          Sizes[size]
        )}
      >
        {children}
        <div
          className={cn(
            "absolute rotate-[30deg] scale-y-150 bg-light/20 transition-all duration-700 -left-16 top-0 h-[150%] w-12 group-hover:left-[calc(100%+1rem)]"
          )}
        />
      </div>
    </button>
  );
};

export default Button;
