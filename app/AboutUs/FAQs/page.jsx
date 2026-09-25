import HeroHeader from "@/components/HeroHeader";
import RichTextRenderer from "@/components/RichTextRenderer";
import React from "react";

const FAQs = () => {
  const cmsData = {
    content: [
      {
        type: "h2",
        text: "Frequently Asked Questions",
      },
      {
        type: "p",
        text: "For admission details, class information, and fee guidance, parents can contact PEN School System directly through the phone number and contact page listed on this website.",
      },
      {
        type: "p",
        text: "Our team will guide you regarding the admission process, required documents, and any school-related questions.",
      },
    ],
  };

  return (
    <main>
      <HeroHeader
        title={"FAQs"}
        description="PEN School System"
      />
      <div className="flex flex-col gap-2 maxWSec px-6 sm:px-12 py-12">
        <RichTextRenderer content={cmsData.content} />
      </div>
    </main>
  );
};

export default FAQs;
