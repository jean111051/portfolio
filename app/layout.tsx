import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "@/components/layouts/NavBar";
import { Footer } from "@/components/layouts/Footer";
import { SkipLink } from "@/components/atoms/SkipLink";
import { getAuthor } from "@/lib/author";
import { defaultDescription, defaultKeywords, siteName, siteUrl } from "@/lib/seo";

const author = getAuthor();

export const metadata: Metadata = {
  metadataBase: siteUrl,
  applicationName: siteName,
  generator: "Next.js",
  title: {
    default: `${author.name} - Portfolio`,
    template: `%s | ${author.name}`,
  },
  description: defaultDescription,
  authors: [{ name: author.name, url: `mailto:${author.email}` }],
  creator: author.name,
  publisher: author.name,
  category: "portfolio",
  keywords: defaultKeywords,
  alternates: {
    canonical: "/",
    languages: {
      "en-PH": "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_PH",
    siteName,
    title: `${author.name} - Portfolio`,
    description: defaultDescription,
    url: "/",
    images: [{ url: author.avatar, width: 1024, height: 1536, alt: author.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${author.name} - Portfolio`,
    description: defaultDescription,
    images: [author.avatar],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col">
        <SkipLink />
        <NavBar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
