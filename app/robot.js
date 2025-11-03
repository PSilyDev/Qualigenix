import { siteMeta } from "@/lib/seo";

export default function robots() {
  const host = siteMeta.url.replace(/^https?:\/\//, "");
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    host,
    sitemap: `${siteMeta.url}/sitemap.xml`,
  };
}
