import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeroHeader from "@/components/HeroHeader";
import { leadershipData } from "@/constants/penData";
import { FaQuoteLeft, FaBuilding, FaWhatsapp, FaHandshake, FaCheckCircle, FaGraduationCap, FaChalkboardTeacher } from "react-icons/fa";

export const metadata = {
  title: "Franchise Sale Regional Manager's Message | PEN School System",
  description: "Message from Mr. Abdul Khaliq, Franchise Sale Regional Manager & Director of PGS Kot Addu Campus.",
};

const FranchiseMessage = () => {
  const leader = leadershipData.franchiseManager;

  return (
    <main>
      <HeroHeader
        title={"Franchise Sales & Regional Leadership"}
        description="Empowering visionary school owners and educational entrepreneurs across Pakistan."
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
              <p className="text-xs font-bold text-emerald-700 uppercase tracking-wider">{leader.designation}</p>
              <p className="text-xs font-semibold text-amber-600 mt-0.5">{leader.campusRole}</p>
              <p className="text-xs text-slate-500 mt-1">{leader.organization}</p>
            </div>
            <div className="pt-2 border-t border-slate-200 flex flex-col gap-2">
              <a
                href="https://wa.me/923016666233?text=Hello%20Mr.%20Abdul%20Khaliq,%20I%20would%20like%20to%20inquire%20about%20PEN%20School%20franchise%20opportunities."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <FaWhatsapp className="text-sm" />
                <span>Contact via WhatsApp</span>
              </a>
              <Link
                href="/Campuses"
                className="w-full py-2.5 px-4 bg-[#0B2240] hover:bg-[#9B1B1E] text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <FaBuilding />
                <span>Explore Network Campuses</span>
              </Link>
            </div>
          </div>

          {/* Message Content Column */}
          <div className="lg:col-span-8 space-y-6">
            <div className="p-6 bg-emerald-50/80 border-l-4 border-emerald-600 rounded-r-2xl">
              <div className="flex items-start gap-3">
                <FaQuoteLeft className="text-2xl text-emerald-700 shrink-0 mt-1" />
                <p className="text-sm sm:text-base font-medium text-slate-800 italic leading-relaxed">
                  &ldquo;{leader.shortQuote}&rdquo;
                </p>
              </div>
            </div>

            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p className="font-semibold text-lg text-[#0B2240]">
                Message from the Franchise Sale Regional Manager & Director Kot Addu
              </p>
              <p>
                On behalf of <strong>Paradigm Educational Network (PEN SCHOOLS)</strong>, I extend a warm welcome to all aspiring school owners, educators, and community leaders.
              </p>
              <p>
                Our mission is to expand accessible, high-standard schooling throughout Pakistan by offering a reliable and proven franchise partnership model. From turnkey architectural planning and Montessori setups to SNC curriculum and central audits, we equip you with everything needed for academic and operational success.
              </p>

              {/* Key Franchise Advantages */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-1.5">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <FaCheckCircle />
                    <span>Turnkey Campus Setup</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Comprehensive support in infrastructure planning, Montessori apparatus procurement, and campus branding.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-1.5">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <FaGraduationCap />
                    <span>Standardized SNC & Phonics</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    SNC-aligned curriculum combined with Jolly Phonics and hands-on Maria Montessori activities.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-1.5">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <FaChalkboardTeacher />
                    <span>Continuous Teacher Training</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Network-wide professional development workshops and centralized academic quality audits.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-1.5">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                    <FaHandshake />
                    <span>Marketing & Operational Growth</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Digital campaigns, admissions counseling, and administrative guidance for sustainable profitability.
                  </p>
                </div>
              </div>

              <div className="p-5 bg-amber-50/60 rounded-2xl border border-amber-200/80 space-y-2">
                <h4 className="font-bold text-[#0B2240] text-sm">Join the PEN School Franchise Network:</h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Whether you are starting a new school or upgrading an existing institute, our team is ready to provide complete operational, academic, and marketing support.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-200">
                <p className="font-bold text-[#0B2240]">Warm Regards,</p>
                <p className="font-bold text-[#0B2240] text-lg">Abdul Khaliq</p>
                <p className="text-xs font-semibold text-emerald-700">Franchise Sale Regional Manager</p>
                <p className="text-xs text-slate-500">Director of PGS Kot Addu Campus</p>
                <p className="text-xs text-slate-500">PEN SCHOOLS / Paradigm Educational Network</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FranchiseMessage;
