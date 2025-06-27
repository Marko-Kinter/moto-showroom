import { Product } from "@/types/product";
import useSWR from "swr";

const fetcher = (url: string) =>
  fetch(url).then((res) => {
    if (!res.ok) throw new Error("Failed to fetch slugs");
    return res.json();
  });

export function useProducts() {
  return useSWR<Product[]>("/api/products", fetcher, {
    revalidateOnFocus: false,
    shouldRetryOnError: false,
  });
}
