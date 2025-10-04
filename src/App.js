import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Header from "./components/Navigation/Header";
import Artists from "./pages/Artist/Artists";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Footer from "./components/Navigation/Footer";
import ArtistGallery from "./components/ArtistGallery/ArtistGallery";
import ArtistPage from "./pages/Artist/ArtistPage";
import News from "./pages/News";
import ArticlePage from "./pages/Article/ArticlePage";
import Concerts from "./pages/Concerts";
import Social from "./pages/Social";
import Profile from "./pages/Profile";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";

import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/news" element={<News />} />
          <Route path="/concerts" element={<Concerts />} />
              <Route path="/social" element={<Social />} />
              <Route path="/profile/:username" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/artist-gallery" element={<ArtistGallery />} />
          <Route path="/artist/:id" element={<ArtistPage />} />
          <Route path="/article/:id" element={<ArticlePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
