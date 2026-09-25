import HeroHeader from "@/components/HeroHeader";
import RichTextRenderer from "@/components/RichTextRenderer";
import React from "react";

const AuthorisedUnifromBooksellers = () => {
  const cmsData = {
    content: [
      {
        type: "h2",
        text: "Uniform and Books Information",
      },
      {
        type: "p",
        text: "For updated information regarding uniforms, books, and related academic materials, please contact the school office directly.",
      },
      {
        type: "p",
        text: "PEN School System shares the latest details with parents through the administration office and official communication channels.",
      },
    ],
  };

  return (
    <main>
      <HeroHeader
        title={"Uniform and Books"}
        description="PEN School System"
      />
      <div className="flex flex-col gap-2 maxWSec px-6 sm:px-12 py-12">
        <RichTextRenderer content={cmsData.content} />
      </div>
    </main>
  );
};

export default AuthorisedUnifromBooksellers;
