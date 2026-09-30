import { initAuth } from "@/lib/auth";

export async function GET(request: Request) {
  const auth = await initAuth();
  return auth ? auth.handler(request) : Response.json({ error: "Auth needs MONGO_URI" }, { status: 503 });
}

export async function POST(request: Request) {
  const auth = await initAuth();
  return auth ? auth.handler(request) : Response.json({ error: "Auth needs MONGO_URI" }, { status: 503 });
}
