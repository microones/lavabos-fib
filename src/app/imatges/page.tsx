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
    const { data } = (await res.json()) as { data: YearImages[] };
    // Només les fotos amb mides (API nova); un lavabo sense fotos no es mostra
    return data
      .map((y) => ({ ...y, buildings: y.buildings.map((b) => ({ ...b, photos: b.photos ?? [] })).filter((b) => b.photos.length) }))
      .filter((y) => y.buildings.length);
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
