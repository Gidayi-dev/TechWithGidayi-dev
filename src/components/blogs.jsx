import React from "react";
import { Link } from "react-router-dom";

function Blogs() {
  const blogs = [
    {
      id: 1,
      title: "OpenAI’s Measures Against Deepfakes",
      summary:
        "OpenAI has recently taken significant steps to combat the rise of deepfakes, especially with the upcoming 2024 elections. Here’s a detailed explanation of their measures:",
    },
    {
      id: 2,
      title: "The Future of Artificial Intelligence in Healthcare",
      summary:
        "With the rapid development of AI technologies, the healthcare sector is seeing significant improvements. In this post, we dive into the potential of AI in diagnostics and patient care.",
    },
    {
      id: 3,
      title: "5 Emerging Tech Trends to Watch in 2024",
      summary:
        "2024 promises to be a breakthrough year for several emerging technologies. We explore the top five trends to look out for, from quantum computing to autonomous systems.",
    },
    {
      id: 4,
      title: "AI Ethics: Addressing Bias and Accountability",
      summary:
        "As AI becomes more integrated into our lives, concerns about ethics and fairness are growing. This blog discusses the challenges of AI bias and the need for greater accountability in AI systems.",
    },
  ];

  return (
    <div className="blogs-section">
      <h4>
        Explore the latest trends, updates, and insights from the world of
        technology. Stay informed and inspired with our weekly blog posts!
      </h4>

      <div className="blog-cards">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <h5>{blog.title}</h5>
            <p>{blog.summary}</p>
            <Link to={`/blog/${blog.id}`} className="read-more">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
