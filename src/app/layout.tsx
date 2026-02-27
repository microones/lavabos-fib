import type { Metadata } from "next";
// Replace Geist with Inter and Fira Code (both open‑source)
import { Inter, Fira_Code } from "next/font/google";
import Navbar from "../components/Navbar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fira = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "lavabos-fib",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ca">
      <body className={`${inter.variable} ${fira.variable} antialiased`}>
        <Navbar />
        <main className="px-8 py-6">{children}</main>
      </body>
    </html>
  );
}
