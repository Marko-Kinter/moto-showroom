"use client";

import { Input, Textarea, Button, Card, CardBody } from "@heroui/react";

export default function ContactPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 space-y-10">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-2">Contacto</h1>
        <p className="text-gray-600 text-lg">
          ¿Tenés preguntas sobre nuestras motos o querés coordinar una visita al showroom?
          Escribinos.
        </p>
      </section>

      <Card>
        <CardBody className="space-y-6">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <Input type="text" label="Nombre" placeholder="Tu nombre" required />
            <Input type="email" label="Email" placeholder="tu@correo.com" required />
            <Textarea label="Mensaje" placeholder="Escribí tu consulta..." required />

            <div className="text-right">
              <Button color="primary" type="submit">
                Enviar mensaje
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>

      <section className="text-gray-700">
        <h2 className="text-2xl font-semibold mb-2">O encontranos en persona</h2>
        <p>
          📍 Av. Principal 123, Villa Carlos Paz, Córdoba <br />
          🕒 Lunes a Viernes de 9:00 a 18:00 hs <br />
          📞 +54 9 351 123-4567 <br />
          📧 contacto@mkmgarage.com
        </p>
      </section>
    </main>
  );
}
