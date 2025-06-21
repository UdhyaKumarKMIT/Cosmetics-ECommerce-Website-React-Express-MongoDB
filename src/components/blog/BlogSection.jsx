import BlogCard from "./BlogCard"
import "./BlogSection.css"

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "SHINE COSMETICS",
      image: "/placeholder.svg?height=300&width=300",
      category: "SKINCARE",
      description:
        "Discover the latest innovations in skincare and healthcare technology and how they can transform your beauty routine.",
    },
    {
      id: 2,
      title: "ROSE ORGANICS",
      image: "/placeholder.svg?height=300&width=300",
      category: "ORGANIC",
      description:
        "Learn about the benefits of many organic ingredients and how they can improve your skin health naturally.",
    },
    {
      id: 3,
      title: "BEAUTY CREAMS",
      image: "/placeholder.svg?height=300&width=300",
      category: "MAKEUP",
      description: "Explore our collection of premium beauty creams designed to enhance your natural beauty.",
    },
  ]

  return (
    <section className="blog-section">
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <BlogCard
            key={post.id}
            title={post.title}
            image={post.image}
            category={post.category}
            description={post.description}
          />
        ))}
      </div>
    </section>
  )
}

export default BlogSection
