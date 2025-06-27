"use client";

import { Button, Modal, Form, Input, useDisclosure, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@heroui/react";
import { useAdminFormik } from "@/hooks/useAdminFormik";
import useAdmins from "@/hooks/useAdmins";  // tu hook SWR

export default function AdminAccessButton() {
  const formik = useAdminFormik();
  const { data: admins, mutate } = useAdmins();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} color="default">
        Add Admin
      </Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="sm">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Add Admin Access</ModalHeader>
              <ModalBody>
                <Form onSubmit={formik.handleSubmit} className="space-y-4 mt-4">
                  <Input
                    name="name"
                    label="Full Name"
                    placeholder="Enter full name"
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
                    placeholder="Enter email"
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
                      fullWidth
                      isDisabled={formik.isSubmitting}
                      onPress={() => {
                        // Esperamos a que formik termine y sea exitoso
                        formik.submitForm().then(() => {
                          if (!formik.isValidating && !formik.isSubmitting && !formik.errors.email) {
                            // Refrescamos lista y cerramos modal
                            mutate();
                            onClose();
                            formik.resetForm();
                          }
                        });
                      }}
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
