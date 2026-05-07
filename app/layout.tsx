import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "@/components/layouts/NavBar";
import { Footer } from "@/components/layouts/Footer";
import { SkipLink } from "@/components/atoms/SkipLink";
import { getAuthor } from "@/lib/author";

const author = getAuthor();

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: `${author.name} - Portfolio`,
    template: `%s | ${author.name}`,
  },
  description: `${author.role} at ${author.agency}. Portfolio and internship activity log for frontend, SEO, Node.js, and disaster-response platform work.`,
  authors: [{ name: author.name, url: `mailto:${author.email}` }],
  keywords: [
    "portfolio",
    "IT intern",
    "Makerspace Innovhub",
    "Next.js",
    "TypeScript",
    "web development",
    "Pangasinan",
  ],
  openGraph: {
    type: "website",
    locale: "en_PH",
    siteName: `${author.name} Portfolio`,
    title: `${author.name} - Portfolio`,
    description: `${author.role} at ${author.agency}. Portfolio and internship activity log.`,
    images: [{ url: author.avatar, width: 1024, height: 1536, alt: author.name }],
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
