"use client";

import * as React from "react";
import { Hero } from "@/components/marketing/Hero";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function WaitlistPage() {
  const [email, setEmail] = React.useState("");
  const [ok, setOk] = React.useState(false);
  async function onSubmit(e: React.FormEvent) { e.preventDefault(); setOk(true); }
  return (
    <div className="max-w-sm mx-auto px-6 py-12">
      <Hero eyebrow="API Waitlist" title="Join the waitlist" subtitle="We’ll notify you when the API is ready." />
      <form onSubmit={onSubmit} className="mt-6 flex gap-2">
        <Input type="email" placeholder="you@company.com" value={email} onChange={(e)=>setEmail(e.target.value)} aria-label="Email" required />
        <Button type="submit" className="bg-red-500 hover:bg-red-600">Join</Button>
      </form>
      {ok ? <div className="text-sm text-green-600 mt-2">Added to waitlist.</div> : null}
    </div>
  );
}
