"use client";
import { Product } from "@/types/product";
import { Card } from "@heroui/react";

type Props = {
  products: Product[];
};
const MotorcycleInquiries = ({ products }: Props) => {
    console.log(products)
    return (
        <Card className="p-4">
            <h3 className="text-lg font-semibold mb-6">Inquiries by Motorcycle</h3>
            <div className="space-y-4">
            {products.map((product) => (
                <div key={product.id} className="flex items-center justify-between">
                    <span className="light:text-gray-700 dark:text-gray-300">{product.name}</span>
                    <div className="flex items-center space-x-4">
                        <div className="w-32 light:bdark:bg-gray-700 rounded-full h-2">
                        <div
                            className="bg-orange-500 h-2 rounded-full"
                            style={{
                                width: `${Math.min((parseInt(product.inquiries || "0", 10) / 50) * 100, 100)}%`,
                            }}
                            />
                        </div>
                        <span className="text-sm font-medium w-8">{product.inquiries}</span>
                    </div>
                </div>
            ))}
            </div>
        </Card>
                    
    )
}

export default MotorcycleInquiries