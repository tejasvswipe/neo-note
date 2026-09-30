import Link from "next/link";
import { PostCard } from "@/components/PostCard";
import { getPosts } from "@/lib/posts";

export default function Home() {
  const posts = getPosts();
  const featured = posts.find((post) => post.featured) ?? posts[0];
  const rest = posts.filter((post) => post.id !== featured.id);

  return <main>
    <section className="hero wrap">
      <div className="hero-copy"><p className="kicker">A personal journal · Est. 2025</p><h1>Small thoughts,<br /><em>kept well.</em></h1><p className="hero-intro">neonote is a quiet corner for notes on making, noticing, and the little details that make a day feel like yours.</p><Link className="text-link" href="/about">A little more about this place <span>↗</span></Link></div>
      <div className="hero-mark" aria-hidden="true"><div className="sun"></div><div className="orbit orbit-one"></div><div className="orbit orbit-two"></div><span>stay<br />curious</span></div>
    </section>
    <section className="feature wrap"><div className="section-label"><span>01</span><span>Featured note</span></div><PostCard post={featured} featured /></section>
    <section className="journal wrap"><div className="section-head"><div className="section-label"><span>02</span><span>From the journal</span></div><Link className="text-link" href="/posts">View all notes <span>↗</span></Link></div><div className="post-grid">{rest.map((post) => <PostCard key={post.id} post={post} />)}</div></section>
    <section className="newsletter wrap"><div><p className="kicker">Once in a while</p><h2>A note in your inbox,<br /><em>never a flood.</em></h2></div><form><label htmlFor="email">Your email</label><div className="input-row"><input id="email" type="email" placeholder="you@example.com" /><button type="submit" aria-label="Subscribe">↗</button></div></form></section>
  </main>;
}
