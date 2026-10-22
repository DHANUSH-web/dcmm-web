// custom imports
import { interSans, geistMono } from "@/components/fonts";
import ThemeProvider from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toast";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import { developer } from "@/opabinia-config.json";
import "./globals.css";

// next standard imports
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Opabinia advanced Mac SSD cleaner",
  description: `Designed and Developed by ${developer.name}`,
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html
      lang="en"
      className={`${interSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          enableSystem
          disableTransitionOnChange
          defaultTheme="system"
        >
          <NavBar />
          <div className="h-16 invisible"></div>
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
