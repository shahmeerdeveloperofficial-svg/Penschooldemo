import React from "react";
import HeroHeader from "@/components/HeroHeader";
import RichTextRenderer from "@/components/RichTextRenderer";

const SocietyAndClubs = () => {
  const cmsData = {
    content: [
      {
        type: "h2",
        text: "Societies and Clubs",
      },
      {
        type: "p",
        text: "PEN School System values learning beyond the classroom. Our student life activities are designed to help children build confidence, teamwork, discipline, and healthy expression.",
      },
      {
        type: "br",
      },
      {
        type: "h2",
        text: "Reading Activities",
      },
      {
        type: "p",
        text: "Students are encouraged to read regularly, improve vocabulary, and develop a habit of understanding and sharing ideas with confidence.",
      },
      {
        type: "br",
      },
      {
        type: "h2",
        text: "Sports and Physical Activity",
      },
      {
        type: "p",
        text: "Sports and active play help students stay healthy, focused, and cooperative while learning the value of effort and teamwork.",
      },
      {
        type: "br",
      },
      {
        type: "h2",
        text: "Creative Expression",
      },
      {
        type: "p",
        text: "Through presentations, performances, drawing, and class activities, students explore their creativity and improve self-expression.",
      },
      {
        type: "br",
      },
      {
        type: "h2",
        text: "Speaking and Participation",
      },
      {
        type: "p",
        text: "School activities are also used to improve confidence, communication, and respectful interaction among students.",
      },
    ],
  };

  return (
    <main>
      <HeroHeader
        title={"Society And Clubs"}
        description="PEN School System"
      />
      <div className="flex flex-col gap-2 maxWSec px-6 sm:px-12 py-12">
        <RichTextRenderer content={cmsData.content} />
      </div>
    </main>
  );
};

export default SocietyAndClubs;
