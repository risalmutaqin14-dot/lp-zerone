import { useEffect, useRef, useState } from "react";
import "../css/Testimonial.css";

const testimonials = [
  {
    name: "Reri Rahmat",
    title: "Guru Olahraga",
    company: "Sekolah Kharisma Bangsa",
    content:
      "Edunav membuat administrasi mengajar jauh lebih cepat dan rapi di Sekolah Kharisma Bangsa. Absensi, RPP, penilaian, dan raport yang dulu manual kini terintegrasi dan otomatis. Saya bisa memantau perkembangan siswa dengan mudah dan fokus pada proses belajar, bukan lagi pada pekerjaan administratif. Edunav benar-benar meningkatkan efisiensi kerja guru.",
  },
  {
    name: "Adib",
    title: "Guru Matematika & Konselor",
    company: "Fatih Bilingual School",
    content:
      "Edunav LMS sangat membantu proses belajar di dalam dan luar kelas. Guru dapat memberikan materi, evaluasi, dan memantau progres siswa dengan mudah, sementara orang tua dapat mengikuti perkembangan anak secara real time. Fitur administrasi wali kelas, bimbingan konseling, hingga sistem red card dan green card membuat pemantauan perilaku dan perkembangan siswa jauh lebih terstruktur. Edunav benar-benar mempermudah guru, siswa, dan orang tua dalam seluruh proses pembelajaran.",
  },
  {
    name: "Akbar Dermawan Sinaga",
    title: "Staf Akademik",
    company: "Fatih Bilingual School",
    content:
      "Edunav menghadirkan sistem akademik yang lengkap dan terintegrasi di Fatih Bilingual School. Guru dapat membuat lesson plan, mengunggah materi, memberi tugas, dan menilai langsung di platform. Wali kelas mudah memantau perkembangan siswa melalui fitur guidance, career planning, hingga sistem green card dan red card. Absensi terhubung otomatis dengan fingerprint, dan orang tua dapat memonitor perkembangan anak kapan saja. Edunav mempermudah seluruh proses belajar dan manajemen sekolah.",
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
    <section className="relative">
      <h2 className="text-[36px] font-bold text-gray-600 mb-6 text-center">
        What do they say about us?
      </h2>




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
          style={{ willChange: 'transform' }} 
          className="flex gap-6 w-max py-[15px]"
        >
          {loopData.map((t, i) => (
            <article
              key={i}
              className="bg-white shadow-md rounded-lg p-6 w-[550px] shrink-0"
            >
              <h4 className="text-sm font-semibold text-blue-600 uppercase mb-1">
                {t.company}
              </h4>
              <h3 className="text-lg font-bold text-gray-800">{t.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{t.title}</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                {t.content}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}