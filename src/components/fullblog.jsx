import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./fullblog.css";

function FullBlogPage() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  const blogs = [
    {
      id: 1,
      title: <h2>OpenAI's Measures Against Deepfakes</h2>,
      content: `
        <p>OpenAI has recently taken significant steps to combat the rise of deepfakes, especially with the upcoming 2024 elections. Here's a detailed explanation of their measures:</p>

        <h3>1. Deepfake Detection Tool</h3>
        <p>OpenAI has developed a new AI image detection classifier that can identify AI-generated images with a high degree of accuracy.</p>

        <h3>2. Tamper-Resistant Metadata</h3>
        <p>To enhance the detection process, OpenAI has added tamper-resistant metadata to all images created and edited by DALL-E 3.</p>
        
        <h3>3. Integration with Future Tools</h3>
        <p>OpenAI plans to integrate this metadata standard into its upcoming video generator, Sora.</p>
        
        <blockquote>"Deepfakes have become a significant concern, especially with their potential to influence public opinion and disrupt elections."</blockquote>
      `,
    },
  ];

  useEffect(() => {
    const currentBlog = blogs.find((blog) => blog.id === parseInt(id));
    setBlog(currentBlog);
  }, [id]);

  if (!blog) {
    return <p>Blog not found.</p>;
  }

  return (
    <div className="full-blog">
      <h1>{blog.title}</h1>
      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </div>
  );
}

export default FullBlogPage;
