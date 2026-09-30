"use client";

import { useMemo, useState } from "react";
import { PostCard } from "@/components/PostCard";
import { getPosts } from "@/lib/posts";

export default function PostsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All notes");
  const posts = getPosts();
  const categories = ["All notes", ...new Set(posts.map((post) => post.category))];
  const filtered = useMemo(() => posts.filter((post) => (category === "All notes" || post.category === category) && `${post.title} ${post.excerpt}`.toLowerCase().includes(query.toLowerCase())), [category, query, posts]);

  return <main className="wrap page-space"><div className="page-heading"><p className="kicker">The archive</p><h1>From the <em>journal.</em></h1><p>Ideas, observations, and a few things I am still figuring out.</p></div><div className="filters"><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search notes" aria-label="Search notes" /><div className="category-tabs">{categories.map((item) => <button className={category === item ? "active" : ""} key={item} onClick={() => setCategory(item)}>{item}</button>)}</div></div><div className="post-grid archive-grid">{filtered.map((post) => <PostCard key={post.id} post={post} />)}</div>{filtered.length === 0 && <p className="empty">No notes found. Try a softer search.</p>}</main>;
}
