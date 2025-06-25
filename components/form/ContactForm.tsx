"use client";

import { Form, Input, Textarea, Button, Card } from "@heroui/react";
import { useContactFormik } from "@/hooks/useContactFormik";

interface ContactFormProps {
  slug?: string;
}

export function ContactForm({ slug }: ContactFormProps) {
  const formik = useContactFormik({ slug });

  return (
    <Card className="">
        <Form onSubmit={formik.handleSubmit} className="mx-6 space-y-4 my-4">
        <Input
            name="name"
            label="Full Name"
            placeholder="Enter your full name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isInvalid={formik.touched.name && Boolean(formik.errors.name)}
            errorMessage={formik.touched.name && formik.errors.name}
        />

        <Input
            name="email"
            label="Email"
            placeholder="Enter your email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isInvalid={formik.touched.email && Boolean(formik.errors.email)}
            errorMessage={formik.touched.email && formik.errors.email}
        />

        <Input
            name="phone"
            label="Phone"
            placeholder="Enter your phone number"
            type="tel"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isInvalid={formik.touched.phone && Boolean(formik.errors.phone)}
            errorMessage={formik.touched.phone && formik.errors.phone}
        />

        <Textarea
            name="message"
            label="Message (Optional)"
            placeholder="Tell us about your adventure plans or any questions..."
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isInvalid={formik.touched.message && Boolean(formik.errors.message)}
            errorMessage={formik.touched.message && formik.errors.message}
            />

        <Button type="submit" color="default" variant="bordered" fullWidth isDisabled={formik.isSubmitting}>
            {formik.isSubmitting ? "Sending..." : "Start the Conversation"}
        </Button>
        </Form>
    </Card>
  );
}
