import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeroHeader from "@/components/HeroHeader";
import { leadershipData } from "@/constants/penData";
import { FaQuoteLeft, FaBuilding, FaWhatsapp } from "react-icons/fa";

export const metadata = {
  title: "Director of Operations' Message | PEN School System",
  description: "Message from H. Ali Nasir, Director of Operations, PEN SCHOOLS / Paradigm Educational Network.",
};

const DirectorMessage = () => {
  const leader = leadershipData.director;

  return (
    <main>
      <HeroHeader
        title={"Director of Operations' Message"}
        description="Operational excellence in support of academic achievement."
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
                href="/Campuses"
                className="w-full py-2.5 px-4 bg-[#0B2240] hover:bg-[#9B1B1E] text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <FaBuilding />
                <span>Explore Campus Facilities</span>
              </Link>
            </div>
          </div>

          {/* Message Content Column */}
          <div className="lg:col-span-8 space-y-6">
            <div className="p-6 bg-blue-50/70 border-l-4 border-[#0B2240] rounded-r-2xl">
              <div className="flex items-start gap-3">
                <FaQuoteLeft className="text-2xl text-[#0B2240] shrink-0 mt-1" />
                <p className="text-sm sm:text-base font-medium text-slate-800 italic leading-relaxed">
                  &ldquo;{leader.shortQuote}&rdquo;
                </p>
              </div>
            </div>

            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p className="font-semibold text-lg text-[#0B2240]">
                Message from the Director of Operations
              </p>
              <p>
                On behalf of <strong>Paradigm Educational Network (PEN SCHOOLS)</strong>, I extend a warm welcome to our students, parents, and faculty.
              </p>
              <p>
                Our commitment is to operational excellence in support of academic achievement. From campus safety and facility management to transport, staffing, and parent communication, every process is designed to ensure a secure, efficient, and conducive learning environment.
              </p>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <h4 className="font-bold text-[#0B2240] text-sm">To Our Students:</h4>
                <p className="text-xs sm:text-sm text-slate-600">
                  We encourage you to uphold discipline, embrace responsibility, and pursue continuous improvement. Your dedication today will define your success tomorrow.
                </p>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <h4 className="font-bold text-[#0B2240] text-sm">To Our Parents:</h4>
                <p className="text-xs sm:text-sm text-slate-600">
                  We value the trust you place in us. We remain dedicated to maintaining high standards of service, transparency, and accountability across all operations.
                </p>
              </div>

              <p>
                We look forward to a productive and successful academic year together.
              </p>

              <div className="pt-6 border-t border-slate-200">
                <p className="font-bold text-[#0B2240]">Sincerely,</p>
                <p className="font-bold text-[#0B2240] text-lg">H. Ali Nasir</p>
                <p className="text-xs text-slate-500">Operation Management Director</p>
                <p className="text-xs text-slate-500">PEN SCHOOLS / Paradigm Educational Network</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DirectorMessage;
