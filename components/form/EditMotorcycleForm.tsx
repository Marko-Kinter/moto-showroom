"use client";

import { Product } from "@/types/product";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input, Textarea, Button, Card } from "@heroui/react";
import FeatureInputs from "./FeatureInputs";
import { useState } from "react";
import ImageUploadButton from "../images/components/ImageUploadButton";

type Props = {
  product: Product;
};

export default function EditMotorcycleForm({ product }: Props) {
  const [features, setFeatures] = useState(() =>
    Object.entries(product.features || {}).map(([key, value]) => ({ key, value }))
  );
  const [images, setImages] = useState(product.images || []);
  const [presentationImages, setPresentationImages] = useState(product.presentation_images || []);

  const formik = useFormik({
    initialValues: {
      name: product.name,
      description: product.description,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      description: Yup.string().required("Description is required"),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const featuresObject = features.reduce((acc, { key, value }) => {
          if (key && value) acc[key] = value;
          return acc;
        }, {} as Record<string, string>);

        const payload = {
          ...values,
          id: product.id,
          slug: product.slug,
          features: featuresObject,
          images,
          presentation_images: presentationImages,
        };

        const res = await fetch("/api/products/edit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (!res.ok) throw new Error("Failed to edit product");

        alert("Motorcycle updated successfully!");
      } catch (err) {
        alert("Error updating motorcycle");
        console.error(err);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <Card className="my-4">
      <form onSubmit={formik.handleSubmit} className="space-y-4 p-6">
        <Input
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isInvalid={formik.touched.name && Boolean(formik.errors.name)}
          errorMessage={formik.errors.name}
        />
        <Textarea
          name="description"
          label="Description"
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isInvalid={formik.touched.description && Boolean(formik.errors.description)}
          errorMessage={formik.errors.description}
        />

        <FeatureInputs features={features} setFeatures={setFeatures} />

        <ImageUploadButton
          label="Add Detail Image"
          onUpload={(url) => setImages((prev) => [...prev, url])}
        />
        <ul>{images.map((url) => <li key={url}>{url}</li>)}</ul>

        <ImageUploadButton
          label="Add Presentation Image"
          onUpload={(url) => setPresentationImages((prev) => [...prev, url])}
        />
        <ul>{presentationImages.map((url) => <li key={url}>{url}</li>)}</ul>

        <Button type="submit" fullWidth isDisabled={formik.isSubmitting}>
          {formik.isSubmitting ? "Updating..." : "Update Motorcycle"}
        </Button>
      </form>
    </Card>
  );
}
