import "../css/stack.css";
import {  stackDev } from "../data";

export default function stackSection() {
  // Convert stackDev object into an images array
  const images = Object.keys(stackDev).map((key) => ({
    src: stackDev[key],
    alt: key,
  }));

  // Duplicate images for seamless scrolling (CSS will translate -50%)
  const duplicatedImages = [...images, ...images];
  // create a slightly different order for the second row (reverse)
  const images2 = [...images].reverse();
  const duplicatedImages2 = [...images2, ...images2];

  return (
    <section className="about-section">
      <div className="about-container">
        

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
