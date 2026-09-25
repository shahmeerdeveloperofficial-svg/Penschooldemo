import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeroHeader from "@/components/HeroHeader";
import { academicStructure } from "@/constants/penData";
import { 
  FaAward, 
  FaUsers, 
  FaMicrochip, 
  FaCode, 
  FaHeart, 
  FaTerminal, 
  FaRobot, 
  FaRunning, 
  FaComments, 
  FaChartLine, 
  FaHome,
  FaCheckCircle,
  FaWhatsapp
} from "react-icons/fa";

export const metadata = {
  title: "Senior School Department & Future Skills Program | PEN School System",
  description: "Senior School at PEN: Single National Curriculum, Project-Based Learning, STEAM, Coding, and Pakistan's Most Comprehensive Future Skills Program.",
};

const iconMap = {
  Award: FaAward,
  Users: FaUsers,
  Cpu: FaMicrochip,
  Code: FaCode,
  Heart: FaHeart,
  Terminal: FaTerminal,
  Sparkles: FaRobot,
  Activity: FaRunning,
  Mic: FaComments,
  TrendingUp: FaChartLine,
  Home: FaHome,
};

const SeniorSchoolPage = () => {
  const data = academicStructure.seniorSchool;

  return (
    <main>
      <HeroHeader
        title={"Senior School Department"}
        description="Empowering Future Leaders — Analytical depth, STEAM innovation, and Pakistan's premier Future Skills program."
      />

      <div className="maxWSec px-4 sm:px-8 py-14 space-y-16">
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-100 px-3.5 py-1 rounded-full">
              Leadership & Academic Rigor
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#0B2240] leading-tight">
              Conceptual Mastery & 21st-Century Tech Readiness
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {data.description}
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-blue-600 shrink-0 mt-1" />
                <p className="text-xs sm:text-sm text-slate-700">
                  <strong>SNC Board Preparedness:</strong> Rigorous examination readiness ensuring stellar Matriculation results and concept clarity.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-blue-600 shrink-0 mt-1" />
                <p className="text-xs sm:text-sm text-slate-700">
                  <strong>Project-Based Learning (PBL):</strong> Students work collaboratively on real problems, developing analytical depth and public speaking.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-blue-600 shrink-0 mt-1" />
                <p className="text-xs sm:text-sm text-slate-700">
                  <strong>STEAM & Computational Coding:</strong> Introduction to algorithms, programming logic, robotics, and creative engineering.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/OnlineAdmission"
                className="px-6 py-3 bg-[#0B2240] hover:bg-[#9B1B1E] text-white rounded-xl text-xs font-bold transition-all shadow-md"
              >
                Apply for Senior School
              </Link>
              <a
                href="https://wa.me/923016666233?text=Inquiring%20about%20Senior%20School%20and%20Future%20Skills%20Admissions"
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
                src="/pen-assets/WhatsApp Image 2026-09-24 at 5.28.07 PM (1).jpeg"
                alt="Coding & Robotics Lab"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
              <Image
                src="/pen-assets/WhatsApp Image 2026-09-24 at 5.28.07 PM.jpeg"
                alt="Senior Science Experiment"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden shadow-lg border border-slate-200 col-span-2">
              <Image
                src="/pen-assets/27.jpeg"
                alt="STEAM Innovation Fair"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* 4 Academic Pillars */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0B2240]">
              Four Senior School Academic Pillars
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm">
              Shifting education from rote memorization into real-world capability and scientific inquiry.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.pillars.map((pillar, idx) => {
              const IconComp = iconMap[pillar.icon] || FaAward;
              return (
                <div
                  key={idx}
                  className="p-6 bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:border-blue-200"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0B2240] group-hover:bg-[#0B2240] group-hover:text-white transition-colors flex items-center justify-center text-xl mb-4">
                      <IconComp />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-full inline-block mb-2">
                      {pillar.badge}
                    </span>
                    <h4 className="text-base font-bold text-[#0B2240] group-hover:text-[#9B1B1E] transition-colors mb-2">
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

        {/* Pakistan's Most Comprehensive Future Skills Program (7 Dimensions) */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl space-y-10 border border-white/10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-4 py-1.5 rounded-full border border-amber-400/20">
              Curriculum Hallmark
            </span>
            <h3 className="text-2xl sm:text-4xl font-bold text-white">
              Pakistan&apos;s Most Comprehensive Future Skills Program
            </h3>
            <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
              {data.futureSkills.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {data.futureSkills.skills.map((skill, idx) => {
              const IconComp = iconMap[skill.icon] || FaRobot;
              return (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center text-xl">
                        <IconComp />
                      </div>
                      <span className="text-xs font-bold text-slate-400">0{idx + 1}</span>
                    </div>
                    <h4 className="font-bold text-base text-white mb-2">
                      {skill.name}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {skill.desc}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* CTA card */}
            <div className="bg-gradient-to-br from-[#9B1B1E] to-[#6d1315] rounded-2xl p-6 border border-red-400/30 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase text-amber-300">Empower Tomorrow</span>
                <h4 className="font-bold text-lg text-white mt-1">Enroll in PEN Senior School</h4>
                <p className="text-xs text-red-100 mt-2">Give your child an unfair advantage in the global 21st-century landscape.</p>
              </div>
              <Link
                href="/OnlineAdmission"
                className="mt-6 py-2.5 px-4 bg-white text-[#9B1B1E] hover:bg-amber-300 hover:text-slate-900 rounded-xl font-bold text-xs text-center transition-colors shadow-sm"
              >
                Apply Online Now →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SeniorSchoolPage;
