import FeatureTable from '@/components/products/actions/FeaturesTable'
import React from 'react'

type Props = {
  params: {
    slug: string;
  };
};

const MotoPage = async ({ params }: Props ) => {
  const {slug} = params
  return (
    <main>
      <p>Info de moto {slug}</p>
      <FeatureTable slug={slug}/>
    </main>
  )
}

export default MotoPage