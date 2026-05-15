import type { Metadata } from "next";
import { getAuthor } from "@/lib/author";

const author = getAuthor();

function getSiteUrl() {
  const url =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.VERCEL_PROJECT_PRODUCTION_URL ??
    process.env.VERCEL_URL ??
    "portfolio-nu-sable-58.vercel.app";

  return new URL(url.startsWith("http") ? url : `https://${url}`);
}

export const siteUrl = getSiteUrl();

export const siteName = `${author.name} Portfolio`;

export const defaultDescription = `${author.role} at ${author.agency}. Portfolio and internship activity log for frontend, SEO, Node.js, mobile development, and disaster-response platform work.`;

export const defaultKeywords = [
  author.name,
  "Jean Richelle Gallego",
  "IT intern portfolio",
  "Makerspace Innovhub",
  "Next.js portfolio",
  "TypeScript",
  "frontend development",
  "SEO audit",
  "Node.js",
  "Pangasinan",
];

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function buildPageMetadata({
  title,
  description,
  path = "/",
  type = "website",
  publishedTime,
}: {
  title?: string;
  description: string;
  path?: string;
  type?: "website" | "article";
  publishedTime?: string;
}): Metadata {
  const url = absoluteUrl(path);
  const pageTitle = title ? `${title} | ${author.name}` : `${author.name} - Portfolio`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: {
        "en-PH": path,
      },
    },
    openGraph: {
      type,
      locale: "en_PH",
      siteName,
      title: pageTitle,
      description,
      url,
      images: [
        {
          url: author.avatar,
          width: 1024,
          height: 1536,
          alt: author.name,
        },
      ],
      ...(type === "article"
        ? {
            authors: [author.name],
            publishedTime,
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [author.avatar],
    },
  };
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: author.name,
    jobTitle: author.role,
    email: `mailto:${author.email}`,
    telephone: author.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Manuel",
      addressRegion: "Pangasinan",
      addressCountry: "PH",
    },
    image: absoluteUrl(author.avatar),
    url: absoluteUrl(),
    worksFor: {
      "@type": "Organization",
      name: author.agency,
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: author.degree,
    },
    knowsAbout: [
      "Frontend development",
      "Search engine optimization",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Mobile development",
      "UI design",
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: absoluteUrl(),
    description: defaultDescription,
    inLanguage: "en-PH",
    publisher: {
      "@type": "Person",
      name: author.name,
    },
  };
}
