import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, getPosts } from "@/lib/posts";

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
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
