import React from "react";
import HeroHeader from "@/components/HeroHeader";
import RichTextRenderer from "@/components/RichTextRenderer";
import AdmissionForm from "@/components/AdmissionForm";

const OnlineAdmission = () => {
  const cmsData = {
    content: [
      {
        type: "h2",
        text: "Welcome to PEN School System Online Admission",
      },
      {
        type: "p",
        text: "We are pleased to make the admission process easier for parents and guardians. Through our online admission page, you can share the basic student details and submit your inquiry without visiting the campus first.",
      },
      {
        type: "p",
        text: "After receiving your form, our team will contact you to guide you regarding class placement, required documents, and the next admission steps.",
      },
    ],
  };

  return (
    <main>
      <HeroHeader
        title={"Online Admission"}
        description="Apply for PEN School System"
      />
      <div className="flex flex-col gap-2 maxWSec px-6 sm:px-12 py-12">
        <RichTextRenderer content={cmsData.content} />
      </div>
      <AdmissionForm />
    </main>
  );
};

export default OnlineAdmission;
