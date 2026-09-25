import React from "react";
import HeroHeader from "@/components/HeroHeader";
import RichTextRenderer from "@/components/RichTextRenderer";

const Policies = () => {
  const cmsData = {
    content: [
      {
        type: "h2",
        text: "Attendance",
      },
      {
        type: "p",
        text: "Students are expected to attend school regularly so they can maintain continuity in learning and class participation.",
      },
      {
        type: "br",
      },
      {
        type: "h2",
        text: "Late Arrivals",
      },
      {
        type: "p",
        text: "Students should arrive on time. Repeated late arrival may lead to warnings and parent communication from the school office.",
      },
      {
        type: "br",
      },
      {
        type: "h2",
        text: "Absences",
      },
      {
        type: "p",
        text: "Parents should inform the school regarding absences. Medical or extended leave should be communicated with the administration as early as possible.",
      },
      {
        type: "br",
      },
      {
        type: "h2",
        text: "Uniform and Grooming",
      },
      {
        type: "p",
        text: "Students are expected to come to school in proper uniform and maintain a neat, clean, and presentable appearance.",
      },
      {
        type: "br",
      },
      {
        type: "h2",
        text: "Discipline",
      },
      {
        type: "p",
        text: "Respectful behavior, classroom discipline, and responsible conduct are expected from every student. Serious or repeated misconduct may lead to parent meetings or disciplinary action.",
      },
      {
        type: "br",
      },
      {
        type: "h2",
        text: "Prohibited Items",
      },
      {
        type: "p",
        text: "Students should not bring unnecessary electronic devices or inappropriate items to school unless specifically allowed for academic use.",
      },
      {
        type: "br",
      },
      {
        type: "h2",
        text: "Fee and Communication",
      },
      {
        type: "p",
        text: "Fee schedules, notices, and school updates are communicated through the school administration. Parents are encouraged to stay in touch with official channels for the latest information.",
      },
      {
        type: "br",
      },
      {
        type: "h2",
        text: "Parent Meetings",
      },
      {
        type: "p",
        text: "Parents may contact the school for scheduled meetings regarding academic progress, behavior, attendance, or general school matters.",
      },
      {
        type: "br",
      },
      {
        type: "h2",
        text: "Bullying and Harassment Policy",
      },
      {
        type: "p",
        text: "PEN School System is committed to a safe and respectful environment for all students. Bullying and harassment in any form are strictly prohibited and will be addressed seriously by the school administration.",
      },
    ],
  };

  return (
    <main>
      <HeroHeader
        title={"Guidelines and Policies"}
        description={"PEN School System"}
      />
      <div className="flex flex-col gap-2 maxWSec px-6 sm:px-12 py-12">
        <RichTextRenderer content={cmsData.content} />
      </div>
    </main>
  );
};

export default Policies;
