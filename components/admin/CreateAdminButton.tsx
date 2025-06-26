"use client";

import { useState } from "react";
import { Button, Modal, Input, Form, useDisclosure, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@heroui/react";
import { useAdminFormik } from "@/hooks/useAdminFormik";

export default function AdminAccessButton() {
  const formik = useAdminFormik();
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
  return (
    <>
      <Button onPress={onOpen} color="default">
        Add Admin
      </Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="sm">
        <ModalContent>
            {(onClose) => (
                <>
                <ModalHeader>Admin Access</ModalHeader>
                <ModalBody>
                    <Form onSubmit={formik.handleSubmit} className="space-y-4 mt-4">
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
                            type="email"
                            label="Email"
                            placeholder="Enter your email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            isInvalid={formik.touched.email && Boolean(formik.errors.email)}
                            errorMessage={formik.touched.email && formik.errors.email}
                        />
                        <ModalFooter>
                            <Button
                                type="submit"
                                color="primary"
                                onPress={onClose}
                                fullWidth
                                isDisabled={formik.isSubmitting}
                                >
                                {formik.isSubmitting ? "Submitting..." : "Submit"}
                            </Button>
                        </ModalFooter>
                        </Form>
                </ModalBody>
                </>
            )}
        </ModalContent>

        
      </Modal>
    </>
  );
}
