"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaMusic, 
  FaCalculator, 
  FaFont, 
  FaFlask, 
  FaPalette, 
  FaRunning, 
  FaCheckCircle,
  FaArrowRight,
  FaWhatsapp
} from "react-icons/fa";

const activities = [
  {
    id: "music-classes",
    tag: "music classes",
    title: "Music & Rhythmic Expression Classes",
    subtitle: "Auditory sensory stimulation, phonetic memory, and joyful singing",
    desc: "Music and rhythm play an essential role in early brain stimulation. Our music classes introduce children to rhythm, tempo, nursery rhymes, and keyboard harmony, enhancing auditory memory, focus, and joyful classroom engagement.",
    icon: FaMusic,
    badge: "Auditory & Joyful",
    image: "/pen-assets/WhatsApp Image 2026-09-24 at 5.28.05 PM.jpeg",
    highlights: [
      "Keyboard and melodic rhythm exploration",
      "Phonetic sound blending through interactive rhymes",
      "Vocal confidence and public performance skills"
    ]
  },
  {
    id: "math-counting",
    tag: "activity based learning",
    title: "Mathematics Counting: Count & Paste Activity",
    subtitle: "Hands-on number recognition, sensory counting, and motor coordination",
    desc: "Moving beyond abstract numbers on paper, children engage in physical 'Count & Paste' exercises. By physically counting objects and placing counters, learners build intuitive understanding of quantities, sequencing, and foundational numeracy.",
    icon: FaCalculator,
    badge: "Sensory Numeracy",
    image: "/pen-assets/WhatsApp Image 2026-09-24 at 5.28.05 PM (2).jpeg",
    highlights: [
      "Physical counting apparatus and dot mapping",
      "Fine motor precision through cut-and-paste exercises",
      "Strong early mathematical concept formation"
    ]
  },
  {
    id: "abcd-table",
    tag: "activity based learning",
    title: "Alphabet ABCD Collaborative Learning Table",
    subtitle: "Letter identification, structured writing formation, and teamwork",
    desc: "At our dedicated ABCD activity stations, children collaborate in small groups under teacher guidance. They practice letter tracing, sound recognition, pencil grip development, and peer learning in a vibrant, color-rich classroom environment.",
    icon: FaFont,
    badge: "Literacy & Teamwork",
    image: "/pen-assets/WhatsApp Image 2026-09-24 at 5.28.05 PM (1).jpeg",
    highlights: [
      "Proper pencil grip and neat handwriting formation",
      "Dual language letter sounds (English & Urdu)",
      "Cooperative peer interaction and sharing habits"
    ]
  },
  {
    id: "steam-science",
    tag: "steam & science",
    title: "STEAM & Scientific Discovery Labs",
    subtitle: "Hypothesis testing, robotics prototypes, and creative engineering",
    desc: "From early years observation stations to Senior School robotics labs, our students test real scientific principles, construct working models, and learn to think like young inventors and scientists.",
    icon: FaFlask,
    badge: "Inquiry & Logic",
    image: "/pen-assets/WhatsApp Image 2026-09-24 at 5.28.07 PM.jpeg",
    highlights: [
      "Hands-on biology, chemistry, and physics experiments",
      "Introduction to coding and algorithm design",
      "Annual inter-campus Science & Innovation exhibitions"
    ]
  },
  {
    id: "art-craft",
    tag: "creative arts",
    title: "Creative Arts, Design & Clay Modeling",
    subtitle: "Visual tracking, spatial awareness, and creative self-expression",
    desc: "Arts and crafts activities allow children to express their imaginations while developing bilateral hand coordination, color aesthetics, and patience.",
    icon: FaPalette,
    badge: "Creative Expression",
    image: "/pen-assets/4.jpeg",
    highlights: [
      "Clay modeling and tactile sensory exercises",
      "Color theory and painting techniques",
      "Exhibiting student artwork to parents and guests"
    ]
  }
];

const ActivityBasedLearning = () => {
  const [activeTab, setActiveTab] = useState(0);
  const activeActivity = activities[activeTab];

  return (
    <section className="maxWSec px-4 sm:px-8 py-16 flex flex-col gap-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#9B1B1E]/10 text-[#9B1B1E] text-xs font-bold uppercase tracking-wider">
          <span>★ Hands-on Pedagogy</span>
        </div>
        <h2 className="h2 text-3xl sm:text-4xl font-bold text-[#0B2240]">
          Activity-Based Learning & <span className="text-[#9B1B1E]">Specialized Classes</span>
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          We transform passive learning into active discovery. From music classes to hands-on mathematics counting and collaborative alphabet tables, every child learns through joyful participation.
        </p>
      </div>

      {/* Activity Navigation Tabs */}
      <div className="flex justify-center flex-wrap gap-2 sm:gap-3">
        {activities.map((item, idx) => {
          const IconComp = item.icon;
          const isSelected = activeTab === idx;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(idx)}
              className={`py-3 px-4 sm:px-5 rounded-2xl font-bold text-xs sm:text-sm transition-all duration-300 flex items-center gap-2 ${
                isSelected
                  ? "bg-[#9B1B1E] text-white shadow-lg scale-102"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700"
              }`}
            >
              <IconComp className={isSelected ? "text-amber-300" : "text-slate-500"} />
              <span>{item.title.split(":")[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Detailed Activity Card with Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeActivity.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl"
        >
          {/* Left: Text & Features */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-bold uppercase tracking-wider text-[#9B1B1E] bg-red-50 px-3 py-1 rounded-full border border-red-100">
                #{activeActivity.tag}
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0B2240] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                {activeActivity.badge}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#0B2240]">
              {activeActivity.title}
            </h3>

            <p className="text-sm font-semibold text-[#9B1B1E]">
              {activeActivity.subtitle}
            </p>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              {activeActivity.desc}
            </p>

            {/* Key Highlights */}
            <div className="space-y-2.5 pt-2">
              {activeActivity.highlights.map((point, pIdx) => (
                <div key={pIdx} className="flex items-center gap-3">
                  <FaCheckCircle className="text-emerald-500 shrink-0 text-sm" />
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">{point}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/Curriculum/PreSchool"
                className="px-5 py-2.5 bg-[#0B2240] hover:bg-[#9B1B1E] text-white rounded-xl text-xs font-bold transition-all shadow-md flex items-center gap-2"
              >
                <span>View Full Curriculum & Methods</span>
                <FaArrowRight className="text-[10px]" />
              </Link>
              <a
                href={`https://wa.me/923016666233?text=${encodeURIComponent(`Inquiring about ${activeActivity.title} in PEN School System`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl text-xs font-bold transition-all flex items-center gap-2 shadow-xs"
              >
                <FaWhatsapp className="text-sm" />
                <span>Ask via WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right: High-Res Image with Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-xl border-4 border-slate-50">
              <Image
                src={activeActivity.image}
                alt={activeActivity.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-5">
                <div>
                  <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider">
                    Live Classroom Experience
                  </span>
                  <p className="text-white text-xs sm:text-sm font-semibold">
                    {activeActivity.title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default ActivityBasedLearning;
