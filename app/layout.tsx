import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import {Navbar} from "@/components/ui/navbar";
import { Footer } from "@/components/ui/Footer";
import "./globals.css";

const urbanist = Urbanist({subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Tasty Market",
  description: "Welcome to Tasty Market",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
      <Navbar />
      {children}
      <Footer />
      </body>
    </html>
  );
}
