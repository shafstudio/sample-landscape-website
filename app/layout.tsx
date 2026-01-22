import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactButton from "@/components/ContactButton";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Scape - Modern Minimalist Landscape Architecture",
  description: "Bespoke outdoor environments designed for the modern estate, blending architectural precision with organic serenity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${manrope.variable} bg-background-light dark:bg-background-dark text-[#0d1b10] dark:text-white transition-colors duration-300`}>
        <Navbar />
        {children}
        <Footer />
        <ContactButton />
      </body>
    </html>
  );
}
