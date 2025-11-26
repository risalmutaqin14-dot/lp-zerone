import "./App.css";
import { Routes, Route } from "react-router-dom";
import useScrollAnimation from "./components/useScrollAnimation";
import Home from "./pages/Home";
import About from "./pages/About";

import WebApp from "./pages/WebApp";
import MobileApp from "./pages/MobileApp";
import WordpressDev from "./pages/WordpressDevelopment";
import CMS from "./pages/cms";
import UIUX from "./pages/UIUX";
import DigmaSEO from "./pages/Digma-SEO";
import Payment from "./pages/Payment";
import GrafikDesain from "./pages/GrphicDesign";
import DigitalStrategy from "./pages/DigitalStrategy";

import EduNav from "./pages/edunav";
import Venti from "./pages/venti";
import Latihan from "./pages/latihan";
import Rajin from "./pages/Rajin";
import WritingAide from "./pages/WritingAide";
import MariDukung from "./pages/MariDukung";
import JadwalKuliah from "./pages/JadwalKuliah";

import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Contact from "./pages/contact";

import FAQs from "./pages/FAQ";

function App() {
  // Aktifkan scroll animation untuk semua halaman
  useScrollAnimation();
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/web-app" element={<WebApp />} />
        
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
        <Route path="/contact" element={<Contact />} />

        <Route path="/FAQs" element={<FAQs />} />
      </Routes>
    </div>
  );
}

export default App;

