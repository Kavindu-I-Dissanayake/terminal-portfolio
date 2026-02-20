"use client";

import { useEffect } from "react";

export default function ScrollToTopOnLoad() {
  useEffect(() => {
    // Disable browser scroll restoration (so refresh doesn't keep old position)
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Force to top on load AND after the browser finishes restoring layout
    const goTop = () => window.scrollTo(0, 0);

    goTop(); // immediate
    requestAnimationFrame(goTop); // next frame
    setTimeout(goTop, 0); // after current task
    setTimeout(goTop, 50); // after paint (helps some browsers)

    // If there's a hash, remove it to prevent jumping
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  return null;
}