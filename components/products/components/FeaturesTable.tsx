"use client";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@heroui/react";

type FeatureItem = {
  key: string;
  clave: string;
  valor: string;
};

type Props = {
  features: FeatureItem[];
};

const FeaturesTable = ({ features }: Props) => {
  const columns = [
    { key: "clave", label: "Clave" },
    { key: "valor", label: "Valor" },
  ];

  const getKeyValue = (item: FeatureItem, key: string) => item[key as keyof FeatureItem];

  return (
    <Table hideHeader isStriped aria-label="Características del producto">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.key}>{column.label}</TableColumn>
        )}
      </TableHeader>
      <TableBody items={features}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => (
              <TableCell>{getKeyValue(item, String(columnKey))}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default FeaturesTable;
