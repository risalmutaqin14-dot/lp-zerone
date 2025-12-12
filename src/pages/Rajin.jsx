import { banner, ilustration, logos, sosialmedia } from "../data";
import { Helmet } from "react-helmet-async";

export default function Rajin() {
  return (
    <>
      <div className="webApp pt-20 lg:pt-5 bg-white">
        <Helmet>
          <title>Rajin.id | Tutoring & Tryout Platform by Zerone Global</title>

          <meta
            name="description"
            content="Rajin.id is a comprehensive learning platform by Zerone Global. Offering English courses, private tutoring, and secure online tryouts for UTBK-SNBT, TOEFL, and IELTS preparation."
          />
          <meta
            name="keywords"
            content="Online Tutoring, English Course, UTBK Tryout, SNBT Preparation, Private Tutor, Rajin.id, Zerone Global"
          />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://www.zerone.id/rajin" />

          {/* Open Graph */}
          <meta
            property="og:title"
            content="Rajin.id | Tutoring & Tryout Platform by Zerone Global"
          />
          <meta
            property="og:description"
            content="Boost your academic performance with Rajin.id. Trusted English courses, private tutoring, and effective UTBK-SNBT tryout simulations."
          />
          <meta property="og:url" content="https://www.zerone.id/rajin" />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://www.zerone.id/assets/meta-image-zerone.webp"
          />
        </Helmet>

        {/* HERO BANNER */}
        <div className="product-banner mt-26 container mx-auto lg:max-w-6xl hidden sm:block shadow-lg rounded-[20px]">
          <img
            className="rounded-[20px]"
            src={banner.rajin}
            alt="Rajin.id Learning Platform Dashboard Interface"
          />
        </div>
        <div className="product-banner mt-2 container mx-auto md:hidden max-w-[370px] drop-shadow-xl">
          <img
            className="rounded-[20px] mx-auto shadow-lg"
            src={banner.mobilerajin}
            alt="Rajin.id Mobile App for Students"
          />
        </div>

        {/* PRODUCT DESCRIPTION SECTION */}
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start px-7 sm:px-20 lg:px-40 mt-20">
          <div className="lg:w-1/3">
            <span className="block text-lg lg:text-xl text-gray-600 mb-4 font-semibold tracking-wide">
              Our Product
            </span>

            <h1 className="text-2xl lg:text-4xl font-bold text-gray-700 mb-6 leading-snug">
              What is Rajin.id ?
            </h1>
          </div>

          <div className="lg:w-2/3">
            <p className="[text-align:justify] text-base lg:text-lg text-gray-500 leading-relaxed">
              Rajin.id is a comprehensive learning and UTBK-SNBT tryout platform
              from Zerone Global. It provides English language courses, private
              tutoring services, and a secure, effective online tryout system
              designed to help students improve their scores in TOEFL, IELTS,
              and other academic exams.
            </p>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="md:flex container mx-auto justify-center gap-8 items-center mt-[60px] px-4">
          {/* Tombol kiri */}
          <div className="shadow-lg rounded-[50px] transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer w-[250px] mb-4 sm:mb-0 mx-auto md:mx-0">
            <a
              href="https://play.google.com/store/apps/details?id=com.zerone.rajin&pcampaignid=web_share"
              className="download flex items-center border-2 border-[#00A9E8] rounded-[50px] px-3 py-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="button-icon flex items-center rounded-full p-1 mr-2">
                <img
                  src={logos.playstore}
                  className="w-5"
                  alt="Download Rajin.id App on Google Play Store"
                />
              </span>
              <span className="button-text">Download Aplikasi</span>
            </a>
          </div>

          {/* Tombol kanan */}
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

        {/* SOCIAL MEDIA SECTION */}
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start px-7 sm:px-20 lg:px-40 my-30">
          <div className="lg:w-1/2">
            <img
              className="rounded-[20px] container mx-auto w-[350px]"
              src={sosialmedia.socialRajin}
              alt="Rajin.id Community and Learning Tips"
            />
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2">
            <span className="block text-lg lg:text-xl text-gray-600 mt-20 md:mt-10 mb-2 font-medium">
              Follow Us On
            </span>

            <h2 className="text-2xl lg:text-4xl font-bold text-gray-700 mb-6 leading-snug">
              Social Media
            </h2>

            <p className="[text-align:justify] text-base lg:text-lg text-gray-500 leading-relaxed">
              Improve your TOEFL, IELTS, and GCSE scores! Follow Writing Aide
              for writing tips and tricks, the latest practice questions, and
              test-passing strategies. Make writing a skill, not a barrier.
            </p>

            {/* button */}
            <div className="shadow-lg rounded-[50px] transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer w-[250px] mb-4 mt-8 sm:mb-0 mx-auto md:mx-0">
              <a
                href="https://www.instagram.com/rajin_id/"
                className="download flex items-center border-2 border-[#00A9E8] rounded-[50px] px-3 py-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="button-icon flex items-center rounded-full p-1 mr-2">
                  <img
                    src={logos.instagram}
                    className="w-5"
                    alt="Follow Rajin.id Official Instagram"
                  />
                </span>
                <span className="button-text">Follow Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* FEATURES HEADER */}
        <div className="container mx-auto px-5">
          <h2 className="text-[24px] my-10 md:my-15 sm:text-3xl lg:text-4xl font-bold text-black text-center">
            Your Ultimate Learning Companion for
            <br className="hidden md:inline" /> &nbsp; Personalized Tutoring and
            Effective Tryouts
          </h2>
        </div>

        {/* FEATURES GRID */}
        <div className="container mx-auto lg:px-30 lg:mt-10">
          <div className="my-10 px-3 lg:px-[200px] grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3 bg-no-repeat bg-cover rounded-[20px]">
            {/* Box 1 */}
            <div className="shadow-lg w-full text-center m-2 p-5 bg-[#F5F9FF] rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
              <img
                src={ilustration.ilusrajin1}
                className="w-20 mx-auto pb-5"
                alt="English Language Course Illustration"
              />
              <h3 className="text-[16px] md:text-[18px] text-gray-600 font-medium">
                An English language course institution
              </h3>
            </div>

            {/* Box 2 */}
            <div className="shadow-lg w-full text-center m-2 p-5 bg-[#F5F9FF] rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
              <img
                src={ilustration.ilusrajin2}
                className="w-20 mx-auto pb-5"
                alt="Private Tutoring Service Illustration"
              />
              <h3 className="text-[16px] md:text-[18px] text-gray-600 font-medium">
                Private tutoring institute
              </h3>
            </div>

            {/* Box 3 */}
            <div className="shadow-lg w-full text-center m-2 p-5 bg-[#F5F9FF] rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
              <img
                src={ilustration.ilusrajin3}
                className="w-20 mx-auto pb-5"
                alt="Online UTBK-SNBT Tryout Platform Illustration"
              />
              <h3 className="text-[16px] md:text-[18px] text-gray-600 font-medium">
                A UTBK-SNBT tryout platform
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
