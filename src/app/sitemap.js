import { fitmentBrands, allBrandModelParams } from "@/data/fitment";
import { banSizes } from "@/data/sizes";

// Canonical production domain (register muattruk.id). Change here if it differs.
export const BASE_URL = "https://muattruk.id";

// Focus: ban + oli + fitment. Legacy sparepart routes stay live but are not
// advertised here.
export default function sitemap() {
  const now = new Date();
  const urls = [];
  const add = (path, priority = 0.7, changeFrequency = "weekly") =>
    urls.push({ url: `${BASE_URL}${path}`, lastModified: now, changeFrequency, priority });

  // Core
  add("", 1.0, "daily");
  add("/ban", 0.9);
  add("/oli", 0.9);
  add("/cek-ukuran-ban", 0.9);

  // Lead pages — highest priority
  banSizes.forEach((s) => add(`/ban/${s.slug}`, 0.9));
  fitmentBrands.forEach((b) => add(`/cek-ukuran-ban/${b.slug}`, 0.7));
  allBrandModelParams().forEach(({ brand, model }) =>
    add(`/cek-ukuran-ban/${brand}/${model}`, 0.8)
  );

  return urls;
}
