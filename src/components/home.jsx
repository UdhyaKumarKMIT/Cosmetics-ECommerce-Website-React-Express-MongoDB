// Create a new file: ./components/Home.js

import HeroSection from "./hero/HeroSection"
import FeaturedProducts from "./products/FeaturedProducts"
import SaleBanner from "./promotions/SaleBanner"
import BlogSection from "./blog/BlogSection"
function Home() {
  return (
    <main>
      
      <HeroSection />
      <FeaturedProducts />
      <SaleBanner />
      <BlogSection />
    </main>
  )
}

export default Home
