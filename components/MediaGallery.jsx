"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { galleryImages, galleryCategories } from "@/constants/penData";
import { FaEye, FaTimes, FaCamera, FaChevronLeft, FaChevronRight, FaImages } from "react-icons/fa";

const MediaGallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeModalIndex, setActiveModalIndex] = useState(null);
  const [displayCount, setDisplayCount] = useState(16);

  const filteredImages = activeCategory === "All"
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  const visibleImages = filteredImages.slice(0, displayCount);

  const handleNext = () => {
    if (activeModalIndex !== null) {
      setActiveModalIndex((activeModalIndex + 1) % filteredImages.length);
    }
  };

  const handlePrev = () => {
    if (activeModalIndex !== null) {
      setActiveModalIndex((activeModalIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <section id="gallery" className="maxWSec px-4 sm:px-8 py-16 flex flex-col gap-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
          <FaCamera className="text-amber-600" />
          <span>Complete Network Media Gallery ({galleryImages.length} Photos)</span>
        </div>
        <h2 className="h2 text-3xl sm:text-5xl font-extrabold text-[#0B2240]">
          Life at <span className="text-[#9B1B1E]">PEN School System</span>
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Explore all our authentic pictures: Montessori classrooms, Music classes, Sports Gala, STEAM laboratories, and academic milestones across all campuses.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex justify-center flex-wrap gap-2">
        {galleryCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat);
              setDisplayCount(16);
              setActiveModalIndex(null);
            }}
            className={`py-2 px-4 rounded-full font-bold text-xs sm:text-sm transition-all duration-200 ${
              activeCategory === cat
                ? "bg-[#0B2240] text-white shadow-md scale-102"
                : "bg-slate-100 hover:bg-slate-200 text-slate-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid of Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        <AnimatePresence>
          {visibleImages.map((item, idx) => (
            <motion.div
              key={item.src + idx}
              layout
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.25 }}
              whileHover={{ y: -5 }}
              onClick={() => setActiveModalIndex(idx)}
              className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl cursor-pointer bg-slate-900 border border-slate-200"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 280px"
                loading="lazy"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-[#0B2240]/85 text-amber-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full z-10">
                {item.tag || item.category}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider mb-1">
                  {item.category}
                </span>
                <p className="text-white text-xs sm:text-sm font-semibold leading-snug">
                  {item.title}
                </p>
                <div className="mt-2 flex items-center gap-1 text-[11px] text-slate-300 font-medium">
                  <FaEye />
                  <span>Click to view in high resolution</span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Load More Button */}
      {displayCount < filteredImages.length && (
        <div className="flex justify-center pt-4">
          <button
            onClick={() => setDisplayCount((prev) => prev + 16)}
            className="px-8 py-3.5 bg-[#9B1B1E] hover:bg-[#781215] text-white font-bold text-xs sm:text-sm rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center gap-2"
          >
            <FaImages />
            <span>Load More Photos ({filteredImages.length - displayCount} remaining)</span>
          </button>
        </div>
      )}

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeModalIndex !== null && filteredImages[activeModalIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setActiveModalIndex(null)}
          >
            <div
              className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalIndex(null)}
                className="absolute -top-12 right-0 text-white/90 hover:text-white text-2xl p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all"
                aria-label="Close modal"
              >
                <FaTimes />
              </button>

              {/* Prev / Next buttons */}
              <button
                onClick={handlePrev}
                className="absolute left-2 sm:-left-12 top-1/2 -translate-y-1/2 text-white bg-black/60 hover:bg-[#9B1B1E] p-3 rounded-full transition-all text-lg shadow-lg z-20"
                aria-label="Previous image"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-2 sm:-right-12 top-1/2 -translate-y-1/2 text-white bg-black/60 hover:bg-[#9B1B1E] p-3 rounded-full transition-all text-lg shadow-lg z-20"
                aria-label="Next image"
              >
                <FaChevronRight />
              </button>

              {/* Image Container */}
              <div className="relative w-full h-[65vh] rounded-2xl overflow-hidden bg-black shadow-2xl border border-white/20">
                <Image
                  src={filteredImages[activeModalIndex].src}
                  alt={filteredImages[activeModalIndex].title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Caption */}
              <div className="w-full bg-slate-900 text-white p-4 rounded-b-2xl mt-2 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                    {filteredImages[activeModalIndex].category} · {filteredImages[activeModalIndex].tag}
                  </span>
                  <h4 className="font-semibold text-base">
                    {filteredImages[activeModalIndex].title}
                  </h4>
                </div>
                <span className="text-xs text-slate-400">
                  {activeModalIndex + 1} of {filteredImages.length}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MediaGallery;
