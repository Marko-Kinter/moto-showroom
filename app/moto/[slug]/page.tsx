import FeatureTable from "@/components/products/components/FeaturesTable";

type Props = {
  params: {
    slug: string;
  };
};

export default async function MotoPage({params}: { params : Promise<{slug:string}>}) {
  const { slug } = await params;

  return (
    <main>
      <p>Info de moto: {slug}</p>
      <FeatureTable slug={slug}/>
    </main>
  );
}
