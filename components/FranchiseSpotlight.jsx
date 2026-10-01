"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaHandshake, FaWhatsapp, FaArrowRight, FaCheckCircle, FaGraduationCap, FaChalkboardTeacher, FaBuilding } from "react-icons/fa";

const FranchiseSpotlight = () => {
  return (
    <section className="maxWSec px-4 sm:px-8 py-12">
      <div className="relative bg-gradient-to-br from-[#064E3B] via-[#0B2240] to-[#064E3B] rounded-3xl p-6 sm:p-12 text-white shadow-2xl border border-emerald-500/20 overflow-hidden">
        {/* Decorative Ambient Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Official Welcome Poster */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl border-2 border-emerald-400/30 bg-slate-900 group cursor-pointer"
            >
              <div className="relative w-full aspect-square sm:h-[420px] bg-slate-900">
                <Image
                  src="/pen-assets/abdul-khaliq-poster.jpg"
                  alt="Abdul Khaliq - Franchise Sale Regional Manager and Director PGS Kot Addu"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
                  loading="lazy"
                  className="object-contain"
                />
              </div>

              {/* Poster Footer Badges */}
              <div className="bg-gradient-to-r from-emerald-800 to-teal-900 p-3 text-center text-white flex items-center justify-between px-4 border-t border-emerald-700/50">
                <span className="text-xs font-bold tracking-wide text-amber-300">Franchise Network Growth</span>
                <span className="text-[11px] bg-white/20 px-2.5 py-0.5 rounded-full font-semibold">Kot Addu Campus</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Vision, Sales & Expansion Lines */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-400/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-400/30">
                <FaHandshake className="text-emerald-400" />
                <span>Franchise Sales & Regional Leadership</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                Expanding Academic Excellence: <span className="text-amber-400">Franchise Sales & Regional Network</span>
              </h2>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="text-sm sm:text-base font-bold text-slate-100">Mr. Abdul Khaliq</span>
                <span className="text-xs text-amber-300 font-semibold px-2.5 py-0.5 rounded-full bg-amber-400/10 border border-amber-400/20">
                  Franchise Sale Regional Manager
                </span>
                <span className="text-xs text-emerald-300 font-semibold px-2.5 py-0.5 rounded-full bg-emerald-400/10 border border-emerald-400/20">
                  Director of PGS Kot Addu Campus
                </span>
              </div>
            </div>

            {/* Official Message / Quote */}
            <div className="p-5 sm:p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/15 space-y-3">
              <div className="flex items-start gap-3">
                <FaQuoteLeft className="text-2xl text-amber-400 shrink-0 mt-1" />
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                  &ldquo;PEN School System offers visionary school owners and educational entrepreneurs a proven, high-standard franchise model. With standardized SNC & Montessori curricula, robust teacher development, and centralized quality audits, we help you build a reputable and successful campus in your city.&rdquo;
                </p>
              </div>
            </div>

            {/* Franchise Offerings Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-200">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10">
                <FaCheckCircle className="text-emerald-400 shrink-0 text-sm" />
                <span>Complete Turnkey School Setup Support</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10">
                <FaGraduationCap className="text-amber-400 shrink-0 text-sm" />
                <span>SNC & Montessori Aligned Curriculum</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10">
                <FaChalkboardTeacher className="text-emerald-400 shrink-0 text-sm" />
                <span>Continuous Faculty Training & Academic Audits</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10">
                <FaBuilding className="text-amber-400 shrink-0 text-sm" />
                <span>Branding, Marketing & IT Infrastructure</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/FranchiseMessage"
                className="px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center gap-2"
              >
                <span>Franchise Information & Message</span>
                <FaArrowRight className="text-xs" />
              </Link>

              <a
                href="https://wa.me/923016666233?text=Hello%20Mr.%20Abdul%20Khaliq,%20I%20am%20interested%20in%20a%20PEN%20School%20Franchise%20partnership."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 shadow-sm"
              >
                <FaWhatsapp className="text-base" />
                <span>Franchise Inquiry via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FranchiseSpotlight;
