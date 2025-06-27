"use client";

import useProducts from '@/hooks/useProducts';
import {
  Button,
  Card,
  CardBody,
  Image,
  Skeleton,
} from '@heroui/react';
import React from 'react';

const ProductList = () => {
  const { data: products, error, isLoading, mutate } = useProducts();

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-12">
        {Array.from({ length: 8 }).map((_, idx) => (
          <Card key={idx} radius="lg" className="border-none">
            <Skeleton className="w-full h-48 object-cover" />
            <CardBody>
              <Skeleton className="w-3/4 h-6 mb-2" />
              <Skeleton className="w-full h-4" />
            </CardBody>
          </Card>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 p-12">
        Error loading products.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-12">
      {products?.map((p) => (
        <Card key={p.id} isFooterBlurred className="border-none relative overflow-hidden" radius="lg">
          <a href={`/moto/${p.slug}`}>
            <Image
                removeWrapper
                isZoomed
              alt={p.name}
              className="z-0 w-full h-full object-cover"
              height={200}
              src={p.images[0]}
              width={300}
            />
          </a>
             <p className="absolute justify-center text-lg md:text-2xl pr-2 bg-gray-800/50 text-gray-100 font-bold mb-4 backdrop-blur-sm pl-2 z-10">{p.name}</p>
        </Card>
      ))}
    </div>
  );
};

export default ProductList;


