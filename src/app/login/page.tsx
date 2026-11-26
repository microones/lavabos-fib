import { redirect } from "next/navigation";
import { getUser } from "@/lib/server/auth";
import LoginForm from "@/components/LoginForm";
import Box from "@/components/ui/Box";
import Title from "@/components/ui/Title";

export const dynamic = "force-dynamic";

// només rutes internes (evita redireccions a altres webs amb ?next=https://...)
function safeNext(next: string | string[] | undefined) {
  return typeof next === "string" && next.startsWith("/") && !next.startsWith("//") ? next : "/imatges";
}

export default async function LoginPage({ searchParams }: { searchParams: Promise<{ next?: string | string[] }> }) {
  const next = safeNext((await searchParams).next);
  const user = await getUser();
  if (user) redirect(user.mustChangePassword ? "/compte/contrasenya" : next);

  return (
    <main className="max-w-md mx-auto px-6 py-12 space-y-10">
      <Title level={1}>Entra</Title>
      <Box className="p-6">
        <LoginForm next={next} />
      </Box>
      <p className="text-[var(--muted)] font-mono text-sm">
        No es poden crear comptes des d&apos;aquí: els crea un admin.
      </p>
    </main>
  );
}
