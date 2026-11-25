import { redirect } from "next/navigation";
import { getUser } from "@/lib/server/auth";
import CanviContrasenyaForm from "@/components/CanviContrasenyaForm";
import Box from "@/components/ui/Box";
import Title from "@/components/ui/Title";

export const dynamic = "force-dynamic";

export default async function CanviContrasenyaPage() {
  const user = await getUser();
  if (!user) redirect("/login?next=/compte/contrasenya");
  const provisional = !!user.mustChangePassword;

  return (
    <main className="max-w-md mx-auto px-6 py-12 space-y-10">
      <Title level={1}>Contrasenya</Title>
      {provisional && (
        <p className="font-mono text-sm border border-[var(--border)] p-4">
          Tens una contrasenya provisional. Abans de fer res, tria&apos;n una de nova.
        </p>
      )}
      <Box className="p-6">
        <CanviContrasenyaForm provisional={provisional} />
      </Box>
    </main>
  );
}
