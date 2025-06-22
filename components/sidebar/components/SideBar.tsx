import Link from 'next/link';
import { getSlugs } from '../actions/get-slug';

export default async function Sidebar() {
  const products = await getSlugs();

  return (
    <div className="w-64 h-full p-4">
      <h2 className="text-lg font-semibold mb-4">Productos</h2>
      <ul className="space-y-1">
        {products.map((product) => (
          <li key={product.id}>
            <Link
              href={`/moto/${product.slug}`}
              className="block px-2 py-1 rounded hover:bg-gray-100 transition"
            >
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
