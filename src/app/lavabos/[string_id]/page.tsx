import { prisma } from "@/lib/db";
import Title from "@/components/ui/Title";
import { notFound } from "next/navigation";

type LavaboDetailPageProps = {
  params: {
    string_id: string;
  };
};

export default async function LavaboDetailPage({
  params,
}: LavaboDetailPageProps) {
  const lavabo = await prisma.lavabo.findUnique({
    where: { string_id: params.string_id },
  });

  if (!lavabo) {
    notFound();
  }

  return (
    <main className="max-w-7xl mx-auto px-6 py-12 space-y-12">
      <Title level={1}>{lavabo.string_id}</Title>
      {/* Aquí hi anirà més contingut en el futur */}
    </main>
  );
}
