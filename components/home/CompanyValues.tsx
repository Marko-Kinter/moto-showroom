import { MapIcon, ShieldCheckIcon, HeartIcon, GlobeAltIcon } from "@heroicons/react/24/outline"

const values = [
  {
    icon: MapIcon,
    title: "Trail Blazers",
    description:
      "Every journey should lead to discovery. Our motorcycles are chosen to handle any terrain and inspire endless exploration.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Built to Last",
    description:
      "Rugged reliability for the long haul. Every machine meets our standards for durability and performance in any condition.",
  },
  {
    icon: HeartIcon,
    title: "Adventure Spirit",
    description:
      "Our team lives for the open road and untamed trails. We share your passion for freedom and the call of the wild.",
  },
  {
    icon: GlobeAltIcon,
    title: "Journey Together",
    description:
      "We build a community of explorers, supporting riders through gear, guidance, and shared stories of the road less traveled.",
  },
]

export function CompanyValues() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Adventure Code</h2>
          <p className="text-xl dark:text-gray-400 light:text-gray-800">The principles that guide every mile</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="m-4 p-4 rounded-xl text-center group hover:bg-gray-600/20 transition-all duration-300">
              <div className="mb-6">
                <value.icon className="h-12 w-12 mx-auto group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
              <p className="light:text-gray-800 dark:text-gray-400 transition-colors">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
