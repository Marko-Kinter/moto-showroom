import EditMotorcycleForm from "@/components/form/EditMotorcycleForm";
import { getProductBySlug } from "@/components/products/actions/get-products";


export default async function EditProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = await getProductBySlug(slug);

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Edit Motorcycle</h1>
      <EditMotorcycleForm product={product} />
    </div>
  );
}
