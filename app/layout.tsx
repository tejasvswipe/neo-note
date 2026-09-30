import type { Metadata } from "next";
import { Nav, Footer } from "@/components/Nav";
import "./globals.css";
import "./logo-overrides.css";

export const metadata: Metadata = {
  title: "neonote. — small thoughts, kept well",
  description: "A quiet corner for notes on making, noticing, and the web.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Nav />{children}<Footer /></body></html>;
}
