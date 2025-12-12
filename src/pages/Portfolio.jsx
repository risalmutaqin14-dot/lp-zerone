import React, { useState, useMemo } from "react";
import cards from "../data";
import "../css/Portfolio.css";
import { Helmet } from "react-helmet-async";

// --- KOMPONEN HEADER ---
const PortfolioHeader = () => (
  <div className="bg-white mx-auto pt-24 md:pt-32 pb-8 md:pb-10 max-w-6xl px-6 lg:px-8">
    <div className="text-center">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
        Checkout Our Best Portfolio
      </h1>
      <h2 className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
        We love to create a successful business. Just let us know what you want to
        achieve and see the magic happen.
      </h2>
    </div>
  </div>
);

// --- KOMPONEN CARD ---
const PortfolioCard = React.memo(({ card }) => (
  <div
    className="news-card bg-white rounded-xl 
               hover:shadow-lg transition-transform duration-300 
               overflow-hidden" 
    key={card.id}
  >
    <img
      src={card.image}
      alt={card.title}
      
      decoding="async"
      // Sangat disarankan menambahkan width & height jika rasionya tetap, 
      // agar tidak terjadi layout shift (CLS).
      // width="400" height="250" 
      className="news-card__image w-full h-56 object-cover bg-gray-200" 
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
        <div className="shadow-lg rounded-[50px] transition-all duration-300 hover:-translate-y-2 hover:shadow-lg cursor-pointer w-[250px] mb-4 sm:mb-0 mx-auto md:mx-0">
          <a
            href={card.link}
            target="_blank" // Praktik baik: buka link eksternal di tab baru
            rel="noopener noreferrer" // Keamanan untuk target blank
            className="download flex items-center border-2 border-[#00A9E8] rounded-[50px] px-3 py-2"
          >
            <span className="button-text text-white">See the Website</span>
            <span className="button-icon flex items-center rounded-full p-1 mr-2">
               {/* SVG icon code... */}
               <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff">
                <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
));

function Portfolio() {
  
  const ITEMS_PER_PAGE = 6;
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const visibleCards = useMemo(() => {
    return cards.slice(0, visibleCount);
  }, [visibleCount]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  return (
    <div className="bg-white min-h-screen">
    <Helmet>
      <title>Portfolio | Zerone Global Digital Solution</title>
      <meta 
        name="description" 
        content="Explore Zerone Global Digital Solution’s portfolio: innovative web design, branding, and digital solutions that elevate your business." 
      />
      <meta name="keywords" content="portfolio, digital solution, web design, branding, Zerone Global" />

      {/* Open Graph for social media */}
      <meta property="og:title" content="Portfolio | Zerone Global Digital Solution" />
      <meta property="og:description" content="Discover creative projects by Zerone Global Digital Solution: web design, branding, and digital innovation." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://zeroneglobal.com/portfolio" />
      <meta property="og:image" content="https://www.zerone.id/assets/meta-image-zerone.webp" />
    </Helmet>


      <PortfolioHeader />

      <div className="container mx-auto max-w-6xl px-6 lg:px-8 pb-20">
        <div className="content-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleCards.map((card) => (
            <PortfolioCard key={card.id} card={card} />
          ))}
        </div>

        {/* Tombol Load More jika masih ada data tersisa */}
        {visibleCount < cards.length && (
          <div className="flex justify-center mt-12 mb-20">
            <button
              onClick={handleLoadMore}
              className="w-[230px] transition duration-300 ease-in-out hover:scale-105 flex items-center justify-between border-2 bg-[linear-gradient(90deg,#00BBD7,#0092D7,#6E92D7)] border-[#00A9E8] rounded-[50px] px-4 py-3 shadow-md hover:shadow-xl"
            >
              <span className="button-icon flex items-center bg-white rounded-full p-1">
                {/* Menambahkan class 'rotate-90' agar panah menunjuk ke bawah */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 -960 960 960"
                  width="20px"
                  fill="#0092d7"
                  className="rotate-90" 
                >
                  <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
                </svg>
              </span>
              {/* pr-2 agar teks agak ke tengah sedikit */}
              <span className="text-white font-medium pr-2">See More Portfolio</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Portfolio;