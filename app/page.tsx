import Carrousel from "@/components/images/components/Carrousel";

export default function HomePage() {
  return (
    <main>
      <Carrousel />
      <section className="text-center">
        <h1 className="text-3xl font-bold">Diseño. Detalle. Potencia.</h1>
        <p className="text-muted-foreground mt-2">
          MKM Garage es una plataforma pensada para quienes buscan más que solo especificaciones: buscan estilo, identidad y potencia. Aquí, cada producto de la gama cobra vida a través de imágenes de alto impacto, descripciones claras y un enfoque centrado en el usuario. Sin precios ni carritos, la experiencia se basa en el contacto directo con asesores que entienden de motores y de personas. Desde el primer vistazo hasta el formulario de contacto, MKM Garage combina diseño, tecnología y pasión sobre ruedas.
        </p>
      </section>
    </main>
  );
}
