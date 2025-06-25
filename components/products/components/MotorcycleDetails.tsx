import Image from "next/image"
import { ContactForm } from "@/components/form/ContactForm"
import Carrousel from "@/components/images/components/Carrousel"
import FeaturesTable from "./FeaturesTable"
import { MotorcycleDetailProps } from "@/types/product";



export async function MotorcycleDetail({ motorcycle }: MotorcycleDetailProps) {

    const featuresObj = motorcycle.features ?? {};

    const features = Object.entries(featuresObj).map(([clave, valor]) => ({
    key: clave,
    clave,
    valor: valor !== null && valor !== undefined ? String(valor) : "-",
    }));

  return (
    <div className="min-h-screen">
      <Carrousel images={motorcycle.presentation_images}/>
        {/* Motorcycle Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 backdrop-blur-sm">{motorcycle.name}</h1>
          </div>
        </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <p className="text-xl md:text-2xl max-w-3xl mb-3">{motorcycle.description}</p>
        {/* Specifications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Specifications</h2>
          <FeaturesTable features={features}/>
          </div>
        </div>

        {/* Gallery */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold ml-8 mb-8">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {motorcycle.images.map((image, index) => (
              <div
                key={index}
                className="relative h-48 overflow-hidden cursor-pointer hover:scale-105 transition-transform"
              >
                <Image
                  src={image}
                  alt={`${motorcycle.name} gallery ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex justify-center gap-4">
            <div>
                <h2 className="text-3xl font-bold mb-8">Interested? Get in Touch</h2>
                <ContactForm slug={motorcycle.slug} />
            </div>
        </div>
    </div>
  );
}
