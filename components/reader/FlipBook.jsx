"use client";

import { useEffect, useRef } from "react";
import { PageFlip } from "page-flip";

export default function FlipBook({ pages }) {
  const bookRef = useRef(null);
  const pageFlipRef = useRef(null);

  useEffect(() => {
    if (!bookRef.current) return;

    pageFlipRef.current = new PageFlip(bookRef.current, {
      width: 420,
      height: 600,
      size: "fixed",
      showCover: false,
      maxShadowOpacity: 0.5,
      drawShadow: true,
      useMouseEvents: true,
    });

    pageFlipRef.current.loadFromHTML(
      document.querySelectorAll(".flip-page")
    );
  }, []);

  return (
    <div ref={bookRef} className="mx-auto">
      {pages.map((page, i) => (
        <div key={i} className="flip-page bg-white">
          {page}
        </div>
      ))}
    </div>
  );
}
