import "./BlogCard.css"

const BlogCard = ({ title, image, category, description }) => {
  return (
    <div className="blog-card">
      <div className="blog-image-container">
        <img src={image || "/placeholder.svg"} alt={title} className="blog-image" />
      </div>
      <div className="blog-content">
        <span className="blog-category">{category}</span>
        <h3 className="blog-title">{title}</h3>
        <p className="blog-description">{description}</p>
        <div className="blog-meta">
          <span className="blog-date">PUBLISHED: June 18, 2025 Wednesday</span>
          <a href="#" className="read-more">
            READ MORE → To Know More
          </a>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
