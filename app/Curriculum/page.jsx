import React from "react";
import HeroHeader from "@/components/HeroHeader";
import AcademicShowcase from "@/components/AcademicShowcase";
import { pedagogicalPrinciples } from "@/constants/penData";
import Link from "next/link";
import { FaCheckCircle, FaLightbulb, FaShieldAlt, FaComments, FaArrowRight, FaGraduationCap } from "react-icons/fa";

export const metadata = {
  title: "Central Academic Standards & Curriculum | PEN School System",
  description: "Explore PEN School System's SNC-aligned academic structure, Montessori early years, and Senior School future skills.",
};

const iconMap = {
  Lightbulb: FaLightbulb,
  MessageSquare: FaComments,
  CheckCircle: FaCheckCircle,
  Shield: FaShieldAlt,
};

const CentralCurriculumPage = () => {
  return (
    <main>
      <HeroHeader
        title={"Central Academic Standards & Curriculum"}
        description="A progressive learning journey from Montessori foundation to 21st-century future leadership."
      />

      <div className="space-y-12">
        <AcademicShowcase />

        {/* Pedagogical Approach & Quality Assurance */}
        <section className="maxWSec px-4 sm:px-8 py-14">
          <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200 space-y-10">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#9B1B1E] bg-red-100 px-3 py-1 rounded-full">
                Our Pedagogical Framework
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0B2240]">
                Pedagogical Approach & Quality Assurance
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Centralized curriculum monitoring, continuous educator capacity building, and uniform quality standards across every campus.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pedagogicalPrinciples.map((item, idx) => {
                const IconComp = iconMap[item.icon] || FaCheckCircle;
                return (
                  <div
                    key={idx}
                    className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-xl bg-red-50 text-[#9B1B1E] flex items-center justify-center text-xl shrink-0">
                      <IconComp />
                    </div>
                    <div>
                      <h4 className="font-bold text-base text-[#0B2240] mb-1">
                        {item.title}
                      </h4>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Links to Detailed Pages */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <Link
                href="/Curriculum/PreSchool"
                className="p-5 bg-white rounded-2xl border border-slate-200 hover:border-[#9B1B1E] transition-all flex items-center justify-between group shadow-xs hover:shadow-md"
              >
                <div>
                  <span className="text-xs font-bold text-[#9B1B1E] uppercase">Stage 01</span>
                  <h4 className="font-bold text-base text-[#0B2240] group-hover:text-[#9B1B1E] transition-colors">
                    Pre-School & Montessori Department
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">SNC Alignment, Jolly Phonics & Practical Life</p>
                </div>
                <FaArrowRight className="text-slate-400 group-hover:text-[#9B1B1E] group-hover:translate-x-1 transition-all" />
              </Link>

              <Link
                href="/Curriculum/SeniorSchool"
                className="p-5 bg-white rounded-2xl border border-slate-200 hover:border-[#0B2240] transition-all flex items-center justify-between group shadow-xs hover:shadow-md"
              >
                <div>
                  <span className="text-xs font-bold text-amber-600 uppercase">Stage 02</span>
                  <h4 className="font-bold text-base text-[#0B2240] group-hover:text-amber-600 transition-colors">
                    Senior School & Future Skills
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">PBL, STEAM, Coding & 7 Vital Future Dimensions</p>
                </div>
                <FaArrowRight className="text-slate-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-all" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default CentralCurriculumPage;
