"use client";

import { useState } from "react";
import { Document, Page } from "react-pdf";
import { motion, AnimatePresence } from "framer-motion";
import "@/lib/pdfWorker";

export default function PdfReader({ file }) {
  const [page, setPage] = useState(1);

  return (
    <div className="pdf-wrapper">
      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          className="pdf-page"
          initial={{ rotateY: 90, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          exit={{ rotateY: -90, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Document file={file}>
            <Page pageNumber={page} width={420} />
          </Document>
        </motion.div>
      </AnimatePresence>

      <div className="controls">
        <button onClick={() => setPage(p => Math.max(p - 1, 1))}>
          ◀ Prev
        </button>
        <span>Page {page}</span>
        <button onClick={() => setPage(p => p + 1)}>
          Next ▶
        </button>
      </div>
    </div>
  );
}
