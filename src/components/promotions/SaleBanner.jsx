import "./SaleBanner.css"

const SaleBanner = () => {
  return (
    <section className="sale-banner">
         <div className="sale-content">
        <h2 className="sale-title">Spring Beauty Sale</h2>
        <h3 className="sale-subtitle">Up to 40% Off</h3>
        <p className="sale-description">
          Enjoy premium beauty products at unbeatable prices. Limited time beauty deals on your favorite skincare and
          makeup brands. Don't miss out!
        </p>
        <div className="rating">
          <span className="stars">★★★★★</span>
          <span className="reviews">(120+ reviews)</span>
        </div>
        <div className="sale-buttons">
          <button className="shop-button">SHOP NOW</button>
          <button className="view-button">VIEW ALL PRODUCTS</button>
        </div>
      </div>
      <div className="sale-products">
        {/* These would be actual images in a real implementation */}
        <div className="sale-product product-1"></div>
        <div className="sale-product product-2"></div>
        <div className="sale-product product-3"></div>
      </div>
    </section>
   
  )
}

export default SaleBanner
