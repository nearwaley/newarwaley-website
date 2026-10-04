import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const routes = ["", "/services", "/why-nearwaley", "/become-a-specialist", "/investors", "/about", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : path === "/become-a-specialist" ? 0.9 : 0.7,
  }));
}
