"use client";

import { useState } from "react";

type Props = {
  base: string;
  parts: number;
  filename: string;
  label?: string;
};

export default function PdfButton({ base, parts, filename, label = "Ver aplicación completa · PDF" }: Props) {
  const [loading, setLoading] = useState(false);

  async function openPdf() {
    try {
      setLoading(true);
      const requests = Array.from({ length: parts }, (_, i) => {
        const n = String(i + 1).padStart(2, "0");
        return fetch(`${base}-${n}.b64`).then(r => {
          if (!r.ok) throw new Error("No se pudo cargar el PDF");
          return r.text();
        });
      });
      const chunks = await Promise.all(requests);
      const binary = atob(chunks.join("").replace(/\s+/g, ""));
      const bytes = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
      const url = URL.createObjectURL(new Blob([bytes], { type: "application/pdf" }));
      const win = window.open(url, "_blank", "noopener,noreferrer");
      if (!win) {
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        a.click();
      }
      setTimeout(() => URL.revokeObjectURL(url), 60000);
    } catch (error) {
      console.error(error);
      alert("No fue posible abrir el documento. Inténtalo nuevamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <button type="button" className="pdf-action" onClick={openPdf} disabled={loading}>
      {loading ? "Preparando PDF…" : label}
      <span aria-hidden="true">↗</span>
    </button>
  );
}
