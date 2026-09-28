"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { campusesList } from "@/constants/penData";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGraduationCap, FaDirections, FaWhatsapp, FaCheck, FaSearch, FaBuilding, FaFacebook } from "react-icons/fa";

const CampusSelector = () => {
  const [selectedCity, setSelectedCity] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const cities = useMemo(() => {
    const list = Array.from(new Set(campusesList.map((c) => c.city)));
    return ["All", ...list];
  }, []);

  const filteredCampuses = useMemo(() => {
    return campusesList.filter((campus) => {
      const matchesCity = selectedCity === "All" || campus.city.toLowerCase() === selectedCity.toLowerCase();
      const matchesQuery = !searchQuery || 
        campus.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        campus.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        campus.address.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCity && matchesQuery;
    });
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
          STEAM innovation centers, digital libraries, and secure transport networks.
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

      {/* Campus Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredCampuses.map((campus) => (
            <motion.div
              key={campus.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl border border-slate-200/90 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Campus Image */}
                <div className="relative h-52 w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={campus.image}
                    alt={campus.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#0B2240]/90 backdrop-blur-xs text-amber-400 text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
                    {campus.badge}
                  </div>
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs text-slate-800 text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm border border-slate-200">
                    📍 {campus.city}
                  </div>
                </div>

                {/* Campus Body */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#0B2240] group-hover:text-[#9B1B1E] transition-colors leading-snug">
                      {campus.name}
                    </h3>
                    <div className="flex items-start gap-2 text-slate-500 text-xs mt-2">
                      <FaMapMarkerAlt className="text-[#9B1B1E] shrink-0 mt-0.5" />
                      <span>{campus.address}</span>
                    </div>
                  </div>

                  <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <FaGraduationCap className="text-amber-500 text-sm" />
                      <span>Grades: {campus.levels}</span>
                    </div>
                    <div className="flex flex-col gap-1 text-xs text-slate-600 pt-1 border-t border-slate-200/60">
                      <div className="flex items-center gap-2">
                        <FaPhoneAlt className="text-emerald-600 text-[11px]" />
                        <a href={`tel:${campus.phone}`} className="hover:underline font-bold text-slate-800">
                          {campus.phone}
                        </a>
                      </div>
                      {campus.altPhone && (
                        <div className="flex items-center gap-2 text-[11px] text-slate-500">
                          <FaPhoneAlt className="text-blue-600 text-[10px]" />
                          <a href={`tel:${campus.altPhone}`} className="hover:underline font-medium">
                            {campus.altPhone}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Facilities list */}
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Key Campus Facilities
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {campus.facilities.map((fac, fIdx) => (
                        <span
                          key={fIdx}
                          className="text-[10px] px-2 py-0.5 bg-slate-100 text-slate-700 rounded-md font-medium flex items-center gap-1"
                        >
                          <FaCheck className="text-emerald-500 text-[8px]" />
                          {fac}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 flex flex-col gap-2 border-t border-slate-100 mt-4">
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={campus.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-3 rounded-xl bg-slate-100 hover:bg-[#0B2240] text-slate-700 hover:text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <FaDirections className="text-amber-500" />
                    <span>Location Map</span>
                  </a>
                  <a
                    href={`https://wa.me/923016666233?text=${encodeURIComponent(`Inquiring about admissions for ${campus.name}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                  >
                    <FaWhatsapp />
                    <span>WhatsApp</span>
                  </a>
                </div>
                {campus.facebookUrl && (
                  <a
                    href={campus.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-3 rounded-xl bg-[#1877F2]/10 hover:bg-[#1877F2] text-[#1877F2] hover:text-white font-bold text-xs flex items-center justify-center gap-2 transition-all border border-[#1877F2]/20 shadow-2xs group/fb"
                  >
                    <FaFacebook className="text-sm text-[#1877F2] group-hover/fb:text-white transition-colors" />
                    <span>Official Facebook Campus Page</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CampusSelector;
