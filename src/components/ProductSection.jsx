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
      <div className="section">
        <div className="containerProduk mx-auto pt-30 bg-white hidden lg:block ">
          <h2 className="tagline2 text-[24px] md:text-2xl font-semibold text-gray-800 ">
            The Future of Digital Innovation
          </h2>
          {/* Changed h3 to p for better SEO hierarchy (Description text) */}
          <p className="tagline-description md:text-lg text-gray-600 my-4">
            Discover innovative digital products by Zerone Global Solution that
            <br className="hidden md:inline" />
            empower businesses to scale, optimize operations, and create lasting
            impact through technology.
          </p>

          {/* EDUNAV SECTION */}
          <div className="section mb-50">
            <img
              className="md:max-w-[1050px] mx-auto rounded-[20px]"
              src={banners.edunav}
              loading="lazy"
              // Alt text optimized: Brand + Core Function + English Keywords
              alt="Edunav - Integrated School Management System (SMS) and Student Information System"
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

          {/* LATIHAN SECTION */}
          <div className="section mb-50">
            <img
              className="max-w-[1050px] mx-auto rounded-[20px]"
              src={banners.latihan}
              loading="lazy"
              // Alt text optimized: Secure Exam Platform + Safe Exam Browser (SEB)
              alt="Latihan - Secure Online Exam Platform supporting Safe Exam Browser (SEB)"
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
                    View Product
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* RAJIN SECTION */}
          <div className="section mb-50">
            <img
              className="max-w-[1050px] mx-auto rounded-[20px]"
              src={banners.rajin}
              loading="lazy"
              // Alt text optimized: E-learning + School Tryout
              alt="Rajin - Online Learning Platform and School Exam Preparation (Tryout) App"
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

          {/* VENTI SECTION */}
          <div className="section mb-50">
            <img
              className="max-w-[1050px] mx-auto rounded-[20px]"
              src={banners.venti}
              loading="lazy"
              // Alt text optimized: Event Management + Ticketing
              alt="Venti - Event Management System and Online Ticketing Platform"
            />
            <div className="flex justify-center mt-4 container mx-auto">
              <div className="w-[200px] sm:mb-0">
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

          {/* JADWAL KULIAH SECTION */}
          <div className="section mb-50">
            <img
              className="max-w-[1050px] mx-auto rounded-[20px]"
              src={banners.jadwalkuliah}
              loading="lazy"
              // Alt text optimized: University Schedule + Academic Management
              alt="Jadwalkuliah - University Class Scheduling and Academic Management System"
            />
            <div className="flex justify-center mt-4 container mx-auto">
              <div className="w-[200px] sm:mb-0">
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

          {/* WRITINGAIDE SECTION */}
          <div className="section mb-50">
            <img
              className="max-w-[1050px] mx-auto rounded-[20px]"
              src={banners.writingaide}
              loading="lazy"
              // Alt text optimized: AI Writing + Specific Tests (TOEFL/IELTS)
              alt="Writingaide - AI Writing Assistant for TOEFL, IELTS, and GCSE Preparation"
            />
            <div className="flex justify-center mt-4 container mx-auto">
              <div className="w-[200px] sm:mb-0">
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

          {/* MARI DUKUNG SECTION */}
          <div className="section mb-30">
            {/* Cleaned up className: removed mt-0 if not needed, consistent with others */}
            <img
              className="max-w-[1050px] mx-auto rounded-[20px]"
              src={banners.maridukung}
              loading="lazy"
              // Alt text optimized: Social Collaboration
              alt="Mari Dukung - Digital Social Collaboration and Community Support Platform"
            />
            <div className="flex justify-center mt-15 container mx-auto">
              <div className="w-[200px] sm:mb-0">
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

      {/* Produk Tab View */}
      <div className="section">
        <div className="containerProduk mx-auto bg-white block hidden lg:hidden md:block">
          <h2 className="tagline2 text-2xl font-semibold text-gray-800 ">
            The Future of Digital Innovation
          </h2>

          {/* Changed h3 to p for better SEO hierarchy */}
          <p className="tagline-description text-lg text-gray-600 my-4 leading-relaxed">
            Discover innovative digital products by Zerone Global Solution that
            <br className="hidden md:inline" />
            empower businesses to scale, optimize operations, and create lasting
            impact through technology.
          </p>

          {/* Visualizing the ecosystem helps users understand how these products connect */}

          {/* EDUNAV SECTION */}
          <div className="section mb-50">
            <img
              className="max-w-[780px] mx-auto rounded-[20px] px-4 md:px-0"
              src={banners.edunav}
              loading="lazy"
              // Alt text optimized for English SEO
              alt="Edunav - Comprehensive School Management System and Academic Information System"
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

          {/* LATIHAN SECTION */}
          <div className="section mb-50">
            <img
              className="max-w-[780px] mx-auto rounded-[20px]"
              src={banners.latihan}
              loading="lazy"
              // Alt text optimized: Secure Exam + SEB Support
              alt="Latihan - Secure Online Exam Platform with Safe Exam Browser (SEB) Support"
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
                  {/* Fixed capitalization: view -> View */}
                  <span className="text-white pl-3 font-medium">
                    View Product
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* RAJIN SECTION */}
          <div className="section mb-50">
            <img
              className="max-w-[780px] mx-auto rounded-[20px]"
              src={banners.rajin}
              loading="lazy"
              // Alt text optimized: LMS + Tryout
              alt="Rajin - Online Learning Management System and School Exam Preparation App"
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

          {/* VENTI SECTION */}
          <div className="section mb-50">
            <img
              className="max-w-[780px] mx-auto rounded-[20px]"
              src={banners.venti}
              loading="lazy"
              // Alt text optimized: Event Mgmt + Ticketing
              alt="Venti - Digital Event Management System and Online Ticketing Platform"
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

          {/* JADWAL KULIAH SECTION */}
          <div className="section mb-50">
            <img
              className="max-w-[780px] mx-auto rounded-[20px]"
              src={banners.jadwalkuliah}
              loading="lazy"
              // Alt text optimized: Academic Scheduling
              alt="Jadwalkuliah - Student Academic Scheduling and Class Management System"
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

          {/* WRITINGAIDE SECTION */}
          <div className="section mb-50">
            <img
              className="max-w-[780px] mx-auto rounded-[20px]"
              src={banners.writingaide}
              loading="lazy"
              // Fixed typo: IELST -> IELTS
              alt="Writingaide - AI-Powered Writing Assistant for TOEFL and IELTS Preparation"
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

          {/* MARI DUKUNG SECTION */}
          <div className="section">
            <img
              className="max-w-[780px] mx-auto rounded-[20px]"
              src={banners.maridukung}
              loading="lazy"
              // Alt text optimized: Social Collaboration
              alt="Maridukung - Digital Social Collaboration and Community Support Platform"
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
        {/* Changed h3 to p for proper SEO hierarchy */}
        <p className="tagline-description text-lg text-gray-600 my-4 leading-relaxed">
          Discover innovative digital products by Zerone Global Solution that
          <br className="hidden md:inline" />
          empower businesses to scale, optimize operations, and create lasting
          impact through technology.
        </p>

        {/* Visualizing the mobile ecosystem helps users understand the suite of apps */}

        <div className="containerProduk mx-auto bg-white block sm:hidden overflow-x-hidden">
          {/* EDUNAV MOBILE */}
          <div className="section">
            <img
              className="max-w-[360px] mx-auto rounded-[20px]"
              src={banners.mobileedunav}
              loading="lazy"
              // Alt text optimized: Mobile App + School Management Keywords
              alt="Edunav - Mobile School Management System and Academic Information App"
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

          {/* LATIHAN MOBILE */}
          <div className="section">
            <img
              className="max-w-[360px] mx-auto rounded-[20px]"
              src={banners.mobilelatihan}
              loading="lazy"
              // Alt text optimized: Secure Mobile Exam Keywords
              alt="Latihan - Secure Mobile Online Exam Platform with Safe Exam Browser Support"
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

          {/* RAJIN MOBILE */}
          <div className="section">
            <img
              className="max-w-[360px] mx-auto rounded-[20px]"
              src={banners.mobilerajin}
              loading="lazy"
              // Alt text optimized: Mobile Learning + Tutoring Keywords
              alt="Rajin - Mobile Online Learning Platform and Exam Preparation App"
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

          {/* VENTI MOBILE */}
          <div className="section">
            <img
              className="max-w-[360px] mx-auto rounded-[20px]"
              src={banners.mobileventi}
              loading="lazy"
              // Alt text optimized: Mobile Event Ticketing Keywords
              alt="Venti - Mobile Event Management System and Online Ticketing App"
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

          {/* JADWAL KULIAH MOBILE */}
          <div className="section">
            <img
              className="max-w-[360px] mx-auto rounded-[20px]"
              src={banners.mobilejadwalkuliah}
              loading="lazy"
              // Alt text optimized: Student Scheduling Keywords
              alt="Jadwalkuliah - Mobile Academic Scheduling and Class Management App"
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

          {/* WRITINGAIDE MOBILE */}
          <div className="section">
            <img
              className="max-w-[360px] mx-auto rounded-[20px]"
              src={banners.mobilewritingaide}
              loading="lazy"
              // Alt text optimized: AI Writing Mobile Keywords
              alt="Writingaide - Mobile AI Writing Assistant for TOEFL and IELTS Preparation"
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

          {/* MARI DUKUNG MOBILE */}
          <div className="section">
            <img
              className="max-w-[360px] mx-auto rounded-[20px]"
              src={banners.mobilemaridukung}
              // Alt text optimized: Social Collaboration Mobile Keywords
              alt="Mari Dukung - Mobile Platform for Social Collaboration and Digital Crowdfunding"
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
