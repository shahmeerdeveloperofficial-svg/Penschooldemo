"use client";

import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
gsap.registerPlugin(ScrollTrigger);

const LenisSmooth = () => {
  const lenisRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    if (lenisRef.current) lenisRef.current.scrollTo(0, { immediate: true });
  }, [pathname, lenisRef]);

  useEffect(() => {
    // Check if device is desktop / non-touch
    if (typeof window === "undefined" || window.innerWidth < 1024 || "ontouchstart" in window) {
      return;
    }

    const lenis = new Lenis();
    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);
    const tickerCallback = (time) => {
      lenis.raf(time * 800);
    };
    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
    };
  }, []);

  return true;
};

export default LenisSmooth;

