import React from "react";
// Pastikan path import data sudah benar
import cards from "../data"; 
import "../css/Portfolio.css";

// 1. Komponen Header yang Didedikasikan
// Membantu keterbacaan dan pemisahan kekhawatiran (separation of concerns)
const PortfolioHeader = () => (
  <div className="bg-white mx-auto pt-24 md:pt-32 pb-8 md:pb-10 max-w-6xl px-6 lg:px-8">
    <div className="text-center">
      {/* Menggunakan kelas Tailwind murni & konsisten */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
        Checkout Our Best Portfolio
      </h2>
      <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
        We love to create a succeed business. Just let us know what you want to achieve and see a magic happen.
      </p>
    </div>
  </div>
);

// 2. Komponen Card yang Didedikasikan
// Membuat pemetaan (mapping) lebih bersih
const PortfolioCard = React.memo(({ card }) => (
  // Menghapus kelas 'news-card' dan menggantinya dengan Tailwind untuk styling utama
  // Kelas 'news-card' dipertahankan hanya jika memang ada efek CSS spesifik (misalnya hover effect)
  <div className="news-card bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden" key={card.id}>
    <img
      // Menambahkan kelas untuk memastikan gambar menutupi area dan optimasi
      src={card.image}
      alt={card.title}
      loading="lazy" // Optimasi: Menambahkan lazy loading untuk gambar
      className="news-card__image w-full h-56 object-cover"
    />
    <div className="news-card__text-wrapper p-6">
      <h3 className="news-card__title text-xl font-bold text-gray-800 mb-2">{card.title}</h3>
      <div className="news-card__post-date text-sm text-gray-500 mb-3">{card.author}</div>
      <div className="news-card__details-wrapper mt-4">
        <p className="news-card__excerpt text-base text-gray-700 line-clamp-3 mb-4">{card.description}</p>
        <a 
          href={card.link} 
          className="news-card__read-more inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-800 transition-colors"
          target="_blank" // Praktik terbaik: tautan eksternal dibuka di tab baru
          rel="noopener noreferrer" // Praktik terbaik: keamanan
        >
          See the Website <i className="ml-2 fas fa-long-arrow-alt-right"></i>
        </a>
      </div>
    </div>
  </div>
));

function Portfolio() {
  return (
    <div className="bg-white min-h-screen">
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