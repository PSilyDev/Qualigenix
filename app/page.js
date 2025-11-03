import { prisma } from "@/lib/db";
import Hero from "@/components/Hero";
import FAQ from "@/components/FAQ";
import { FaqJsonLd } from "@/components/Seo";
import ServicesGrid from "@/components/ServicesGrid";
import Stats from "@/components/Stats";
import FollowUpFeatures from "@/components/FollowUpFeatures";
import Specialties from "@/components/Specialties";
import Insights from "@/components/Insights";
import Testimonials from "@/components/Testimonials";

export const revalidate = 60;
export const dynamic = "force-static";

export default async function Page() {
  const faqs = await prisma.faqItem.findMany({
    where: { published: true },
    orderBy: { sortOrder: "asc" },
  });

  return (
    <>
      <Hero />
      <ServicesGrid />
      <Stats />
      <FollowUpFeatures />
      <Specialties />
      <Insights />
      <Testimonials />

      <section id="faq" className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Frequently Asked Questions
        </h2>
        <FAQ items={faqs} />
      </section>
    </>
  );
}
