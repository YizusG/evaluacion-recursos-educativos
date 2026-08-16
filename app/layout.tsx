import type { Metadata } from "next";
import "./globals.css";
import "./corrections.css";

export const metadata: Metadata = {
  title: "Evaluación de Recursos Educativos Digitales",
  description: "Portafolio académico de Jesús Alberto Giraldo Zapata — UDES.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
