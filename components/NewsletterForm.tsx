"use client";

import { FormEvent, useState } from "react";

export function NewsletterForm() {
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const email = new FormData(form).get("email");
    const response = await fetch("/api/subscribe", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email }) });
    const data = await response.json();
    setMessage(response.ok ? "You’re on the list." : data.error || "Could not save your email.");
    if (response.ok) form.reset();
  }

  return <form onSubmit={submit}><label htmlFor="email">Your email</label><div className="input-row"><input id="email" name="email" type="email" placeholder="you@example.com" required /><button type="submit" aria-label="Subscribe">↗</button></div>{message && <p className="subscribe-message">{message}</p>}</form>;
}
