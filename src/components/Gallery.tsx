"use client";

import { useEffect, useId } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import Title from "@/components/ui/Title";
import { cancons } from "@/lib/cancons";

// Visor: PhotoSwipe (https://photoswipe.com). Les miniatures i les fotos grans són versions WebP
// que genera l'API (320/640/1280/1920 px); els originals (PNG de fins a 18 MB) no es carreguen mai.

/** Foto tal com la dona l'API: mides reals i URLs de versions WebP per amplada. */
export type Photo = {
  name: string;
  width: number;
  height: number;
  original: string;
  sizes: Record<"320" | "640" | "1280" | "1920", string>;
};

export type BuildingImages = {
  building: string;
  /** URLs dels originals */
  images: string[];
  photos: Photo[];
};

export type YearImages = {
  year: string;
  buildings: BuildingImages[];
};

interface GalleryProps {
  gallery: YearImages[];
}

const WIDTHS = [320, 640, 1280, 1920] as const;

/** srcset amb les mides que tenen sentit per a aquesta foto (mai més amples que l'original). */
function srcSet(p: Photo, max = 1920) {
  return WIDTHS.filter((w) => w <= max && (w <= p.width || w === 320))
    .map((w) => `${p.sizes[String(w) as keyof Photo["sizes"]]} ${Math.min(w, p.width)}w`)
    .join(", ");
}

export default function Gallery({ gallery }: GalleryProps) {
  const id = "galeria-" + useId().replace(/:/g, "");

  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: `#${id}`,
      children: "a[data-pswp-width]",
      pswpModule: () => import("photoswipe"),
      bgOpacity: 0.92,
      showHideAnimationType: "fade",
      // textos en català
      closeTitle: "Tanca",
      zoomTitle: "Amplia",
      arrowPrevTitle: "Anterior",
      arrowNextTitle: "Següent",
      errorMsg: "No s'ha pogut carregar la imatge",
      indexIndicatorSep: " / ",
    });
    lightbox.init();
    return () => lightbox.destroy();
  }, [id]);

  let n = 0;
  return (
    <div id={id}>
      {gallery.map(({ year, buildings }) => (
        <section key={year} className="mb-12">
          <Title level={2} className="mb-6">
            {year}
          </Title>
          {/* Si cada lavabo té una sola foto, els lavabos es posen en quadrícula */}
          <div className={buildings.every((b) => b.photos.length === 1) ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-2 [&_.grid]:grid-cols-1" : undefined}>
            {buildings.map(({ building, photos }) => (
              <div key={building} className="mb-8">
                {building !== year && (
                  <Title level={3} className="mb-3">
                    {building}
                  </Title>
                )}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                  {photos.map((p) => {
                    const num = ++n;
                    return (
                      <a
                        key={p.original}
                        href={p.sizes["1920"]}
                        data-pswp-width={p.width}
                        data-pswp-height={p.height}
                        data-pswp-srcset={srcSet(p)}
                        target="_blank"
                        rel="noreferrer"
                        className="block overflow-hidden border border-[var(--border)] hover:border-[var(--primary)] transition-colors duration-150 focus:outline-none focus:border-[var(--primary)]"
                        aria-label={`Obrir imatge ${num}: ${building}`}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={p.sizes["640"]}
                          srcSet={srcSet(p, 640)}
                          sizes="(min-width: 768px) 25vw, (min-width: 640px) 33vw, 50vw"
                          alt={building}
                          width={p.width}
                          height={p.height}
                          loading={num <= 8 ? "eager" : "lazy"}
                          decoding="async"
                          className="object-cover w-full h-48 bg-[var(--border)]"
                        />
                      </a>
                    );
                  })}
                </div>
                {photos.map((p) => cancons[p.name]).map((canco) => canco && (
                  <a key={canco.spotify} href={canco.spotify} target="_blank" rel="noopener noreferrer" className="block mt-1 font-mono text-xs text-[var(--muted)] hover:text-[var(--primary)] truncate">
                    {canco.titol} – {canco.autor}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
