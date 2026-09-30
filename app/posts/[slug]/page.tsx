import Link from "next/link";
import { notFound } from "next/navigation";
import { findPost } from "@/lib/post-server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await findPost(slug);
  if (!post) notFound();

  return <main className="reading wrap">
    <Link className="back-link" href="/posts">← Back to journal</Link>
    <header className="reading-head">
      <span className="eyebrow">{post.category} · {post.readTime}</span>
      <h1>{post.title}</h1>
      <p>{post.excerpt}</p>
      <div className="byline">{post.author}<span>·</span>{post.date}</div>
    </header>
    <div className="reading-rule" />
    <article className="prose">{post.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</article>
    <div className="reading-end"><span>That’s all for now.</span><Link className="text-link" href="/posts">Read another note ↗</Link></div>
  </main>;
}
