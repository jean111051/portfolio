import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["10.108.142.44"],
  images: {
    formats: ["image/avif", "image/webp"],
  },
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
