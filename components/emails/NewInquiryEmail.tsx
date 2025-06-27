import * as React from "react";
import { Html, Head, Body, Container, Heading, Text, Button } from "@react-email/components";

interface Props {
  name: string;
  email: string;
  phone: string;
  message: string;
  slug: string;
}

export default function AdminNotificationEmail({ name, email, phone, message, slug }: Props) {
  // Asegurarnos de que el link de WhatsApp esté bien formateado
  const waLink = `https://wa.me/${phone.replace(/[^0-9]/g, "")}`;

  return (
    <Html lang="en">
      <Head />
      <Body style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f4f4f4", padding: "20px 0" }}>
        <Container style={{ backgroundColor: "#ffffff", padding: "20px", borderRadius: "8px" }}>
          <Heading style={{ fontSize: "20px", marginBottom: "10px" }}>
            🚀 New Inquiry from {name}
          </Heading>
          <Text style={{ marginBottom: "10px" }}>
            <strong>Name:</strong> {name}
            <br />
            <strong>Email:</strong> {email}
            <br />
            <strong>Message:</strong> {message}
            <br />
            <strong>Motorcycle (slug):</strong> {slug}
          </Text>

          <Button
            href={waLink}
            style={{
              backgroundColor: "#25D366",
              color: "#ffffff",
              textDecoration: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              fontWeight: "bold",
            }}
          >
            Open WhatsApp Chat
          </Button>
        </Container>
      </Body>
    </Html>
  );
}
