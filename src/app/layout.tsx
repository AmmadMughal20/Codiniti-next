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
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  themeColor: "#FF5E3A"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)
{
  return (
    <html lang="en" dir="ltr">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N8XKQQLV');`
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N8XKQQLV"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
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
                "https://twitter.com/codiniti",
                "https://www.facebook.com/profile.php?id=100093846410676",
                "https://www.instagram.com/codiniti/"
              ]
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Codiniti",
              "url": "https://www.codiniti.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.codiniti.com/?s={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }),
          }}
        />
      </body>
    </html>
  );
}
