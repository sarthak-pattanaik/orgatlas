"use client";

import { useTransition } from "react";
import { logoutAction } from "@/lib/auth/actions";
import { Button } from "@/components/ui/button";

export function LogoutButton() {
  const [isPending, startTransition] = useTransition();

  return (
    <Button
      variant="secondary"
      className="h-9 px-4 font-medium"
      disabled={isPending}
      onClick={() => {
        startTransition(async () => {
          await logoutAction();
        });
      }}
    >
      {isPending ? "Signing out..." : "Log out"}
    </Button>
  );
}
