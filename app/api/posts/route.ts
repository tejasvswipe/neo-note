import { NextRequest } from "next/server";
import dbConnect from "@/lib/mongoose";
import PostModel from "@/lib/PostModel";
import { addPost, getPosts } from "@/lib/posts";

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("q")?.trim().toLowerCase();
  const connection = await dbConnect();
  if (connection) {
    const filter = query ? { $or: [{ title: new RegExp(query, "i") }, { category: new RegExp(query, "i") }] } : {};
    return Response.json(await PostModel.find(filter).sort({ createdAt: -1 }).lean());
  }

  const posts = query ? getPosts().filter((post) => `${post.title} ${post.category}`.toLowerCase().includes(query)) : getPosts();
  return Response.json(posts);
}

export async function POST(request: Request) {
  const data = await request.json();
  const post = {
    id: crypto.randomUUID(),
    slug: data.title.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
    title: data.title,
    excerpt: data.excerpt,
    body: data.body.split("\n\n").filter(Boolean),
    category: data.category || "Notes",
    author: data.author || "Mira Chen",
    date: new Intl.DateTimeFormat("en-US", { month: "short", day: "2-digit", year: "numeric" }).format(new Date()),
    readTime: `${Math.max(1, Math.round(data.body.split(/\s+/).length / 180))} min read`,
  };
  const connection = await dbConnect();
  if (connection) return Response.json(await PostModel.create(post), { status: 201 });
  return Response.json(addPost(post), { status: 201 });
}
