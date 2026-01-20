import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getTokenFromRequest, verifyToken } from "@/lib/auth";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const token = getTokenFromRequest(req);

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const payload = verifyToken(token);

    if (!payload) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { candidateId, categoryId, message } = await req.json();

    if (!candidateId || !categoryId) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Check if already nominated
    const existingNomination = await prisma.nomination.findUnique({
      where: {
        userId_candidateId: {
          userId: payload.id,
          candidateId,
        },
      },
    });

    if (existingNomination) {
      return NextResponse.json(
        { error: "You have already nominated this candidate" },
        { status: 409 },
      );
    }

    const nomination = await prisma.nomination.create({
      data: {
        userId: payload.id,
        candidateId,
        categoryId,
        message,
      },
    });

    return NextResponse.json(
      { message: "Nomination created successfully", nomination },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error creating nomination:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  } finally {
    await prisma.$disconnect();
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const candidateId = searchParams.get("candidateId");

    const where: any = {};

    if (candidateId) {
      where.candidateId = candidateId;
    }

    const nominations = await prisma.nomination.findMany({
      where,
      include: {
        user: {
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
          },
        },
        category: true,
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(nominations);
  } catch (error) {
    console.error("Error fetching nominations:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  } finally {
    await prisma.$disconnect();
  }
}
