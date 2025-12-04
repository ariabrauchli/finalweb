import './App.css'
import '../style.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ContactPage from "./pages/contact";
import HomePage from "./pages/home";
import GalleryPage from "./pages/gallery";

export default function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.classList.toggle("theme-light", theme === "light");
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <Router>
      <div>
        <h1>ARIA BRAUCHLI</h1>

        <div className="container">
          <nav className="nav justify-content-center align-items-center mynav grow-nav">
            <div className="d-flex justify-content-around flex-wrap navgroup">

              <Link className="nav-link active navlink shrink-link" to="/">
                Home
              </Link>

              <Link className="nav-link navlink shrink-link" to="/gallery">
                Gallery
              </Link>

              <Link className="nav-link navlink shrink-link" to="/contact">
                Contact
              </Link>

            </div>
            <button className="theme-toggle" type="button" onClick={toggleTheme}>
              {theme === "light" ? "Dark mode" : "Light mode"}
            </button>
          </nav>
        </div>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  )
}
