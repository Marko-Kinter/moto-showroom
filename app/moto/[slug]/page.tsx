import FeatureTable from '@/components/products/actions/FeaturesTable'
import React from 'react'


const MotoPage = async ({ params }:{params: {slug : string}}) => {
  const {slug} = await params
  return (
    <main>
      <p>Info de moto {slug}</p>
      <FeatureTable slug={slug}/>
    </main>
  )
}

export default MotoPage