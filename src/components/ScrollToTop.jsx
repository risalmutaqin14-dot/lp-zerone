// src/components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Komponen utilitas yang memastikan halaman menggulir ke atas (0,0) 
 * setiap kali path URL berubah.
 */
function ScrollToTop() {
  // Dapatkan objek lokasi saat ini dari React Router
  const { pathname } = useLocation();

  // Jalankan efek ini setiap kali 'pathname' berubah
  useEffect(() => {
    // Scroll ke koordinat (0, 0)
    window.scrollTo(0, 0);
  }, [pathname]); // Dependensi: hanya berjalan saat path berubah

  // Komponen ini tidak me-render elemen apapun
  return null;
}

export default ScrollToTop;