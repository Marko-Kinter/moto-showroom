"use client";
import Link from "next/link";
import { useSlugs } from "@/hooks/useSlugs";
import { Skeleton } from "@heroui/react";

export default function SlugLinks({ onClose }: { onClose: () => void }) {
  const { data: products, error, isLoading, mutate } = useSlugs();

  if (!products && !error) {
    return (
      <div className="w-64 h-full p-4 space-y-2">
        <Skeleton classNames={{ base: "h-6 w-3/4 rounded" }} />
        <Skeleton classNames={{ base: "h-5 w-full rounded" }} />
        <Skeleton classNames={{ base: "h-5 w-full rounded" }} />
        <Skeleton classNames={{ base: "h-5 w-5/6 rounded" }} />
      </div>
    );
  }
  if (error) return <p>Error loading products</p>;

  return (
    <div className="w-64 h-full p-4">
      <h2 className="text-lg font-semibold mb-4">Productos</h2>
      <ul className="space-y-1">
        {products!.map((product) => (
          <li key={product.id}>
            <Link
              href={`/moto/${product.slug}`}
              className="block px-4 py-1 rounded hover:bg-gray-800 transition"
              onClick={() => { onClose(); }}
            >
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
