"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";

export function FollowButton({ initial = false }: { initial?: boolean }) {
  const [following, setFollowing] = React.useState(initial);
  return (
    <Button variant={following ? "secondary" : "default"} onClick={() => setFollowing((v) => !v)}>
      {following ? "Following" : "Follow"}
    </Button>
  );
}
