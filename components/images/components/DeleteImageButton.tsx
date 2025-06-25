"use client";

import { addToast, Button } from "@heroui/react";

type Props = {
  publicId: string;
  onDeleted?: () => void;
};

export default function DeleteImageButton({ publicId, onDeleted }: Props) {
  const handleDelete = async () => {
    const confirmed = confirm("Are you sure you want to delete this image?");
    if (!confirmed) return;

    try {
        const res = await fetch("/api/cloudinary/delete-image", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ publicId }),
        });

        const data = await res.json();

        if (!res.ok || !data.success) throw new Error(data.error || "Failed to delete");

        addToast({
            title: "Image successfully deleted!",
            variant: "bordered",
            color: "success",
            timeout: 3000,
        });
        onDeleted?.();
        } catch (err) {
        console.error("Delete failed:", err);
        addToast({
            title: "Something went wrong, please try again later.",
            variant: "bordered",
            color: "warning",
            timeout: 3000,
        });
    }
  };

  return (
    <Button color="danger" variant="light" onPress={handleDelete}>
      Delete Image
    </Button>
  );
}
