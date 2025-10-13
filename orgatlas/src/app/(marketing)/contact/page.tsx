"use client";

import * as React from "react";
import { Hero } from "@/components/marketing/Hero";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [form, setForm] = React.useState({ name: "", email: "", message: "" });
  const [sent, setSent] = React.useState(false);
  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <Hero eyebrow="Contact" title="Talk to our team" subtitle="We’ll get back within 1–2 business days." />
      <form onSubmit={onSubmit} className="mt-6 space-y-3">
        <Input placeholder="Name" value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} aria-label="Name" required />
        <Input type="email" placeholder="Email" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} aria-label="Email" required />
        <textarea className="w-full rounded-md border bg-transparent p-2 text-sm" rows={6} placeholder="Message" value={form.message} onChange={(e)=>setForm({...form,message:e.target.value})} aria-label="Message" required />
        <Button type="submit" className="bg-red-500 hover:bg-red-600">Send</Button>
        {sent ? <div className="text-sm text-green-600 mt-2">Thanks, we’ll be in touch.</div> : null}
      </form>
    </div>
  );
}
