import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import {Navbar} from "@/components/ui/navbar";
import { Footer } from "@/components/ui/Footer";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const urbanist = Urbanist({subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Funko Market",
  description: "Welcome to Funko Market",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <Navbar />
        {children}
        <Toaster />
        <Footer />
      </ThemeProvider>
      <Analytics />
      </body>
    </html>
  );
}
