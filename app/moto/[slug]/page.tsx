
import { getProductBySlug } from "@/components/products/actions/get-products";
import { MotorcycleDetail } from "@/components/products/components/MotorcycleDetails";

export default async function MotorcycleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product  = await getProductBySlug(slug)

  return <MotorcycleDetail motorcycle={product} />
}
