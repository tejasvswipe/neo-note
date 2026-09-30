"use client";

import { FormEvent, useState } from "react";

export default function LoginPage() {
  const [message, setMessage] = useState("");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const response = await fetch("/api/auth/sign-in/email", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email: form.get("email"), password: form.get("password") }) });
    setMessage(response.ok ? "You are signed in." : "Add MONGO_URI to enable accounts locally.");
  }
  return <main className="wrap page-space login-page"><div className="login-card"><p className="kicker">Author access</p><h1>Welcome <em>back.</em></h1><form onSubmit={submit}><label>Email<input name="email" type="email" required /></label><label>Password<input name="password" type="password" required /></label><button className="button" type="submit">Sign in ↗</button></form>{message && <p className="form-message">{message}</p>}</div></main>;
}
