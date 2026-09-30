import Link from "next/link";
import type { Post } from "@/lib/posts";

export function PostCard({ post, featured = false }: { post: Post; featured?: boolean }) {
  return (
    <article className={featured ? "post-card featured-card" : "post-card"}>
      <div className="card-top"><span className="eyebrow">{post.category}</span><span className="read-time">{post.readTime}</span></div>
      <Link href={`/posts/${post.slug}`}><h2>{post.title}</h2></Link>
      <p>{post.excerpt}</p>
      <div className="card-bottom"><span>{post.date}</span><Link className="arrow" href={`/posts/${post.slug}`} aria-label={`Read ${post.title}`}>↗</Link></div>
    </article>
  );
}
