import { generateRobots } from "@/lib/seo";

export async function GET() {
  const robots = generateRobots();

  return new Response(robots, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
