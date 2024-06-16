import type { Metadata } from "next";
import "./globals.css";
import PortfolioLayout from "@/Components/PortfolioLayout";
import ThemeProviderNext from "@/Components/ThemeProvider";
import local from "next/font/local"
const neueFont = local({
  src: "./NeueMontreal-Light.otf",
  variable: "--font-neue"
})
const neueFontRegular = local({
  src: "./PPNeueMontreal-Book.otf",
  variable: "--font-neue-regular"
})

const neueMono = local({
  src: "./PPNeueMontrealMono-Thin.otf",
  variable: "--font-neue-mono"
})

export const metadata: Metadata = {
  title: {
    template: '%s',
    default: "Portfolio"
  },
  description: "This is my official portfolio website to showcase my various projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`
         ${neueFont.className} 
         ${neueFontRegular.variable}
         ${neueMono.variable} antialiased  `}>
        <ThemeProviderNext >
          <PortfolioLayout>
            {children}
          </PortfolioLayout>
        </ThemeProviderNext>
      </body>
    </html>
  );
}
