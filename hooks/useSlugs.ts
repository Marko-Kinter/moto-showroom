import { Product } from "@/types/product";
import useSWR from "swr";

const fetcher = (url: string) =>
  fetch(url).then((res) => {
    if (!res.ok) throw new Error("Failed to fetch slugs");
    return res.json();
  });

export function useSlugs() {
  return useSWR<Product[]>("/api/slugs", fetcher, {
    revalidateOnFocus: false,
    shouldRetryOnError: false,
  });
}
