import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from '@/store/Provider'


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Codiniti - Software Development",
  description:
    "A custom software development company in Pakistan delivering quality web, mobile, AI, UI/UX, and digital marketing solutions.",
  keywords: [
    "software development",
    "custom software",
    "web development",
    "mobile app development",
    "AI solutions",
    "UI/UX design",
    "digital marketing",
    "Codiniti Pakistan",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Codiniti - Software Development Company",
    description:
      "Trusted partner for web, mobile, AI, and digital solutions worldwide.",
    url: "https://www.codiniti.com",
    siteName: "Codiniti",
    images: [
      {
        url: "/opengraph-image.jpg", // add this file in /public
        width: 1200,
        height: 630,
        alt: "Codiniti Software Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Codiniti - Software Development",
    description:
      "We build web, mobile, AI, and digital solutions that transform businesses.",
    images: ["/opengraph-image.jpg"], // reuse same image
    creator: "@codiniti", // optional
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)
{
  return (
    <html lang="en" dir="ltr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider>
          {children}
        </ReduxProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Codiniti",
              url: "https://www.codiniti.com",
              logo: "https://www.codiniti.com/favicon.ico",
              sameAs: [
                "https://www.linkedin.com/in/codiniti-company-b443ba280/",
                "https://twitter.com/codiniti"
              ]
            }),
          }}
        />
      </body>
    </html>
  );
}
