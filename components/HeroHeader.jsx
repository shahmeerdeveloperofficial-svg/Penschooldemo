"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { 
  FaGraduationCap, 
  FaMapMarkerAlt, 
  FaWhatsapp, 
  FaShieldAlt, 
  FaAward, 
  FaCheckCircle, 
  FaRobot, 
  FaBookOpen,
  FaChevronRight,
  FaChevronLeft
} from "react-icons/fa";

const showcaseSlides = [
  {
    image: "/pen-assets/WhatsApp Image 2026-09-24 at 5.28.05 PM (1).jpeg",
    title: "Montessori & Jolly Phonics Class",
    tag: "Pre-School Department",
    badge: "Bilingual Phonics"
  },
  {
    image: "/pen-assets/WhatsApp Image 2026-09-24 at 5.28.05 PM.jpeg",
    title: "Music & Rhythmic Expression",
    tag: "Creative Learning",
    badge: "Auditory Skills"
  },
  {
    image: "/pen-assets/WhatsApp Image 2026-09-24 at 5.28.07 PM (1).jpeg",
    title: "Senior School STEAM & Coding Hub",
    tag: "Future Skills",
    badge: "AI & Tech Ready"
  },
  {
    image: "/pen-assets/2.jpeg",
    title: "Morning Assembly & Moral Values",
    tag: "Campus Culture",
    badge: "Discipline & Integrity"
  }
];

const HeroHeader = ({ title, description }) => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!isHomePage) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % showcaseSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isHomePage]);

  return (
    <header className="px-3 sm:px-6 pt-3 pb-8 maxW">
      <div className="relative bg-gradient-to-br from-[#0B2240] via-[#0e2c52] to-[#07162c] rounded-3xl overflow-hidden shadow-2xl border border-slate-800 text-white p-6 sm:p-12 lg:p-14">
        {/* Animated Background Gradients & Particles */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#9B1B1E]/25 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#0284C7]/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

        {isHomePage ? (
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Column: Typography, Badges & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Brand Top Badges */}
              <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2 sm:gap-3 flex-wrap"
              >
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-400/30 shadow-xs">
                  <FaShieldAlt className="text-amber-400" />
                  <span>Paradigm Educational Network</span>
                </div>
                <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#9B1B1E]/40 text-red-200 text-xs font-semibold border border-red-500/30">
                  <span>Single National Curriculum (SNC)</span>
                </div>
              </motion.div>

              {/* Heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="space-y-2"
              >
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                  PEN School <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200">System</span>
                </h1>
                <p className="text-amber-300/90 text-sm sm:text-base font-semibold tracking-wide">
                  Foundation of Lifelong Learning & Empowering Future Leaders
                </p>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.7 }}
                className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-xl font-normal"
              >
                At our network, education is the shaping of character, critical thinking, and 21st-century future readiness. 
                Offering structured Montessori early years, Jolly Phonics, STEAM innovation, and Pakistan&apos;s most comprehensive Future Skills program.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2"
              >
                <Link
                  href="/OnlineAdmission"
                  className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#9B1B1E] to-[#c3272b] hover:from-[#7d1417] hover:to-[#9B1B1E] text-white font-bold text-sm sm:text-base shadow-[0_10px_25px_rgba(155,27,30,0.45)] hover:shadow-xl transition-all flex items-center gap-2 active:scale-95"
                >
                  <FaGraduationCap className="text-lg" />
                  <span>Apply for Admission 2026</span>
                </Link>

                <Link
                  href="/Campuses"
                  className="px-5 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base border border-white/20 backdrop-blur-xs transition-all flex items-center gap-2"
                >
                  <FaMapMarkerAlt className="text-amber-400" />
                  <span>Campus Selector</span>
                </Link>

                <a
                  href="https://wa.me/923016666233?text=Hello%20PEN%20School%20System,%20I%20would%20like%20to%20inquire%20about%20admissions."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3.5 rounded-2xl bg-[#25D366]/20 hover:bg-[#25D366] text-emerald-300 hover:text-white font-semibold text-sm border border-[#25D366]/40 transition-all flex items-center gap-2"
                >
                  <FaWhatsapp className="text-lg" />
                  <span className="hidden sm:inline">WhatsApp</span>
                </a>
              </motion.div>

              {/* Live Trust Badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.65, duration: 0.7 }}
                className="pt-4 flex flex-wrap items-center gap-3 text-xs text-slate-300"
              >
                <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-xl border border-white/10">
                  <FaCheckCircle className="text-emerald-400 text-xs" />
                  <span>16+ Operational Campuses</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-xl border border-white/10">
                  <FaCheckCircle className="text-emerald-400 text-xs" />
                  <span>5,000+ Students</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-xl border border-white/10">
                  <FaCheckCircle className="text-emerald-400 text-xs" />
                  <span>100% Board Success</span>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Interactive Animated Showcase Carousel */}
            <div className="lg:col-span-5 relative flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="relative w-full max-w-md h-80 sm:h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/15 bg-slate-950 group"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={showcaseSlides[currentSlide].image}
                      alt={showcaseSlides[currentSlide].title}
                      fill
                      priority
                      className="object-cover"
                    />

                    {/* Gradient Info Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-6">
                      <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider bg-white/15 backdrop-blur-md px-2.5 py-0.5 rounded-md w-fit mb-1 border border-white/20">
                        {showcaseSlides[currentSlide].tag}
                      </span>
                      <h4 className="text-lg sm:text-xl font-bold text-white leading-snug">
                        {showcaseSlides[currentSlide].title}
                      </h4>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Carousel Controls */}
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/40 backdrop-blur-md p-1 rounded-full border border-white/20 z-20">
                  <button
                    onClick={() => setCurrentSlide((currentSlide - 1 + showcaseSlides.length) % showcaseSlides.length)}
                    className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/30 text-white flex items-center justify-center text-xs transition-colors"
                    aria-label="Previous image"
                  >
                    <FaChevronLeft />
                  </button>
                  <button
                    onClick={() => setCurrentSlide((currentSlide + 1) % showcaseSlides.length)}
                    className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/30 text-white flex items-center justify-center text-xs transition-colors"
                    aria-label="Next image"
                  >
                    <FaChevronRight />
                  </button>
                </div>

                {/* Floating Highlight Badge */}
                <div className="absolute top-4 left-4 bg-[#9B1B1E]/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg border border-red-400/40 z-20">
                  ★ {showcaseSlides[currentSlide].badge}
                </div>
              </motion.div>

              {/* Thumbnail Selector Pills */}
              <div className="flex items-center gap-2 mt-4">
                {showcaseSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      currentSlide === idx ? "w-8 bg-amber-400" : "w-2.5 bg-white/30 hover:bg-white/50"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Subpages Simple Clean Header */
          <div className="relative z-10 flex flex-col items-center justify-center text-center gap-4 py-6">
            <motion.h1
              initial={{ y: -15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-5xl font-extrabold text-white"
            >
              {title}
            </motion.h1>
            {description && (
              <motion.p
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-slate-200 text-sm sm:text-base max-w-2xl leading-relaxed"
              >
                {description}
              </motion.p>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default HeroHeader;
