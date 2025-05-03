import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // habilita l’export estàtic amb `next export`
  output: "export",

  // si fas servir <Image> i vols que funcioni en l’export
  images: {
    unoptimized: true,
  },

  // opcional: afegeix barra al final de cada ruta
  trailingSlash: true,
};

export default nextConfig;
