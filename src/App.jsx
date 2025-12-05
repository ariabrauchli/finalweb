import './App.css'
import '../style.css'
import { HashRouter as Router, Routes, Route, NavLink } from "react-router-dom";
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
        <div className="top-bar">
          <h1>ARIA BRAUCHLI</h1>
        </div>
        <button className="theme-toggle floating" type="button" onClick={toggleTheme}>
          {theme === "light" ? "Dark mode" : "Light mode"}
        </button>

        <div className="container">
          <nav className="nav justify-content-center align-items-center mynav grow-nav">
            <div className="d-flex justify-content-around flex-wrap navgroup">

              <NavLink
                className={({ isActive }) =>
                  `nav-link navlink shrink-link ${isActive ? "active" : ""}`
                }
                to="/"
                end
              >
                Home
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  `nav-link navlink shrink-link ${isActive ? "active" : ""}`
                }
                to="/gallery"
              >
                Gallery
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  `nav-link navlink shrink-link ${isActive ? "active" : ""}`
                }
                to="/contact"
              >
                Contact
              </NavLink>

            </div>
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
