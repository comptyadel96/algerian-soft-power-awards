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

    const { candidateId, weight } = await req.json();

    if (!candidateId) {
      return NextResponse.json(
        { error: "Candidate ID is required" },
        { status: 400 },
      );
    }

    // Check if already voted
    const existingVote = await prisma.vote.findUnique({
      where: {
        userId_candidateId: {
          userId: payload.id,
          candidateId,
        },
      },
    });

    if (existingVote) {
      return NextResponse.json(
        { error: "You have already voted for this candidate" },
        { status: 409 },
      );
    }

    const vote = await prisma.vote.create({
      data: {
        userId: payload.id,
        candidateId,
        weight: weight || 1,
      },
    });

    // Update candidate vote count
    await prisma.candidateSubmission.update({
      where: { id: candidateId },
      data: { votes: { increment: weight || 1 } },
    });

    return NextResponse.json(
      { message: "Vote recorded successfully", vote },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error voting:", error);
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

    const votes = await prisma.vote.findMany({
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
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(votes);
  } catch (error) {
    console.error("Error fetching votes:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  } finally {
    await prisma.$disconnect();
  }
}
