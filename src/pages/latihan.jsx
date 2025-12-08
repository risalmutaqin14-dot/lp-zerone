import { banner, ilustration, logos } from "../data";
import { Helmet } from "react-helmet-async";


export default function Latihan() {
  return (
    <>
      <div className="webApp pt-20 lg:pt-5 bg-white">

        <Helmet>
        <title>Latihan.id | Secure Online Exam Platform by Zerone Global</title>
        <meta
          name="description"
          content="Latihan.id adalah solusi CBT terintegrasi untuk ujian, kuis harian, dan asesmen. Terhubung langsung dengan Edunav LMS, dilengkapi fitur keamanan canggih seperti pencegahan kecurangan, auto kick detection, kamera server, dan dukungan Safe Exam Browser (SEB)."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.zerone.id/latihan" />

        {/* Open Graph */}
        <meta property="og:title" content="Latihan.id | Secure Online Exam Platform by Zerone Global" />
        <meta
          property="og:description"
          content="Solusi CBT Latihan.id membantu sekolah dan organisasi menyelenggarakan ujian online yang aman, adil, dan efisien."
        />
        <meta property="og:url" content="https://www.zerone.id/latihan" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.zerone.id/assets/meta-image-zerone.webp" />
      </Helmet>


        <div className="product-banner mt-26 container mx-auto lg:max-w-6xl hidden sm:block shadow-lg rounded-[20px]">
          <img
            className="rounded-[20px]"
            src={banner.latihan}
            alt="Latihan.id Banner"
          />
        </div>
        <div className="product-banner mt-2 container mx-auto md:hidden max-w-[370px] drop-shadow-xl">
          <img
            className="rounded-[20px] mx-auto"
            src={banner.mobilelatihan}
            alt="latihan.id"
          />
        </div>

        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start px-7 sm:px-20 lg:px-40 mt-20 ">
          <div className="lg:w-1/3">
            <h1 className="text-lg lg:text-xl text-gray-600 mb-4">
              Our Product
            </h1>
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-700 mb-6 leading-snug">
              What is&nbsp;
              <br className="hidden md:inline" />
              Latihan.id?
            </h2>
          </div>

          <div className="lg:w-2/3">
            <p className="[text-align:justify] text-base lg:text-lg text-gray-500 leading-relaxed">
              Latihan.id is a secure and integrated CBT solution for exams,
              daily quizzes, and assessments. It connects directly with the
              Edunav LMS and provides advanced security features such as
              cheating prevention controls, auto kick detection, server based
              camera capture, and support for Safe Exam Browser (SEB).
            </p>
          </div>
        </div>

        {/* button request demo */}
        <div className="md:flex contaier mx-auto justify-center gap-8 items-center mt-[60px] px-4">
          {/* Tombol kiri - Download Aplikasi */}
          <div className="shadow-lg rounded-[50px] transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer w-[250px] mb-4 sm:mb-0 mx-auto md:mx-0">
            <a
              href="https://play.google.com/store/apps/details?id=id.zerone.latihanid&pcampaignid=web_share"
              className="download flex items-center border-2 border-[#00A9E8] rounded-[50px] px-3 py-3"
            >
              <span className="button-icon flex items-center rounded-full p-1 mr-2">
                <img
                  src={logos.playstore}
                  className="w-5"
                  alt="https://play.google.com/store/apps/details?id=id.zerone.latihanid&pcampaignid=web_share"
                />
              </span>
              <span className="button-text">Download Aplikasi</span>
            </a>
          </div>

          {/* Tombol kanan - Request Demo Aplikasi */}
          <div className="shadow-lg rounded-[50px] transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer w-[250px] mb-4 sm:mb-0 mx-auto md:mx-0">
            <a
              href=""
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

        <div className="container mx-auto px-5">
          <h2 className="text-[24px] my-10 md:my-15 sm:text-3xl lg:text-4xl font-bold text-Black text-center">
            The Most Secure and Reliable Exam Platform
            <br className="hidden md:inline" />
            &nbsp; for a Seamless and Fair Testing Experience
          </h2>
        </div>

        <div className="container mx-auto  lg:px-30 lg:mt-10">
          <div className="my-10 px-3 lg:px-[200px] grid grid-cols-3 gap-4 md:grid-cols-3 lg:grid-cols-3 bg-no-repeat bg-cover rounded-[20px] ">
            {/* Box 1 */}
            <div className="shadow-lg w-full text-center m-2 p-5 rounded-[15px] bg-[#F5F9FF] rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
              <img
                src={ilustration.iluslatihan1}
                className="w-20 mx-auto pb-5"
                alt="Customer Oriented"
              />
              <span className="text-justify text-[16px] md:text-[20px] text-grey-600">
                Flexible and Efficient Online Exams
              </span>
            </div>

            {/* Box 2 */}
            <div className="shadow-lg w-full text-center m-2 p-5 rounded-[15px] bg-[#F5F9FF] rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
              <img
                src={ilustration.iluslatihan2}
                className="w-20 mx-auto pb-5"
                alt="Collaborative"
              />
              <span className="text-justify text-[16px] md:text-[20px] text-grey-600">
                Secure and Trusted Online Exam System
              </span>
            </div>

            {/* Box 3 */}
            <div className="shadow-lg w-full text-center m-2 p-5 rounded-[15px] bg-[#F5F9FF] rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
              <img
                src={ilustration.iluslatihan3}
                className="w-20 mx-auto pb-5"
                alt="Support 24/7"
              />
              <span className="text-justify text-[16px] md:text-[20px] text-grey-600">
                Easy-to-Use Interface
              </span>
            </div>
          </div>
        </div>

        <div className="container mx-auto  lg:px-30 lg:mt-10">
          <div className="my-10 px-3 lg:px-[200px] grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-2 bg-no-repeat bg-cover rounded-[20px] ">
            {/* Box 1 */}
            <div className="shadow-lg w-full text-center m-2 p-5 rounded-[15px] bg-[#F5F9FF] rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
              <img
                src={ilustration.iluslatihan4}
                className="w-20 mx-auto pb-5"
                alt="Customer Oriented"
              />
              <span className="text-justify text-[16px] md:text-[20px] text-grey-600">
                Save Exam Browser Support
              </span>
            </div>

            {/* Box 2 */}
            <div className="shadow-lg w-full text-center m-2 p-5 rounded-[15px] bg-[#F5F9FF] rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
              <img
                src={ilustration.iluslatihan5}
                className="w-20 mx-auto pb-5"
                alt="Collaborative"
              />
              <span className="text-justify text-[16px] md:text-[20px] text-grey-600">
                Multiple Question Types
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
