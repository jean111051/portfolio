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

export const defaultDescription = `Professional portfolio for ${author.name}, a ${author.degree} graduate from ${author.university}, featuring office and computer skills, frontend development, mobile app exposure, documentation, and applied systems projects.`;

export const defaultKeywords = [
  author.name,
  "Jean Richelle Gallego",
  "IT graduate portfolio",
  author.university,
  "Next.js portfolio",
  "TypeScript",
  "frontend development",
  "office support",
  "computer skills",
  "documentation",
  "data entry",
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
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: author.name,
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
    alumniOf: {
      "@type": "EducationalOrganization",
      name: author.university,
    },
    knowsAbout: [
      "Office support",
      "Documentation",
      "Data entry",
      "MS Word",
      "Excel",
      "Google Sheets",
      "Frontend development",
      "Search engine optimization",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Mobile development",
      "UI design",
    ],
    knowsLanguage: author.languages,
  };

  if (author.role) {
    data.jobTitle = author.role;
  }

  if (author.agency) {
    data.worksFor = {
      "@type": "Organization",
      name: author.agency,
    };
  }

  return data;
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
