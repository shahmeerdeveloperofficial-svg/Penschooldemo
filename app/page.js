import dynamic from "next/dynamic";
import HeroHeader from "../components/HeroHeader";
import LeadershipDesk from "../components/LeadershipDesk";
import DirectorSpotlight from "../components/DirectorSpotlight";

const Marquee = dynamic(() => import("../components/Marquee"), { ssr: false });
const SportsGalaSection = dynamic(() => import("../components/SportsGalaSection"));
const MontessoriClassrooms = dynamic(() => import("../components/MontessoriClassrooms"));
const ActivityBasedLearning = dynamic(() => import("../components/ActivityBasedLearning"));
const AcademicShowcase = dynamic(() => import("../components/AcademicShowcase"));
const NetworkStats = dynamic(() => import("../components/NetworkStats"));
import CampusSelector from "../components/CampusSelector";
const CircularsHub = dynamic(() => import("../components/CircularsHub"));
const MediaGallery = dynamic(() => import("../components/MediaGallery"));
const Bento = dynamic(() => import("../components/Bento"));
const About = dynamic(() => import("@/components/About"));
const Clubs = dynamic(() => import("../components/Clubs"));
const AccessLMS = dynamic(() => import("../components/AccessLMS"));

export default function Home() {
  return (
    <main className="space-y-6">
      {/* 1. Hero Header with 2-Column Animated Showcase & Badges */}
      <HeroHeader
        title={
          <>
            PEN School <span className="text-amber-400">System</span>
          </>
        }
        description="A Project of Paradigm Educational Network. Shaping character, critical thinking, and 21st-century future readiness across Punjab."
      />

      {/* 2. Urgent Announcement Marquee */}
      <Marquee
        direction={"right"}
        speed={0.2}
        List={[
          "🌟 Admissions Open 2026-2027: Pre-School, Montessori, Junior & Senior School across all campuses.",
          "🏆 Annual Sports Gala Celebrated at Bahria Town Campus with 100% Student Participation!",
          "🚀 Pakistan's Most Comprehensive Future Skills Program: AI, STEAM, Coding & Spoken English.",
          "📞 Central Admissions Hotline & WhatsApp: +92 301 6666233",
        ]}
      />

      {/* 3. Leadership Desk (Matching Future Foundation Reference Design: Chairman, Director, Academic Head, Co-Director) */}
      <LeadershipDesk />

      {/* 4. Director of Operations (H. Ali Nasir) Official Graphic Poster Spotlight */}
      <DirectorSpotlight />

      {/* 5. Recently Performed Events: Annual Sports Gala & Athletics Carnival */}
      <SportsGalaSection />

      {/* 6. Purpose-Built Montessori Classrooms (ABCD Round Tables, Sensory Racks & Decor) */}
      <MontessoriClassrooms />

      {/* 7. Activity-Based Learning & Music Classes (Count & Paste, Alphabet Tracing, STEAM) */}
      <ActivityBasedLearning />

      {/* 8. Central Academic Standards & Curriculum (Pre-School vs Senior School + 7 Future Skills) */}
      <AcademicShowcase />

      {/* 9. Network Statistics & Milestones (5,000+ Students, 15+ Campuses, 250+ Teachers) */}
      <NetworkStats />

      {/* 10. Campus Selector & Interactive Locator */}
      <CampusSelector />

      {/* 11. Central Circulars, Notices & Announcements */}
      <CircularsHub />

      {/* 12. Full Network Media & Activity Gallery (68 Photos with Lightbox) */}
      <MediaGallery />

      {/* 13. Core Mission, Vision & Highlights */}
      <Bento />

      {/* 14. Why Families Choose PEN School System */}
      <About />

      {/* 15. Student Clubs & Societies */}
      <Clubs direction={"right"} speed={0.2} />

      {/* 16. Online Admission & Portal Access */}
      <AccessLMS />
    </main>
  );
}
