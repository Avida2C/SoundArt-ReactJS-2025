import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Artists from "./pages/Artists"; // Ensure these components exist
import News from "./pages/News";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ArtistGallery from "./components/ArtistGallery/ArtistGallery";
import ArtistPage from "./pages/ArtistPage";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Artists" element={<Artists />} />
        <Route path="/News" element={<News />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/" element={<ArtistGallery />} />
        <Route path="/artist/:id" element={<ArtistPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
