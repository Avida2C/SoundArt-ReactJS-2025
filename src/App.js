import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { AuthProvider } from "./contexts/AuthContext";
import Header from "./components/Navigation/Header";
import Artists from "./pages/Artist/Artists";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import BottomNav from "./components/Navigation/BottomNav";
import MoreSidebar from "./components/Navigation/MoreSidebar";
import ArtistGallery from "./components/ArtistGallery/ArtistGallery";
import ArtistPage from "./pages/Artist/ArtistPage";
import News from "./pages/News";
import ArticlePage from "./pages/Article/ArticlePage";
import Concerts from "./pages/Concerts";
import ConcertTicketDemo from "./pages/ConcertTicketDemo";
import Social from "./pages/Social";
import Profile from "./pages/Profile";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";
import { FEATURE_FLAGS } from "./constants";

import "./App.css";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

function App() {
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  return (
    <AuthProvider>
      <Router
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/news" element={<News />} />
          <Route path="/concerts" element={<Concerts />} />
          <Route path="/concerts/:id/tickets" element={<ConcertTicketDemo />} />
          {FEATURE_FLAGS.communityEnabled && (
            <Route path="/social" element={<Social />} />
          )}
          {FEATURE_FLAGS.authEnabled && (
            <Route path="/profile/:username" element={<Profile />} />
          )}
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/artist-gallery" element={<ArtistGallery />} />
          <Route path="/artist/:id" element={<ArtistPage />} />
          <Route path="/article/:id" element={<ArticlePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <MoreSidebar open={isMoreOpen} onClose={() => setIsMoreOpen(false)} />
        <BottomNav
          onMoreClick={() => setIsMoreOpen(true)}
          isMoreOpen={isMoreOpen}
        />
      </Router>
    </AuthProvider>
  );
}

export default App;
