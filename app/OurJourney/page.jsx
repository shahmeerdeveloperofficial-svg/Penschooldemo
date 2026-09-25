import React from "react";
import HeroHeader from "@/components/HeroHeader";
import RichTextRenderer from "@/components/RichTextRenderer";

const OurJourney = () => {
  const cmsData = {
    content: [
      {
        type: "h2",
        text: "Our Journey",
      },
      {
        type: "p",
        text: "PEN School System was established with the purpose of serving families through accessible, caring, and meaningful education.",
      },
      {
        type: "br",
      },
      {
        type: "p",
        text: "From the beginning, the school has focused on creating a structured environment where children can build strong academic foundations while also learning discipline, respect, and confidence.",
      },
      {
        type: "br",
      },
      {
        type: "p",
        text: "As the school continues to grow, our commitment remains the same: to support each student with sincere teaching, responsible guidance, and a school culture that values both learning and character.",
      },
      {
        type: "br",
      },
      {
        type: "p",
        text: "Our journey is rooted in service to the local community, and we look forward to helping many more children move toward a brighter future.",
      },
    ],
  };

  return (
    <main>
      <HeroHeader title={"Our Journey"} description="PEN School System" />
      <div className="flex flex-col gap-2 maxWSec px-6 sm:px-12 py-12">
        <RichTextRenderer content={cmsData.content} />
      </div>
    </main>
  );
};

export default OurJourney;
