import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import {Navbar} from "@/components/ui/navbar";
import { Footer } from "@/components/ui/Footer";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Toaster } from "@/components/ui/toaster";
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
      </body>
    </html>
  );
}
