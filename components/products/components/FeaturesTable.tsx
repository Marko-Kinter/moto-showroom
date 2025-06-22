import getProductBySlug from "@/components/products/actions/get-products";
import FeaturesTableClient from "./FeaturesTableClient";

type Props = {
  slug: string;
};

export default async function FeatureTable({ slug }: Props) {
  const product = await getProductBySlug(slug);
  const featuresObj = product.features ?? {};

  const features = Object.entries(featuresObj).map(([clave, valor]) => ({
    key: clave,
    clave,
    valor: valor !== null && valor !== undefined ? String(valor) : "-",
  }));

  return <FeaturesTableClient features={features} />;
}
