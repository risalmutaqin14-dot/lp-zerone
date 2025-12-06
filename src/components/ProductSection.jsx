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
      <div className="section" id="product">
        <div className="containerProduk mx-auto pt-30 bg-white hidden lg:block ">
          <h2 className="tagline2 text-2xl font-semibold text-gray-800 ">
            The Future of Digital Innovation
          </h2>
          <h3 className="tagline-description text-lg text-gray-600 my-4">
            Discover innovative digital products by Zerone Global Solution that
            <br className="hidden md:inline" />
            empower businesses to scale, optimize operations, and create lasting
            impact through technology.
          </h3>
          {/* Latar belakang putih di produk */}
          {/* Setiap section di sini akan memiliki gambar dengan background putih */}
          <div className="section mb-50">
            <img
              className=" md:max-w-[1050px] mx-auto rounded-[20px]"
              src={banners.edunav}
              loading="lazy"
              alt="Edunav School management system, sistem information school"
            />
            <div className="flex justify-center mt-4 container mx-auto">
              <div className="w-[200px]  sm:mb-0">
                <a
                  href="/edunav"
                  className="transition duration-300 ease-in-out hover:scale-105 download flex items-center border-2 bg-[linear-gradient(90deg,#00BBD7,#0092D7,#6E92D7)] border-[#00A9E8] rounded-[50px] px-3 py-3"
                >
                  <span className="button-icon flex items-center bg-white rounded-full p-1 mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#0092d7"
                    >
                      <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
                    </svg>
                  </span>
                  <span className="text-white pl-3 font-medium">
                    View Product
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="section mb-50">
            <img
              className="max-w-[1050px] mx-auto rounded-[20px]"
              src={banners.latihan}
              loading="lazy"
              alt="Latihan - platform ujian yang aman dan mendukung safe exam browser"
            />
            <div className="flex justify-center mt-4 container mx-auto">
              <div className="w-[200px]  sm:mb-0">
                <a
                  href="/latihan"
                  className="transition duration-300 ease-in-out hover:scale-105 download flex items-center border-2 bg-[linear-gradient(90deg,#00BBD7,#0092D7,#6E92D7)] border-[#00A9E8] rounded-[50px] px-3 py-3"
                >
                  <span className="button-icon flex items-center bg-white rounded-full p-1 mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#0092d7"
                    >
                      <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
                    </svg>
                  </span>
                  <span className="text-white pl-3 font-medium">
                    view Product
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="section mb-50">
            <img
              className="max-w-[1050px] mx-auto rounded-[20px]"
              src={banners.rajin}
              loading="lazy"
              alt="Rajin - bimbingan belajar yang lengkap berbagai mata pelajaran dan tryout ujian"
            />
            <div className="flex justify-center mt-4 container mx-auto">
              <div className="w-[200px] sm:mb-0">
                <a
                  href="/rajin"
                  className="transition duration-300 ease-in-out hover:scale-105 download flex items-center border-2 bg-[linear-gradient(90deg,#00BBD7,#0092D7,#6E92D7)] border-[#00A9E8] rounded-[50px] px-3 py-3"
                >
                  <span className="button-icon flex items-center bg-white rounded-full p-1 mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#0092d7"
                    >
                      <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
                    </svg>
                  </span>
                  <span className="text-white pl-3 font-medium">
                    View Product
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="section mb-50">
            <img
              className="max-w-[1050px] mx-auto rounded-[20px]"
              src={banners.venti}
              loading="lazy"
              alt="Venti - event management system, tiket online"
            />
            <div className="flex justify-center mt-4 container mx-auto">
              <div className="w-[200px]  sm:mb-0">
                <a
                  href="/venti"
                  className="transition duration-300 ease-in-out hover:scale-105 download flex items-center border-2 bg-[linear-gradient(90deg,#00BBD7,#0092D7,#6E92D7)] border-[#00A9E8] rounded-[50px] px-3 py-3"
                >
                  <span className="button-icon flex items-center bg-white rounded-full p-1 mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#0092d7"
                    >
                      <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
                    </svg>
                  </span>
                  <span className="text-white pl-3 font-medium">
                    View Product
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="section mb-50">
            <img
              className="max-w-[1050px] mx-auto rounded-[20px]"
              src={banners.jadwalkuliah}
              loading="lazy"
              alt="Jadwalkuliah - website manajemen jadwal kuliah"
            />
            <div className="flex justify-center mt-4 container mx-auto">
              <div className="w-[200px]  sm:mb-0">
                <a
                  href="/jadwal-kuliah"
                  className="transition duration-300 ease-in-out hover:scale-105 download flex items-center border-2 bg-[linear-gradient(90deg,#00BBD7,#0092D7,#6E92D7)] border-[#00A9E8] rounded-[50px] px-3 py-3"
                >
                  <span className="button-icon flex items-center bg-white rounded-full p-1 mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#0092d7"
                    >
                      <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
                    </svg>
                  </span>
                  <span className="text-white pl-3 font-medium">
                    View Product
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="section mb-50">
            <img
              className="max-w-[1050px] mx-auto rounded-[20px]"
              src={banners.writingaide}
              loading="lazy"
              alt="Writingaide - AI untuk latihan test TOEFL, IELST, GCSE"
            />
            <div className="flex justify-center mt-4 container mx-auto">
              <div className="w-[200px]  sm:mb-0">
                <a
                  href="/writing-aide"
                  className="transition duration-300 ease-in-out hover:scale-105 download flex items-center border-2 bg-[linear-gradient(90deg,#00BBD7,#0092D7,#6E92D7)] border-[#00A9E8] rounded-[50px] px-3 py-3"
                >
                  <span className="button-icon flex items-center bg-white rounded-full p-1 mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#0092d7"
                    >
                      <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
                    </svg>
                  </span>
                  <span className="text-white pl-3 font-medium">
                    View Product
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="section mb-50">
            <img
              className="max-w-[1050px] mx-auto rounded-[20px]"
              src={banners.maridukung}
              loading="lazy"
              alt="Writingaide - AI untuk latihan test TOEFL, IELST, GCSE"
            />
            <div className="flex justify-center mt-4 container mx-auto">
              <div className="w-[200px]  sm:mb-0">
                <a
                  href="/mari-dukung"
                  className="transition duration-300 ease-in-out hover:scale-105 download flex items-center border-2 bg-[linear-gradient(90deg,#00BBD7,#0092D7,#6E92D7)] border-[#00A9E8] rounded-[50px] px-3 py-3"
                >
                  <span className="button-icon flex items-center bg-white rounded-full p-1 mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#0092d7"
                    >
                      <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
                    </svg>
                  </span>
                  <span className="text-white pl-3 font-medium">
                    View Product
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Produk Tab tab Vieww*/}
      <div className="section">
        <div className="containerProduk mx-auto bg-white block hidden lg:hidden md:block">
          <h2 className="tagline2 text-2xl font-semibold text-gray-800 ">
            The Future of Digital Innovation
          </h2>
          <h3 className="tagline-description text-lg text-gray-600 my-4">
            Discover innovative digital products by Zerone Global Solution that
            <br className="hidden md:inline" />
            empower businesses to scale, optimize operations, and create lasting
            impact through technology.
          </h3>
          <div className="section mb-50">
            <img
              className="max-w-[780px] mx-auto rounded-[20px] px-4 md:px-0"
              src={banners.edunav}
              loading="lazy"
              alt="Edunav School management system, sistem informasi sekolah yang lengkap"
            />
            <div className="flex justify-center mt-4 container mx-auto">
              <div className="w-[200px] sm:mb-0">
                <a
                  href="/edunav"
                  className="transition duration-300 ease-in-out hover:scale-105 download flex items-center border-2 bg-[linear-gradient(90deg,#00BBD7,#0092D7,#6E92D7)] border-[#00A9E8] rounded-[50px] px-3 py-3"
                >
                  <span className="button-icon flex items-center bg-white rounded-full p-1 mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#0092d7"
                    >
                      <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
                    </svg>
                  </span>
                  <span className="text-white pl-3 font-medium">
                    View Product
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="section mb-50">
            <img
              className="max-w-[780px] mx-auto rounded-[20px]"
              src={banners.latihan}
              loading="lazy"
              alt="Latihan - platform ujian aman dan caggih, mendukung safe exam browser dll"
            />
            <div className="flex justify-center mt-4 container mx-auto">
              <div className="w-[200px] sm:mb-0">
                <a
                  href="/latihan"
                  className="transition duration-300 ease-in-out hover:scale-105 download flex items-center border-2 bg-[linear-gradient(90deg,#00BBD7,#0092D7,#6E92D7)] border-[#00A9E8] rounded-[50px] px-3 py-3"
                >
                  <span className="button-icon flex items-center bg-white rounded-full p-1 mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#0092d7"
                    >
                      <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
                    </svg>
                  </span>
                  <span className="text-white pl-3 font-medium">
                    view Product
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="section mb-50">
            <img
              className="max-w-[780px] mx-auto rounded-[20px]"
              src={banners.rajin}
              loading="lazy"
              alt="Rajin - bimbingan belajar"
            />
            <div className="flex justify-center mt-4 container mx-auto">
              <div className="w-[200px]  sm:mb-0">
                <a
                  href="/rajin"
                  className="transition duration-300 ease-in-out hover:scale-105 download flex items-center border-2 bg-[linear-gradient(90deg,#00BBD7,#0092D7,#6E92D7)] border-[#00A9E8] rounded-[50px] px-3 py-3"
                >
                  <span className="button-icon flex items-center bg-white rounded-full p-1 mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#0092d7"
                    >
                      <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
                    </svg>
                  </span>
                  <span className="text-white pl-3 font-medium">
                    View Product
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="section mb-50">
            <img
              className="max-w-[780px] mx-auto rounded-[20px]"
              src={banners.venti}
              loading="lazy"
              alt="Venti - event management system"
            />
            <div className="flex justify-center mt-4 container mx-auto">
              <div className="w-[200px] mb-4 sm:mb-0">
                <a
                  href="/venti"
                  className="transition duration-300 ease-in-out hover:scale-105 download flex items-center border-2 bg-[linear-gradient(90deg,#00BBD7,#0092D7,#6E92D7)] border-[#00A9E8] rounded-[50px] px-3 py-3"
                >
                  <span className="button-icon flex items-center bg-white rounded-full p-1 mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#0092d7"
                    >
                      <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
                    </svg>
                  </span>
                  <span className="text-white pl-3 font-medium">
                    View Product
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="section mb-50">
            <img
              className="max-w-[780px] mx-auto rounded-[20px]"
              src={banners.jadwalkuliah}
              loading="lazy"
              alt="Jadwalkuliah - website manajemen jadwal kuliah"
            />
            <div className="flex justify-center mt-4 container mx-auto">
              <div className="w-[200px] mb-4 sm:mb-0">
                <a
                  href="/jadwal-kuliah"
                  className="transition duration-300 ease-in-out hover:scale-105 download flex items-center border-2 bg-[linear-gradient(90deg,#00BBD7,#0092D7,#6E92D7)] border-[#00A9E8] rounded-[50px] px-3 py-3"
                >
                  <span className="button-icon flex items-center bg-white rounded-full p-1 mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#0092d7"
                    >
                      <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
                    </svg>
                  </span>
                  <span className="text-white pl-3 font-medium">
                    View Product
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="section mb-50">
            <img
              className="max-w-[780px] mx-auto rounded-[20px]"
              src={banners.writingaide}
              loading="lazy"
              alt="Writingaide - AI untuk latihan test TOEFL, IELST, GCSE"
            />
            <div className="flex justify-center mt-4 container mx-auto">
              <div className="w-[200px] mb-4 sm:mb-0">
                <a
                  href="/writing-aide"
                  className="transition duration-300 ease-in-out hover:scale-105 download flex items-center border-2 bg-[linear-gradient(90deg,#00BBD7,#0092D7,#6E92D7)] border-[#00A9E8] rounded-[50px] px-3 py-3"
                >
                  <span className="button-icon flex items-center bg-white rounded-full p-1 mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#0092d7"
                    >
                      <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
                    </svg>
                  </span>
                  <span className="text-white pl-3 font-medium">
                    View Product
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="section">
            <img
              className="max-w-[780px] mx-auto rounded-[20px]"
              src={banners.maridukung}
              loading="lazy"
              alt="Maridukung - Platform berbagi bersama"
            />
            <div className="flex justify-center mt-4 container mx-auto">
              <div className="w-[200px] mb-4 sm:mb-0">
                <a
                  href="/maridukung"
                  className="transition duration-300 ease-in-out hover:scale-105 download flex items-center border-2 bg-[linear-gradient(90deg,#00BBD7,#0092D7,#6E92D7)] border-[#00A9E8] rounded-[50px] px-3 py-3"
                >
                  <span className="button-icon flex items-center bg-white rounded-full p-1 mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#0092d7"
                    >
                      <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
                    </svg>
                  </span>
                  <span className="text-white pl-3 font-medium">
                    View Product
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Mobile View */}
      <div className="sectioncontainer bg-white pt-20 block sm:hidden mb-20">
        <h2 className="tagline2 text-2xl font-semibold text-gray-800 ">
          The Future of Digital Innovation
        </h2>
        <h3 className="tagline-description text-lg text-gray-600 my-4">
          Discover innovative digital products by Zerone Global Solution that
          <br className="hidden md:inline" />
          empower businesses to scale, optimize operations, and create lasting
          impact through technology.
        </h3>
        <div className="containerProduk mx-auto bg-white block sm:hidden overflow-x-hidden">
          <div className="section ">
            <img
              className="max-w-[360px] mx-auto rounded-[20px]"
              src={banners.mobileedunav}
              loading="lazy"
              alt="Edunav manajemen sekolah, sistem informasi sekolah"
            />
            <div className="w-[200px] mb-4 sm:mb-0 mx-auto">
              <a
                href="/edunav"
                className="transition duration-300 ease-in-out hover:scale-105 download flex items-center border-2 bg-[linear-gradient(90deg,#00BBD7,#0092D7,#6E92D7)] border-[#00A9E8] rounded-[50px] px-3 py-3"
              >
                <span className="button-icon flex items-center bg-white rounded-full p-1 mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#0092d7"
                  >
                    <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
                  </svg>
                </span>
                <span className="text-white pl-3 font-medium">
                  View Product
                </span>
              </a>
            </div>
          </div>
          <div className="section">
            <img
              className="max-w-[360px] mx-auto rounded-[20px]"
              src={banners.mobilelatihan}
              loading="lazy"
              alt="Latihan"
            />
            <div className="w-[200px] mb-4 sm:mb-0 mx-auto">
              <a
                href="/latihan"
                className="transition duration-300 ease-in-out hover:scale-105 download flex items-center border-2 bg-[linear-gradient(90deg,#00BBD7,#0092D7,#6E92D7)] border-[#00A9E8] rounded-[50px] px-3 py-3"
              >
                <span className="button-icon flex items-center bg-white rounded-full p-1 mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#0092d7"
                  >
                    <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
                  </svg>
                </span>
                <span className="text-white pl-3 font-medium">
                  View Product
                </span>
              </a>
            </div>
          </div>
          <div className="section">
            <img
              className="max-w-[360px] mx-auto rounded-[20px]"
              src={banners.mobilerajin}
              loading="lazy"
              alt="Rajin.id bimbel yang menawarkan pengalaman lebih dengan pengajar yang profesional"
            />
            <div className="w-[200px] mb-4 sm:mb-0 mx-auto">
              <a
                href="/rajin"
                className="transition duration-300 ease-in-out hover:scale-105 download flex items-center border-2 bg-[linear-gradient(90deg,#00BBD7,#0092D7,#6E92D7)] border-[#00A9E8] rounded-[50px] px-3 py-3"
              >
                <span className="button-icon flex items-center bg-white rounded-full p-1 mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#0092d7"
                  >
                    <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
                  </svg>
                </span>
                <span className="text-white pl-3 font-medium">
                  View Product
                </span>
              </a>
            </div>
          </div>
          <div className="section">
            <img
              className="max-w-[360px] mx-auto rounded-[20px]"
              src={banners.mobileventi}
              loading="lazy"
              alt="Venti - website manajemen tiket acara seperti seminar, olahraga, workshop dan masih banyak lainnya"
            />
            <div className="w-[200px] mb-4 sm:mb-0 mx-auto">
              <a
                href="/venti"
                className="transition duration-300 ease-in-out hover:scale-105 download flex items-center border-2 bg-[linear-gradient(90deg,#00BBD7,#0092D7,#6E92D7)] border-[#00A9E8] rounded-[50px] px-3 py-3"
              >
                <span className="button-icon flex items-center bg-white rounded-full p-1 mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#0092d7"
                  >
                    <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
                  </svg>
                </span>
                <span className="text-white pl-3 font-medium">
                  View Product
                </span>
              </a>
            </div>
          </div>
          <div className="section">
            <img
              className="max-w-[360px] mx-auto rounded-[20px]"
              src={banners.mobilejadwalkuliah}
              loading="lazy"
              alt="Jadwalkuliah"
            />
            <div className="w-[200px] mb-4 sm:mb-0 mx-auto">
              <a
                href="/jadwal-kuliah"
                className="transition duration-300 ease-in-out hover:scale-105 download flex items-center border-2 bg-[linear-gradient(90deg,#00BBD7,#0092D7,#6E92D7)] border-[#00A9E8] rounded-[50px] px-3 py-3"
              >
                <span className="button-icon flex items-center bg-white rounded-full p-1 mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#0092d7"
                  >
                    <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
                  </svg>
                </span>
                <span className="text-white pl-3 font-medium">
                  View Product
                </span>
              </a>
            </div>
          </div>
          <div className="section">
            <img
              className="max-w-[360px] mx-auto rounded-[20px]"
              src={banners.mobilewritingaide}
              loading="lazy"
              alt="Writingaide"
            />
            <div className="w-[200px] mb-4 sm:mb-0 mx-auto">
              <a
                href="/writing-aide"
                className="transition duration-300 ease-in-out hover:scale-105 download flex items-center border-2 bg-[linear-gradient(90deg,#00BBD7,#0092D7,#6E92D7)] border-[#00A9E8] rounded-[50px] px-3 py-3"
              >
                <span className="button-icon flex items-center bg-white rounded-full p-1 mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#0092d7"
                  >
                    <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
                  </svg>
                </span>
                <span className="text-white pl-3 font-medium">
                  View Product
                </span>
              </a>
            </div>
          </div>
          <div className="section">
            <img
              className="max-w-[360px] mx-auto rounded-[20px]"
              src={banners.mobilemaridukung}
              alt="Maridukung"
              loading="lazy"
            />
            <div className="w-[200px] sm:mb-0 mx-auto">
              <a
                href="/mari-dukung"
                className="transition duration-300 ease-in-out hover:scale-105 download flex items-center border-2 bg-[linear-gradient(90deg,#00BBD7,#0092D7,#6E92D7)] border-[#00A9E8] rounded-[50px] px-3 py-3"
              >
                <span className="button-icon flex items-center bg-white rounded-full p-1 mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#0092d7"
                  >
                    <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
                  </svg>
                </span>
                <span className="text-white pl-3 font-medium">
                  View Product
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
