"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function WritePage() {
  const router = useRouter();
  const [message, setMessage] = useState("");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const response = await fetch("/api/posts", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Object.fromEntries(form)) });
    if (!response.ok) { setMessage("Could not save this note."); return; }
    const post = await response.json();
    router.push(`/posts/${post.slug}`);
  }
  return <main className="wrap page-space write-page"><div className="page-heading"><p className="kicker">Add to the archive</p><h1>Write a <em>note.</em></h1><p>Keep it clear, keep it kind, keep it yours.</p></div><form className="write-form" onSubmit={submit}><label>Title<input name="title" required placeholder="A thought worth keeping" /></label><label>Category<input name="category" defaultValue="Notes" required /></label><label>Excerpt<textarea name="excerpt" required rows={2} placeholder="A sentence to draw someone in" /></label><label>Body<textarea name="body" required rows={10} placeholder="Start wherever the thought starts..." /></label><div className="form-actions"><button className="button" type="submit">Publish note ↗</button>{message && <span>{message}</span>}</div></form></main>;
}
