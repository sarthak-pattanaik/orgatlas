"use client";

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
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#D70000]">
            Contact
          </p>
          <h1 className="mt-4 text-[44px] font-bold leading-[1.1] md:text-[56px]">
            Let’s make your team smarter with org intelligence.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Whether you’re mapping key accounts or researching markets, we’ll help you see who matters.
          </p>
        </div>
      </section>

      <section className="bg-[#F5F5F5]">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <div className="rounded-[28px] border border-[#E6E6E6] bg-white p-10 shadow-[0_24px_60px_rgba(0,0,0,0.1)]">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold" htmlFor="name">
                    Name
                  </label>
                  <Input id="name" name="name" placeholder="Your name" required className="rounded-[12px] border-[#E6E6E6] bg-[#FAFAFA]" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold" htmlFor="email">
                    Work Email
                  </label>
                  <Input id="email" name="email" type="email" placeholder="you@company.com" required className="rounded-[12px] border-[#E6E6E6] bg-[#FAFAFA]" />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold" htmlFor="company">
                    Company
                  </label>
                  <Input id="company" name="company" placeholder="Org name" required className="rounded-[12px] border-[#E6E6E6] bg-[#FAFAFA]" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold">
                    Use Case
                  </label>
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
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
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
                  We typically respond within 24 hours.
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
