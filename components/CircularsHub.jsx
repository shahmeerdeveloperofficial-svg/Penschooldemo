"use client";

import React, { useState } from "react";
import Link from "next/link";
import { circularsAndNotices } from "@/constants/penData";
import { FaBullhorn, FaCalendarAlt, FaArrowRight, FaBell, FaFileAlt, FaCheckCircle, FaStar } from "react-icons/fa";

const cardThemes = [
  {
    border: "group-hover:border-[#9B1B1E]",
    bar: "bg-gradient-to-r from-[#9B1B1E] via-red-500 to-amber-500",
    badge: "bg-red-100 text-[#9B1B1E] border-red-200",
    glow: "hover:shadow-red-500/15",
    action: "text-[#9B1B1E] hover:text-red-700",
    iconBg: "bg-red-50 text-[#9B1B1E]",
  },
  {
    border: "group-hover:border-amber-500",
    bar: "bg-gradient-to-r from-amber-500 via-amber-400 to-[#0B2240]",
    badge: "bg-amber-100 text-amber-900 border-amber-200",
    glow: "hover:shadow-amber-500/15",
    action: "text-amber-700 hover:text-amber-900",
    iconBg: "bg-amber-50 text-amber-600",
  },
  {
    border: "group-hover:border-[#0B2240]",
    bar: "bg-gradient-to-r from-[#0B2240] via-blue-600 to-cyan-500",
    badge: "bg-blue-100 text-[#0B2240] border-blue-200",
    glow: "hover:shadow-blue-500/15",
    action: "text-[#0B2240] hover:text-blue-700",
    iconBg: "bg-blue-50 text-[#0B2240]",
  },
  {
    border: "group-hover:border-emerald-600",
    bar: "bg-gradient-to-r from-emerald-600 via-teal-500 to-[#0B2240]",
    badge: "bg-emerald-100 text-emerald-800 border-emerald-200",
    glow: "hover:shadow-emerald-500/15",
    action: "text-emerald-700 hover:text-emerald-900",
    iconBg: "bg-emerald-50 text-emerald-600",
  },
];

const CircularsHub = () => {
  return (
    <section id="Circulars" className="maxWSec px-4 sm:px-8 py-14 flex flex-col gap-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100/80 text-[#9B1B1E] text-xs font-bold uppercase tracking-wider mb-2 border border-red-200 shadow-xs">
            <FaBell className="animate-bounce text-[#9B1B1E]" />
            <span>Central Communication Wing</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B2240] tracking-tight">
            Central Circulars, Notices & Announcements
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1.5 max-w-2xl">
            Stay updated with network-wide academic schedules, parent orientations, circulars, and official Paradigm Network announcements.
          </p>
        </div>

        <Link
          href="/NewsAndEvents"
          className="group inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#0B2240] to-[#14325c] hover:from-[#9B1B1E] hover:to-red-700 text-white rounded-xl text-xs font-bold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 shrink-0"
        >
          <span>View All Notices & Archive</span>
          <FaArrowRight className="text-[10px] transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Notices Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {circularsAndNotices.map((item, idx) => {
          const theme = cardThemes[idx % cardThemes.length];
          return (
            <div
              key={item.id}
              className={`group relative overflow-hidden p-6 rounded-2xl border border-slate-200/90 bg-white hover:bg-gradient-to-b hover:from-white hover:to-slate-50/70 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1.5 ${theme.border} ${theme.glow}`}
            >
              {/* Animated Top Accent Bar */}
              <div
                className={`absolute top-0 left-0 right-0 h-1.5 ${theme.bar} opacity-70 group-hover:opacity-100 transition-opacity duration-300`}
              />

              <div>
                <div className="flex items-center justify-between gap-2 mb-3.5">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[11px] font-bold px-2.5 py-1 rounded-full border shadow-2xs flex items-center gap-1.5 ${
                        item.urgent
                          ? "bg-gradient-to-r from-[#9B1B1E] to-red-600 text-white border-transparent animate-pulse"
                          : theme.badge
                      }`}
                    >
                      {item.urgent ? <FaStar className="text-[9px] text-amber-300" /> : <FaFileAlt className="text-[9px]" />}
                      {item.tag}
                    </span>
                    {item.urgent && (
                      <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-red-600/10 text-[#9B1B1E] border border-red-200">
                        Urgent
                      </span>
                    )}
                  </div>

                  <span className="text-xs text-slate-400 font-medium flex items-center gap-1.5 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-100">
                    <FaCalendarAlt className="text-slate-400 text-[10px]" />
                    {item.date}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#0B2240] group-hover:text-[#9B1B1E] transition-colors duration-200 mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {item.summary}
                </p>
              </div>

              <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 font-medium flex items-center gap-1.5">
                  <FaCheckCircle className="text-emerald-500 text-[10px]" />
                  Paradigm Educational Network
                </span>
                <Link
                  href="/OnlineAdmission"
                  className={`text-xs font-bold ${theme.action} transition-all duration-200 flex items-center gap-1.5 group/btn`}
                >
                  <span>Take Action</span>
                  <FaArrowRight className="text-[10px] transition-transform duration-200 group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CircularsHub;
