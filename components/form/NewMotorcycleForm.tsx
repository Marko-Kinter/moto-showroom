"use client";

import { Form, Input, Textarea, Button, Card } from "@heroui/react";
import { useNewMotorcycleForm } from "@/hooks/useNewProductForm";
import FeatureInputs from "./FeatureInputs";
import { useState } from "react";
import ImageUploadButton from "../images/components/ImageUploadButton";

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
    <Card className="my-4">
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
        label="Subir imagen (detalle)"
        onUpload={(url) => setImages((prev) => [...prev, url])}
        />

        <ul className="text-sm text-gray-400">
        {images.map((url) => (
            <li key={url}>{url}</li>
        ))}
        </ul>

        <ImageUploadButton
        label="Subir imagen (presentación)"
        onUpload={(url) => setPresentationImages((prev) => [...prev, url])}
        />

        <ul className="text-sm text-gray-400">
        {presentationImages.map((url) => (
            <li key={url}>{url}</li>
        ))}
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
