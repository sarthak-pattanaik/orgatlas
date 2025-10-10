"use client";

import * as React from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

export type PersonDetails = {
  id: string;
  fullName: string;
  title?: string;
  team?: string;
  manager?: string;
  reports?: string[];
  office?: string;
};

export function PersonDrawer({ person, open, onOpenChange }: { person?: PersonDetails; open: boolean; onOpenChange: (open: boolean) => void }) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-[420px] sm:w-[480px]">
        <SheetHeader>
          <SheetTitle>{person?.fullName}</SheetTitle>
        </SheetHeader>
        {person ? (
          <div className="mt-4 space-y-2 text-sm">
            <div className="text-neutral-600 dark:text-neutral-300">{person.title}</div>
            {person.team ? <div>Team: {person.team}</div> : null}
            {person.manager ? <div>Manager: {person.manager}</div> : null}
            {person.office ? <div>Office: {person.office}</div> : null}
            {person.reports?.length ? (
              <div>
                Reports: {person.reports.length}
              </div>
            ) : null}
          </div>
        ) : null}
      </SheetContent>
    </Sheet>
  );
}
