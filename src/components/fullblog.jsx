import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function FullBlogPage() {
  const { id } = useParams(); // Get the id from the URL parameter
  const [blog, setBlog] = useState(null);

  const blogs = [
    {
      id: 1,
      title: "OpenAI’s Measures Against Deepfakes",
      content:
        "Full content of the blog about OpenAI measures against deepfakes...",
    },
    {
      id: 2,
      title: "The Future of Artificial Intelligence in Healthcare",
      content:
        "Full content of the blog discussing AI in healthcare and its impact...",
    },
    {
      id: 3,
      title: "5 Emerging Tech Trends to Watch in 2024",
      content:
        "Full content of the blog about the top 5 emerging tech trends for 2024...",
    },
    {
      id: 4,
      title: "AI Ethics: Addressing Bias and Accountability",
      content:
        "Full content of the blog discussing AI ethics and accountability...",
    },
  ];

  useEffect(() => {
    // Find the blog that matches the current id
    const currentBlog = blogs.find((blog) => blog.id === parseInt(id));
    setBlog(currentBlog);
  }, [id]);

  if (!blog) {
    return <p>Blog not found.</p>;
  }

  return (
    <div className="full-blog">
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
    </div>
  );
}

export default FullBlogPage;
