
import { getProductBySlug } from "@/components/products/actions/get-products";
import { MotorcycleDetail } from "@/components/products/components/MotorcycleDetails";

export default async function MotorcycleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  console.log(slug)
  const product  = await getProductBySlug(slug)
  console.log(product)

  return <MotorcycleDetail motorcycle={product} />
}
