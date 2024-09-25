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
  title: "Tio Ramadhan | Full Stack Developer | Web & Software Projects",
  description:
    "Explore the portfolio of Tio Ramadhan, a Full Stack Developer specializing in modern web applications, love clean UI/UX design, and scalable software solutions.",
  keywords: [
    "Tio Ramadhan",
    "Full Stack Developer",
    "Web Developer Portfolio",
    "Software Engineer",
    "UI/UX Design",
    "Next.js Developer",
    "React.js Developer",
    "JavaScript Developer",
    "Portfolio Website",
    "tioramadhn.dev",
  ],
  openGraph: {
    url: "https://tioramadhn.dev",
    title: "Tio Ramadhan | Full Stack Developer | Web & Software Projects",
    description:
      "Tio Ramadhan's portfolio showcasing web and software projects. Specializing in modern UI/UX design and scalable software solutions.",
    siteName: "Tio Ramadhan - Full Stack Developer",
    type: "website",
    images: [
      {
        url: "/og.png", // Ensure this image represents your portfolio brand
        width: 976,
        height: 748,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
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
      <head>
        <link rel="canonical" href={`https://tioramadhn.dev`} />
      </head>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-35CPCBTXEM"
      ></script>
      <script>
        window.dataLayer = window.dataLayer || []; function gtag()
        {dataLayer.push(arguments)}; gtag('js', new Date()); gtag('config',
        'G-35CPCBTXEM');
      </script>
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
            <MaxWidthWrapper className="flex-1 grow md:border-l flex">
              {children}
            </MaxWidthWrapper>
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
