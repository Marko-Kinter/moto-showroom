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

type Props = {
  products: Product[];
};

const MotorcyclesTable = ({ products }: Props) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Motorcycle Management</h2>
        <Link href={"/admin/products/new"}>
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
                    <Button color="warning" variant="light">
                      Edit
                    </Button>
                    <Button color="danger" variant="light">
                      Delete
                    </Button>
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
