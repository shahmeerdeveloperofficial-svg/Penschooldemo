"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube, FaWhatsapp, FaMapMarkerAlt, FaGraduationCap } from "react-icons/fa";
import { campusesList } from "@/constants/penData";

const TopBar = () => {
  const [showCampusDropdown, setShowCampusDropdown] = useState(false);

  return (
    <header className="text-xs text-light relative w-full bg-[#0B2240] border-b border-white/10 z-40">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2 flex justify-between items-center gap-2 sm:gap-4 flex-wrap">
        {/* Left: Quick Phone & Campus Selector */}
        <div className="flex items-center gap-2.5 sm:gap-5 flex-wrap">
          <div className="flex items-center gap-1.5 text-xs">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-slate-300 font-medium hidden md:inline">Helpline:</span>
            <Link 
              href="tel:+923016666233" 
              className="font-bold text-white hover:text-amber-400 transition-colors"
            >
              +92 301 6666233
            </Link>
          </div>

          <div className="relative">
            <button
              onClick={() => setShowCampusDropdown(!showCampusDropdown)}
              onBlur={() => setTimeout(() => setShowCampusDropdown(false), 200)}
              className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white px-2.5 py-1 rounded-full text-xs font-medium transition-all"
            >
              <FaMapMarkerAlt className="text-amber-400 text-xs" />
              <span>Campus Selector</span>
              <span className="text-[10px] opacity-70">▼</span>
            </button>

            {showCampusDropdown && (
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-slate-200 py-2 z-50 text-slate-800">
                <div className="px-3 py-1.5 text-[11px] uppercase tracking-wider text-slate-400 font-semibold border-b border-slate-100">
                  Select A Campus
                </div>
                {campusesList.map((campus) => (
                  <Link
                    key={campus.id}
                    href={`/Campuses#${campus.id}`}
                    className="flex flex-col px-3 py-2 hover:bg-slate-50 transition-colors border-b last:border-0 border-slate-100"
                  >
                    <span className="font-semibold text-xs text-[#0B2240]">{campus.name}</span>
                    <span className="text-[11px] text-slate-500">{campus.city} · {campus.levels.split(",")[0]}</span>
                  </Link>
                ))}
                <div className="p-2 bg-slate-50 text-center">
                  <Link href="/Campuses" className="text-xs font-semibold text-[#9B1B1E] hover:underline">
                    View All Campuses & Maps →
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right: Quick Links & WhatsApp & Socials */}
        <div className="flex items-center gap-3 sm:gap-5 ml-auto">
          <Link
            href="/NewsAndEvents"
            className="text-amber-400 hover:text-amber-300 font-medium text-xs hidden lg:flex items-center gap-1"
          >
            <span>📢 Central Circulars & Notices</span>
          </Link>

          <a
            href="https://wa.me/923016666233"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 bg-[#25D366]/20 hover:bg-[#25D366] text-emerald-300 hover:text-white px-2 py-0.5 rounded-full transition-all text-xs font-semibold"
          >
            <FaWhatsapp className="text-sm" />
            <span className="hidden sm:inline">WhatsApp Us</span>
          </a>

          <div className="flex items-center gap-2.5 text-slate-300">
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Facebook">
              <FaFacebook />
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Instagram">
              <FaInstagram />
            </Link>
            <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="YouTube">
              <FaYoutube />
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn">
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
