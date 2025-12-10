import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import useScrollAnimation from "./components/useScrollAnimation";
import Home from "./pages/Home";
import About from "./pages/About";
// ... import halaman lainnya biarkan saja ...
import WebApp from "./pages/WebApp";
import MobileApp from "./pages/MobileApp";
import WordpressDev from "./pages/WordpressDevelopment";
import CMS from "./pages/cms";
import UIUX from "./pages/UIUX";
import DigmaSEO from "./pages/Digma-SEO";
import Payment from "./pages/Payment";
import GrafikDesain from "./pages/GrphicDesign";
import DigitalStrategy from "./pages/DigitalStrategy";
import AiAppAutomation from "./pages/AIApp-automation"
import EduNav from "./pages/edunav";
import Venti from "./pages/venti";
import Latihan from "./pages/latihan";
import Rajin from "./pages/Rajin";
import WritingAide from "./pages/WritingAide";
import MariDukung from "./pages/MariDukung";
import JadwalKuliah from "./pages/JadwalKuliah";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import PostDetail from "./pages/BlogDetail";
import Contact from "./pages/contact";
import FAQs from "./pages/FAQ";

// 1. IMPORT KEDUA LIBRARY (GA4 & PIXEL)
import ReactGA from "react-ga4";
import ReactPixel from 'react-facebook-pixel';

// 2. INISIALISASI ID
const GA_MEASUREMENT_ID = "G-ZHJQ8PNSTW"; 
const FB_PIXEL_ID = "441263355307477"; // <--- ID Meta Pixel Kamu

// Init GA4
ReactGA.initialize(GA_MEASUREMENT_ID);

// Init Meta Pixel
const pixelOptions = {
  autoConfig: true, 
  debug: false, 
};
ReactPixel.init(FB_PIXEL_ID, null, pixelOptions);

function App() {
  const location = useLocation();
  useScrollAnimation(); // Cukup dipanggil sekali di sini

  // 3. TRACKING PAGEVIEW (Gabungan GA4 + Pixel)
  useEffect(() => {
    // A. Lapor ke Google Analytics
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });

    // B. Lapor ke Meta Pixel (Facebook)
    ReactPixel.pageView(); 
    
    // Cek console (bisa dihapus nanti)
    console.log("Tracking sent (GA4 & Pixel) for:", location.pathname);
  }, [location]);

  return (
    <div className="App bg-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/web-app" element={<WebApp />} />
        <Route path="/ai-app-automation-development" element={<AiAppAutomation />}></Route>
        <Route path="/wordpress-dev" element={<WordpressDev />} />
        <Route path="/cms" element={<CMS />} />
        <Route path="/uiux" element={<UIUX />} />
        <Route path="/digital-marketing" element={<DigmaSEO />} />
        <Route path="/payment-gateway" element={<Payment />} />
        <Route path="/graphic-design" element={<GrafikDesain />} />
        <Route path="/digital-strategy-consulting" element={<DigitalStrategy />} />
        <Route path="/mobile-app" element={<MobileApp />} />
        <Route path="/edunav" element={<EduNav />} />
        <Route path="/venti" element={<Venti />} />
        <Route path="/latihan" element={<Latihan />} />
        <Route path="/rajin" element={<Rajin />} />
        <Route path="/writing-aide" element={<WritingAide />} />
        <Route path="/mari-dukung" element={<MariDukung />} />
        <Route path="/jadwal-kuliah" element={<JadwalKuliah />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/FAQs" element={<FAQs />} />
      </Routes>
    </div>
  );
}

export default App;