"use client";

import * as React from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export type PersonDetails = {
  id: string;
  fullName: string;
  title?: string;
  team?: string;
  manager?: string;
  reports?: string[];
  office?: string;
  avatarUrl?: string;
  linkedinUrl?: string;
};

export function PersonDrawer({ person, open, onOpenChange }: { person?: PersonDetails; open: boolean; onOpenChange: (open: boolean) => void }) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-[420px] sm:w-[480px]">
        <SheetHeader>
          <SheetTitle>{person?.fullName}</SheetTitle>
        </SheetHeader>
        {person ? (
          <div className="mt-4 space-y-4 text-sm">
            <div className="flex items-center gap-3">
              <Avatar className="h-12 w-12">
                <AvatarImage src={person.avatarUrl} alt={person.fullName} />
                <AvatarFallback>
                  {person.fullName
                    .split(" ")
                    .map((p) => p[0])
                    .slice(0, 2)
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">{person.fullName}</div>
                <div className="text-neutral-600 dark:text-neutral-300">{person.title}</div>
              </div>
              {person.linkedinUrl ? (
                <Button asChild variant="outline" size="sm" className="ml-auto">
                  <a href={person.linkedinUrl} target="_blank" rel="noreferrer">
                    LinkedIn <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </Button>
              ) : null}
            </div>

            <div className="space-y-1">
              {person.team ? <div>Team: {person.team}</div> : null}
              {person.manager ? <div>Manager: {person.manager}</div> : null}
              {person.office ? <div>Office: {person.office}</div> : null}
              {person.reports?.length ? <div>Reports: {person.reports.length}</div> : null}
            </div>
          </div>
        ) : null}
      </SheetContent>
    </Sheet>
  );
}
