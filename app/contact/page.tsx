import { ContactForm } from "@/components/form/ContactForm";

export default function ContactPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 space-y-10">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-2">Contact</h1>
        <p className="light:text-gray-700 dark:text-gray-300 text-lg">
          Do you have questions about our motorcycles or want to schedule a visit to the showroom?
          Send us a message.
        </p>
      </section>

      <ContactForm />

      <section className="dark:text-gray-300 light:text-gray-700">
        <h2 className="text-2xl font-semibold mb-2">Or find us in person</h2>
        <p>
          📍 Av. Principal 123, Villa Carlos Paz, Córdoba <br />
          🕒 Monday to Friday from 9:00 AM to 6:00 PM <br />
          📞 +54 9 351 123-4567 <br />
          📧 contacto@mkmgarage.com
        </p>
      </section>
    </main>
  );
}
