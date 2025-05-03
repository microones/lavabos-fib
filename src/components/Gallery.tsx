"use client"

import Image from "next/image"
import { useState, useEffect, Fragment } from "react"

export type BuildingImages = {
  building: string
  images: string[]
}

export type YearImages = {
  year: string
  buildings: BuildingImages[]
}

interface GalleryProps {
  gallery: YearImages[]
}

export default function Gallery({ gallery }: GalleryProps) {
  // Flatten all images into one list for navigation
  const allImages = gallery.flatMap(({ buildings }) =>
    buildings.flatMap(({ images }) => images)
  )

  const [currentIndex, setCurrentIndex] = useState<number | null>(null)

  const closeLightbox = () => setCurrentIndex(null)
  const showPrev = () =>
    setCurrentIndex((i) =>
      i !== null ? (i - 1 + allImages.length) % allImages.length : null
    )
  const showNext = () =>
    setCurrentIndex((i) =>
      i !== null ? (i + 1) % allImages.length : null
    )

  // keyboard navigation
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (currentIndex === null) return
      if (e.key === "ArrowLeft") showPrev()
      if (e.key === "ArrowRight") showNext()
      if (e.key === "Escape") closeLightbox()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [currentIndex])

  return (
    <>
      {gallery.map(({ year, buildings }) => (
        <section key={year} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">{year}</h2>
          {buildings.map(({ building, images }) => (
            <div key={building} className="mb-8">
              <h3 className="text-xl font-medium mb-2">{building}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {images.map((src) => {
                  const idx = allImages.indexOf(src)
                  return (
                    <div
                      key={src}
                      className="cursor-pointer overflow-hidden"
                      onClick={() => setCurrentIndex(idx)}
                    >
                      <Image
                        src={src}
                        alt={building}
                        width={300}
                        height={200}
                        className="object-cover w-full h-48"
                      />
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </section>
      ))}

      {currentIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-75 flex flex-col items-center justify-center px-4 py-8"
          onClick={closeLightbox}
        >
          {/* Navigation Buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              showPrev()
            }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl p-2"
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              showNext()
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl p-2"
            aria-label="Next"
          >
            ›
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              closeLightbox()
            }}
            className="absolute top-4 right-4 text-white text-3xl"
            aria-label="Close"
          >
            ×
          </button>

          {/* Main Image */}
          <div className="max-w-full max-h-full mb-6">
            <Image
              src={allImages[currentIndex]}
              alt="En gran"
              width={800}
              height={600}
              className="object-contain max-w-full max-h-full"
            />
          </div>

          {/* Thumbnails */}
          <div
            className="flex space-x-2 overflow-x-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {allImages.map((src, idx) => (
              <div
                key={src}
                className={`flex-shrink-0 cursor-pointer border-2 ${
                  idx === currentIndex
                    ? "border-white"
                    : "border-transparent"
                }`}
                onClick={() => setCurrentIndex(idx)}
              >
                <Image
                  src={src}
                  alt={`Thumb ${idx}`}
                  width={80}
                  height={60}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}