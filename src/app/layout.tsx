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
  metadataBase: new URL("https://tioramadhn.dev"),
  keywords: [
    "Tio Ramadhan",
    "tioramadhn",
    "Tio Developer",
    "Tayo",
    "Full Stack Developer",
    "Tio Ramadhan Website Portfolio",
    "Tio Portfolio",
    "Portfolionya tio",
    "Software Engineer",
  ],
  openGraph: {
    title: "Tio Ramadhan | Full Stack Developer",
    description:
      "an online portfolio featuring a showcase of my projects and some thoughts as a Full Stack Developer who loves intuitive, clean and modern UI design.",
    siteName: "Tio Ramadhan - Full Stack Developer",
    type: "website",
    url: "https://tioramadhn.dev",
    emails: "tioramadhan9f@gmail.com",
    images: [
      {
        url: "https://tioramadhn.dev/og.png", // Must be an absolute URL
        width: 976,
        height: 748,
      },
    ],
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
            <MaxWidthWrapper className="flex-1 grow border-none md:border-l ">
              {children}
            </MaxWidthWrapper>
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
