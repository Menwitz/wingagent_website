"use client";

import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        const targetId = link.getAttribute("href").slice(1);
        const target = document.getElementById(targetId);
        if (target) {
          e.preventDefault();
          window.scrollTo({
            top: target.offsetTop - 80,
            behavior: "smooth",
          });
        }
      });
    });
  }, []);
  return null;
}