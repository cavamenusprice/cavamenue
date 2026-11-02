import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0A6847",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://cavamenue.us"),
  title: {
    default: "Cava Menu With Prices and Calories 2026",
    template: "%s | CAVA Menu",
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  verification: {
    google: "p9LpkJddW9KWZI5a4ogy0erH0sMWbCKSEodZ6OAOIo8",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  description:
    "Are you looking for the latest Cava menu with prices? Explore bowls, pitas, dips, sides, drinks, and calories to find your next favorite meal.",
  keywords: [
    "cava menu",
    "cava menu prices",
    "cava menu with prices",
    "cava bowls",
    "cava pitas",
    "cava nutrition calculator",
    "cava calorie calculator",
    "cava prices 2026",
    "cava full food list",
  ],
  openGraph: {
    title: "Cava Menu With Prices and Calories 2026",
    description:
      "Are you looking for the latest Cava menu with prices? Explore bowls, pitas, dips, sides, drinks, and calories to find your next favorite meal.",
    url: "https://cavamenue.us",
    images: [
      {
        url: "/images/Cava%20Menu.webp",
        width: 1200,
        height: 630,
        alt: "Cava Menu",
      },
    ],
    type: "website",
    siteName: "CAVA Menu",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cava Menu With Prices and Calories 2026",
    description:
      "Are you looking for the latest Cava menu with prices? Explore bowls, pitas, dips, sides, drinks, and calories to find your next favorite meal.",
    images: ["/images/Cava%20Menu.webp"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta
          name="google-site-verification"
          content="p9LpkJddW9KWZI5a4ogy0erH0sMWbCKSEodZ6OAOIo8"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-L8CRSEN1H1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-L8CRSEN1H1');
          `}
        </Script>
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "z7dnv1cg3y");
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col bg-white">
        <Navbar />
        <div className="flex-1 pt-20">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
