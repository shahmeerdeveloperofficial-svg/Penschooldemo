"use client";

import React, { useState } from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "923016666233";
  const defaultMessage = "Hello PEN School System, I would like to inquire about admissions and academic programs.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end pointer-events-auto">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 15 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="mb-3 w-72 sm:w-80 rounded-2xl bg-white shadow-2xl border border-slate-200 overflow-hidden text-slate-800"
          >
            {/* Header */}
            <div className="bg-[#0B2240] p-3.5 text-white flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white text-base shadow-sm">
                    <FaWhatsapp />
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 border-2 border-[#0B2240] rounded-full"></span>
                </div>
                <div>
                  <h4 className="font-bold text-xs leading-tight text-white">PEN Admissions Desk</h4>
                  <p className="text-[10px] text-slate-300">Online · Quick Response</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white transition-colors p-1"
                aria-label="Close chat popup"
              >
                <FaTimes className="text-sm" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-3 bg-slate-50 space-y-2 text-xs">
              <div className="bg-white p-2.5 rounded-xl rounded-tl-none shadow-xs border border-slate-100 text-slate-700">
                <p className="font-semibold text-[#9B1B1E] mb-0.5">Assalam-o-Alaikum! 🌟</p>
                <p className="text-[11px] leading-relaxed">Welcome to PEN Schools (Paradigm Educational Network). How can we help you today?</p>
              </div>

              <div className="grid grid-cols-1 gap-1.5 pt-0.5">
                <a
                  href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent("I want to apply for Pre-School & Montessori Admission")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-left px-2.5 py-1.5 bg-white hover:bg-emerald-50 hover:border-emerald-300 border border-slate-200 rounded-lg text-slate-700 transition-all flex items-center justify-between group"
                >
                  <span>👶 Pre-School / Montessori</span>
                  <span className="text-[#25D366] group-hover:translate-x-0.5 transition-transform">→</span>
                </a>
                <a
                  href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent("I want to inquire about Senior School & Future Skills Admission")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-left px-2.5 py-1.5 bg-white hover:bg-emerald-50 hover:border-emerald-300 border border-slate-200 rounded-lg text-slate-700 transition-all flex items-center justify-between group"
                >
                  <span>🎓 Senior School (Matric / STEAM)</span>
                  <span className="text-[#25D366] group-hover:translate-x-0.5 transition-transform">→</span>
                </a>
              </div>
            </div>

            {/* Footer Action */}
            <div className="p-2.5 bg-white border-t border-slate-100">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs transition-all shadow-sm active:scale-98"
              >
                <FaWhatsapp className="text-base" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Trigger Button: Compact, Decent, Circular with Pulse */}
      <div className="relative group">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-[0_6px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_10px_25px_rgba(37,211,102,0.55)] transition-all"
          aria-label="WhatsApp Helpline"
        >
          {/* Live Ping Indicator */}
          <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-80"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-300 border-2 border-[#25D366]"></span>
          </span>

          <FaWhatsapp className="text-2xl sm:text-3xl text-white" />
        </motion.button>
      </div>
    </div>
  );
};

export default WhatsAppButton;
