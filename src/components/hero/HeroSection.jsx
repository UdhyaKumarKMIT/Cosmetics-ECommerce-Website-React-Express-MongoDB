import "./HeroSection.css"

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-stars">★ ★ ★ ★ ★</div>
        <h2 className="hero-title">
          Glow like
          <br />
          never before!
        </h2>
        <button className="hero-button">SHOP NOW</button>
      </div>
      <div className="hero-products">
        {/* These would be actual images in a real implementation */}
        <div className="product product-1"></div>
        <div className="product product-2"></div>
        <div className="product product-3"></div>
        <div className="product product-4"></div>
        <div className="product product-5"></div>
        <div className="product product-6"></div>
      </div>
    </section>
  )
}

export default HeroSection
