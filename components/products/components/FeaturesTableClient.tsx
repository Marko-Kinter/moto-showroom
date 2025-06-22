"use client";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@heroui/react";

type Props = {
  features: Record<string, string>;
};

const FeaturesTableClient = ({ features }: Props) => {
  const rows = Object.entries(features).map(([clave, valor]) => ({
    key: clave,
    clave,
    valor,
  }));

  const columns = [
    { key: "clave", label: "Clave" },
    { key: "valor", label: "Valor" },
  ];

  const getKeyValue = (item: any, key: string) => item[key];

  return (
    <Table hideHeader aria-label="Características del producto">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.key}>{column.label}</TableColumn>
        )}
      </TableHeader>
      <TableBody items={rows}>
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
