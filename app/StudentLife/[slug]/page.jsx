import React from "react";
import RichTextRenderer from "@/components/RichTextRenderer";
import HeroHeader from "@/components/HeroHeader";
import { notFound } from "next/navigation";
import Link from "next/link";

const studentLifeData = [
  { title: "Registration Process", slug: "OLevel" },
  { title: "Withdrawals and Transfers", slug: "ALevel" },
  { title: "Primary", slug: "Primary" },
];

export async function generateStaticParams() {
  return studentLifeData.map((studentLife) => ({
    slug: studentLife.slug,
  }));
}

export async function generateMetadata({ params }) {
  const slug = params.slug;
  const studentLife = studentLifeData.find((item) => item.slug === slug);
  if (!studentLife) notFound();

  return {
    title: `${studentLife.title} - Student Life | PEN School System`,
    default: "Student Life | PEN School System",
  };
}

const cmsContentBySlug = {
  OLevel: [
    {
      type: "h2",
      text: "Registration Process",
    },
    {
      type: "p",
      text: "The admission process at PEN School System is designed to be simple and parent-friendly. Families can contact the school office, share the student's basic details, and receive guidance about the relevant class and admission requirements.",
    },
    {
      type: "p",
      text: "Where needed, students may be assessed to understand their current level so that placement and academic support can be planned appropriately.",
    },
  ],

  ALevel: [
    {
      type: "h2",
      text: "Withdrawals and Transfers",
    },
    {
      type: "p",
      text: "If a family needs to withdraw a student or request a transfer, the school administration helps guide the process in an organized and respectful manner. Parents are encouraged to inform the school in advance so academic and administrative formalities can be completed smoothly.",
    },
    {
      type: "p",
      text: "The aim is to ensure that student records, fee matters, and required documents are handled properly so that the transition remains clear and manageable for the family.",
    },
  ],

  Primary: [
    {
      type: "h2",
      text: "Primary Student Life",
    },
    {
      type: "p",
      text: "In the primary years, PEN School System creates a nurturing and engaging environment where students develop strong academic foundations alongside social and emotional growth.",
    },
    {
      type: "p",
      text: "Through class participation, creative activities, and guided learning, students build confidence, curiosity, and a love for learning.",
    },
    {
      type: "p",
      text: "Our primary program focuses on holistic development, ensuring every child feels safe, valued, and inspired to grow.",
    },
  ],
};

const StudentLife = async ({ params }) => {
  const slug = params.slug;
  const studentLife = studentLifeData.find((item) => item.slug === slug);

  if (!studentLife) notFound();

  const cmsData = {
    content: cmsContentBySlug[slug] || [],
  };

  return (
    <main>
      <HeroHeader title={studentLife.title} description="PEN School System" />
      <div className="flex flex-col gap-4 maxWSec px-6 sm:px-12 py-12">
        <RichTextRenderer content={cmsData.content} />

        {slug === "OLevel" && (
          <Link href="/OnlineAdmission">
            <button className="mt-4 w-fit rounded-xl bg-main px-6 py-3 text-white hover:opacity-90 transition">
              Register Online
            </button>
          </Link>
        )}
      </div>
    </main>
  );
};

export default StudentLife;
