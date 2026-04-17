// @/app/imatges/page.tsx
import path from "path";
import fs from "fs/promises";
import Gallery, { YearImages } from "@/components/Gallery";
import Title from "@/components/ui/Title";

async function loadImages(): Promise<YearImages[]> {
  const imgRoot = path.join(process.cwd(), "public", "img");
  let years;
  try {
    years = await fs.readdir(imgRoot, { withFileTypes: true });
  } catch {
    return [];
  }
  const data: YearImages[] = [];

  for (const yearDirent of years.filter(
    (d) => d.isDirectory() && d.name !== "about",
  )) {
    const year = yearDirent.name;
    const yearPath = path.join(imgRoot, year);
    const buildings: { building: string; images: string[] }[] = [];
    const entries = await fs.readdir(yearPath, { withFileTypes: true });

    const hasSubdirs = entries.some((e) => e.isDirectory());
    if (!hasSubdirs) {
      const imgs = entries
        .filter((e) => e.isFile() && /\.(jpe?g|png|gif|webp)$/i.test(e.name))
        .map((e) => `/${path.posix.join("img", year, e.name)}`);
      buildings.push({ building: year, images: imgs });
    } else {
      for (const bDirent of entries.filter((d) => d.isDirectory())) {
        const building = bDirent.name;
        const bPath = path.join(yearPath, building);
        const imgs = (await fs.readdir(bPath))
          .filter((f) => /\.(jpe?g|png|gif|webp)$/i.test(f))
          .map((f) => `/${path.posix.join("img", year, building, f)}`);
        if (imgs.length) buildings.push({ building, images: imgs });
      }
    }

    data.push({ year, buildings });
  }

  return data.sort((a, b) => b.year.localeCompare(a.year));
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
