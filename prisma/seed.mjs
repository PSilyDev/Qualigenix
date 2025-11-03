import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  datasources: { db: { url: process.env.DIRECT_URL } } // use direct for seeding
});

const data = [
  { slug: 'services', question: 'What AR follow-up services do you provide?', answer: 'Payer outreach, denial management, aged AR, and real-time tracking.', sortOrder: 10, published: true },
  { slug: 'onboarding-speed', question: 'How fast can we get started?', answer: 'Most customers onboard in 1–2 weeks depending on EHR/EMR integrations.', sortOrder: 20, published: true }
];

(async () => {
  for (const it of data) {
    await prisma.faqItem.upsert({ where: { slug: it.slug }, update: it, create: it });
  }
  await prisma.$disconnect();
  console.log('Seeded FAQs');
})();
