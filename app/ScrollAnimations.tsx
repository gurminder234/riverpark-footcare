"use client";

import { useEffect } from "react";

export default function ScrollAnimations() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".service-card, .why-card, .why-image, .gallery-photo, .about-text, .about-photo"
    );

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (
      reduceMotion ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    document.documentElement.classList.add("scroll-ready");

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("scroll-ready");
    };
  }, []);

  return null;
}