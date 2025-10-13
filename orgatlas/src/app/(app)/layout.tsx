import { redirect } from "next/navigation";
import { AppNavBar } from "@/components/site/AppNavBar";
import { getSession } from "@/lib/auth/session";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-background">
      <AppNavBar userEmail={session.email} />
      <main className="pb-12">{children}</main>
    </div>
  );
}
