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

const FeaturesTableClient = ({ features }: Props) => {
  const columns = [
    { key: "clave", label: "Clave" },
    { key: "valor", label: "Valor" },
  ];

  const getKeyValue = (item: FeatureItem, key: string) => item[key as keyof FeatureItem];

  return (
    <Table hideHeader aria-label="Características del producto">
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

export default FeaturesTableClient;
