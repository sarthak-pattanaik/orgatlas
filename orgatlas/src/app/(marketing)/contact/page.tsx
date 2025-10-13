"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const useCaseOptions = [
  "SDR",
  "Recruiting",
  "Analysis",
  "Research",
  "Other",
];

export default function ContactPage() {
  const [useCase, setUseCase] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="bg-white" style={{ color: "#1A1A1A" }}>
      <section className="border-b border-[#E6E6E6] bg-white">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <span className="inline-flex items-center justify-center rounded-full border border-[#FFD1D1] bg-[#FFF4F4] px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[#D70000]">
            Contact
          </span>
          <h1 className="mt-6 text-[44px] font-bold leading-[1.1] md:text-[56px]">
            Let’s make your team smarter with org intelligence.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Curious about OrgAtlas? Want to see how we can transform your workflow? Reach out and we’ll show you how to map any org in minutes.
          </p>
        </div>
      </section>

      <section className="bg-[#F5F5F5]">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="grid gap-8 rounded-[32px] border border-[#E6E6E6] bg-white p-10 shadow-[0_24px_60px_rgba(0,0,0,0.1)] lg:grid-cols-[1fr_1.2fr]">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-[#1A1A1A]">Let’s connect</h2>
                <p className="mt-3 text-base text-muted-foreground">
                  Need enterprise features? Looking for analyst onboarding? No sales pressure—just conversations about solving real problems.
                </p>
              </div>
              <div className="space-y-6">
                <div className="rounded-[20px] border border-[#F2D6D6] bg-[#FFF4F4] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D70000]">Email</p>
                  <p className="mt-2 text-base font-semibold text-[#1A1A1A]">hello@orgatlas.com</p>
                  <p className="mt-1 text-sm text-muted-foreground">We respond in under a day.</p>
                </div>
                <div className="rounded-[20px] border border-[#E6E6E6] bg-[#FAFAFA] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D70000]">Phone</p>
                  <p className="mt-2 text-base font-semibold text-[#1A1A1A]">+1 (555) 123-4567</p>
                  <p className="mt-1 text-sm text-muted-foreground">Call us weekdays, 9am – 6pm PT.</p>
                </div>
                <div className="rounded-[20px] border border-[#E6E6E6] bg-[#FAFAFA] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D70000]">Office</p>
                  <p className="mt-2 text-base font-semibold text-[#1A1A1A]">123 Market Street, Suite 400<br />San Francisco, CA 94104</p>
                  <p className="mt-1 text-sm text-muted-foreground">Visit by appointment only.</p>
                </div>
              </div>
              <div className="rounded-[20px] border border-dashed border-[#E6E6E6] bg-[#FCFCFC] p-5 text-sm text-muted-foreground">
                Need immediate help? <Link href="/docs" className="font-semibold text-[#D70000]">View documentation</Link> for quick answers to common questions.
              </div>
            </div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold" htmlFor="name">
                    First Name
                  </label>
                  <Input id="name" name="name" placeholder="Jane" required className="rounded-[12px] border-[#E6E6E6] bg-[#FAFAFA]" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold" htmlFor="lastName">
                    Last Name
                  </label>
                  <Input id="lastName" name="lastName" placeholder="Doe" required className="rounded-[12px] border-[#E6E6E6] bg-[#FAFAFA]" />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold" htmlFor="email">
                    Work Email
                  </label>
                  <Input id="email" name="email" type="email" placeholder="you@company.com" required className="rounded-[12px] border-[#E6E6E6] bg-[#FAFAFA]" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold" htmlFor="company">
                    Company
                  </label>
                  <Input id="company" name="company" placeholder="Acme Corp" required className="rounded-[12px] border-[#E6E6E6] bg-[#FAFAFA]" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold">Use Case</label>
                <Select value={useCase} onValueChange={setUseCase}>
                  <SelectTrigger className="w-full rounded-[12px] border-[#E6E6E6] bg-[#FAFAFA]">
                    <SelectValue placeholder="Select a use case" />
                  </SelectTrigger>
                  <SelectContent>
                    {useCaseOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold" htmlFor="message">
                  How can we help?
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Share a bit about your goals..."
                  className="w-full rounded-[12px] border border-[#E6E6E6] bg-[#FAFAFA] p-3 text-sm text-muted-foreground focus:border-[#D70000] focus:outline-none focus:ring-2 focus:ring-[#D70000]/30"
                />
              </div>
              <div className="flex flex-col gap-3">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-[12px] border-none bg-[#D70000] py-6 text-base font-semibold text-white shadow-[0_18px_40px_rgba(215,0,0,0.35)] transition-transform hover:-translate-y-0.5"
                >
                  Request Demo
                </Button>
                <p className="text-center text-sm text-muted-foreground">
                  By submitting, you agree to our <Link href="/privacy" className="font-semibold text-[#D70000]">Privacy Policy</Link>.
                </p>
                {submitted && (
                  <p className="text-center text-sm font-medium text-[#D70000]">
                    Thanks! We’ll reach out shortly.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
