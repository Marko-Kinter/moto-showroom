"use client";

import { Product } from "@/types/product";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Skeleton,
} from "@heroui/react";
import Link from "next/link";
import DeleteProductButton from "../products/components/DeletProductButton";
import { useProducts } from "@/hooks/useProducts";

type Props = {
  onDeleted?: (id: string) => void;
};

export default function MotorcyclesTable({ onDeleted }: Props) {
  const { data: products, error, isLoading, mutate } = useProducts();

  // ⚠️ Cargando: mostramos Skeletons
  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <Skeleton classNames={{ base: "h-8 w-1/3 rounded" }} />
          <Skeleton classNames={{ base: "h-8 w-40 rounded" }} />
        </div>
        <div className="card">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableColumn><Skeleton classNames={{ base: "h-6 w-20 rounded" }} /></TableColumn>
                <TableColumn className="text-right"><Skeleton classNames={{ base: "h-6 w-20 rounded" }} /></TableColumn>
              </TableHeader>
              <TableBody>
                {/* Repetimos filas de ejemplo */}
                {Array.from({ length: 4 }).map((_, i) => (
                  <TableRow key={i}>
                    <TableCell>
                      <Skeleton classNames={{ base: "h-5 w-32 rounded" }} />
                    </TableCell>
                    <TableCell className="text-right">
                      <Skeleton classNames={{ base: "h-8 w-16 rounded inline-block" }} />
                      <Skeleton classNames={{ base: "h-8 w-16 rounded inline-block ml-2" }} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return <p className="p-4 text-red-500">Error loading products</p>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Motorcycle Management</h2>
        <Link href={"/admin/new"}>
          <Button>Add New Motorcycle</Button>
        </Link>
      </div>

      <div className="card">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableColumn>Name</TableColumn>
              <TableColumn className="text-right">Actions</TableColumn>
            </TableHeader>
            <TableBody>
              {products!.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>{product.name}</TableCell>
                  <TableCell className="text-right">
                    <Link href={`/admin/edit/${product.slug}`}>
                      <Button color="warning" variant="light">
                        Edit
                      </Button>
                    </Link>
                    <DeleteProductButton
                      productId={product.id}
                      onDeleted={() => {
                        onDeleted?.(product.id);
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
