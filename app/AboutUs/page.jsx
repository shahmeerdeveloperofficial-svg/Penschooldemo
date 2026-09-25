import React from "react";
import HeroHeader from "@/components/HeroHeader";
import RichTextRenderer from "@/components/RichTextRenderer";

const AboutUs = () => {
  const cmsData = {
    content: [
      {
        type: "h2",
        text: "Our Vision",
      },
      {
        type: "p",
        text: "Our vision is to help students of Pakpattan grow into confident, capable, and responsible individuals through meaningful education, strong values, and a supportive school culture.",
      },
      {
        type: "br",
      },
      {
        type: "h2",
        text: "Our Mission",
      },
      {
        type: "p",
        text: "PEN School System is committed to providing quality education in a safe and caring environment where children can build academic strength, confidence, discipline, and respect for others.",
      },
      {
        type: "br",
      },
      {
        type: "h2",
        text: "Our Philosophy",
      },
      {
        type: "p",
        text: "We believe every child can learn and flourish when guided with patience, clarity, and consistency. Our teaching approach values concept-based learning, positive character formation, and healthy partnership with families.",
      },
      {
        type: "br",
      },
      {
        type: "h2",
        text: "Core Values",
      },
      {
        type: "h4",
        text: "Respect",
      },
      {
        type: "p",
        text: "We promote respectful behavior toward teachers, classmates, parents, and the wider community.",
      },
      {
        type: "br",
      },
      {
        type: "h4",
        text: "Discipline",
      },
      {
        type: "p",
        text: "A disciplined environment helps students stay focused, responsible, and prepared for lifelong growth.",
      },
      {
        type: "br",
      },
      {
        type: "h4",
        text: "Learning",
      },
      {
        type: "p",
        text: "We aim to develop clear understanding, strong fundamentals, and a sincere love for learning in every classroom.",
      },
      {
        type: "br",
      },
      {
        type: "h4",
        text: "Care",
      },
      {
        type: "p",
        text: "We believe students perform best when they feel seen, supported, and encouraged in a nurturing school environment.",
      },
    ],
  };

  return (
    <main>
      <HeroHeader title={"About"} description="PEN School System" />
      <div className="flex flex-col gap-2 maxWSec px-6 sm:px-12 py-12">
        <RichTextRenderer content={cmsData.content} />
      </div>
    </main>
  );
};

export default AboutUs;
