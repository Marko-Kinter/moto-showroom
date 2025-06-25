import { addToast } from "@heroui/react";
import { useFormik } from "formik";
import * as Yup from "yup";

interface UseContactFormikProps {
  slug?: string;
}

export const useContactFormik = ({ slug }: UseContactFormikProps) => {
  return useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Name must be at least 2 characters")
        .required("Full name is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      phone: Yup.string()
        .matches(/^[+]?[1-9][\d]{0,15}$/, "Invalid phone number")
        .required("Phone number is required"),
      message: Yup.string().max(500, "Message must be less than 500 characters"),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        console.log("Form submitted:", { ...values, slug });
        
        if (slug) {
          await fetch("/api/products/inquiry", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...values, slug }),
          });
        }
        addToast({
          title: "Thank you for your interest! We'll get back to you soon.",
          color: "success",
          timeout: 3000,
        });
        resetForm();
      } catch (error) {
        addToast({
          title: "Something went wrong, please try again later.",
          color: "warning",
          timeout: 3000,
        });
      } finally {
        setSubmitting(false);
      }
    },
  });
};
