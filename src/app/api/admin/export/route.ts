import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getTokenFromRequest, verifyToken } from "@/lib/auth";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    const token = getTokenFromRequest(req);

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const payload = verifyToken(token);

    if (!payload || payload.role !== "ADMIN") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const { searchParams } = new URL(req.url);
    const type = searchParams.get("type") || "full";

    let data: any = {};

    if (type === "full" || type === "stats") {
      // User stats
      const totalUsers = await prisma.user.count();
      const totalAdmins = await prisma.admin.count();
      const totalSubmissions = await prisma.candidateSubmission.count();
      const approvedSubmissions = await prisma.candidateSubmission.count({
        where: { status: "APPROVED" },
      });
      const totalNominations = await prisma.nomination.count();
      const totalVotes = await prisma.vote.count();

      data.stats = {
        totalUsers,
        totalAdmins,
        totalSubmissions,
        approvedSubmissions,
        totalNominations,
        totalVotes,
        generatedAt: new Date().toISOString(),
      };
    }

    if (type === "full" || type === "users") {
      const users = await prisma.user.findMany({
        select: {
          id: true,
          email: true,
          firstName: true,
          lastName: true,
          role: true,
          createdAt: true,
        },
        orderBy: { createdAt: "desc" },
      });
      data.users = users;
    }

    if (type === "full" || type === "submissions") {
      const submissions = await prisma.candidateSubmission.findMany({
        include: {
          category: { select: { title: true } },
          user: { select: { firstName: true, lastName: true, email: true } },
        },
        orderBy: { createdAt: "desc" },
      });
      data.submissions = submissions;
    }

    if (type === "full" || type === "nominations") {
      const nominations = await prisma.nomination.findMany({
        include: {
          user: { select: { firstName: true, lastName: true, email: true } },
          category: { select: { title: true } },
          candidate: { select: { fullName: true } },
        },
        orderBy: { createdAt: "desc" },
      });
      data.nominations = nominations;
    }

    if (type === "full" || type === "votes") {
      const votes = await prisma.vote.findMany({
        include: {
          user: { select: { firstName: true, lastName: true, email: true } },
          candidate: { select: { fullName: true, id: true } },
        },
        orderBy: { createdAt: "desc" },
      });
      data.votes = votes;
    }

    // Set CSV headers for download
    const response = NextResponse.json(data);
    response.headers.set(
      "Content-Disposition",
      `attachment; filename="aspa-export-${new Date().toISOString().split("T")[0]}.json"`,
    );
    return response;
  } catch (error) {
    console.error("Error exporting data:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  } finally {
    await prisma.$disconnect();
  }
}
