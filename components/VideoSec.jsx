import React from "react";
import Button from "./ui/Button";

const VideoSec = () => {
  return (
    <section className="p-4 min-h-[34rem] w-full">
      <div
        className="w-full min-h-[32rem] relative overflow-hidden rounded-3xl maxW bg-sec"
        style={{ clipPath: "inset(0 0 0 0 round 1.5rem 1.5rem 1.5rem 1.5rem)" }}
      >
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_80%_20%,#d7a51b_0,transparent_35%)]"></div>
        <div className="min-h-[32rem] relative z-20 flex flex-col justify-center items-center gap-4 text-light px-6">
          <h1
            style={{ textShadow: "0 0 1rem #00000020" }}
            className="h1 text-center"
          >
            Learning That Feels
            <br />
            For Life
          </h1>
          <h4
            style={{ textShadow: "0 0 .5rem #00000020" }}
            className="mb-4 text-center max-w-[min(54ch,85%)] leading-normal text-sm sm:text-base"
          >
            PEN School System supports students with structured academics, caring supervision,
            co-curricular opportunities, and a welcoming school culture.
          </h4>
          <div className="flex gap-4 flex-wrap justify-center">
            <a href="tel:+923016666233">
              <Button>Call +92 301 6666233</Button>
            </a>
            <a
              href="/ContactUs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button btnType="sec">Contact School</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSec;
