import type { Metadata } from "next";
//  import { Geist, Geist_Mono } from "next/font/google";
import {Nunito} from "next/font/google";

import "./globals.css";

import Theme from "@/components/Theme";
import DarkLight from "@/components/DarkLight";
import { cn } from "../lib/utils";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });


const nunito = Nunito({
  variable: '--font-nunito', // Variable CSS para usar en Tailwind u otros estilos
  subsets: ['latin'], // Soporte para caracteres latinos
  weight: ['400', '700'], // Puedes añadir más pesos (300, 500, 900, etc.)
});

export const metadata: Metadata = {
  title: "Jerónimo Sánchez - SOCGER",
  description: "socger official portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          nunito.variable, 
          // geistSans.variable,
          // geistMono.variable,
          "antialiased")}
      >
        <Theme>
          <DarkLight />
          {children}
        </Theme>
      </body>
    </html>
  );
}
