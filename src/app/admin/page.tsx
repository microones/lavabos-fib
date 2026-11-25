import { notFound, redirect } from "next/navigation";
import { getUser } from "@/lib/server/auth";
import { prisma } from "@/lib/db";
import AdminUsuaris from "@/components/AdminUsuaris";
import AdminFrasesManager from "@/components/AdminFrasesManager";
import Box from "@/components/ui/Box";
import Title from "@/components/ui/Title";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const user = await getUser();
  if (!user) redirect("/login?next=/admin");
  if (user.mustChangePassword) redirect("/compte/contrasenya");
  if (!user.admin) notFound();

  const [usuaris, frases, lavabos] = await Promise.all([
    prisma.user.findMany({
      orderBy: { createdAt: "asc" },
      select: { id: true, email: true, name: true, admin: true, mustChangePassword: true, createdAt: true },
    }),
    prisma.frase.findMany({
      orderBy: { id: "desc" },
      select: { id: true, contingut: true, lavaboId: true, lavabo: { select: { edifici: true, genere: true } } },
    }),
    prisma.lavabo.findMany({
      orderBy: [{ edifici: "asc" }, { planta: "asc" }],
      select: { id: true, edifici: true, planta: true, genere: true },
    }),
  ]);

  return (
    <main className="max-w-5xl mx-auto px-6 py-12 space-y-12">
      <Title level={1}>Admin</Title>

      <section className="space-y-6">
        <Title level={2}>Comptes</Title>
        <p className="text-[var(--muted)] font-mono text-sm">
          Cada compte nou rep una contrasenya provisional que haurà de canviar en entrar per primer cop.
        </p>
        <Box className="p-6">
          <AdminUsuaris usuaris={usuaris} jo={user.id} />
        </Box>
      </section>

      <section className="space-y-6">
        <Title level={2}>Frases</Title>
        <AdminFrasesManager initialFrases={frases} lavabos={lavabos} />
      </section>
    </main>
  );
}
