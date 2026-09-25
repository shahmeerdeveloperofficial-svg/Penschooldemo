import React from "react";
import HeroHeader from "@/components/HeroHeader";
import RichTextRenderer from "@/components/RichTextRenderer";

const ParentingWorkshop = () => {
  const cmsData = {
    content: [
      {
        type: "h2",
        text: "Parenting Workshop",
      },
      {
        type: "p",
        text: "PEN School System believes parents are essential partners in a child's development. Our parent guidance sessions are aimed at helping families better support study habits, behavior, confidence, and emotional wellbeing at home.",
      },
      {
        type: "p",
        text: "These interactions help strengthen the connection between school and home so that students receive consistent support in their academic and personal growth.",
      },
    ],
  };

  return (
    <main>
      <HeroHeader
        title={"Parenting Workshop"}
        description="PEN School System"
      />
      <div className="flex flex-col gap-2 maxWSec px-6 sm:px-12 py-12">
        <RichTextRenderer content={cmsData.content} />
      </div>
    </main>
  );
};

export default ParentingWorkshop;
