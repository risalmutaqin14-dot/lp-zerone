import { useEffect, useRef, useState } from "react";
import "../css/Testimonial.css";

const testimonials = [
  {
    name: "Reri Rahmat",
    title: "Sports Teacher",
    company: "Kharisma Bangsa School",
    content:
      "Edunav has streamlined teaching administration at Kharisma Bangsa School. Attendance, lesson plans, and grading—previously manual—are now automated and integrated. It allows me to monitor student progress easily and focus on the learning process rather than administrative tasks. Edunav truly boosts teacher efficiency.",
  },
  {
    name: "Adib",
    title: "Math Teacher & Counselor",
    company: "Fatih Bilingual School",
    content:
      "Edunav LMS supports learning both inside and outside the classroom. Teachers can easily track progress, while parents get real-time updates on their children. With features for counseling and behavior monitoring (Red/Green Card system), Edunav simplifies the entire educational process for teachers, students, and parents.",
  },
  {
    name: "Akbar Dermawan Sinaga",
    title: "Academic Staff",
    company: "Fatih Bilingual School",
    content:
      "Edunav provides a comprehensive academic system for Fatih Bilingual School. From lesson planning to grading, everything is centralized. Features like fingerprint attendance integration, career planning, and real-time parental monitoring make school management seamless and efficient.",
  },
];

// Duplicate for seamless loop
const loopData = [...testimonials, ...testimonials];

// Lebar item + gap (550px + 24px)
const ITEM_FULL_WIDTH = 574;

export default function TestimonialsCarousel() {
  const trackRef = useRef(null);
  const rafRef = useRef(null);
  // Hapus isPaused state karena tidak diperlukan lagi
  // const [isPaused, setIsPaused] = useState(false);
  const transformXRef = useRef(0);

  // Autoplay via requestAnimationFrame
  // Hapus dependency [isPaused]
  useEffect(() => {
    // Kecepatan dapat Anda sesuaikan, 0.1 untuk gerakan yang lebih lambat
    const speed = 0.1;

    const step = () => {
      if (!trackRef.current) {
        rafRef.current = requestAnimationFrame(step);
        return;
      }

      transformXRef.current -= speed;
      const el = trackRef.current;

      const totalOriginalWidth = testimonials.length * ITEM_FULL_WIDTH;

      if (Math.abs(transformXRef.current) >= totalOriginalWidth) {
        transformXRef.current += totalOriginalWidth;
      }

      // Terapkan transform
      el.style.transform = `translateX(${transformXRef.current}px)`;

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // Hapus isPaused dari array dependencies
  }, []);

  return (
    <>
      <h2 className="text-[24px] md:text-[36px] font-bold text-gray-600 mb-6 text-center">
        What do they say about us?
      </h2>
      <section className="relative">
        {/* Fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-100 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-100 to-transparent z-10" />

        {/* Track */}
        <div
          className="relative overflow-hidden px-6 max-w-full mx-auto"
          // Hapus onMouseEnter={() => setIsPaused(true)}
          // Hapus onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={trackRef}
            style={{ willChange: "transform" }}
            className="flex gap-6 w-max py-[15px]"
          >
            {loopData.map((t, i) => (
              <article
                key={i}
                className="bg-white shadow-md rounded-lg p-6 w-[550px]  shrink-0"
              >
                <h4 className="md:text-sm font-semibold text-blue-600 uppercase mb-1">
                  {t.company}
                </h4>
                <h3 className="text-[20px] md:text-lg font-bold text-gray-800">{t.name}</h3>
                <p className="md:text-sm text-gray-500 mb-4">{t.title}</p>
                <p className="text-gray-700 md:text-sm leading-relaxed">
                  {t.content}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
