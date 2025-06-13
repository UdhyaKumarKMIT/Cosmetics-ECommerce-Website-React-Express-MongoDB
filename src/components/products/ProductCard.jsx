import { Heart } from "lucide-react"
import "./ProductCard.css"

const ProductCard = ({ name, image, category }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={image || "/placeholder.svg"} alt={name} className="product-image" />
        <button className="wishlist-button">
          <Heart size={16} />
        </button>
      </div>
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-category">{category}</p>
        <a href="#" className="shop-now-link">
          Shop Products Now →
        </a>
      </div>
    </div>
  )
}

export default ProductCard
