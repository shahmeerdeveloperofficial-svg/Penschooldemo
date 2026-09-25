import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeroHeader from "@/components/HeroHeader";
import { leadershipData } from "@/constants/penData";
import { FaQuoteLeft, FaShieldAlt } from "react-icons/fa";

export const metadata = {
  title: "Chairman's Message | PEN School System",
  description: "Message from M. Ijaz Ahmad, Chairman, Paradigm Educational Network.",
};

const ChairmanMessage = () => {
  const leader = leadershipData.chairman;

  return (
    <main>
      <HeroHeader
        title={"Chairman's Message"}
        description="A legacy of values, visionary education, and lifelong character formation."
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
              <p className="text-xs font-bold text-amber-600 uppercase tracking-wider">{leader.designation}</p>
              <p className="text-xs text-slate-500 mt-1">{leader.organization}</p>
            </div>
            <div className="pt-2 border-t border-slate-200">
              <Link
                href="/AboutUs"
                className="w-full py-2.5 px-4 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <FaShieldAlt />
                <span>About Paradigm Network</span>
              </Link>
            </div>
          </div>

          {/* Message Content Column */}
          <div className="lg:col-span-8 space-y-6">
            <div className="p-6 bg-amber-50/70 border-l-4 border-amber-500 rounded-r-2xl">
              <div className="flex items-start gap-3">
                <FaQuoteLeft className="text-2xl text-amber-600 shrink-0 mt-1" />
                <p className="text-sm sm:text-base font-medium text-slate-800 italic leading-relaxed">
                  &ldquo;{leader.shortQuote}&rdquo;
                </p>
              </div>
            </div>

            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p className="font-semibold text-lg text-[#0B2240]">
                Dear Students, Respected Parents, and Valued Educators,
              </p>
              <p>
                Welcome to <strong>Paradigm Educational Network (PEN Schools)</strong>. When we laid the foundation of this network, our singular vision was to transcend traditional rote learning and create an ecosystem where academic brilliance meets unwavering moral character.
              </p>
              <p>
                In an era of rapid technological acceleration, our youth need more than standard textbooks—they need adaptability, ethical grounding, critical reasoning, and entrepreneurial thinking. We are immensely proud of our faculty and administration who work relentlessly to ensure our campuses are hubs of innovation, warmth, and lifelong learning.
              </p>
              <p>
                We thank our parent community for their enduring trust and invite you to join hands with us as we empower tomorrow&apos;s leaders.
              </p>

              <div className="pt-6 border-t border-slate-200">
                <p className="font-bold text-[#0B2240]">With best wishes,</p>
                <p className="font-bold text-[#0B2240] text-lg">M. Ijaz Ahmad</p>
                <p className="text-xs text-slate-500">Founder & Chairman</p>
                <p className="text-xs text-slate-500">Paradigm Educational Network / PEN Schools</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ChairmanMessage;
