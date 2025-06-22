export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 space-y-8">
      <section>
        <h1 className="text-4xl font-bold mb-4">Sobre Nosotros</h1>
        <p className="text-lg text-gray-700">
          En <strong>MKM Garage</strong>, nos apasiona la velocidad, el diseño y la libertad que solo una motocicleta puede ofrecer. Desde nuestros inicios, nos hemos comprometido con brindar a nuestros clientes una experiencia de alto nivel, tanto en la calidad de nuestras motos como en el servicio personalizado que ofrecemos.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Nuestra Misión</h2>
        <p className="text-gray-700">
          Queremos convertirnos en el showroom de referencia para motociclistas exigentes, ofreciendo modelos cuidadosamente seleccionados que destacan por su rendimiento, estilo y confiabilidad.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Lo que nos diferencia</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Catálogo exclusivo de motos de media y alta gama</li>
          <li>Asesoramiento técnico y estético personalizado</li>
          <li>Soporte post-venta y conexión directa con talleres de confianza</li>
          <li>Eventos, pruebas de manejo y comunidad para fanáticos de las motos</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Dónde encontrarnos</h2>
        <p className="text-gray-700">
          Estamos ubicados en el corazón de Villa Carlos Paz, Córdoba. Visitá nuestro showroom para ver nuestras motos en persona o contactanos para agendar una cita.
        </p>
      </section>
    </main>
  );
}
