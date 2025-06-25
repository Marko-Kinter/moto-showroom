"use client";

import { addToast, Button } from "@heroui/react";

type Props = {
  productId: string;
  onDeleted?: () => void;
};

export default function DeleteProductButton({ productId, onDeleted }: Props) {
  const handleDelete = async () => {
    const confirmed = confirm("Are you sure you want to delete this motorcycle?");
    if (!confirmed) return;

    try {
      const res = await fetch("/api/products/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: productId }), // 👈 corregido: el backend espera `id`
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error("Failed to delete motorcycle");
      }

      addToast({
            title: "Motorcycle deleted succesfully",
            color: "success",
            timeout: 3000,
            shouldShowTimeoutProgress: true,
          });
      onDeleted?.();
    } catch (err) {
      addToast({
        title: "Something went wrong. Please try again.",
        color: "warning",
        timeout: 3000,
        shouldShowTimeoutProgress: true,
      });
      console.error(err);
    }
  };

  return (
    <Button color="danger" variant="light" onPress={handleDelete}>
      Delete
    </Button>
  );
}
