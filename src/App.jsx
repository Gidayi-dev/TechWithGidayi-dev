import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router, Routes, and Route for routing
import Blogs from "./components/blogs";
import Header from "./components/header";
import FullBlogPage from "./components/fullblog";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<FullBlogPage />} />
      </Routes>
    </Router>
  );
}

export default App;
