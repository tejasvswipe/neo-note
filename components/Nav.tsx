import Link from "next/link";

export function Nav() {
  return (
    <header className="nav wrap">
      <Link className="brand" href="/">neonote<span>.</span></Link>
      <nav>
        <Link href="/posts">Journal</Link>
        <Link href="/about">About</Link>
        <Link className="nav-cta" href="/write">Write a note <span>↗</span></Link>
      </nav>
    </header>
  );
}

export function Footer() {
  return <footer className="footer wrap"><span>neonote</span><span>Made for slow internet thoughts.</span></footer>;
}
