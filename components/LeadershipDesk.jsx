"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { leadershipData } from "@/constants/penData";
import { FaQuoteLeft, FaArrowRight, FaShieldAlt, FaAward, FaCheckCircle, FaStar } from "react-icons/fa";

const leadersList = [
  {
    key: "chairman",
    slug: "/ChairmanMessage",
    data: leadershipData.chairman,
    tabLabel: "Chairman Desk",
    badgeLabel: "FOUNDER & CHAIRMAN",
    accentColor: "from-[#0B2240] to-[#1E3A8A]",
    badgeColor: "bg-[#0B2240] text-amber-300",
  },
  {
    key: "director",
    slug: "/DirectorMessage",
    data: leadershipData.director,
    tabLabel: "Director Operations",
    badgeLabel: "OPERATION MANAGEMENT DIRECTOR",
    accentColor: "from-[#9B1B1E] to-[#BE123C]",
    badgeColor: "bg-[#9B1B1E] text-white",
  },
  {
    key: "academicHead",
    slug: "/AcademicHeadMessage",
    data: leadershipData.academicHead,
    tabLabel: "Academic Head",
    badgeLabel: "ACADEMIC HEAD & CURRICULUM",
    accentColor: "from-[#0B2240] to-[#0284C7]",
    badgeColor: "bg-[#0B2240] text-white",
  },
  {
    key: "franchiseManager",
    slug: "/FranchiseMessage",
    data: leadershipData.franchiseManager,
    tabLabel: "Franchise Regional Manager",
    badgeLabel: "FRANCHISE SALE REGIONAL MANAGER",
    accentColor: "from-[#047857] to-[#0B2240]",
    badgeColor: "bg-emerald-800 text-amber-300",
  },
];

const LeadershipDesk = () => {
  const [activeKey, setActiveKey] = useState("chairman");
  const activeLeaderItem = leadersList.find((l) => l.key === activeKey) || leadersList[0];
  const activeLeader = activeLeaderItem.data;

  return (
    <section id="Leadership" className="maxWSec px-4 sm:px-8 py-16 flex flex-col gap-10">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
          <FaShieldAlt className="text-amber-600" />
          <span>Centralized Administration & Vision</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B2240] tracking-tight">
          From the <span className="text-[#9B1B1E]">Leadership Desk</span>
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Guiding PEN Schools Network towards unprecedented academic rigor, moral character, and operational excellence.
        </p>
      </div>

      {/* Top Interactive Avatar Tabs (Styled Exactly after Reference Website) */}
      <div className="flex justify-center flex-wrap gap-2.5 sm:gap-4 pt-2">
        {leadersList.map((item) => {
          const isSelected = activeKey === item.key;
          return (
            <motion.button
              key={item.key}
              onClick={() => setActiveKey(item.key)}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.96 }}
              className={`flex items-center gap-2.5 sm:gap-3.5 p-1.5 sm:p-2 pr-4 sm:pr-6 rounded-full transition-all duration-300 border ${
                isSelected
                  ? "bg-[#0B2240] text-white shadow-xl border-[#0B2240] ring-2 ring-amber-400/40"
                  : "bg-white text-slate-700 hover:bg-slate-50 border-slate-200 shadow-xs"
              }`}
            >
              <div className={`relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 shrink-0 ${
                isSelected ? "border-amber-400 ring-2 ring-amber-400/30" : "border-slate-300"
              }`}>
                <Image
                  src={item.data.image}
                  alt={item.data.name}
                  fill
                  sizes="48px"
                  loading="lazy"
                  className="object-cover object-top"
                />
              </div>
              <div className="text-left">
                <p className={`text-xs sm:text-sm font-bold leading-tight ${isSelected ? "text-white" : "text-[#0B2240]"}`}>
                  {item.tabLabel}
                </p>
                <p className={`text-[10px] sm:text-[11px] font-medium leading-none mt-0.5 ${isSelected ? "text-amber-300" : "text-slate-500"}`}>
                  {item.badgeLabel.split("&")[0]}
                </p>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Main Leadership Showcase Card (Future Foundation Reference Structure) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeKey}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -25 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative bg-white rounded-3xl p-6 sm:p-10 lg:p-14 border border-slate-200/90 shadow-2xl overflow-hidden border-t-4 border-t-amber-400"
        >
          {/* Subtle Background Watermark */}
          <div className="absolute right-8 bottom-4 text-8xl sm:text-9xl font-extrabold text-slate-100/80 select-none pointer-events-none tracking-widest font-berlin">
            PEN
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left Side: Circular Avatar inside Glowing Double Ring (Exact FFS Style) */}
            <div className="lg:col-span-5 flex flex-col items-center text-center space-y-4">
              <div className="relative">
                {/* Outer Dashed Golden Circle with Continuous 360 Rotation */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
                  className="absolute -inset-4 rounded-full border-2 border-dashed border-amber-400 pointer-events-none shadow-[0_0_15px_rgba(245,158,11,0.25)]"
                />

                {/* Secondary Reverse Rotating Dotted Ring */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
                  className="absolute -inset-2 rounded-full border border-dotted border-amber-300/60 pointer-events-none"
                />

                {/* Glowing Background Blob */}
                <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-[#0B2240] via-amber-400 to-[#9B1B1E] opacity-25 blur-xs"></div>

                {/* Circular Portrait */}
                <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden border-4 border-[#0B2240] shadow-2xl bg-slate-100 ring-4 ring-amber-400/20">
                  <Image
                    src={activeLeader.image}
                    alt={activeLeader.name}
                    fill
                    sizes="(max-width: 640px) 180px, 220px"
                    loading="lazy"
                    className="object-cover object-top"
                  />
                </div>

                {/* Glowing Floating Blue Star Badge with Pulse */}
                <motion.div
                  animate={{ y: [0, -3, 0], scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  className="absolute bottom-2 right-2 w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-indigo-700 border-3 border-white flex items-center justify-center text-white text-xs shadow-xl z-10"
                >
                  <FaStar className="text-amber-300 text-xs animate-spin-slow" />
                </motion.div>
              </div>

              <div className="space-y-2 pt-2">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B2240] tracking-tight">
                  {activeLeader.name}
                </h3>
                <div>
                  <span className={`inline-block text-[11px] font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-xs ${activeLeaderItem.badgeColor}`}>
                    {activeLeaderItem.badgeLabel}
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-medium">
                  {activeLeader.organization}
                </p>
              </div>
            </div>

            {/* Right Side: Golden Quote, Heading & Full Message */}
            <div className="lg:col-span-7 space-y-5 text-left">
              {/* Golden Quote Icon */}
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center text-2xl shadow-xs border border-amber-200/50">
                <FaQuoteLeft />
              </div>

              {/* Message Quote Heading in Royal Serif / Display Style */}
              <h4 className="text-xl sm:text-3xl font-extrabold text-[#0B2240] leading-snug">
                {activeLeader.shortQuote}
              </h4>

              {/* Message Paragraphs */}
              <div className="space-y-3 text-slate-600 text-xs sm:text-sm leading-relaxed">
                <p className="font-semibold text-slate-800">
                  {activeLeader.message[0]}
                </p>
                <p>
                  {activeLeader.message[1]}
                </p>
                {activeLeader.message[2] && (
                  <p className="hidden sm:block">
                    {activeLeader.message[2]}
                  </p>
                )}
              </div>

              {/* Footer CTA Button & Official Label */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <Link
                  href={activeLeaderItem.slug}
                  className="px-6 py-3 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-bold text-xs sm:text-sm rounded-full shadow-md hover:shadow-xl transition-all flex items-center gap-2 active:scale-95 group/btn"
                >
                  <span>Read Full Message</span>
                  <FaArrowRight className="text-xs group-hover/btn:translate-x-1 transition-transform" />
                </Link>

                <div className="text-[11px] font-extrabold text-[#0B2240] uppercase tracking-wider flex items-center gap-1.5">
                  <FaCheckCircle className="text-emerald-500" />
                  <span>OFFICIAL LEADERSHIP ADDRESS</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default LeadershipDesk;
