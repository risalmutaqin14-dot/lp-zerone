import { useEffect } from "react";
import "../css/ProductSection.css";
import { banner as dataBanner } from "../data";

export default function ProdukDesktop({ banner } = {}) {
  const banners = banner ?? dataBanner;
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section img");

      sections.forEach((img) => {
        const rect = img.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Hitung seberapa jauh elemen masuk ke viewport
        const visible = Math.max(
          0,
          Math.min(windowHeight, windowHeight - rect.top)
        );

        // Normalisasi ke range 0 - 1
        const progress = visible / windowHeight;

        // Scale dari 1.2 → 1.0
        const scale = 1.2 - progress * 0.3;

        img.style.transform = `scale(${scale})`;
        img.style.transition = "transform 0.2s ease-out";
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    
    {/* Produk Tab Dekstop Vieww*/}
      <div>
        <div className="containerProduk mx-auto bg-white hidden lg:block pt-20">
          {/* Latar belakang putih di produk */}
          {/* Setiap section di sini akan memiliki gambar dengan background putih */}
          <div className="section ">
            <img
              className=" md:max-w-[1050px] mx-auto rounded-[20px]"
              src={banners.edunav}
              alt="Edunav School management system"
            />
          </div>
          <div className="section">
            <img
              className="max-w-[1050px] mx-auto rounded-[20px]"
              src={banners.latihan}
              alt="Latihan - platform ujian"
            />
          </div>
          <div className="section">
            <img
              className="max-w-[1050px] mx-auto rounded-[20px]"
              src={banners.rajin}
              alt="Rajin - bimbingan belajar"
            />
          </div>
          <div className="section">
            <img
              className="max-w-[1050px] mx-auto rounded-[20px]"
              src={banners.venti}
              alt="Venti - event management system"
            />
          </div>
          <div className="section">
            <img
              className="max-w-[1050px] mx-auto rounded-[20px]"
              src={banners.jadwalkuliah}
              alt="Jadwalkuliah - website manajemen jadwal kuliah"
            />
          </div>
          <div className="section">
            <img
              className="max-w-[1050px] mx-auto rounded-[20px]"
              src={banners.writingaide}
              alt="Writingaide - AI untuk latihan test TOEFL, IELST, GCSE"
            />
          </div>
          <div className="section">
            <img
              className="max-w-[1050px] mx-auto rounded-[20px]"
              src={banners.maridukung}
              alt="Maridukung - Platform berbagi bersama"
            />
          </div>
        </div>
      </div>


      {/* Produk Tab tab Vieww*/}
      <div className="tabHorizontal">
        <div className="containerProduk mx-auto bg-white hidden md:block lg:hidden pt-20">
          {/* Latar belakang putih di produk */}
          {/* Setiap section di sini akan memiliki gambar dengan background putih */}
          <div className="section ">
            <img
              className=" md:max-w-[1050px] mx-auto rounded-[20px]"
              src={banners.edunav}
              alt="Edunav School management system"
            />
          </div>
          <div className="section">
            <img
              className="max-w-[1050px] mx-auto rounded-[20px]"
              src={banners.latihan}
              alt="Latihan - platform ujian"
            />
          </div>
          <div className="section">
            <img
              className="max-w-[1050px] mx-auto rounded-[20px]"
              src={banners.rajin}
              alt="Rajin - bimbingan belajar"
            />
          </div>
          <div className="section">
            <img
              className="max-w-[1050px] mx-auto rounded-[20px]"
              src={banners.venti}
              alt="Venti - event management system"
            />
          </div>
          <div className="section">
            <img
              className="max-w-[1050px] mx-auto rounded-[20px]"
              src={banners.jadwalkuliah}
              alt="Jadwalkuliah - website manajemen jadwal kuliah"
            />
          </div>
          <div className="section">
            <img
              className="max-w-[1050px] mx-auto rounded-[20px]"
              src={banners.writingaide}
              alt="Writingaide - AI untuk latihan test TOEFL, IELST, GCSE"
            />
          </div>
          <div className="section">
            <img
              className="max-w-[1050px] mx-auto rounded-[20px]"
              src={banners.maridukung}
              alt="Maridukung - Platform berbagi bersama"
            />
          </div>
        </div>
      </div>

      {/* Product Mobile View */}
      <div className="sectioncontainer bg-white">
        <div className="containerProduk mx-auto bg-white block sm:hidden">
          {/* Latar belakang putih di produk */}
          {/* Setiap section di sini akan memiliki gambar dengan background putih */}
          <div className="section ">
            <img
              className="max-w-[360px] mx-auto rounded-[20px]"
              src={banners.mobileedunav}
              alt="Edunav"
            />
          </div>
          <div className="section">
            <img
              className="max-w-[360px] mx-auto rounded-[20px]"
              src={banners.mobilelatihan}
              alt="Latihan"
            />
          </div>
          <div className="section">
            <img
              className="max-w-[360px] mx-auto rounded-[20px]"
              src={banners.mobilerajin}
              alt="Rajin"
            />
          </div>
          <div className="section">
            <img
              className="max-w-[360px] mx-auto rounded-[20px]"
              src={banners.mobileventi}
              alt="Venti"
            />
          </div>
          <div className="section">
            <img
              className="max-w-[360px] mx-auto rounded-[20px]"
              src={banners.mobilejadwalkuliah}
              alt="Jadwalkuliah"
            />
          </div>
          <div className="section">
            <img
              className="max-w-[360px] mx-auto rounded-[20px]"
              src={banners.mobilewritingaide}
              alt="Writingaide"
            />
          </div>
          <div className="section">
            <img
              className="max-w-[360px] mx-auto rounded-[20px]"
              src={banners.mobilemaridukung}
              alt="Maridukung"
            />
          </div>
        </div>
      </div>
    </>
  );
}
