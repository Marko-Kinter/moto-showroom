import { Hero } from "@/components/home/Hero"
import { CompanyValues } from "@/components/home/CompanyValues"
import Carrousel from "@/components/images/components/Carrousel"

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Carrousel />
      <CompanyValues />
    </div>
  )
}
