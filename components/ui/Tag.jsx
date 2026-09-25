import React from "react";

const Tag = ({ children }) => {
  return (
    <div className="bg-light text-dark rounded-full w-fit px-3 py-1 text-lg leading-snug">
      {children}
    </div>
  );
};

export default Tag;
