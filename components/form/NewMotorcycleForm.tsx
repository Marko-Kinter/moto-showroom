"use client";

import { Form, Input, Textarea, Button, Card } from "@heroui/react";
import { useNewMotorcycleForm } from "@/hooks/useNewProductForm";
import FeatureInputs from "./FeatureInputs";
import { useState } from "react";
import ImageUploadButton from "../images/components/ImageUploadButton";
import DeleteImageButton from "../images/components/DeleteImageButton";

type Feature = {
  key: string;
  value: string;
};

export default function NewMotorcycleForm() {
    const [features, setFeatures] = useState<Feature[]>([]);
    const [images, setImages] = useState<string[]>([]);
    const [presentationImages, setPresentationImages] = useState<string[]>([]);


  const formik = useNewMotorcycleForm({ features, images, presentationImages});

  return (
    <Card className="p-4">
      <Form onSubmit={formik.handleSubmit} className="max-w-xl mx-auto space-y-4 my-4">
        <Input
          name="name"
          label="Name"
          placeholder="Enter product name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isInvalid={formik.touched.name && Boolean(formik.errors.name)}
          errorMessage={formik.touched.name && formik.errors.name}
        />

        <Textarea
          name="description"
          label="Description"
          placeholder="Enter the bike description"
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isInvalid={formik.touched.description && Boolean(formik.errors.description)}
          errorMessage={formik.touched.description && formik.errors.description}
        />

        <FeatureInputs features={features} setFeatures={setFeatures} />
        
        <ImageUploadButton
        label="Upload Image (Gallery)"
        onUpload={(url) => setImages((prev) => [...prev, url])}
        />

        <ul className="text-sm text-gray-400">
        {images.map((url) => {
            const publicId = url.split("/").slice(-1)[0].split(".")[0]; // Esto saca el nombre del archivo sin extensión
            return (
              <li key={url} className="flex items-center gap-2">
                <span className="text-sm text-gray-300">{url}</span>
                <DeleteImageButton
                  publicId={publicId}
                  onDeleted={() => setImages((prev) => prev.filter((u) => u !== url))}
                />
              </li>
            );
          })}
        </ul>

        <ImageUploadButton
        label="Upload Image (Carrousel)"
        onUpload={(url) => setPresentationImages((prev) => [...prev, url])}
        />

        <ul className="text-sm text-gray-400">
        {presentationImages.map((url) => {
          const publicId = url.split("/").slice(-1)[0].split(".")[0]; // Esto saca el nombre del archivo sin extensión
          return (
            <li key={url} className="flex items-center gap-2">
              <span className="text-sm text-gray-300">{url}</span>
              <DeleteImageButton
                publicId={publicId}
                onDeleted={() => setPresentationImages((prev) => prev.filter((u) => u !== url))}
              />
            </li>
          );
        })}
        </ul>

        <Button
          type="submit"
          color="default"
          variant="bordered"
          fullWidth
          isDisabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? "Sending..." : "Upload new moto"}
        </Button>
      </Form>
    </Card>
  );
}
