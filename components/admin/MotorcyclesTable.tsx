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
} from "@heroui/react";
import Link from "next/link";
import DeleteProductButton from "../products/components/DeletProductButton";
import { useRouter } from "next/navigation";

type Props = {
  products: Product[];
};

const MotorcyclesTable = ({ products }: Props) => {
  const router = useRouter();
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
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell >
                    {product.name}
                  </TableCell>
                  <TableCell className="text-right">
                    <Link href={`/admin/edit/${product.slug}`}>
                      <Button color="warning" variant="light">
                        Edit
                      </Button>
                    </Link>
                    <DeleteProductButton productId={product.id} onDeleted={() => router.refresh()}/>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default MotorcyclesTable;
