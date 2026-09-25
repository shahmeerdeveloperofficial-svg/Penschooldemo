import React from "react";
import HeroHeader from "@/components/HeroHeader";
import RichTextRenderer from "@/components/RichTextRenderer";

const StudentCounselling = () => {
  const cmsData = {
    content: [
      {
        type: "h2",
        text: "Student Counselling and Mentoring",
      },
      {
        type: "p",
        text: "At PEN School System, student guidance is an important part of school life. We help students develop confidence, healthy habits, respectful behavior, and a positive attitude toward learning.",
      },
      {
        type: "p",
        text: "Through mentoring and regular teacher support, students are encouraged to discuss challenges, improve classroom performance, and set better goals for their growth.",
      },
    ],
  };

  return (
    <main>
      <HeroHeader
        title={"Student Counselling & Mentoring Session"}
        description="PEN School System"
      />
      <div className="flex flex-col gap-2 maxWSec px-6 sm:px-12 py-12">
        <RichTextRenderer content={cmsData.content} />
      </div>
    </main>
  );
};

export default StudentCounselling;
