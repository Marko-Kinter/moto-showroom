"use client";
import { useProducts } from "@/hooks/useProducts";
import { Card, Skeleton } from "@heroui/react";

const MotorcycleInquiries = () => {
  const { data: products, error, isLoading } = useProducts();

  if (isLoading) {
    return (
      <Card className="p-4">
        <h3 className="text-lg font-semibold mb-6">Inquiries by Motorcycle</h3>
        <div className="space-y-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex items-center justify-between">
              <div className="w-1/3">
                <Skeleton classNames={{ base: "h-5 w-full rounded" }} />
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <Skeleton classNames={{ base: "h-2 w-full bg-gray-300" }} />
                </div>
                <div className="w-8">
                  <Skeleton classNames={{ base: "h-5 w-full rounded" }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    );
  }

  if (error) {
    return <p className="text-red-500">Error loading inquiries</p>;
  }

  return (
    <Card className="p-4">
      <h3 className="text-lg font-semibold mb-6">Inquiries by Motorcycle</h3>
      <div className="space-y-4">
        {products!.map((product) => (
          <div key={product.id} className="flex items-center justify-between">
            <span className="light:text-gray-700 dark:text-gray-300">{product.name}</span>
            <div className="flex items-center space-x-4">
              <div className="w-32 light:bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-orange-500 h-2 rounded-full"
                  style={{
                    width: `${Math.min((product.inquiries / 50) * 100, 100)}%`,
                  }}
                />
              </div>
              <span className="text-sm font-medium w-8">{product.inquiries}</span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default MotorcycleInquiries;
