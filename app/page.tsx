import { Hero } from "@/components/home/Hero"
import { CompanyValues } from "@/components/home/CompanyValues"
import Carrousel from "@/components/images/components/Carrousel"
import ProductList from "@/components/home/ProductList"

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Carrousel images={[
        "https://res.cloudinary.com/dilbujbhi/image/upload/v1750746153/v7hfw9wvkasktmdckhrb.jpg",
        "https://res.cloudinary.com/dilbujbhi/image/upload/v1750746187/ysrzpkoalky0xkktm9ma.jpg",
        "https://res.cloudinary.com/dilbujbhi/image/upload/v1750746204/fjnw7c7iv30cezmm04lj.jpg"]}/>

      <div id="products-section">
        <ProductList />
      </div>

      <CompanyValues />
    </div>
  )
}
