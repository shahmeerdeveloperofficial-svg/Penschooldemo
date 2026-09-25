import React from "react";
import HeroHeader from "@/components/HeroHeader";
import RichTextRenderer from "@/components/RichTextRenderer";

const SyllabusAndAffiliations = () => {
  const cmsData = {
    content: [
      {
        type: "h3",
        text: "Core Academic Subjects",
      },
      {
        type: "p",
        text: "PEN School System focuses on strong foundations in English, Urdu, Mathematics, Science, Islamiat, and general knowledge through clear teaching and regular practice.",
      },
      {
        type: "h3",
        text: "Language Development",
      },
      {
        type: "p",
        text: "Students are encouraged to improve reading, writing, speaking, and comprehension so they can communicate with confidence inside and outside the classroom.",
      },
      {
        type: "h3",
        text: "Concept-Based Learning",
      },
      {
        type: "p",
        text: "Our academic program values understanding over rote learning. Teachers help students grasp concepts step by step through classwork, discussion, revision, and assessment.",
      },
      {
        type: "h3",
        text: "Co-Curricular Balance",
      },
      {
        type: "p",
        text: "Alongside academics, students take part in reading, speaking, sports, and creative activities that support confidence, teamwork, and balanced development.",
      },
      {
        type: "h3",
        text: "Progress and Guidance",
      },
      {
        type: "p",
        text: "We monitor student progress regularly and work with parents to make sure each child receives the support needed for steady improvement.",
      },
    ],
  };

  return (
    <main>
      <HeroHeader
        title={"Academic Program"}
        description="PEN School System"
      />
      <div className="flex flex-col gap-2 maxWSec px-6 sm:px-12 py-12">
        <RichTextRenderer content={cmsData.content} />
      </div>
    </main>
  );
};

export default SyllabusAndAffiliations;
