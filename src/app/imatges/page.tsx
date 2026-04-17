// @/app/imatges/page.tsx
import Gallery, { YearImages } from "@/components/Gallery";
import Title from "@/components/ui/Title";

async function loadImages(): Promise<YearImages[]> {
  const apiUrl = process.env.API_URL;
  if (!apiUrl) return [];
  try {
    const res = await fetch(`${apiUrl}/api/v1/photos/gallery`, {
      next: { revalidate: 300 },
    });
    if (!res.ok) return [];
    const { data } = await res.json();
    return data as YearImages[];
  } catch {
    return [];
  }
}

export default async function ImatgesPage() {
  const gallery = await loadImages();

  return (
    <main className="max-w-7xl mx-auto px-6 py-12 space-y-12">
      <Title level={1}>Galeria d&apos;Imatges</Title>
      {gallery.length === 0 ? (
        <p className="text-[var(--muted)] font-mono text-sm border border-[var(--border)] p-6">
          No hi ha imatges disponibles encara.
        </p>
      ) : (
        <Gallery gallery={gallery} />
      )}
    </main>
  );
}
