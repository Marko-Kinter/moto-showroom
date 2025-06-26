"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Product = {
  id: string;
  slug: string;
  name: string;
};

export default function SlugLinks({ onClose }: { onClose: () => void }) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/api/slugs")
      .then((res) => res.json())
      .then(setProducts)
      .catch((err) => console.error("Error fetching slugs", err));
  }, []);

  return (
    <div className="w-64 h-full">
      <h2 className="text-lg font-semibold mb-4">Productos</h2>
      <ul className="space-y-1">
        {products.map((product) => (
          <li key={product.id}>
            <Link
              href={`/moto/${product.slug}`}
              className="block px-4 py-1 rounded hover:bg-gray-800 transition"
              onClick={onClose}
            >
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
