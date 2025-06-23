"use client";

import { Form, Input, Textarea, Button, Card } from "@heroui/react";
import { useContactFormik } from "@/hooks/useContactFormik";

interface ContactFormProps {
  motorcycleId?: string;
}

export function ContactForm({ motorcycleId }: ContactFormProps) {
  const formik = useContactFormik({ motorcycleId });

  return (
    <Card className="my-4">
        <Form onSubmit={formik.handleSubmit} className="max-w-xl mx-auto space-y-4 my-4">
        <Input
            name="fullName"
            label="Full Name"
            placeholder="Enter your full name"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isInvalid={formik.touched.fullName && Boolean(formik.errors.fullName)}
            errorMessage={formik.touched.fullName && formik.errors.fullName}
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
