import React from "react";
import HeroHeader from "@/components/HeroHeader";
import CampusSelector from "@/components/CampusSelector";
import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaGraduationCap } from "react-icons/fa";

export const metadata = {
  title: "Network Campuses & Interactive Locator | PEN School System",
  description: "Explore all PEN School System and Paradigm Educational Network campuses across Pakpattan, Sahiwal, Arifwala, and Lahore.",
};

const CampusesPage = () => {
  return (
    <main>
      <HeroHeader
        title={"Network Campuses & Locator"}
        description="Purpose-built educational environments across Punjab fostering holistic development, safety, and modern learning."
      />

      <div className="space-y-12">
        <CampusSelector />

        {/* Central Admissions Help for Campuses */}
        <section className="maxWSec px-4 sm:px-8 pb-16">
          <div className="bg-gradient-to-br from-[#0B2240] to-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-xl border border-white/10">
            <h3 className="text-2xl sm:text-3xl font-bold">
              Looking for Admission Assistance at Any Campus?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Our central admissions team provides guided campus tours, curriculum consultations, and fee structure details.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                href="/OnlineAdmission"
                className="px-6 py-3 bg-[#9B1B1E] hover:bg-[#781215] text-white rounded-xl font-bold text-sm transition-all shadow-md"
              >
                Apply for Central Admission
              </Link>
              <a
                href="https://wa.me/923016666233?text=Hello%20PEN%20School%20System,%20I%20would%20like%20to%20visit%20a%20campus."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl font-bold text-sm transition-all flex items-center gap-2 shadow-md"
              >
                <FaWhatsapp className="text-lg" />
                <span>Chat with Admissions Officer (+92 301 6666233)</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default CampusesPage;
