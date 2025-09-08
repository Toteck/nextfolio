import  { useRef, useState } from "react";
import { Button } from  "../Button"
import html2pdf from "html2pdf.js";

export function PdfExporter() {
  const pdfRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const handleExportPdf = async () => {
    setLoading(true);
    const element = pdfRef.current;
    if (element) {
      const options = {
        margin: 10,
        filename: "curriculo.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      };

      try {
        await html2pdf().from(element).set(options).save();
      } catch (error) {
        console.error("Erro ao gerar PDF:", error);
      } finally {
        setLoading(false);
      }
    } else {
      console.error("Elemento para exportação de PDF não encontrado.");
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <Button
        label={loading ? "Gerando PDF..." : "Exportar para PDF"}
        onClick={handleExportPdf}
        variant="primary"
        tooltip="Exportar currículo como PDF"
      />

    </div>
  );
}
