import ProductCard from "./ProductCard"
import "./FeaturedProducts.css"

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "LIPSTICKS",
      image: "/placeholder.svg?height=200&width=200",
      category: "Makeup",
    },
    {
      id: 2,
      name: "FOUNDATION ",
      image: "/placeholder.svg?height=200&width=200",
      category: "Makeup",
    },
    {
      id: 3,
      name: "Skincare and Healthcare MOISTURIZER",
      image: "/placeholder.svg?height=200&width=200",
      category: "Skincare",
    },
    {
      id: 4,
      name: "Skincare Liquid  Mosturizer",
      image: "/placeholder.svg?height=200&width=200",
      category: "Accessories",
    },
    {
      id: 5,
      name: "SKIN CARE and Hair Care Products",
      image: "/placeholder.svg?height=200&width=200",
      category: "Skincare",
    },
  ]

  return (
    <section className="featured-products">
      <h2 className="section-title">Featured Product</h2>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} name={product.name} image={product.image} category={product.category} />
        ))}
      </div>
    </section>
  )
}

export default FeaturedProducts
