import React from "react";
import HeroHeader from "@/components/HeroHeader";
import RichTextRenderer from "@/components/RichTextRenderer";

const Library = () => {
  const cmsData = {
    content: [
      {
        type: "h2",
        text: "Library",
      },
      {
        type: "p",
        text: "The library at PEN School System supports reading habits, curiosity, and independent learning. Students are encouraged to explore age-appropriate books and learning resources that strengthen language and understanding.",
      },
      {
        type: "p",
        text: "A reading-friendly environment helps children grow academically while also developing imagination, concentration, and love for knowledge.",
      },
    ],
  };

  return (
    <main>
      <HeroHeader
        title={"Library"}
        description="PEN School System"
      />
      <div className="flex flex-col gap-2 maxWSec px-6 sm:px-12 py-12">
        <RichTextRenderer content={cmsData.content} />
      </div>
    </main>
  );
};

export default Library;
