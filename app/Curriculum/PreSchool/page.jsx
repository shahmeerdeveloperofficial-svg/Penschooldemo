import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeroHeader from "@/components/HeroHeader";
import { academicStructure } from "@/constants/penData";
import { FaBookOpen, FaCube, FaVolumeUp, FaLayerGroup, FaPenNib, FaEye, FaCheckCircle, FaArrowRight, FaWhatsapp } from "react-icons/fa";

export const metadata = {
  title: "Pre-School Department: Foundation of Lifelong Learning | PEN School System",
  description: "Explore PEN School System's Pre-School program: Single National Curriculum, Maria Montessori activities, Jolly Phonics, and sensory learning.",
};

const iconMap = {
  BookOpen: FaBookOpen,
  Layers: FaCube,
  Volume2: FaVolumeUp,
  Grid: FaLayerGroup,
  Edit3: FaPenNib,
  Eye: FaEye,
};

const PreSchoolPage = () => {
  const data = academicStructure.preschool;

  return (
    <main>
      <HeroHeader
        title={"Pre-School Department"}
        description="Foundation of Lifelong Learning — Nurturing curiosity, sensory development, and bilingual phonics."
      />

      <div className="maxWSec px-4 sm:px-8 py-14 space-y-16">
        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#9B1B1E] bg-red-100 px-3.5 py-1 rounded-full">
              Early Childhood Excellence
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#0B2240] leading-tight">
              Where Joy, Discovery & Foundational Literacy Begin
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {data.description}
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-emerald-500 shrink-0 mt-1" />
                <p className="text-xs sm:text-sm text-slate-700">
                  <strong>Single National Curriculum (SNC) Alignment:</strong> Complete integration of national standards with child-centric international early years practices.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-emerald-500 shrink-0 mt-1" />
                <p className="text-xs sm:text-sm text-slate-700">
                  <strong>Montessori Sensory Apparatus:</strong> Pink towers, cylinder blocks, sensorial practical life equipment, and math beads.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-emerald-500 shrink-0 mt-1" />
                <p className="text-xs sm:text-sm text-slate-700">
                  <strong>Dual Phonics Instruction:</strong> Systematic Jolly Phonics for English and structured Urdu Phonics for early reading confidence.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/OnlineAdmission"
                className="px-6 py-3 bg-[#9B1B1E] hover:bg-[#781215] text-white rounded-xl text-xs font-bold transition-all shadow-md"
              >
                Apply for Pre-School Admission
              </Link>
              <a
                href="https://wa.me/923016666233?text=Inquiring%20about%20Pre-School%20and%20Montessori%20Admissions"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl text-xs font-bold transition-all flex items-center gap-2 shadow-sm"
              >
                <FaWhatsapp className="text-base" />
                <span>WhatsApp Admissions</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
              <Image
                src="/pen-assets/WhatsApp Image 2026-09-24 at 5.28.05 PM (2).jpeg"
                alt="Montessori Apparatus"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
              <Image
                src="/pen-assets/WhatsApp Image 2026-09-24 at 5.28.05 PM (1).jpeg"
                alt="Jolly Phonics Activity"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden shadow-lg border border-slate-200 col-span-2">
              <Image
                src="/pen-assets/WhatsApp Image 2026-09-24 at 5.28.05 PM.jpeg"
                alt="Sensory Learning"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* 6 Pillars Deep Dive */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0B2240]">
              The Six Foundational Pillars
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm">
              How our early years framework builds self-reliance, pencil grip, sound blending, and cognitive alertness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.pillars.map((pillar, idx) => {
              const IconComp = iconMap[pillar.icon] || FaBookOpen;
              return (
                <div
                  key={idx}
                  className="p-6 bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:border-red-200"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-red-50 text-[#9B1B1E] group-hover:bg-[#9B1B1E] group-hover:text-white transition-colors flex items-center justify-center text-xl">
                        <IconComp />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full">
                        {pillar.badge}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-[#0B2240] group-hover:text-[#9B1B1E] transition-colors mb-2">
                      {pillar.title}
                    </h4>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default PreSchoolPage;
