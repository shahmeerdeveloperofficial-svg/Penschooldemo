"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import SidebarComp from "./ui/SidebarComp";
import { NavList } from "@/constants/NavList";
import { FaChevronDown } from "react-icons/fa6";
import { FaMapMarkerAlt, FaGraduationCap } from "react-icons/fa";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleNavOpen = () => {
    setIsOpen(true);
    document.body.classList.add("hide-scrollbar");
  };

  const handleNavClose = () => {
    setIsOpen(false);
  };

  return (
    <motion.nav className="sticky top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between gap-2 lg:gap-4">
        {/* Left Side: Authentic Dual Logo Branding (Client Voice Requirement) */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <Link href="/" className="flex items-center group">
            <Image
              src="/pen-assets/pen-schools-logo-text.png"
              width={180}
              height={55}
              alt="PEN SCHOOLS"
              priority
              className="h-8 sm:h-10 w-auto object-contain transition-transform group-hover:scale-102"
            />
          </Link>

          <div className="h-7 w-px bg-slate-200 hidden sm:block"></div>

          <Link
            href="/AboutUs"
            className="hidden md:flex items-center group transition-transform hover:scale-102"
            title="Paradigm Educational Network"
          >
            <Image
              src="/pen-assets/paradigm-network-logo.png"
              width={190}
              height={42}
              alt="PARADIGM EDUCATIONAL NETWORK"
              priority
              className="h-6 sm:h-7.5 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Center: Desktop Navigation with Spacing */}
        <div
          onMouseLeave={() => setActiveDropdown(null)}
          className="hidden xl:flex items-center justify-center flex-1 px-1"
        >
          <div className="flex items-center gap-1 font-medium text-slate-700">
            {NavList.map((item, index) => {
              const hasContent = item.content?.length > 0;
              const linkProps = {
                onMouseEnter: () => (hasContent ? setActiveDropdown(index) : setActiveDropdown(null)),
                className: `text-center transition-all duration-200 flex items-center gap-1 py-1.5 px-2.5 rounded-lg select-none leading-none font-semibold text-xs xl:text-[13px] ${
                  activeDropdown === index
                    ? "bg-[#9B1B1E]/10 text-[#9B1B1E]"
                    : "hover:bg-slate-100 hover:text-[#9B1B1E]"
                }`,
                target: item.blank ? "_blank" : "_self",
                rel: item.blank ? "noopener noreferrer" : "",
              };

              return !hasContent && item.slug ? (
                <Link {...linkProps} key={index} href={item.slug}>
                  {item.title}
                </Link>
              ) : (
                <div key={index} className="relative">
                  <div {...linkProps} className={`${linkProps.className} cursor-pointer`}>
                    <span>{item.title}</span>
                    <FaChevronDown
                      className={`${
                        activeDropdown === index ? "rotate-180 text-[#9B1B1E]" : "text-slate-400"
                      } transition-transform duration-200 text-[9px] ml-0.5`}
                    />
                  </div>

                  {/* Dropdown Menu Positioned Perfectly Under Each Item */}
                  <AnimatePresence>
                    {activeDropdown === index && hasContent && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className="absolute left-0 top-full pt-2 w-64 z-50"
                      >
                        <div className="bg-white shadow-2xl rounded-2xl p-2 border border-slate-100 ring-1 ring-black/5">
                          <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#9B1B1E] border-b border-slate-100 mb-1">
                            {item.title}
                          </div>
                          <ul className="flex flex-col space-y-0.5">
                            {item.content.map((subItem, subIndex) => (
                              <li key={subIndex}>
                                <Link
                                  className="px-3 py-2 transition-all duration-150 hover:bg-[#9B1B1E]/10 hover:text-[#9B1B1E] text-slate-700 rounded-xl text-xs font-semibold flex items-center justify-between group"
                                  href={subItem.slug}
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <span>{subItem.title}</span>
                                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[#9B1B1E]">→</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: CTA Actions & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          <Link
            href="/Campuses"
            className="hidden lg:flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1.5 text-[#0B2240] hover:bg-slate-100 rounded-lg transition-colors border border-slate-200"
          >
            <FaMapMarkerAlt className="text-amber-500 text-xs" />
            <span>Campuses</span>
          </Link>

          <Link href="/OnlineAdmission" className="flex items-center">
            <button className="bg-gradient-to-r from-[#9B1B1E] to-[#c3272b] hover:from-[#7d1417] hover:to-[#9B1B1E] text-white px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-xs sm:text-xs font-bold shadow-sm hover:shadow-md transition-all active:scale-95 flex items-center gap-1.5">
              <FaGraduationCap className="text-xs" />
              <span>Apply Online</span>
            </button>
          </Link>

          <button
            onClick={handleNavOpen}
            className="xl:hidden transition-all duration-200 hover:bg-slate-100 h-9 w-9 grid place-content-center rounded-xl text-2xl text-[#0B2240]"
            aria-label="Open navigation menu"
          >
            <FiMenu />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="NavbarMobile"
            className="fixed w-full h-screen z-[999] right-0 top-0"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={handleNavClose}
              className="absolute inset-0 bg-dark/60 backdrop-blur-xs"
            ></motion.div>
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
              data-lenis-prevent
              className="p-5 flex flex-col gap-3 absolute right-0 top-0 z-10 bg-white h-full max-h-[100dvh] w-[min(380px,90%)] shadow-2xl overflow-y-auto"
            >
              <div className="bg-slate-50 p-3 rounded-2xl flex gap-2 items-center justify-between border border-slate-100">
                <Link href="/" onClick={handleNavClose}>
                  <Image
                    src="/penlogo.png"
                    width={220}
                    height={110}
                    alt="PEN School System"
                    className="h-10 w-auto object-contain"
                  />
                </Link>
                <button
                  onClick={handleNavClose}
                  className="transition-all text-slate-600 hover:text-slate-900 duration-200 hover:bg-white h-9 w-9 grid place-content-center rounded-full text-xl shadow-xs"
                  aria-label="Close navigation menu"
                >
                  <RxCross2 />
                </button>
              </div>

              <div className="bg-[#0B2240] text-white p-3.5 rounded-2xl flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-400 text-[#0B2240] font-bold text-xs flex items-center justify-center">
                  PEN
                </div>
                <div className="text-xs">
                  <p className="font-bold text-amber-300">Paradigm Educational Network</p>
                  <p className="text-slate-300 text-[11px]">Central Academic Excellence</p>
                </div>
              </div>

              <SidebarComp data={NavList} handleClose={handleNavClose} />

              <div className="mt-auto pt-4 border-t border-slate-100 flex flex-col gap-2">
                <Link
                  href="/OnlineAdmission"
                  onClick={handleNavClose}
                  className="w-full py-3 text-center bg-[#9B1B1E] text-white rounded-xl font-bold text-sm shadow-md"
                >
                  Apply Online (Admissions 2026)
                </Link>
                <a
                  href="https://wa.me/923016666233"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 text-center bg-[#25D366] text-white rounded-xl font-semibold text-xs flex items-center justify-center gap-2"
                >
                  <span>WhatsApp Helpline (+92 301 6666233)</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
