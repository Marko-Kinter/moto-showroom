import { Button } from "@heroui/react";
import { CldUploadWidget } from "next-cloudinary";

interface ImageUploadButtonProps {
  onUpload: (url: string) => void;
  label: string;
}

export default function ImageUploadButton({ onUpload, label }: ImageUploadButtonProps) {
  return (
    <CldUploadWidget
      uploadPreset="products-photos"
      onSuccess={(result: any) => {
        if (result?.info?.secure_url) {
          onUpload(result.info.secure_url);
        }
      }}
    >
      {({ open }) => {
        return (
          <Button
            type="button"
            onPress={() => open?.()}
            className="btn-primary"
          >
            {label}
          </Button>
        );
      }}
    </CldUploadWidget>
  );
}