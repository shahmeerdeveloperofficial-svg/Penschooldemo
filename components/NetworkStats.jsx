"use client";

import React from "react";
import { motion } from "framer-motion";
import { networkStats } from "@/constants/penData";
import { FaUserGraduate, FaSchool, FaChalkboardTeacher, FaCalendarAlt, FaAward } from "react-icons/fa";

const iconList = [FaUserGraduate, FaSchool, FaChalkboardTeacher, FaCalendarAlt, FaAward];

const NetworkStats = () => {
  return (
    <section className="bg-gradient-to-r from-[#0B2240] via-[#123746] to-[#0B2240] text-white py-14 px-4 sm:px-8 border-y border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="maxW relative z-10 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full border border-white/10">
            Network Statistics & Milestones
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Transforming Education Across Punjab
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm">
            Uniting students, certified teachers, and parents in a shared pursuit of character, skill, and academic brilliance.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {networkStats.map((stat, idx) => {
            const IconComp = iconList[idx] || FaAward;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 text-center flex flex-col items-center justify-between hover:bg-white/15 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center text-xl mb-3">
                  <IconComp />
                </div>
                <div>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-1">
                    {stat.value}
                  </h3>
                  <h4 className="text-xs sm:text-sm font-bold text-amber-300 leading-snug">
                    {stat.label}
                  </h4>
                  <p className="text-[11px] text-slate-300 mt-1">
                    {stat.sublabel}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NetworkStats;
