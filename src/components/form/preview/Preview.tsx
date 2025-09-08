import React, { useRef } from "react";
import html2pdf from "html2pdf.js";
import { PreviewHeader } from "./PreviewHeader";
import { PreviewResumo } from "./PreviewResumo";
import { PreviewExtraContacts } from "./PreviewExtraContacts";
import { PreviewEducacao } from "./PreviewEducacao";
import { PreviewExperiencias } from "./PreviewExperiencias";
import { PreviewHabilidades } from "./PreviewHabilidades";

export const Preview: React.FC = () => {
  const contentRef = useRef<HTMLDivElement | null>(null);

  const handleExportPdf = () => {
    if (contentRef.current) {
      const options = {
        margin: 10,
        filename: "curriculo.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      };

      html2pdf().set(options).from(contentRef.current).save();
    }
  };

  return (
    <>
      <button onClick={handleExportPdf}>Exportar para PDF</button>
      <div ref={contentRef} className="space-y-4">
        <PreviewHeader />
        <PreviewResumo />
        <PreviewExtraContacts />
        <PreviewEducacao />
        <PreviewExperiencias />
        <PreviewHabilidades />
      </div>
    </>
  );
};
