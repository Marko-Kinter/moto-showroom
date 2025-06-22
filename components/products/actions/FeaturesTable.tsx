import getProductBySlug from "@/components/products/actions/get-products";
import FeaturesTableClient from "../components/FeaturesTableClient";

type Props = {
  slug: string;
};

const FeatureTable = async ({ slug }: Props) => {
  const product = await getProductBySlug(slug);
  const features = product.features ?? {}; // fallback si no hay

  return <FeaturesTableClient features={features} />;
};

export default FeatureTable;
