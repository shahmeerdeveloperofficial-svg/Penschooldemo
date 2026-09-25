import React from "react";
import HeroHeader from "@/components/HeroHeader";
import CircularsHub from "@/components/CircularsHub";
import MediaGallery from "@/components/MediaGallery";

export const metadata = {
  title: "News, Media & Events Hub | PEN School System",
  description: "Official notices, circulars, media releases, and picture gallery from across the PEN Schools Network.",
};

const NewsAndEventsPage = () => {
  return (
    <main>
      <HeroHeader
        title={"News, Media & Events Hub"}
        description="Centralized circulars, academic notices, and rich visual highlights from our campuses."
      />

      <div className="space-y-6">
        <CircularsHub />
        <MediaGallery />
      </div>
    </main>
  );
};

export default NewsAndEventsPage;
