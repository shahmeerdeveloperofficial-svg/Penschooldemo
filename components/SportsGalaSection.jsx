"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaRunning, FaTrophy, FaMedal, FaUsers, FaArrowRight, FaCamera, FaEye, FaTimes } from "react-icons/fa";

const sportsHighlights = [
  {
    src: "/pen-assets/WhatsApp Image 2026-09-24 at 6.36.04 PM53.jpeg",
    title: "Annual Sports Gala Parade & Opening March",
    category: "Recently Performed Event",
    badge: "Bahria Town Campus"
  },
  {
    src: "/pen-assets/3.jpeg",
    title: "Inter-House Sprint & Relay Track Races",
    category: "Recently Performed Event",
    badge: "Championship"
  },
  {
    src: "/pen-assets/54.jpeg",
    title: "Synchronized Pom-Pom & Aerobics Drill",
    category: "Recently Performed Event",
    badge: "Gymnastics Drill"
  },
  {
    src: "/pen-assets/23.jpeg",
    title: "Karate, Self-Defense & Board Breaking",
    category: "Recently Performed Event",
    badge: "Martial Arts"
  },
  {
    src: "/pen-assets/47.jpeg",
    title: "Grand Trophy & Gold Medal Presentation",
    category: "Recently Performed Event",
    badge: "Annual Honors"
  },
  {
    src: "/pen-assets/57.jpeg",
    title: "Parents & Faculty Interactive Fun Races",
    category: "Recently Performed Event",
    badge: "Parent Partnership"
  }
];

const SportsGalaSection = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section className="maxWSec px-4 sm:px-8 py-16 flex flex-col gap-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-100 text-[#9B1B1E] text-xs font-bold uppercase tracking-wider mb-2">
            <FaTrophy className="text-[#9B1B1E]" />
            <span>#Recently performed event</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2240] tracking-tight">
            Recently Performed Event: <span className="text-[#9B1B1E]">Annual Sports Gala & Athletics Carnival</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-2xl">
            Celebrating athleticism, teamwork, discipline, and healthy sportsmanship across PEN School campuses.
          </p>
        </div>

        <Link
          href="/NewsAndEvents#gallery"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0B2240] hover:bg-[#9B1B1E] text-white rounded-xl text-xs font-bold transition-colors shrink-0 shadow-sm"
        >
          <FaCamera />
          <span>View All Sports Gala Photos</span>
          <FaArrowRight className="text-[10px]" />
        </Link>
      </div>

      {/* 6 Photo Grid with Hover Zoom and Badges */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sportsHighlights.map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -6 }}
            onClick={() => setSelectedPhoto(item)}
            className="group relative h-72 sm:h-80 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-slate-200 cursor-pointer bg-slate-900"
          >
            <Image
              src={item.src}
              alt={item.title}
              fill
              className="object-cover group-hover:scale-108 transition-transform duration-500"
            />
            <div className="absolute top-4 left-4 bg-red-600/90 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md z-10">
              {item.badge}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-5">
              <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider">
                {item.category}
              </span>
              <h4 className="text-white text-base sm:text-lg font-bold leading-snug">
                {item.title}
              </h4>
              <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity">
                <FaEye />
                <span>Click to view full photo</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Full Photo Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <div className="relative max-w-4xl w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute -top-12 right-0 text-white text-2xl p-2 bg-white/20 rounded-full"
              >
                <FaTimes />
              </button>
              <div className="relative w-full h-[65vh] rounded-2xl overflow-hidden bg-black border border-white/20">
                <Image src={selectedPhoto.src} alt={selectedPhoto.title} fill className="object-contain" />
              </div>
              <div className="w-full bg-slate-900 text-white p-4 rounded-b-2xl mt-2 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-amber-400">{selectedPhoto.category} · {selectedPhoto.badge}</span>
                  <h4 className="text-base font-bold">{selectedPhoto.title}</h4>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SportsGalaSection;
