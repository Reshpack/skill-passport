import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const user = await prisma.user.upsert({
    where: { email: "test@example.com" },
    update: {},
    create: {
      email: "test@example.com",
      name: "Test User",
    },
  });

  await prisma.skillPost.create({
    data: {
      userId: user.id,
      title: "Test Skill",
      description: "DB write test",
      visibility: "PUBLIC",
      level: "BEGINNER",
    },
  });

  const latest = await prisma.skillPost.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
    take: 5,
  });

  return NextResponse.json({ ok: true, latest });
}
