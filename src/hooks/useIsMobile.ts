"use client";

import { useEffect, useState } from "react";

export function useIsMobile(maxWidth: number = 768) {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth <= maxWidth);
    checkSize(); 
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, [maxWidth]);

  return isMobile;
}