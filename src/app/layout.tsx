import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import Navbar from "../components/Navbar";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const fira = Fira_Code({ variable: "--font-fira-code", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "lavabos-fib | La guia definitiva",
  description: "On cagar millor a la FIB",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ca" className="scroll-smooth">
      <body
        className={`${inter.variable} ${fira.variable} antialiased min-h-screen bg-[var(--background)] text-[var(--foreground)]`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
