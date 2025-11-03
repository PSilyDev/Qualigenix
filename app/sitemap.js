import { prisma } from "@/lib/db";
import { siteMeta } from "@/lib/seo";

export default async function sitemap() {
  const base = siteMeta.url;
  const faq = await prisma.faqItem.findMany({ where: { published: true } });
  return [
    { url: `${base}/`, lastModified: new Date() },
    ...faq.map((f) => ({ url: `${base}/#faq-${f.slug}`, lastModified: f.updatedAt })),
  ];
}
