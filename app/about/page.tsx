export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 space-y-8">
      <section>
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg dark:text-gray-300 light:text-gray-700">
          At <strong>MKM Garage</strong>, we&apos;re passionate about speed, design, and the freedom that only a motorcycle can offer. Since the beginning, we&apos;ve been committed to providing our customers with a top-tier experience, both in the quality of our bikes and the personalized service we offer.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
        <p className="dark:text-gray-300 light:text-gray-700">
          We aim to become the go-to showroom for demanding motorcyclists, offering carefully selected models that stand out for their performance, style, and reliability.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">What Sets Us Apart</h2>
        <ul className="list-disc list-inside dark:text-gray-300 light:text-gray-700 space-y-1">
          <li>Exclusive catalog of mid and high-end motorcycles</li>
          <li>Personalized technical and aesthetic advice</li>
          <li>After-sales support and direct connection with trusted workshops</li>
          <li>Events, test rides, and a community for motorcycle enthusiasts</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Where to Find Us</h2>
        <p className="dark:text-gray-300 light:text-gray-700">
          We&apos;re located in the heart of Villa Carlos Paz, Córdoba. Visit our showroom to see our motorcycles in person or contact us to schedule an appointment.
        </p>
      </section>
    </main>
  );
}
