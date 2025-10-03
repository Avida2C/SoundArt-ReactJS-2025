import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Navigation/Header";
import Artists from "./pages/Artist/Artists"; // ✅ Correct path
import Contact from "./pages/Contact"; // Ensure correct path
import Home from "./pages/Home";
import Footer from "./components/Navigation/Footer";
import ArtistGallery from "./components/ArtistGallery/ArtistGallery";
import ArtistPage from "./pages/Artist/ArtistPage";
import News from "./pages/News";
import ArticlePage from "./pages/Article/ArticlePage";
import Concerts from "./pages/Concerts";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> {/* ✅ Corrected */}
        <Route path="/artists" element={<Artists />} />
        <Route path="/news" element={<News />} />
        <Route path="/concerts" element={<Concerts />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/artist-gallery" element={<ArtistGallery />} /> {/* ✅ Changed route */}
        <Route path="/artist/:id" element={<ArtistPage />} />
        <Route path="/article/:id" element={<ArticlePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
