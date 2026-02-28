// @/app/imatges/page.tsx
import path from "path";
import fs from "fs/promises";
import Gallery, { YearImages } from "@/components/Gallery";

async function loadImages(): Promise<YearImages[]> {
  const imgRoot = path.join(process.cwd(), "public", "img");
  const years = await fs.readdir(imgRoot, { withFileTypes: true });
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
        .filter((e) => e.isFile())
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
    <main className="p-8 space-y-12">
      <h1 className="text-3xl font-bold text-center mb-8">Galeria d'Imatges</h1>
      <Gallery gallery={gallery} />
    </main>
  );
}
