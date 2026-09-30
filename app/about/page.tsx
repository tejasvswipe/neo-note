import Link from "next/link";

export default function About() {
  return <main className="wrap page-space about-page"><div className="page-heading"><p className="kicker">A little context</p><h1>Keep the good<br /><em>bits close.</em></h1></div><div className="about-layout"><div className="about-stamp">N<br />25</div><div className="prose"><p>neonote is a personal journal by Mira Chen. It is a place for small observations, experiments, and the questions that stay interesting after the answer is gone.</p><p>This site is deliberately simple. No endless feed, no performance dashboard, no pressure to publish on schedule. Just a few notes, arranged with care.</p><p>If something here gives you a useful thought, <Link className="inline-link" href="/write">write one of your own</Link>.</p></div></div></main>;
}
