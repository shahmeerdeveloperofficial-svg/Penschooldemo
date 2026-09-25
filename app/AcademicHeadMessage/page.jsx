import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeroHeader from "@/components/HeroHeader";
import { leadershipData } from "@/constants/penData";
import { FaQuoteLeft, FaBookOpen, FaShieldAlt } from "react-icons/fa";

export const metadata = {
  title: "Academic Head's Message | PEN School System",
  description: "Message from Uzair Ahmad, Academic Head, PEN Schools Network.",
};

const AcademicHeadMessage = () => {
  const leader = leadershipData.academicHead;

  return (
    <main>
      <HeroHeader
        title={"Academic Head's Message"}
        description="Shaping character, critical thinking, and 21st-century future readiness."
      />

      <div className="maxWSec px-4 sm:px-8 py-14 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Portrait Column */}
          <div className="lg:col-span-4 bg-slate-50 p-6 rounded-3xl border border-slate-200 text-center space-y-4 shadow-sm">
            <div
              style={{ position: "relative", width: "100%", height: "360px", borderRadius: "1.25rem", overflow: "hidden" }}
              className="bg-slate-200 shadow-md border-2 border-white"
            >
              <Image
                src={leader.image}
                alt={leader.name}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                priority
                className="object-cover object-top"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0B2240]">{leader.name}</h3>
              <p className="text-xs font-bold text-[#9B1B1E] uppercase tracking-wider">{leader.designation}</p>
              <p className="text-xs text-slate-500 mt-1">{leader.organization}</p>
            </div>
            <div className="pt-2 border-t border-slate-200">
              <Link
                href="/Curriculum"
                className="w-full py-2.5 px-4 bg-[#9B1B1E] hover:bg-[#781215] text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <FaBookOpen />
                <span>Explore Academic Framework</span>
              </Link>
            </div>
          </div>

          {/* Message Content Column */}
          <div className="lg:col-span-8 space-y-6">
            <div className="p-6 bg-red-50/70 border-l-4 border-[#9B1B1E] rounded-r-2xl">
              <div className="flex items-start gap-3">
                <FaQuoteLeft className="text-2xl text-[#9B1B1E] shrink-0 mt-1" />
                <p className="text-sm sm:text-base font-medium text-slate-800 italic leading-relaxed">
                  &ldquo;{leader.shortQuote}&rdquo;
                </p>
              </div>
            </div>

            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p className="font-semibold text-lg text-[#0B2240]">Respected Parents,</p>
              <p>
                At our network, we believe that education is not merely the transmission of knowledge, but the shaping of character, critical thinking, and future readiness. Our academic structure is meticulously crafted to meet modern educational standards while keeping our cultural values intact. We offer a well-structured, progressive learning journey divided distinctively into <strong>Pre-School</strong> and <strong>Senior School</strong> levels to cater to the developmental needs of every child.
              </p>

              <h4 className="text-lg font-bold text-[#0B2240] pt-2">
                1. Pre-School Department: Foundation of Lifelong Learning
              </h4>
              <p>
                Our Pre-School program is specially designed to provide a nurturing, joyful, and stimulating environment where early childhood development is prioritized through hands-on experiences. We believe that the foundation of learning begins with curiosity, exploration, and sensory engagement.
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2 text-slate-600">
                <li><strong>Single National Curriculum (SNC) Alignment:</strong> Ensuring a balanced and standardized start to foundational learning.</li>
                <li><strong>Maria Montessori Based Activities:</strong> Authentic apparatus fostering independence, motor skills, and self-directed learning.</li>
                <li><strong>Specialized Phonics (English & Urdu):</strong> Jolly Phonics and structured Urdu phonics for early sound and reading mastery.</li>
                <li><strong>Core Literacy & Numeracy Mastery:</strong> Precise letter identification, sound formation, and pencil grip development.</li>
              </ul>

              <h4 className="text-lg font-bold text-[#0B2240] pt-2">
                2. Senior School Department: Empowering Future Leaders
              </h4>
              <p>
                As students transition into Senior School, our academic focus shifts toward analytical depth, practical application, conceptual clarity, and future readiness. We equip our students to excel academically while developing the essential skills required for the 21st-century global landscape.
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2 text-slate-600">
                <li><strong>Project-Based Learning (PBL):</strong> Real-world inquiry moving away from rote memorization.</li>
                <li><strong>STEAM & Foundational Coding:</strong> Interdisciplinary science, tech, logic building, and computational thinking.</li>
                <li><strong>Pakistan&apos;s Most Comprehensive Future Skills:</strong> AI literacy, spoken English, life ethics, health & fitness, entrepreneurship, and home economics.</li>
              </ul>

              <div className="pt-6 border-t border-slate-200">
                <p className="font-bold text-[#0B2240]">Warm regards,</p>
                <p className="font-bold text-[#9B1B1E] text-lg">Uzair Ahmad</p>
                <p className="text-xs text-slate-500">Academic Head</p>
                <p className="text-xs text-slate-500">PEN Schools Network</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AcademicHeadMessage;
