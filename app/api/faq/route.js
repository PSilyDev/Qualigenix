import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { revalidateTag } from "next/cache";
import { z } from "zod";

const FaqSchema = z.object({
  question: z.string().min(3),
  answer: z.string().min(3),
  slug: z.string().min(1),
  metaTitle: z.string().optional().nullable(),
  metaDescription: z.string().optional().nullable(),
  sortOrder: z.number().int().optional().default(0),
  published: z.boolean().optional().default(true),
});

export async function GET() {
  const items = await prisma.faqItem.findMany({
    where: { published: true },
    orderBy: { sortOrder: "asc" },
  });
  return NextResponse.json(items, { headers: { "Cache-Tag": "faq" } });
}

export async function POST(req) {
  const body = await req.json();
  const data = FaqSchema.parse(body);
  const created = await prisma.faqItem.create({ data });
  revalidateTag("faq");
  return NextResponse.json(created, { status: 201 });
}

export async function PUT(req) {
  const { id, ...rest } = await req.json();
  const parsed = FaqSchema.partial().parse(rest);
  const updated = await prisma.faqItem.update({ where: { id }, data: parsed });
  revalidateTag("faq");
  return NextResponse.json(updated);
}

export async function DELETE(req) {
  const { id } = await req.json();
  await prisma.faqItem.delete({ where: { id } });
  revalidateTag("faq");
  return NextResponse.json({ ok: true });
}
