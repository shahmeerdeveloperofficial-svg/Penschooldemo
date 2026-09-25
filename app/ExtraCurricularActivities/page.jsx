import React from "react";
import HeroHeader from "@/components/HeroHeader";
import RichTextRenderer from "@/components/RichTextRenderer";

const ExtraCurricularActivities = () => {
  const cmsData = {
    content: [
      {
        type: "p",
        text: "At PEN School System, learning extends beyond the classroom. Co-curricular activities help students discover confidence, teamwork, creativity, and healthy habits.",
      },
      { type: "br" },
      {
        type: "h5",
        text: "Sports and Fitness",
      },
      {
        type: "p",
        text: "Students are encouraged to stay active through sports and physical activities that promote energy, discipline, and team spirit.",
      },
      {
        type: "h5",
        text: "Arts and Expression",
      },
      {
        type: "p",
        text: "Drawing, performances, speaking activities, and classroom presentations give children space to express themselves with confidence.",
      },
      {
        type: "h5",
        text: "Leadership and Participation",
      },
      {
        type: "p",
        text: "Students learn responsibility and confidence by taking part in school events, assemblies, and group activities.",
      },
      {
        type: "h5",
        text: "Community Values",
      },
      {
        type: "p",
        text: "School activities also help children understand cooperation, kindness, and respect toward others.",
      },
    ],
  };

  return (
    <main>
      <HeroHeader
        title={"Extracurricular Activities"}
        description="PEN School System"
      />
      <div className="flex flex-col gap-2 maxWSec px-6 sm:px-12 py-12">
        <RichTextRenderer content={cmsData.content} />
      </div>
    </main>
  );
};

export default ExtraCurricularActivities;
