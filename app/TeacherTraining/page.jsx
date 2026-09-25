import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeroHeader from "@/components/HeroHeader";
import { FaChalkboardTeacher, FaCheckCircle, FaAward, FaUsers, FaLaptopCode, FaBookReader } from "react-icons/fa";

export const metadata = {
  title: "Teacher Training & Quality Assurance | PEN School System",
  description: "Central Teacher Professional Development, pedagogical audits, and quality assurance framework across PEN Schools Network.",
};

const trainingModules = [
  {
    title: "Montessori Methodology & Sensory Apparatus Handling",
    desc: "Rigorous certification for early years teachers in Jolly Phonics sound blending, Urdu phonetics, and Maria Montessori hands-on apparatus.",
    icon: FaBookReader
  },
  {
    title: "STEAM & Project-Based Instruction",
    desc: "Equipping senior faculty to deliver active learning workshops, robotics projects, and conceptual inquiry sessions.",
    icon: FaLaptopCode
  },
  {
    title: "Classroom Psychology & Student Mentorship",
    desc: "Training in positive discipline, emotional intelligence, identifying learning differences, and constructive parent communication.",
    icon: FaUsers
  },
  {
    title: "Central Academic Quality Audits & Micro-Teaching",
    desc: "Bi-monthly academic reviews, randomized lesson plan audits, and peer observation sessions to ensure 100% curriculum compliance.",
    icon: FaAward
  }
];

const TeacherTraining = () => {
  return (
    <main>
      <HeroHeader
        title={"Teacher Training & Quality Assurance"}
        description="Centralized educator capacity building and academic quality governance across all network campuses."
      />

      <div className="maxWSec px-4 sm:px-8 py-14 space-y-16">
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#9B1B1E] bg-red-100 px-3.5 py-1 rounded-full">
              Central Academic Governance
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#0B2240] leading-tight">
              Empowering Teachers to Inspire Brilliance
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We firmly believe that a curriculum is only as impactful as the educators who deliver it. Paradigm Educational Network operates a centralized Teacher Training & Quality Assurance Institute dedicated to continuous professional development, lesson standardization, and modern pedagogical training.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-emerald-500 shrink-0 mt-1" />
                <p className="text-xs sm:text-sm text-slate-700">
                  <strong>Standardized Lesson Plans:</strong> Centrally vetted lesson blueprints and assessment rubrics distributed to all 15+ campuses.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-emerald-500 shrink-0 mt-1" />
                <p className="text-xs sm:text-sm text-slate-700">
                  <strong>250+ Certified Faculty:</strong> Mandatory pre-session training and quarterly refresher courses in 21st-century teaching methods.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-emerald-500 shrink-0 mt-1" />
                <p className="text-xs sm:text-sm text-slate-700">
                  <strong>Zero-Tolerance for Rote Learning:</strong> Institutional shift toward conceptual clarity, critical thinking, and student participation.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
              <Image
                src="/pen-assets/8.jpeg"
                alt="Teacher Training Session"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
              <Image
                src="/pen-assets/26.jpeg"
                alt="Faculty Quality Assurance Workshop"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden shadow-lg border border-slate-200 col-span-2">
              <Image
                src="/pen-assets/11.jpeg"
                alt="Classroom Observation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0B2240]">
              Core Professional Development Modules
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm">
              Standardized training conducted annually by the Academic Head and master trainers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {trainingModules.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex items-start gap-4 group hover:border-red-200"
                >
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-[#9B1B1E] group-hover:bg-[#9B1B1E] group-hover:text-white transition-colors flex items-center justify-center text-xl shrink-0">
                    <IconComp />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-[#0B2240] group-hover:text-[#9B1B1E] transition-colors mb-1.5">
                      {item.title}
                    </h4>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default TeacherTraining;
