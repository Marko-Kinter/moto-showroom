import { useFormik } from "formik";
import * as Yup from "yup";
import { addToast } from "@heroui/react";

export const useAdminFormik = () => {
  return useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const res = await fetch("/api/admins", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        if (!res.ok) throw new Error();

        addToast({
          title: "Admin access granted successfully.",
          color: "success",
          timeout: 3000,
          shouldShowTimeoutProgress: true,
        });

        resetForm();
      } catch (err) {
        addToast({
          title: "Failed to grant admin access.",
          color: "warning",
          timeout: 3000,
          shouldShowTimeoutProgress: true,
        });
      } finally {
        setSubmitting(false);
      }
    },
  });
};
