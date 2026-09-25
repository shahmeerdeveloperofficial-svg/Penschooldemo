import React from "react";
import HeroHeader from "@/components/HeroHeader";
import RichTextRenderer from "@/components/RichTextRenderer";

const Careers = () => {
  const cmsData = {
    content: [
      {
        type: "h2",
        text: "Careers",
      },
      {
        type: "p",
        text: "PEN School System welcomes passionate educators and responsible school professionals who want to contribute to a disciplined, caring, and academically focused environment. We value sincerity, classroom strength, teamwork, and commitment to student growth.",
      },
      {
        type: "p",
        text: "If you are interested in joining the school, please contact the administration office through the contact page or phone number provided on the website for current opportunities and application guidance.",
      },
    ],
  };

  return (
    <main>
      <HeroHeader
        title={"Careers"}
        description="Work with PEN School System"
      />
      <div className="flex flex-col gap-2 maxWSec px-6 sm:px-12 py-12">
        <RichTextRenderer content={cmsData.content} />
      </div>
    </main>
  );
};

export default Careers;
