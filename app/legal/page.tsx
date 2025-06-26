export default function LegalPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 space-y-8">
      <section>
        <h1 className="text-4xl font-bold mb-4">Legal Notice</h1>
        <p className="text-lg dark:text-gray-300 light:text-gray-700">
          This website is created and maintained by <strong>MKM Garage</strong> for educational and demonstration purposes only. All content, including motorcycle listings, inquiries, and administrative features, are part of a student project and should not be considered as real commercial offerings.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Terms and Conditions</h2>
        <p className="dark:text-gray-300 light:text-gray-700">
          By using this website, you acknowledge that:
        </p>
        <ul className="list-disc list-inside dark:text-gray-300 light:text-gray-700 space-y-1 mt-2">
          <li>The content is fictional and used for learning web development technologies.</li>
          <li>No products or services listed are available for purchase.</li>
          <li>No personal data submitted through forms will be used for marketing or sales purposes.</li>
          <li>This site is not affiliated with any real motorcycle brand or dealer.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Educational Purpose</h2>
        <p className="dark:text-gray-300 light:text-gray-700">
          The project was developed as part of a software development learning path, using modern tools such as Next.js, Prisma, Cloudinary, and Google Auth. The goal is to demonstrate technical skills in full-stack development.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Contact</h2>
        <p className="dark:text-gray-300 light:text-gray-700">
          For questions about the project or to provide feedback, please reach out to us via the contact form. We welcome suggestions from developers, educators, and peers.
        </p>
      </section>
    </main>
  );
}
