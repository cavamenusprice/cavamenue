import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "CAVA Menu — Prices, Calories & Nutrition",
    short_name: "CAVA Menu",
    description:
      "Explore the full CAVA menu with prices, calories, nutrition facts, and allergen information.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0A6847",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
