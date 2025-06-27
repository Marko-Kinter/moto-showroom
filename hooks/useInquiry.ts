import { Admin, Inquiry, Product } from "@/types/product";
import useSWR from "swr";

const fetcher = (url: string) =>
  fetch(url).then((res) => {
    if (!res.ok) throw new Error("Failed to fetch slugs");
    return res.json();
  });

export default function useInquiry() {
  return useSWR<Inquiry[]>("/api/products/inquiry", fetcher, {
    revalidateOnFocus: false,
    shouldRetryOnError: false,
  });
}
