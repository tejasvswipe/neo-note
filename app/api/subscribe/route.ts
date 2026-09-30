import { createClient } from "@supabase/supabase-js";

export async function POST(request: Request) {
  const { email } = await request.json();
  if (typeof email !== "string" || !email.includes("@")) {
    return Response.json({ error: "Enter a valid email." }, { status: 400 });
  }

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    return Response.json({ error: "Supabase is not configured yet." }, { status: 503 });
  }

  const supabase = createClient(url, key, { auth: { autoRefreshToken: false, persistSession: false } });
  const { error } = await supabase.from("subscribers").upsert({ email: email.trim().toLowerCase() }, { onConflict: "email", ignoreDuplicates: true });
  if (error) return Response.json({ error: "Could not save your email." }, { status: 500 });
  return Response.json({ ok: true });
}
