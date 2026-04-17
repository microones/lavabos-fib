"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Title from "@/components/ui/Title";

export type BuildingImages = {
  building: string;
  images: string[];
};

export type YearImages = {
  year: string;
  buildings: BuildingImages[];
};

interface GalleryProps {
  gallery: YearImages[];
}

export default function Gallery({ gallery }: GalleryProps) {
  const allImages = gallery.flatMap(({ buildings }) =>
    buildings.flatMap(({ images }) => images),
  );

  const slides = allImages.map((src) => ({ src }));

  const [index, setIndex] = useState(-1);

  return (
    <>
      {gallery.map(({ year, buildings }) => (
        <section key={year} className="mb-12">
          <Title level={2} className="mb-6">
            {year}
          </Title>
          {buildings.map(({ building, images }) => (
            <div key={building} className="mb-8">
              {building !== year && (
                <Title level={3} className="mb-3">
                  {building}
                </Title>
              )}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                {images.map((src) => {
                  const idx = allImages.indexOf(src);
                  return (
                    <button
                      key={src}
                      onClick={() => setIndex(idx)}
                      className="overflow-hidden border border-[var(--border)] cursor-pointer hover:border-[var(--primary)] transition-colors duration-150 focus:outline-none focus:border-[var(--primary)]"
                      aria-label={`Obrir imatge ${idx + 1}`}
                    >
                      <Image
                        src={src}
                        alt={building}
                        width={300}
                        height={200}
                        loading="lazy"
                        className="object-cover w-full h-48"
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </section>
      ))}

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={slides}
        plugins={[Thumbnails, Zoom]}
        thumbnails={{ border: 0, gap: 4 }}
        on={{ view: ({ index: i }) => setIndex(i) }}
      />
    </>
  );
}
