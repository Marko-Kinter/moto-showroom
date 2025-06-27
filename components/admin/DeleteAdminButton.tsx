"use client";

import { addToast, Button } from "@heroui/react";

type Props = {
  email: string;
  onDeleted?: (email:string) => void;
};

export default function DeleteAdminButton({ email, onDeleted}: Props) {
  const handleDelete = async () => {
    const confirmed = confirm("Are you sure you want to delete this user?");
    if (!confirmed) return;

    try {
      const res = await fetch("/api/admins/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email:email }), // 👈 corregido: el backend espera `id`
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error("Failed to delete admin");
      }

      addToast({
            title: "Admin deleted succesfully",
            color: "success",
            timeout: 3000,
            shouldShowTimeoutProgress: true,
          });
      onDeleted?.(email)
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
