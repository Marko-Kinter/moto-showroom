import getProductBySlug from "@/components/products/actions/get-products";
import FeaturesTableClient from "./FeaturesTableClient";

type Props = {
  slug: string;
};

export default async function FeatureTable({ slug }: Props) {
  const product = await getProductBySlug(slug);
  const features = product.features ?? {};

  return <FeaturesTableClient features={features} />;
}
