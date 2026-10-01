"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaCube, FaCheckCircle, FaArrowRight, FaCamera, FaEye, FaTimes, FaWhatsapp } from "react-icons/fa";

const montessoriRooms = [
  {
    src: "/pen-assets/WhatsApp Image 2026-09-24 at 5.28.06 PM (1).jpeg",
    title: "Montessori Classroom with Smart TV & Activity Corners",
    desc: "Equipped with interactive screen for phonetic audio-visual learning and vibrant tree-themed indoor garden decor.",
    badge: "Smart Classroom"
  },
  {
    src: "/pen-assets/WhatsApp Image 2026-09-24 at 5.28.05 PM (1).jpeg",
    title: "Alphabet ABCD Collaborative Round Activity Table",
    desc: "Custom-built child-friendly low tables for group letter tracing, coloring, and interactive phonics instruction.",
    badge: "Collaborative Table"
  },
  {
    src: "/pen-assets/12.jpeg",
    title: "Low-Reach Montessori Wooden Storage & Sensory Shelves",
    desc: "Promoting independence and self-directed activity choice through accessible Montessori learning material racks.",
    badge: "Montessori Shelves"
  },
  {
    src: "/pen-assets/13.jpeg",
    title: "Green Wall & Indoor Nature Activity Zone",
    desc: "Stimulating environmental awareness and calm sensory regulation for toddlers and early learners.",
    badge: "Sensory Environment"
  },
  {
    src: "/pen-assets/5.jpeg",
    title: "Sensorial Wooden Cylinder Blocks & Grading Apparatus",
    desc: "Fostering visual discrimination of dimensions, tactile exploration, and three-finger pencil grip readiness.",
    badge: "Montessori Apparatus"
  },
  {
    src: "/pen-assets/16.jpeg",
    title: "Sandpaper Letters & Tactile Tracing Station",
    desc: "Muscle memory formation for English and Urdu letters before moving onto formal writing books.",
    badge: "Tactile Literacy"
  }
];

const MontessoriClassrooms = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section className="maxWSec px-4 sm:px-8 py-16 flex flex-col gap-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-2">
            <FaCube className="text-emerald-600" />
            <span>#Montessori based class rooms</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2240]">
            Purpose-Built <span className="text-[#9B1B1E]">Montessori Classrooms</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-2xl">
            Vibrant, joyful, and sensory-rich learning spaces designed according to authentic Maria Montessori specifications.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/Curriculum/PreSchool"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#9B1B1E] hover:bg-[#781215] text-white rounded-xl text-xs font-bold transition-colors shadow-sm"
          >
            <span>Pre-School Curriculum</span>
            <FaArrowRight className="text-[10px]" />
          </Link>
        </div>
      </div>

      {/* Grid of Classrooms */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {montessoriRooms.map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -6 }}
            onClick={() => setSelectedPhoto(item)}
            className="group bg-white rounded-3xl border border-slate-200 shadow-md hover:shadow-2xl overflow-hidden cursor-pointer flex flex-col justify-between transition-all duration-300"
          >
            <div>
              <div className="relative h-60 w-full bg-slate-100 overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                  loading="lazy"
                  className="object-cover group-hover:scale-108 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#0B2240]/90 text-amber-300 text-[11px] font-bold px-3 py-1 rounded-full shadow-md">
                  {item.badge}
                </div>
              </div>

              <div className="p-5 space-y-2">
                <h4 className="text-base sm:text-lg font-bold text-[#0B2240] group-hover:text-[#9B1B1E] transition-colors leading-snug">
                  {item.title}
                </h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>

            <div className="p-5 pt-0 flex items-center justify-between text-xs text-[#9B1B1E] font-semibold border-t border-slate-100 mt-2">
              <span className="flex items-center gap-1">
                <FaEye />
                <span>View Classroom Detail</span>
              </span>
              <span>→</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
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
                  <span className="text-xs font-bold text-amber-400">{selectedPhoto.badge}</span>
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

export default MontessoriClassrooms;
