import React from "react";
import HeroHeader from "@/components/HeroHeader";
import RichTextRenderer from "@/components/RichTextRenderer";

const OurPhilosophy = () => {
  const cmsData = {
    content: [
      {
        type: "h2",
        text: "Our Philosophy",
      },
      {
        type: "p",
        text: "PEN School System believes education should strengthen knowledge, behavior, confidence, and values together. A child learns best in a setting where expectations are clear and support is consistent.",
      },
      {
        type: "br",
      },
      {
        type: "p",
        text: "We encourage teachers to focus on understanding, not memorization alone. Students are guided to ask questions, improve step by step, and take ownership of their learning.",
      },
      {
        type: "br",
      },
      {
        type: "p",
        text: "Our philosophy is rooted in respect, care, and discipline. We aim to build a school culture where children feel valued, families feel connected, and learning remains purposeful every day.",
      },
    ],
  };

  return (
    <main>
      <HeroHeader title={"Our Philosophy"} description="PEN School System" />
      <div className="flex flex-col gap-2 maxWSec px-6 sm:px-12 py-12">
        <RichTextRenderer content={cmsData.content} />
      </div>
    </main>
  );
};

export default OurPhilosophy;
