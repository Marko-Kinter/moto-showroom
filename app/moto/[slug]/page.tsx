import FeatureTable from '@/components/products/components/FeaturesTable';

type PageProps = {
  params: { slug: string };
};

export default async function MotoPage({ params }: PageProps) {
  const { slug } = params;

  return (
    <main>
      <p>Info de moto: {slug}</p>
      <FeatureTable slug={slug} />
    </main>
  );
}
