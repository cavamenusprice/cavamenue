import type { MetadataRoute } from "next";
import { menuData, categorySlugs, categoryOrder } from "@/data/menu";

const BASE_URL = "https://cavamenue.us";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  // ── Static pages ──
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/calculator`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/allergen-menu`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/gluten-free`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/locations`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${BASE_URL}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/disclaimer`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/terms-of-service`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  // ── Category pages ──
  const categoryPages: MetadataRoute.Sitemap = categoryOrder.map((cat) => ({
    url: `${BASE_URL}/menu/${categorySlugs[cat]}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // ── Product pages ──
  const productPages: MetadataRoute.Sitemap = menuData.map((item) => ({
    url: `${BASE_URL}/menu/${categorySlugs[item.category]}/${item.id}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...categoryPages, ...productPages];
}
