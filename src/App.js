import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Navigation/Header";
import Artists from "./pages/Artist/Artists"; // ✅ Correct path
import Contact from "./pages/Contact"; // Ensure correct path
import Home from "./pages/Home";
import Footer from "./components/Navigation/Footer";
import ArtistGallery from "./components/ArtistGallery/ArtistGallery";
import ArtistPage from "./pages/Artist/ArtistPage";
import ArticlePage from "./pages/Article/ArticlePage";
import MoreArticles from "./pages/Article/MoreArticles";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> {/* ✅ Corrected */}
        <Route path="/artists" element={<Artists />} />
        <Route path="/news" element={<ArticlePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/artist-gallery" element={<ArtistGallery />} /> {/* ✅ Changed route */}
        <Route path="/artist/:id" element={<ArtistPage />} />
        <Route path="/article/:id" element={<ArticlePage />} />
        <Route path="/more-articles" element={<MoreArticles />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
