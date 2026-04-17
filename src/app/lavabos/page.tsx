import { prisma } from "@/lib/db";
import Title from "@/components/ui/Title";
import Link from "next/link";

export default async function LavabosPage() {
  const lavabos = await prisma.lavabo.findMany();

  return (
    <main className="max-w-7xl mx-auto px-6 py-12 space-y-12">
      <Title level={1}>Lavabos</Title>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {lavabos.map((lavabo) => (
          <Link href={`/lavabos/${lavabo.string_id}`} key={lavabo.string_id} className="border p-4 rounded-lg hover:border-blue-500 transition-colors">
            <h2 className="text-lg font-semibold">{lavabo.string_id}</h2>
          </Link>
        ))}
      </div>
    </main>
  );
}
