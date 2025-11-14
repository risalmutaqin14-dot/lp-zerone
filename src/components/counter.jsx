import { useState, useEffect, useRef } from "react";

const Counter = ({ start = 0, end, duration = 3000 }) => {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false); // Untuk mengecek apakah elemen terlihat
  const counterRef = useRef(null); // Referensi untuk elemen Counter

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true); // Jika elemen masuk ke viewport, mulai animasi
          observer.disconnect(); // Hentikan pengamatan setelah elemen terlihat
        }
      },
      {
        threshold: 0.5, // Elemen harus terlihat setidaknya 50% untuk mulai animasi
      }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.disconnect(); // Membersihkan observer saat komponen dibersihkan
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return; // Jika elemen belum terlihat, jangan mulai animasi

    let startTime;
    const animateCounter = () => {
      if (!startTime) startTime = Date.now();

      const progress = Math.min((Date.now() - startTime) / duration, 1);
      setCount(Math.floor(progress * (end - start) + start));

      if (progress < 1) {
        requestAnimationFrame(animateCounter);
      }
    };

    requestAnimationFrame(animateCounter);

    return () => cancelAnimationFrame(animateCounter); // Cleanup animasi jika komponen dihapus
  }, [isVisible, start, end, duration]);

  return (
    <div ref={counterRef} className="text-center">
      <div className="text-4xl font-bold">
        {count} <span className="text-gray-500">+</span>
      </div>
    </div>
  );
};

export default Counter;
