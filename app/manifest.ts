import type { MetadataRoute } from "next";
import { defaultDescription, siteName } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteName,
    short_name: "Jean Portfolio",
    description: defaultDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#f7f1e8",
    theme_color: "#142946",
    icons: [
      {
        src: "/images/profile.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
