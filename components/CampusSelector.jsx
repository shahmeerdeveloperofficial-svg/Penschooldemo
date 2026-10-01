"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { campusesList } from "@/constants/penData";
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaGraduationCap, 
  FaDirections, 
  FaWhatsapp, 
  FaCheck, 
  FaSearch, 
  FaBuilding, 
  FaFacebook,
  FaExternalLinkAlt,
  FaCrown,
  FaArrowRight
} from "react-icons/fa";

const CampusSelector = () => {
  const [selectedCity, setSelectedCity] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const cities = useMemo(() => {
    const list = Array.from(new Set(campusesList.map((c) => c.city)));
    return ["All", ...list];
  }, []);

  const { mainBranch, otherBranches } = useMemo(() => {
    const filtered = campusesList.filter((campus) => {
      const matchesCity = selectedCity === "All" || campus.city.toLowerCase() === selectedCity.toLowerCase();
      const matchesQuery = !searchQuery || 
        campus.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        campus.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        campus.address.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCity && matchesQuery;
    });

    const main = filtered.find((c) => c.id === "bahria-town-lahore");
    const others = filtered.filter((c) => c.id !== "bahria-town-lahore");

    return { mainBranch: main, otherBranches: others };
  }, [selectedCity, searchQuery]);

  return (
    <section id="Campuses" className="maxWSec px-4 sm:px-8 py-16 flex flex-col gap-10">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#9B1B1E]/10 text-[#9B1B1E] text-xs font-bold uppercase tracking-wider">
          <FaBuilding />
          <span>★ 16 Operational Network Branches & Locator</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2240] tracking-tight">
          Explore Our <span className="text-[#9B1B1E]">16 Network Campuses</span>
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          State-of-the-art learning environments across Punjab, equipped with modern Montessori labs, 
          STEAM innovation centers, and dedicated transport networks.
        </p>
      </div>

      {/* Search Bar & City Filter Tabs */}
      <div className="flex flex-col items-center gap-4">
        {/* Search Input */}
        <div className="relative w-full max-w-md">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
          <input
            type="text"
            placeholder="Search branch name, city, or area..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#9B1B1E] shadow-xs"
          />
        </div>

        {/* City Filter Pills */}
        <div className="flex justify-center flex-wrap gap-2 pt-2">
          {cities.map((city) => (
            <button
              key={city}
              onClick={() => setSelectedCity(city)}
              className={`py-2 px-4 rounded-full font-bold text-xs transition-all duration-200 ${
                selectedCity === city
                  ? "bg-[#9B1B1E] text-white shadow-md scale-102"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700"
              }`}
            >
              {city === "All" ? `🏢 All (16 Campuses)` : `📍 ${city}`}
            </button>
          ))}
        </div>
      </div>

      {/* 1. MAIN BRANCH SPOTLIGHT: BAHRIA TOWN CAMPUS (Prominent Full-Width Featured Card) */}
      {mainBranch && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative bg-white rounded-3xl border-2 border-amber-400/80 shadow-2xl overflow-hidden group"
        >
          {/* Top Main Branch Banner Badge */}
          <div className="bg-gradient-to-r from-[#0B2240] via-[#11315b] to-[#0B2240] px-6 py-2.5 text-white flex items-center justify-between flex-wrap gap-2 border-b border-amber-400/40">
            <div className="flex items-center gap-2">
              <FaCrown className="text-amber-400 text-sm animate-pulse" />
              <span className="font-extrabold text-xs sm:text-sm tracking-wide text-amber-300 uppercase">
                Main Branch & Executive Head Campus
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Admissions Open 2026-2027</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Wide Expanded Image Section */}
            <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[380px] lg:min-h-[460px] w-full bg-slate-900 overflow-hidden">
              <Image
                src={mainBranch.image}
                alt={mainBranch.name}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                loading="lazy"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                <div className="flex items-center gap-2 flex-wrap mb-2">
                  <span className="bg-amber-400 text-[#0B2240] text-xs font-extrabold px-3 py-1 rounded-full shadow-md">
                    ★ {mainBranch.badge}
                  </span>
                  <span className="bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/20">
                    📍 {mainBranch.city}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  {mainBranch.name}
                </h3>
              </div>
            </div>

            {/* Main Branch Details & Full Facilities */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-slate-50/50">
              <div className="space-y-4">
                <div>
                  <div className="flex items-start gap-2.5 text-slate-700 text-sm font-medium">
                    <FaMapMarkerAlt className="text-[#9B1B1E] text-base shrink-0 mt-1" />
                    <span>{mainBranch.address}</span>
                  </div>
                </div>

                {/* Grades & Contacts Box */}
                <div className="p-4 bg-white rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-[#0B2240]">
                    <FaGraduationCap className="text-amber-500 text-base shrink-0" />
                    <span>Grades: {mainBranch.levels}</span>
                  </div>
                  <div className="flex flex-col gap-1.5 text-xs text-slate-700 pt-2 border-t border-slate-100">
                    <div className="flex items-center gap-2">
                      <FaPhoneAlt className="text-emerald-600 text-xs shrink-0" />
                      <span className="text-slate-500">Helpline:</span>
                      <a href={`tel:${mainBranch.phone}`} className="hover:underline font-bold text-slate-900">
                        {mainBranch.phone}
                      </a>
                    </div>
                    {mainBranch.altPhone && (
                      <div className="flex items-center gap-2">
                        <FaPhoneAlt className="text-blue-600 text-xs shrink-0" />
                        <span className="text-slate-500">Inquiry:</span>
                        <a href={`tel:${mainBranch.altPhone}`} className="hover:underline font-semibold text-slate-800">
                          {mainBranch.altPhone}
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                {/* Facilities Badges */}
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                    Key Campus Facilities
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {mainBranch.facilities.map((fac, fIdx) => (
                      <span
                        key={fIdx}
                        className="text-xs px-2.5 py-1 bg-white border border-slate-200 text-slate-800 rounded-lg font-medium flex items-center gap-1.5 shadow-2xs"
                      >
                        <FaCheck className="text-emerald-500 text-[10px]" />
                        {fac}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-2.5 pt-4 border-t border-slate-200">
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={mainBranch.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 rounded-xl bg-[#0B2240] hover:bg-[#9B1B1E] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shadow-xs"
                  >
                    <FaDirections className="text-amber-400 text-sm" />
                    <span>Location Map</span>
                  </a>
                  <a
                    href={`https://wa.me/923016666233?text=${encodeURIComponent(`Inquiring about admissions for ${mainBranch.name}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shadow-xs"
                  >
                    <FaWhatsapp className="text-base" />
                    <span>WhatsApp</span>
                  </a>
                </div>
                {mainBranch.facebookUrl && (
                  <a
                    href={mainBranch.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-[#1877F2]/10 hover:bg-[#1877F2] text-[#1877F2] hover:text-white font-bold text-xs flex items-center justify-center gap-2 transition-all border border-[#1877F2]/30 shadow-2xs group/fb"
                  >
                    <FaFacebook className="text-base text-[#1877F2] group-hover/fb:text-white transition-colors" />
                    <span>Official Facebook Campus Page</span>
                    <FaExternalLinkAlt className="text-[10px] opacity-70 group-hover/fb:translate-x-0.5 transition-transform" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* 2. OTHER OPERATIONAL NETWORK BRANCHES (Clean, Sleek, Animated Directory Cards - No Clutter/Photos) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#9B1B1E]"></span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#0B2240]">
              Operational Network Branches ({otherBranches.length})
            </h3>
          </div>
          <span className="text-xs font-semibold text-slate-500">
            {selectedCity === "All" ? "Punjab Network" : selectedCity}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence>
            {otherBranches.map((campus, idx) => (
              <motion.div
                key={campus.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25, delay: idx * 0.03 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#9B1B1E]/40 transition-all duration-300 p-5 flex flex-col justify-between group"
              >
                {/* Branch Header & Location */}
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/60">
                      <span>#{idx + 2}</span>
                      <span>{campus.city}</span>
                    </div>
                    <span className="text-[11px] text-slate-400 font-medium">
                      Operational Branch
                    </span>
                  </div>

                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-[#0B2240] group-hover:text-[#9B1B1E] transition-colors leading-snug">
                      {campus.name}
                    </h4>
                    <div className="flex items-start gap-2 text-slate-600 text-xs mt-2 leading-relaxed">
                      <FaMapMarkerAlt className="text-[#9B1B1E] text-xs shrink-0 mt-0.5" />
                      <span>{campus.address}</span>
                    </div>
                  </div>
                </div>

                {/* Direct Action Links (Map, WhatsApp, Facebook) */}
                <div className="pt-4 mt-4 border-t border-slate-100 flex flex-col gap-2">
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={campus.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-3 rounded-xl bg-slate-100 hover:bg-[#0B2240] text-slate-700 hover:text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <FaDirections className="text-amber-500 text-xs" />
                      <span>Location Map</span>
                    </a>

                    <a
                      href={`https://wa.me/923016666233?text=${encodeURIComponent(`Inquiring about admissions for ${campus.name}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-3 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366] text-[#128C7E] hover:text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <FaWhatsapp className="text-sm" />
                      <span>WhatsApp</span>
                    </a>
                  </div>

                  {campus.facebookUrl && (
                    <a
                      href={campus.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2 px-3 rounded-xl bg-[#1877F2]/10 hover:bg-[#1877F2] text-[#1877F2] hover:text-white font-bold text-xs flex items-center justify-center gap-2 transition-all border border-[#1877F2]/20 group/btn"
                    >
                      <FaFacebook className="text-sm text-[#1877F2] group-hover/btn:text-white transition-colors" />
                      <span>Official Facebook Page</span>
                      <FaArrowRight className="text-[10px] opacity-70 group-hover/btn:translate-x-0.5 transition-transform" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {otherBranches.length === 0 && (
          <div className="p-8 text-center bg-white rounded-2xl border border-slate-200 text-slate-500 text-sm">
            No campuses found matching your search. Try changing the city or search term.
          </div>
        )}
      </div>
    </section>
  );
};

export default CampusSelector;

