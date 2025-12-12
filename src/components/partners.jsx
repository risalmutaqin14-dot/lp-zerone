import "../css/Partners.css";
import { partnerLogos } from "../data";

export default function partnerSection() {
  // Convert partnerLogos data to required format
  const images = partnerLogos.map((partner) => ({
    src: partner.image,
    alt: partner.name,
  }));

  // Duplicate images for seamless scrolling (CSS will translate -50%)
  const duplicatedImages = [...images, ...images];
  // create a slightly different order for the second row (reverse)
  const images2 = [...images].reverse();
  const duplicatedImages2 = [...images2, ...images2];

  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="about-title slide-fade">Be Recognized Be Different</h2>
        <hp className="font-light text-center text-[16px] lg:text-[25px] leading-7 ">
          There're a lot of product same as you. How can the customer select
          your <br className="hidden md:inline" />
          product instead? You need apply a special and attractive way!
        </hp>
        <br />
  
        <hr className="mx-my-6 border-t border-slate-300 w-250 mx-auto" />

        <div className="partners-carousel" aria-hidden="false">
          <div className="carousel-viewport">
            <div className="carousel-track swiper-wrapper" role="list">
              {duplicatedImages.map((image, index) => (
                <div className="carousel-item" key={index} role="listitem">
                  <img
                    className="carousel-image"
                    src={image.src}
                    alt={image.alt}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* second row (reversed order + reverse animation) */}
        <div
          className="partners-carousel partners-carousel--second"
          aria-hidden="false"
        >
          <div className="carousel-viewport">
            <div className="carousel-track swiper-wrapper reverse" role="list">
              {duplicatedImages2.map((image, index) => (
                <div
                  className="carousel-item"
                  key={`r-${index}`}
                  role="listitem"
                >
                  <img
                    className="carousel-image"
                    src={image.src}
                    alt={image.alt}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Named export 'Partner' that returns the same UI as the default partnerSection
export function Partner() {
  return partnerSection();
}
