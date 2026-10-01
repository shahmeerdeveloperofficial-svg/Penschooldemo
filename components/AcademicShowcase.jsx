"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { academicStructure } from "@/constants/penData";
import { 
  FaBookOpen, 
  FaCube, 
  FaVolumeUp, 
  FaLayerGroup, 
  FaPenNib, 
  FaEye, 
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
  FaArrowRight
} from "react-icons/fa";

const iconMap = {
  BookOpen: FaBookOpen,
  Layers: FaCube,
  Volume2: FaVolumeUp,
  Grid: FaLayerGroup,
  Edit3: FaPenNib,
  Eye: FaEye,
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

const AcademicShowcase = () => {
  const [activeTab, setActiveTab] = useState("preschool");
  const [selectedSkill, setSelectedSkill] = useState(0);

  const preschool = academicStructure.preschool;
  const senior = academicStructure.seniorSchool;

  return (
    <section id="Curriculum" className="maxWSec px-4 sm:px-8 py-16 flex flex-col gap-12">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#9B1B1E]/10 text-[#9B1B1E] text-xs font-bold uppercase tracking-wider">
          <span>★ Central Academic Standards & Curriculum</span>
        </div>
        <h2 className="h2 text-3xl sm:text-4xl font-bold text-[#0B2240]">
          Two Progressive Learning Stages, <br className="hidden sm:inline" />
          <span className="text-[#9B1B1E]">One Extraordinary Foundation</span>
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Meticulously crafted to meet modern global educational benchmarks while preserving core moral values. 
          Explore our progressive pedagogy from early childhood sensory exploration to senior future leadership.
        </p>
      </div>

      {/* Modern Stage Switcher Tabs */}
      <div className="flex justify-center">
        <div className="p-1.5 bg-slate-100 rounded-2xl flex max-w-xl w-full border border-slate-200/80 shadow-inner">
          <button
            onClick={() => setActiveTab("preschool")}
            className={`flex-1 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
              activeTab === "preschool"
                ? "bg-[#9B1B1E] text-white shadow-md scale-100"
                : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
            }`}
          >
            <span>🧸 Pre-School Department</span>
            <span className="hidden sm:inline text-[11px] opacity-80">(Montessori & Early Years)</span>
          </button>
          <button
            onClick={() => setActiveTab("senior")}
            className={`flex-1 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
              activeTab === "senior"
                ? "bg-[#0B2240] text-white shadow-md scale-100"
                : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
            }`}
          >
            <span>🎓 Senior School Department</span>
            <span className="hidden sm:inline text-[11px] opacity-80">(STEAM & Future Skills)</span>
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        {activeTab === "preschool" ? (
          <motion.div
            key="preschool"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-10"
          >
            {/* Department Hero Banner */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gradient-to-br from-red-50 via-white to-amber-50/50 p-6 sm:p-10 rounded-3xl border border-red-100 shadow-sm">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#9B1B1E] bg-red-100 px-3 py-1 rounded-full">
                  Foundation of Lifelong Learning
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#0B2240]">
                  Joyful, Stimulating & Sensory-Rich Early Childhood
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {preschool.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-3 py-1 bg-white rounded-lg text-xs font-semibold text-slate-700 border border-slate-200 shadow-xs">
                    ✓ Single National Curriculum (SNC)
                  </span>
                  <span className="px-3 py-1 bg-white rounded-lg text-xs font-semibold text-slate-700 border border-slate-200 shadow-xs">
                    ✓ Montessori Practical Life Apparatus
                  </span>
                  <span className="px-3 py-1 bg-white rounded-lg text-xs font-semibold text-slate-700 border border-slate-200 shadow-xs">
                    ✓ Jolly Phonics (English) & Urdu Phonics
                  </span>
                </div>
                <div className="pt-4">
                  <Link
                    href="/Curriculum/PreSchool"
                    className="inline-flex items-center gap-2 font-bold text-sm text-[#9B1B1E] hover:text-[#781215] transition-colors"
                  >
                    <span>Explore Comprehensive Pre-School Curriculum</span>
                    <FaArrowRight className="text-xs" />
                  </Link>
                </div>
              </div>

              {/* Department Image Showcase */}
              <div className="lg:col-span-5 relative">
                <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                  <Image
                    src="/pen-assets/WhatsApp Image 2026-09-24 at 5.28.05 PM.jpeg"
                    alt="PEN Pre-School Montessori Activity"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 450px"
                    loading="lazy"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                    <p className="text-white font-medium text-xs">
                      Authentic Montessori Sensory & Phonics Learning
                    </p>
                  </div>
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-3 shadow-lg border border-slate-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-400 text-[#0B2240] flex items-center justify-center font-bold text-base">
                    SNC
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#0B2240]">Bilingual Phonics</p>
                    <p className="text-[11px] text-slate-500">English & Urdu Sounds</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pre-School 6 Key Pillars Grid with Logo-Themed Animations */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {preschool.pillars.map((pillar, idx) => {
                const IconComp = iconMap[pillar.icon] || FaBookOpen;
                // Alternate accents matching logo theme: Crimson, Navy, Gold, Sky Blue
                const themeColors = [
                  { iconBg: "bg-red-50 text-[#9B1B1E]", borderHover: "hover:border-[#9B1B1E]", tag: "text-[#9B1B1E] bg-red-50", glow: "hover:shadow-[0_12px_25px_rgba(155,27,30,0.12)]" },
                  { iconBg: "bg-blue-50 text-[#0B2240]", borderHover: "hover:border-[#0B2240]", tag: "text-[#0B2240] bg-blue-50", glow: "hover:shadow-[0_12px_25px_rgba(11,34,64,0.12)]" },
                  { iconBg: "bg-amber-50 text-amber-600", borderHover: "hover:border-amber-500", tag: "text-amber-700 bg-amber-50", glow: "hover:shadow-[0_12px_25px_rgba(245,158,11,0.15)]" },
                  { iconBg: "bg-sky-50 text-[#0284C7]", borderHover: "hover:border-[#0284C7]", tag: "text-[#0284C7] bg-sky-50", glow: "hover:shadow-[0_12px_25px_rgba(2,132,199,0.12)]" },
                  { iconBg: "bg-red-50 text-[#9B1B1E]", borderHover: "hover:border-[#9B1B1E]", tag: "text-[#9B1B1E] bg-red-50", glow: "hover:shadow-[0_12px_25px_rgba(155,27,30,0.12)]" },
                  { iconBg: "bg-amber-50 text-amber-600", borderHover: "hover:border-amber-500", tag: "text-amber-700 bg-amber-50", glow: "hover:shadow-[0_12px_25px_rgba(245,158,11,0.15)]" },
                ];
                const currentTheme = themeColors[idx % themeColors.length];

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    whileHover={{ y: -7, scale: 1.015 }}
                    className={`relative p-6 bg-white rounded-3xl border border-slate-200/90 shadow-sm ${currentTheme.borderHover} ${currentTheme.glow} transition-all duration-300 flex flex-col justify-between group overflow-hidden`}
                  >
                    {/* Top Accent Gradient Bar on Hover */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#9B1B1E] via-amber-400 to-[#0284C7] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <motion.div 
                          whileHover={{ rotate: 8, scale: 1.1 }}
                          className={`w-12 h-12 rounded-2xl ${currentTheme.iconBg} group-hover:scale-105 transition-all flex items-center justify-center text-xl shadow-xs`}
                        >
                          <IconComp />
                        </motion.div>
                        <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${currentTheme.tag} border border-black/5`}>
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

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 group-hover:text-[#9B1B1E] font-semibold transition-colors">
                      <span>Early Years Framework</span>
                      <span className="transform group-hover:translate-x-1.5 transition-transform duration-200">→</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="senior"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-12"
          >
            {/* Senior Department Hero Banner */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gradient-to-br from-slate-900 via-[#0B2240] to-slate-900 text-white p-6 sm:p-10 rounded-3xl shadow-xl">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-white/10 px-3 py-1 rounded-full">
                  Empowering Future Leaders
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Analytical Depth, STEAM Innovation & Real-World Application
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {senior.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-3 py-1 bg-white/10 rounded-lg text-xs font-semibold text-slate-200 border border-white/10">
                    ✓ Single National Curriculum (SNC) & Board Rigor
                  </span>
                  <span className="px-3 py-1 bg-white/10 rounded-lg text-xs font-semibold text-slate-200 border border-white/10">
                    ✓ Project-Based Learning (PBL)
                  </span>
                  <span className="px-3 py-1 bg-white/10 rounded-lg text-xs font-semibold text-slate-200 border border-white/10">
                    ✓ STEAM & Foundational Coding
                  </span>
                </div>
                <div className="pt-4">
                  <Link
                    href="/Curriculum/SeniorSchool"
                    className="inline-flex items-center gap-2 font-bold text-sm text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    <span>Explore Senior School Framework & Future Skills</span>
                    <FaArrowRight className="text-xs" />
                  </Link>
                </div>
              </div>

              {/* Department Image Showcase */}
              <div className="lg:col-span-5 relative">
                <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white/20">
                  <Image
                    src="/pen-assets/WhatsApp Image 2026-09-24 at 5.28.07 PM (1).jpeg"
                    alt="PEN Senior School Coding & STEAM Hub"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 450px"
                    loading="lazy"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                    <p className="text-white font-medium text-xs">
                      Hands-on Technology, Coding & Robotics Hub
                    </p>
                  </div>
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 bg-white text-slate-900 rounded-xl p-3 shadow-lg border border-slate-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#9B1B1E] text-white flex items-center justify-center font-bold text-sm">
                    AI
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#0B2240]">Future Skills</p>
                    <p className="text-[11px] text-slate-500">7 Core Dimensions</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Senior School 4 Academic Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {senior.pillars.map((pillar, idx) => {
                const IconComp = iconMap[pillar.icon] || FaAward;
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -6 }}
                    className="p-6 bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0B2240] group-hover:bg-[#0B2240] group-hover:text-white transition-colors flex items-center justify-center text-xl mb-4 shadow-xs">
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
                  </motion.div>
                );
              })}
            </div>

            {/* Highlighted Feature: Pakistan's Most Comprehensive Future Skills Program (7 Dimensions) */}
            <div className="bg-slate-900 text-white p-6 sm:p-10 rounded-3xl shadow-xl space-y-8 border border-white/10">
              <div className="text-center max-w-3xl mx-auto space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3.5 py-1 rounded-full border border-amber-400/20">
                  Exclusive Flagship Program
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Pakistan&apos;s Most Comprehensive Future Skills Program
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm">
                  {senior.futureSkills.subtitle}
                </p>
              </div>

              {/* Interactive 7 Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {senior.futureSkills.skills.map((skill, idx) => {
                  const IconComp = iconMap[skill.icon] || FaRobot;
                  const isSelected = selectedSkill === idx;
                  return (
                    <motion.div
                      key={idx}
                      onClick={() => setSelectedSkill(idx)}
                      whileHover={{ scale: 1.02 }}
                      className={`p-5 rounded-2xl cursor-pointer transition-all border ${
                        isSelected
                          ? "bg-white text-slate-900 border-amber-400 shadow-xl"
                          : "bg-white/5 hover:bg-white/10 text-white border-white/10"
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg ${
                          isSelected ? "bg-[#9B1B1E] text-white" : "bg-white/10 text-amber-400"
                        }`}>
                          <IconComp />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider opacity-60">0{idx + 1}</span>
                      </div>
                      <h5 className={`font-bold text-sm mb-1.5 ${isSelected ? "text-[#0B2240]" : "text-white"}`}>
                        {skill.name}
                      </h5>
                      <p className={`text-xs leading-relaxed ${isSelected ? "text-slate-600" : "text-slate-300"}`}>
                        {skill.desc}
                      </p>
                    </motion.div>
                  );
                })}

                {/* 8th Card: Admission CTA */}
                <div className="p-5 rounded-2xl bg-gradient-to-br from-[#9B1B1E] to-[#6d1315] text-white flex flex-col justify-between border border-red-400/30">
                  <div>
                    <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider">Ready to Excel?</span>
                    <h5 className="font-bold text-base mt-1 text-white">Enroll in PEN Senior School</h5>
                    <p className="text-xs text-red-100 mt-2">Equip your child with 21st-century tech & leadership mastery.</p>
                  </div>
                  <Link
                    href="/OnlineAdmission"
                    className="mt-4 py-2 px-3 bg-white text-[#9B1B1E] hover:bg-amber-300 hover:text-[#0B2240] rounded-xl text-xs font-bold text-center transition-colors shadow-sm"
                  >
                    Apply for Senior School →
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AcademicShowcase;
