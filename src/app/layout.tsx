import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/Providers/Theme";
import { DotedBackground } from "@/components/DotedBackground";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "tioramadhn | Official Portfolio Website",
  description: "Ini adalah website portofolio pribadi punyanya tio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex flex-col min-h-screen overflow-x-hidden">
            <Header />
            <DotedBackground />
            <MaxWidthWrapper className="flex-1 grow border-l ">
              {children}
            </MaxWidthWrapper>
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
