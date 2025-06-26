import { addToast } from "@heroui/react";
import { useFormik } from "formik";
import * as Yup from "yup";

type Feature = {
  key: string;
  value: string;
};

interface UseNewMotorcycleFormProps {
  features: Feature[];
  images: string[];
  presentationImages?: string[];
}

// Helper para generar slug
const generateSlug = (name: string) =>
  name
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");

export const useNewMotorcycleForm = ({
  features,
  images,
  presentationImages = [],
}: UseNewMotorcycleFormProps) => {
  return useFormik({
    initialValues: {
      name: "",
      description: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      description: Yup.string().required("Description is required"),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const slug = generateSlug(values.name);

        // Transforma features array en objeto { key: value }
        const featuresObject = features.reduce((acc, curr) => {
          if (curr.key && curr.value) acc[curr.key] = curr.value;
          return acc;
        }, {} as Record<string, string>);

        const payload = {
          ...values,
          slug,
          features: featuresObject,
          images,
          presentation_images: presentationImages,
        };

        console.log(payload)

        const res = await fetch("/api/products", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (!res.ok) throw new Error("Failed to submit");

        addToast({
          title:"Motorcycle added successfully",
          color: "success",
          timeout: 3000,
          shouldShowTimeoutProgress:true,
        });
        resetForm();
      } catch (error) {
        addToast({
          title:"Error adding motorcycle.",
          color: "danger",
          timeout: 3000,
          shouldShowTimeoutProgress:true,
        });
      } finally {
        setSubmitting(false);
      }
    },
  });
};
