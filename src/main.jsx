import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop";
import { HelmetProvider } from "react-helmet-async";
import FloatingContact from "./components/FloatingContact";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <App />
        <FloatingContact />
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
