import React from "react";
// Pastikan path import data sudah benar
import cards from "../data";
import "../css/Portfolio.css";
import { Helmet } from "react-helmet-async";

// 1. Komponen Header yang Didedikasikan
// Membantu keterbacaan dan pemisahan kekhawatiran (separation of concerns)
const PortfolioHeader = () => (
  <div className="bg-white mx-auto pt-24 md:pt-32 pb-8 md:pb-10 max-w-6xl px-6 lg:px-8">
    <div className="text-center">
      {/* Menggunakan kelas Tailwind murni & konsisten */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
        Checkout Our Best Portfolio
      </h1>
      <h2 className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
        We love to create a succeed business. Just let us know what you want to
        achieve and see a magic happen.
      </h2>
    </div>
  </div>
);

// 2. Komponen Card yang Didedikasikan
// Membuat pemetaan (mapping) lebih bersih
const PortfolioCard = React.memo(({ card }) => (
  // Menghapus kelas 'news-card' dan menggantinya dengan Tailwind untuk styling utama
  // Kelas 'news-card' dipertahankan hanya jika memang ada efek CSS spesifik (misalnya hover effect)
  <div
    className="news-card bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
    key={card.id}
  >
    <img
      // Menambahkan kelas untuk memastikan gambar menutupi area dan optimasi
      src={card.image}
      alt={card.title}
      loading="lazy" // Optimasi: Menambahkan lazy loading untuk gambar
      className="news-card__image w-full h-56 object-cover"
    />
    <div className="news-card__text-wrapper p-6">
      <h3 className="news-card__title text-xl font-bold text-gray-800 mb-2">
        {card.title}
      </h3>
      <div className="news-card__post-date text-sm text-gray-500 mb-3">
        {card.author}
      </div>
      <div className="news-card__details-wrapper mt-4">
        <p className="news-card__excerpt text-base text-gray-700 line-clamp-3 mb-4">
          {card.description}
        </p>
        <div className="shadow-lg rounded-[50px] transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer w-[250px] mb-4 sm:mb-0 mx-auto md:mx-0">
          <a
            href={card.link}
            className="download flex items-center border-2 border-[#00A9E8] rounded-[50px] px-3 py-2"
          >
            <span className="button-text text-white">See the Website</span>
            <span className="button-icon flex items-center rounded-full p-1 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z"/></svg>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
));

function Portfolio() {
  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        {/* Title */}
        <title>Portfolio | Zerone Global Digital Solution</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Lihat portfolio terbaik dari Zerone Global. Kami membantu bisnis, sekolah, dan organisasi dengan solusi digital inovatif yang sukses."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.zerone.id/portfolio" />
        <meta property="og:title" content="Portfolio | Zerone Global Digital Solution" />
        <meta
          property="og:description"
          content="Lihat portfolio terbaik dari Zerone Global. Kami membantu bisnis, sekolah, dan organisasi dengan solusi digital inovatif yang sukses."
        />
        <meta property="og:url" content="https://www.zerone.id/portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.zerone.id/assets/meta-image-zerone.webp" />
      </Helmet>

      {/* Menggunakan komponen Header yang baru */}
      <PortfolioHeader />

      <div className="container mx-auto max-w-6xl px-6 lg:px-8 pb-20">
        <div className="content-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Menggunakan komponen Card yang baru */}
          {cards.map((card) => (
            <PortfolioCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}

// Mengganti nama App menjadi Portfolio (atau nama yang lebih deskriptif)
export default Portfolio;
