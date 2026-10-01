"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import LinkEffect from "./ui/LinkEffect";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const contentRef = useRef();
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.offsetHeight);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const Links = [
    {
      title: "Leadership & Vision",
      content: [
        { title: "Academic Head's Message", src: "/AcademicHeadMessage" },
        { title: "Director's Message", src: "/DirectorMessage" },
        { title: "Chairman's Message", src: "/ChairmanMessage" },
        { title: "About PEN Network", src: "/AboutUs" },
        { title: "Our Philosophy", src: "/OurPhilosophy" },
      ],
    },
    {
      title: "Academic Programs",
      content: [
        { title: "Pre-School Department", src: "/Curriculum/PreSchool" },
        { title: "Senior School & Future Skills", src: "/Curriculum/SeniorSchool" },
        { title: "Central Academic Standards", src: "/Curriculum" },
        { title: "Teacher Training & QA", src: "/TeacherTraining" },
        { title: "Societies & Clubs", src: "/SocietyAndClubs" },
      ],
    },
    {
      title: "Campuses & Help",
      content: [
        { title: "All Campuses & Maps", src: "/Campuses" },
        { title: "Apply Online (Admissions)", src: "/OnlineAdmission" },
        { title: "Central Circulars & Notices", src: "/NewsAndEvents" },
        { title: "Picture Gallery", src: "/NewsAndEvents#gallery" },
        { title: "Contact Admissions Desk", src: "/ContactUs" },
      ],
    },
  ];

  return (
    <footer
      id="Contact"
      className="w-full relative overflow-hidden bg-white"
      style={{ clipPath: "inset(2px 0% 0% 0%)" }}
    >
      <div
        style={{ height: contentHeight }}
        className="pointer-events-none w-full relative z-20 min-h-16"
      >
        <div className="h-16 bg-white rounded-[0_0_2rem_2rem] sm:rounded-[0_0_5rem_5rem] absolute inset-x-0 top-0"></div>
      </div>

      <div
        ref={contentRef}
        className="pt-16 bg-[#0B2240] text-light w-full fixed -bottom-0.5 z-10"
      >
        <div className="maxWSec px-4 sm:px-12 py-8 sm:py-12 gap-8 sm:gap-12 flex max-lg:flex-col justify-between w-full">
          {/* Brand Column */}
          <div className="flex flex-col gap-4 max-lg:items-start max-w-sm">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/penlogo.png"
                width={200}
                height={100}
                alt="PEN School System logo"
                loading="lazy"
                className="h-12 sm:h-14 w-auto object-contain bg-white/95 p-1.5 rounded-xl shadow-md"
              />
            </Link>

            <div className="text-xs text-slate-300 space-y-1.5">
              <p className="font-bold text-amber-400">Paradigm Educational Network</p>
              <p>Meticulously crafted academic standards, Montessori early years, and comprehensive Future Skills for the leaders of tomorrow.</p>
            </div>

            <div className="flex flex-col gap-1.5 text-xs text-slate-200 pt-2">
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-amber-400 text-xs" />
                <a href="tel:+923016666233" className="font-bold hover:underline">+92 301 6666233</a>
                <span className="text-slate-400">/</span>
                <a href="tel:+923246173226" className="font-bold text-amber-300 hover:underline">+92 324 6173226</a>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-red-400 text-xs" />
                <span>Head Office: Lahore / Pakpattan, Punjab</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-2">
              <a
                href="https://wa.me/923016666233?text=Hello%20PEN%20School%20System"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] px-3.5 py-2 text-xs font-bold text-white transition shadow-sm w-fit"
              >
                <FaWhatsapp className="text-sm" />
                <span>WhatsApp (+92 301 6666233)</span>
              </a>
              <a
                href="https://wa.me/923246173226?text=Hello%20PEN%20School%20System"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl bg-white/10 hover:bg-white/20 px-3 py-2 text-xs font-semibold text-emerald-300 transition border border-white/20 w-fit"
              >
                <FaWhatsapp className="text-sm text-emerald-400" />
                <span>Line 2 (+92 324 6173226)</span>
              </a>
            </div>
          </div>

          {/* Navigation Links Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 flex-grow">
            {Links.map((item, index) => (
              <div key={index} className="text-slate-300">
                <h5 className="font-berlin font-semibold text-base sm:text-lg text-white mb-3 border-b border-white/10 pb-1.5">
                  {item.title}
                </h5>
                <div className="flex flex-col space-y-2">
                  {item.content.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={subItem.src}
                      target={subItem.blank ? "_blank" : "_self"}
                      rel={subItem.blank ? "noopener noreferrer" : ""}
                      className="text-xs sm:text-sm hover:text-amber-400 transition-colors"
                    >
                      <LinkEffect noicon text={subItem.title} />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom copyright & Socials */}
        <div className="border-t py-4 border-white/10">
          <div
            id="social"
            className="maxWSec max-sm:pb-8 text-xs sm:text-sm flex flex-wrap justify-between items-center px-4 gap-4"
          >
            <div className="text-slate-400">
              © 2026 PEN School System (Paradigm Educational Network). All rights reserved.
            </div>

            <div className="flex gap-4 items-center text-lg text-slate-300">
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
      </div>
    </footer>
  );
};

export default Footer;
