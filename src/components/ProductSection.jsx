// import React, { useEffect, useRef, useState } from "react";

// const ProductSection = () => {
//   const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
//   const [imageLoaded, setImageLoaded] = useState(false); // State untuk memastikan gambar sudah dimuat
//   const banners = [
//     "/assets/banner-produk/edunav.png",
//     "/assets/banner-produk/venti.png",
//     "/assets/banner-produk/jadwalkuliah.png",
//     "/assets/banner-produk/latihan.png",
//     "/assets/banner-produk/rajin.png",
//     "/assets/banner-produk/writingaide.png",
//     "/assets/banner-produk/maridukung.png",
//   ];

//   const sectionRef = useRef(null);

//   const handleScroll = () => {
//     if (sectionRef.current) {
//       const sectionHeight = sectionRef.current.clientHeight;
//       const scrollPosition = window.scrollY;
//       const newIndex = Math.floor(scrollPosition / sectionHeight);
//       if (newIndex < banners.length && newIndex !== currentBannerIndex) {
//         setCurrentBannerIndex(newIndex);
//       }
//     }
//   };

//   const handleImageLoad = () => {
//     setImageLoaded(true); // Update state ketika gambar selesai dimuat
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []); // Hanya sekali saat komponen pertama kali dirender

//   return (
//     <div
//       className="container mx-auto product-section px-8 pt-25 pb-25 bg-white"
//       ref={sectionRef}
//     >
//       <p className="tagline2 text-2xl font-semibold text-gray-800">
//         The Future of Digital Innovation
//       </p>
//       <p className="tagline-description text-lg text-[20px] text-gray-600">
//         Discover innovative digital products by Zerone Global Solution that
//         empower
//         <br className="hidden lg:inline" />
//         businesses to scale, optimize operations, and create lasting impact
//         through technology.
//       </p>

//       <div className="product-banner container mx-auto lg:max-w-6xl">
//         <img
//           src={banners[currentBannerIndex]}
//           alt={`Banner ${currentBannerIndex + 1}`}
//           style={{
//             width: "100%", // Gambar akan mengisi lebar kontainer
//             transition: "opacity 0.5s ease-in-out",
//             opacity: imageLoaded ? 1 : 0, // Mengatur opacity berdasarkan status pemuatan gambar
//           }}
//           onLoad={handleImageLoad} // Memanggil handleImageLoad ketika gambar selesai dimuat
//         />
//         {!imageLoaded && <div>Loading...</div>}{" "}
//         {/* Menampilkan loading state */}
//       </div>
//       <div className="container mx-auto align-center text-center mt-8">
//         <a href="#" className="request-demo-btn center">
//           <span className="button-icon mr-2 flex items-center bg-[#00A9E8] rounded-full p-1 mr-4">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               height="24px"
//               viewBox="0 -960 960 960"
//               width="24px"
//               fill="#FFFFFF"
//             >
//               <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
//             </svg>
//           </span>
//           <span className="button-text">Request Demo</span>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default ProductSection;


import React, { useState, useEffect } from "react";
import { banner } from './data'; // Mengimpor data banner dari file data.js
import './ProductSection.css';

const App = () => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const banners = Object.values(banner); // Mengambil semua nilai URL gambar dari objek banner

  useEffect(() => {
    const handleScroll = () => {
      const sectionHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      const newIndex = Math.floor(scrollPosition / sectionHeight);
      if (newIndex < banners.length && newIndex !== currentBannerIndex) {
        setCurrentBannerIndex(newIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentBannerIndex, banners.length]);

  return (
    <div className="container">
      {banners.map((bannerUrl, index) => (
        <div
          className="section"
          key={index}
          style={{
            backgroundImage: `url(${bannerUrl})`, // Menggunakan URL gambar dari objek banner
          }}
        ></div>
      ))}
    </div>
  );
};

export default App;
