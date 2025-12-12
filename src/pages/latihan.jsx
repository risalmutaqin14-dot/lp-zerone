import { banner, ilustration, logos } from "../data";
import { Helmet } from "react-helmet-async";

export default function Latihan() {
  return (
    <>
      <div className="webApp pt-20 lg:pt-5 bg-white">
        <Helmet>
          <title>
            Latihan.id | Secure Computer Based Test (CBT) Platform by Zerone
            Global
          </title>

          <meta
            name="description"
            content="Latihan.id is the ultimate secure CBT platform for schools. Features include Safe Exam Browser (SEB) support, anti-cheating AI, and seamless Edunav LMS integration."
          />
          <meta
            name="keywords"
            content="CBT platform, Online Exam System, Safe Exam Browser, Ujian Online Aman, School Assessment Tool, Edunav Integration"
          />
          <meta name="robots" content="index, follow" />

          {/* Canonical */}
          <link rel="canonical" href="https://www.zerone.id/latihan" />

          {/* Open Graph / Facebook / LinkedIn */}
          <meta
            property="og:title"
            content="Latihan.id | Secure CBT & Online Exam Platform"
          />
          <meta
            property="og:description"
            content="Conduct fair and secure exams with Latihan.id. The integrated CBT solution with advanced anti-cheating technology and SEB support."
          />
          <meta property="og:url" content="https://www.zerone.id/latihan" />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://www.zerone.id/assets/meta-image-zerone.webp"
          />
        </Helmet>

        {/* HERO IMAGE SECTION */}
        <div className="product-banner mt-26 container mx-auto lg:max-w-6xl hidden sm:block shadow-lg rounded-[20px]">
          <img
            className="rounded-[20px]"
            src={banner.latihan}
            alt="Dashboard of Latihan.id - Secure Computer Based Test (CBT) Platform"
          />
        </div>
        <div className="product-banner mt-2 container mx-auto md:hidden max-w-[370px] drop-shadow-xl">
          <img
            className="rounded-[20px] mx-auto"
            src={banner.mobilelatihan}
            alt="Latihan.id Mobile App Interface for Online Exams"
          />
        </div>

        {/* CONTENT SECTION */}
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start px-7 sm:px-20 lg:px-40 mt-20 ">
          <div className="lg:w-1/3">
            <span className="block text-lg lg:text-xl text-gray-600 mb-4 font-semibold">
              Our Product
            </span>
            <h1 className="text-2xl lg:text-4xl font-bold text-gray-700 mb-6 leading-snug">
              What is&nbsp;
              <br className="hidden md:inline" />
              Latihan.id?
            </h1>
          </div>

          <div className="lg:w-2/3">
            <p className="[text-align:justify] text-base lg:text-lg text-gray-500 leading-relaxed">
              Latihan.id is a secure and integrated{" "}
              <strong>CBT (Computer Based Test)</strong> solution for exams,
              daily quizzes, and assessments. It connects directly with the
              Edunav LMS and provides advanced security features such as
              cheating prevention controls, auto kick detection, server-based
              camera capture, and full support for{" "}
              <strong>Safe Exam Browser (SEB)</strong>.
            </p>
          </div>
        </div>

        {/* BUTTON REQUEST DEMO */}
        <div className="md:flex container mx-auto justify-center gap-8 items-center mt-[60px] px-4">
          {/* Tombol Kiri - Download Aplikasi */}
          <div className="shadow-lg rounded-[50px] transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer w-[250px] mb-4 sm:mb-0 mx-auto md:mx-0">
            <a
              href="https://play.google.com/store/apps/details?id=id.zerone.latihanid&pcampaignid=web_share"
              className="download flex items-center border-2 border-[#00A9E8] rounded-[50px] px-3 py-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="button-icon flex items-center rounded-full p-1 mr-2">
                <img
                  src={logos.playstore}
                  className="w-5"
                  alt="Download Latihan.id Exam Browser on Google Play Store"
                />
              </span>
              <span className="button-text">Download on Playstore</span>
            </a>
          </div>

          <div className="shadow-lg rounded-[50px] transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer w-[250px] mb-4 sm:mb-0 mx-auto md:mx-0">
            <a
              href="https://play.google.com/store/apps/details?id=id.zerone.latihanid&pcampaignid=web_share"
              className="download flex items-center border-2 border-[#00A9E8] rounded-[50px] px-3 py-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="button-icon flex items-center rounded-full p-1 mr-2">
                <img
                  src={logos.appStore}
                  className="w-5"
                  alt="Download Latihan.id Exam Browser on Google Play Store"
                />
              </span>
              <span className="button-text">Download on AppStore</span>
            </a>
          </div>

          {/* Tombol Kanan - Request Demo Aplikasi */}
          <div className="shadow-lg rounded-[50px] transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer w-[250px] mb-4 sm:mb-0 mx-auto md:mx-0">
            <a
              href="https://api.whatsapp.com/send/?phone=6281370000299&text=Hi%2C+I+want+to+ask+about+zerOne.id+service&type=phone_number&app_absent=0"
              target="_blank"
              className="download flex items-center border-2 bg-[linear-gradient(90deg,#1c76d2,#3498db)] border-[#00A9E8] rounded-[50px] px-3 py-3"
            >
              <span className="button-icon flex items-center bg-[#00A9E8] rounded-full p-1 mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#FFFFFF"
                >
                  <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
                </svg>
              </span>
              <span className="text-white">Request Demo Aplikasi</span>
            </a>
          </div>
        </div>

        {/* SECTION TITLE */}
        <div className="container mx-auto px-5">
          <h2 className="text-[24px] my-10 md:my-15 sm:text-3xl lg:text-4xl font-bold text-black text-center">
            The Most Secure and Reliable Exam Platform
            <br className="hidden md:inline" />
            &nbsp; for a Seamless and Fair Testing Experience
          </h2>
        </div>

        {/* FEATURES GRID 1 */}
        <div className="container mx-auto lg:px-30 lg:mt-10">
          <div className="my-10 px-3 lg:px-[200px] grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3 bg-no-repeat bg-cover rounded-[20px] ">
            {/* Box 1 */}
            <div className="shadow-lg w-full text-center m-2 p-5 bg-[#F5F9FF] rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
              <img
                src={ilustration.iluslatihan1}
                className="w-20 mx-auto pb-5"
                alt="Illustration of Flexible Online Examination Scheduling"
              />
              <span className="text-[16px] md:text-[18px] text-gray-600">
                Flexible and Efficient Online Exams
              </span>
            </div>

            {/* Box 2 */}
            <div className="shadow-lg w-full text-center m-2 p-5 bg-[#F5F9FF] rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
              <img
                src={ilustration.iluslatihan2}
                className="w-20 mx-auto pb-5"
                alt="Illustration of Secure Anti-Cheating Technology"
              />
              <span className="text-[16px] md:text-[18px] text-gray-600">
                Secure and Trusted Online Exam System
              </span>
            </div>

            {/* Box 3 */}
            <div className="shadow-lg w-full text-center m-2 p-5 bg-[#F5F9FF] rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
              <img
                src={ilustration.iluslatihan3}
                className="w-20 mx-auto pb-5"
                alt="Illustration of User-Friendly Exam Interface"
              />
              <span className="text-[16px] md:text-[18px] text-gray-600">
                Easy-to-Use Interface
              </span>
            </div>
          </div>
        </div>

        {/* FEATURES GRID 2 */}
        <div className="container mx-auto lg:px-30 lg:mt-10">
          <div className="my-10 px-3 lg:px-[200px] grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 bg-no-repeat bg-cover rounded-[20px] ">
            {/* Box 1 */}
            <div className="shadow-lg w-full text-center m-2 p-5 bg-[#F5F9FF] rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
              <img
                src={ilustration.iluslatihan4}
                className="w-20 mx-auto pb-5"
                alt="Icon indicating Safe Exam Browser (SEB) Integration"
              />
              <span className="text-[16px] md:text-[18px] text-gray-600">
                Safe Exam Browser Support
              </span>
            </div>

            {/* Box 2 */}
            <div className="shadow-lg w-full text-center m-2 p-5 bg-[#F5F9FF] rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
              <img
                src={ilustration.iluslatihan5}
                className="w-20 mx-auto pb-5"
                alt="Illustration of Multiple Question Type Support"
              />
              <span className="text-[16px] md:text-[18px] text-gray-600">
                Multiple Question Types
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
