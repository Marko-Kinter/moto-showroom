import EditMotorcycleForm from "@/components/form/EditMotorcycleForm";
import { getProductBySlug } from "@/components/products/actions/get-products";
import { Button } from "@heroui/button";
import Link from "next/link";


export default async function EditProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  console.log(slug)
  const product = await getProductBySlug(slug);

  return (
    <div className="max-w-4xl mx-auto py-8">
      <div>
        <h1 className="text-3xl font-bold mb-6">Edit Motorcycle</h1>
        <EditMotorcycleForm product={product} />
      </div>
      <div className="flex justify-center">
        <Link href={"/admin"}>
          <Button variant="light">Back</Button>
        </Link>
        </div>
    </div>
  );
}
