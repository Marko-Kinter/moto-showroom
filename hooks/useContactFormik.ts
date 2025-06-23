import { useFormik } from "formik";
import * as Yup from "yup";

interface UseContactFormikProps {
  motorcycleId?: string;
}

export const useContactFormik = ({ motorcycleId }: UseContactFormikProps) => {
  return useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
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
        console.log("Form submitted:", { ...values, motorcycleId });
        await new Promise((resolve) => setTimeout(resolve, 1000));
        alert("Thank you for your interest! We'll get back to you soon.");
        resetForm();
      } catch (error) {
        alert("Something went wrong. Please try again.");
      } finally {
        setSubmitting(false);
      }
    },
  });
};
