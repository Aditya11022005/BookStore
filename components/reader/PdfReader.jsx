"use client";

import { useState, useEffect } from "react";
import { Document, Page } from "react-pdf";
import { useSwipeable } from "react-swipeable";
import Button from "@/components/ui/Button";
import "@/lib/pdfWorker";

/* ---------- MOBILE DETECTION ---------- */
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isMobile;
}

/* ---------- PDF READER ---------- */
export default function PdfReader({ file, bookId }) {
  const [page, setPage] = useState(2); // RIGHT page
  const [numPages, setNumPages] = useState(null);
  const [zoom, setZoom] = useState(0.9);
  const [dark, setDark] = useState(false);

  const isMobile = useIsMobile();

  // Two-page book logic
  const leftPage = page - 1;
  const rightPage = page;

  /* ---------- RESTORE LAST PAGE ---------- */
  useEffect(() => {
    const saved = localStorage.getItem(`page-${bookId}`);
    if (saved) setPage(Number(saved));
  }, [bookId]);

  /* ---------- SAVE PAGE ---------- */
  useEffect(() => {
    localStorage.setItem(`page-${bookId}`, page);
  }, [page, bookId]);

  /* ---------- SWIPE ---------- */
  const swipe = useSwipeable({
    onSwipedLeft: () => page < numPages && setPage(p => p + 1),
    onSwipedRight: () => page > 2 && setPage(p => p - 1),
    delta: 60,
    trackMouse: true,
  });

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-background text-foreground p-4">

        {/* ---------- TOOLBAR ---------- */}
        <div className="flex justify-between items-center mb-4 max-w-5xl mx-auto">
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => setZoom(z => z + 0.1)}>➕</Button>
            <Button variant="outline" onClick={() => setZoom(z => Math.max(0.6, z - 0.1))}>➖</Button>
          </div>

          <Button variant="ghost" onClick={() => setDark(d => !d)}>
            {dark ? "☀️ Light" : "🌙 Dark"}
          </Button>
        </div>

        {/* ---------- BOOK ---------- */}
        <div {...swipe} className="flex justify-center overflow-hidden">
          <Document
            file={file}
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            loading={<p>Loading…</p>}
          >
            <div className="flex flex-row flex-nowrap justify-center overflow-hidden">

              {/* LEFT PAGE (STATIC) */}
              {!isMobile && leftPage >= 1 && (
                <Page
                  pageNumber={leftPage}
                  width={420}
                  scale={zoom}
                />
              )}

              {/* RIGHT PAGE (ACTIVE PAGE) */}
              <div
                key={page}
                className="relative overflow-hidden"
              >
                <Page
                  pageNumber={rightPage}
                  width={420}
                  scale={zoom}
                />
              </div>

            </div>
          </Document>
        </div>

        {/* ---------- FOOTER ---------- */}
        <div className="flex justify-between items-center mt-6 max-w-5xl mx-auto">
          <Button
            variant="outline"
            onClick={() => setPage(p => Math.max(2, p - 1))}
          >
            ◀ Prev
          </Button>

          <span className="text-sm">
            Page {page} / {numPages}
          </span>

          <Button
            variant="outline"
            onClick={() => setPage(p => Math.min(numPages, p + 1))}
          >
            Next ▶
          </Button>
        </div>
      </div>
    </div>
  );
}
