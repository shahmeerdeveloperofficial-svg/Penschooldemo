"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaShieldAlt, FaPhoneAlt, FaWhatsapp, FaArrowRight, FaCheckCircle } from "react-icons/fa";

const DirectorSpotlight = () => {
  return (
    <section className="maxWSec px-4 sm:px-8 py-16">
      <div className="relative bg-gradient-to-br from-[#0B2240] via-[#102a4e] to-[#0B2240] rounded-3xl p-6 sm:p-12 text-white shadow-2xl border border-white/10 overflow-hidden">
        {/* Decorative Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#9B1B1E]/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Official Poster & Portrait Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 bg-white group cursor-pointer"
            >
              <div className="relative w-full aspect-square sm:h-[420px] bg-white">
                <Image
                  src="/pen-assets/director-poster-official.png"
                  alt="H. Ali Nasir - Operation Management Director Official Poster"
                  fill
                  priority
                  className="object-contain"
                />
              </div>

              {/* Poster Footer Badges */}
              <div className="bg-[#9B1B1E] p-3 text-center text-white flex items-center justify-between px-4 border-t border-red-800">
                <span className="text-xs font-bold tracking-wide">www.penschools.edu.pk</span>
                <span className="text-[11px] bg-white/20 px-2.5 py-0.5 rounded-full font-semibold">Official Leadership Desk</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Official Philosophy & Operational Commitment */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-400/30">
                <FaShieldAlt className="text-amber-400" />
                <span>Message from the Director of Operations</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                Empowering Every Child to Achieve Their <span className="text-amber-400">&apos;Personal Best&apos;</span>
              </h2>
            </div>

            {/* Official Philosophy Quote from Graphic Poster */}
            <div className="p-5 sm:p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/15 space-y-3">
              <div className="flex items-start gap-3">
                <FaQuoteLeft className="text-2xl text-amber-400 shrink-0 mt-1" />
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal italic">
                  &ldquo;Choosing an educational institute that is &apos;best fit&apos; to a child is a major decision for parents. Perhaps the most important question for parents to consider is whether the Educational and social philosophy of the institution coincides with their expectations and Standards. PEN School&apos;s philosophy is based on principle that <strong>Each Child will achieve Personal Best in all areas of Development</strong>. We provide Such environment that our students&apos; Self esteem is developed and skills are achieved for active citizenship and an international mindset.&rdquo;
                </p>
              </div>
            </div>

            {/* Operational Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10">
                <FaCheckCircle className="text-emerald-400 shrink-0 text-sm" />
                <span>Campus Safety & Secure Environment</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10">
                <FaCheckCircle className="text-emerald-400 shrink-0 text-sm" />
                <span>Standardized Faculty & Staffing</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10">
                <FaCheckCircle className="text-emerald-400 shrink-0 text-sm" />
                <span>Transparent Parent Communication</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10">
                <FaCheckCircle className="text-emerald-400 shrink-0 text-sm" />
                <span>Purpose-Built Modern Infrastructure</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/DirectorMessage"
                className="px-6 py-3 bg-[#9B1B1E] hover:bg-[#781215] text-white rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md flex items-center gap-2"
              >
                <span>Read Full Director&apos;s Message</span>
                <FaArrowRight className="text-xs" />
              </Link>

              <a
                href="https://wa.me/923016666233?text=Hello%20Director%20Office,%20I%20would%20like%20to%20inquire%20about%20PEN%20Schools%20operations%20and%20admissions."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 shadow-sm"
              >
                <FaWhatsapp className="text-base" />
                <span>Connect via WhatsApp (+92 301 6666233)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectorSpotlight;
