import { PrismaClient, Prisma } from "../lib/prisma/generated/prisma";

const prisma = new PrismaClient();

const userData: Prisma.ProductCreateInput[] = [
  {
        name: 'Moto Hyper 300',
        slug: 'moto-hyper-300',
        description: 'Una motocicleta ágil y potente para ciudad y ruta.',
        features: {
          Motor: '300 cc, 4 tiempos',
          Potencia: '30 hp',
          Peso: '170 kg',
          Suspensión: 'Invertida delantera, monoamortiguador trasero',
        },
        images: [
          'https://res.cloudinary.com/demo/image/upload/v1718200000/moto1.jpg',
          'https://res.cloudinary.com/demo/image/upload/v1718200000/moto2.jpg',
        ],
      },
      {
        name: 'Moto TrailX 450',
        slug: 'moto-trailx-450',
        description: 'Ideal para travesías y caminos rurales. Resistente y cómoda.',
        features: {
          Motor: '450 cc monocilíndrico',
          Autonomía: '400 km',
          Ruedas: '21" delantera, 18" trasera',
          Peso: '190 kg',
        },
        images: [
          'https://res.cloudinary.com/demo/image/upload/v1718200000/moto3.jpg',
          'https://res.cloudinary.com/demo/image/upload/v1718200000/moto4.jpg',
        ],
      },
      {
        name: 'Moto Urban 125',
        slug: 'moto-urban-125',
        description: 'Compacta y económica. Ideal para moverse en ciudad.',
        features: {
          Motor: '125 cc',
          Peso: '120 kg',
          VelocidadMáxima: '95 km/h',
          Frenos: 'Disco delantero, tambor trasero',
        },
        images: [
          'https://res.cloudinary.com/demo/image/upload/v1718200000/moto5.jpg',
        ],
      },
];

export async function main() {
  for (const u of userData) {
    await prisma.product.create({ data: u });
  }
}

main();