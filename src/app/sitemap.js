import { products, categories, manufacturers, trucks } from "@/data/catalog";
import { fitmentBrands, allBrandModelParams } from "@/data/fitment";
import { banSizes } from "@/data/sizes";

// Canonical production domain (register muattruk.id). Change here if it differs.
export const BASE_URL = "https://muattruk.id";

export default function sitemap() {
  const now = new Date();
  const urls = [];
  const add = (path, priority = 0.7, changeFrequency = "weekly") =>
    urls.push({ url: `${BASE_URL}${path}`, lastModified: now, changeFrequency, priority });

  // Core
  add("", 1.0, "daily");
  add("/ban", 0.9);
  add("/cek-ukuran-ban", 0.9);
  add("/find-a-part", 0.7);
  add("/manufacturer", 0.6);
  add("/category", 0.6);
  add("/truck", 0.6);
  add("/reminder", 0.4);

  // Lead pages — highest priority
  banSizes.forEach((s) => add(`/ban/${s.slug}`, 0.9));
  fitmentBrands.forEach((b) => add(`/cek-ukuran-ban/${b.slug}`, 0.7));
  allBrandModelParams().forEach(({ brand, model }) =>
    add(`/cek-ukuran-ban/${brand}/${model}`, 0.8)
  );

  // Catalog
  categories.forEach((c) => add(`/category/${c.slug}`, 0.6));
  manufacturers.forEach((m) => add(`/manufacturer/${m.slug}`, 0.5));
  trucks.forEach((t) => add(`/truck/${t.slug}`, 0.6));
  products.forEach((p) => add(`/product/${p.id}`, 0.6));

  return urls;
}
