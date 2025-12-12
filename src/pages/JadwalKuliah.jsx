import { banner, ilustration } from "../data";
import { Helmet } from "react-helmet-async";

export default function JadwalKuliah() {
  return (
    <>
      <div className="webApp pt-20 lg:pt-5 bg-white">
        <Helmet>
          <title>
            JadwalKuliah | Smart College Schedule & Academic Management
          </title>

          <meta
            name="description"
            content="JadwalKuliah is a digital college schedule management platform by Zerone Global. Manage academic schedules easily with real-time notifications, flexible search, and student profiles."
          />
          <meta
            name="keywords"
            content="College Schedule, Academic Calendar, Student Planner, University Timetable, JadwalKuliah, Zerone Global"
          />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://www.zerone.id/jadwalkuliah" />

          {/* Open Graph */}
          <meta
            property="og:title"
            content="JadwalKuliah | Smart College Schedule Management"
          />
          <meta
            property="og:description"
            content="Optimize your academic life with JadwalKuliah. Features real-time schedule alerts, class search, and personalized student profiles."
          />
          <meta
            property="og:url"
            content="https://www.zerone.id/jadwalkuliah"
          />
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
            src={banner.jadwalkuliah}
            alt="JadwalKuliah Desktop Dashboard Interface"
          />
        </div>
        <div className="product-banner mt-2 container mx-auto md:hidden max-w-[370px] drop-shadow-xl">
          <img
            className="rounded-[20px] mx-auto"
            src={banner.mobilejadwalkuliah}
            alt="JadwalKuliah Mobile App Interface"
          />
        </div>

        {/* CTA BUTTON */}
        <div className="flex justify-center mt-20">
          <div className="shadow-lg rounded-[50px] transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer w-[210px] ">
            <a
              href="https://jadwalkuliah.id/"
              className="download flex items-center border-2 bg-[linear-gradient(90deg,#1c76d2,#3498db)] border-[#00A9E8] rounded-[50px] px-3 py-3"
              target="_blank"
              rel="noopener noreferrer"
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
              <span className="text-white pl-3 font-medium">
                Start Free Trial
              </span>
            </a>
          </div>
        </div>

        {/* HEADLINE SECTION */}
        <div className="container mx-auto px-5 motion-safe:animate-slideUp">
          <h1 className="text-[24px] my-10 lg:pt-[10px] md:my-10 sm:text-3xl lg:text-4xl font-bold text-black text-center">
            Simplify Your College Life with Smart
            <br className="hidden md:inline" />
            &nbsp; Schedule Management and Academic Tools
          </h1>
        </div>

        {/* FEATURES GRID */}
        <div className="container mx-auto lg:px-30 lg:mt-10">
          <div className="my-10 px-3 px-[20px] md:px-[100px] lg:px-[190px] grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3 bg-no-repeat bg-cover rounded-[20px]">
            {/* Box 1 */}
            <div className="shadow-lg w-full text-center m-2 p-5 rounded-[15px] bg-[#F5F9FF] rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
              <img
                src={ilustration.ilusjadwalkuliah1}
                className="w-20 mx-auto pb-5"
                alt="Real-Time Schedule Notification Icon"
              />
              <h3 className="text-[18px] md:text-[18px] text-gray-600 font-medium text-center">
                Real-Time Notifications
              </h3>
            </div>

            {/* Box 2 */}
            <div className="shadow-lg w-full text-center m-2 p-5 rounded-[15px] bg-[#F5F9FF] rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
              <img
                src={ilustration.ilusjadwalkuliah2}
                className="w-20 mx-auto pb-5"
                alt="Flexible Class Search Feature Icon"
              />
              <h3 className="text-[18px] md:text-[18px] text-gray-600 font-medium text-center">
                Flexible Search Feature
              </h3>
            </div>

            {/* Box 3 */}
            <div className="shadow-lg w-full text-center m-2 p-5 rounded-[15px] bg-[#F5F9FF] rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
              <img
                src={ilustration.ilusjadwalkuliah3}
                className="w-20 mx-auto pb-5"
                alt="Student User Profile Feature Icon"
              />
              <h3 className=" text-[18px] md:text-[18px] text-gray-600 font-medium text-center">
                User Profile
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
