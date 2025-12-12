import { banner, ilustration, logos, sosialmedia } from "../data";
import { Helmet } from "react-helmet-async";

export default function Venti() {
  return (
    <>
      <div className="webApp pt-10 lg:pt-5 bg-white">
        <Helmet>
          <title>
            Venti.id | Digital Event & Ticketing Management System by Zerone
            Global
          </title>

          <meta
            name="description"
            content="Maximize your event success with Venti.id. An all-in-one digital ticketing and event management system featuring real-time analytics, seating maps, secure payments, and attendance monitoring."
          />
          <meta
            name="keywords"
            content="Event Management System, Digital Ticketing, Sistem Tiket Online, Event Registration, Venti.id, Zerone Global"
          />
          <meta name="robots" content="index, follow" />

          <link rel="canonical" href="https://www.zerone.id/venti" />

          {/* Open Graph */}
          <meta
            property="og:title"
            content="Venti.id | Digital Event & Ticketing Management System"
          />
          <meta
            property="og:description"
            content="The ultimate solution for digital events and ticketing. Supports registration, payments, attendance monitoring, and analytics for all event types."
          />
          <meta property="og:url" content="https://www.zerone.id/venti" />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://www.zerone.id/assets/meta-image-zerone.webp"
          />
        </Helmet>

        {/* HERO BANNER SECTION */}
        <div className="product-banner mt-26 container mx-auto lg:max-w-6xl hidden sm:block shadow-lg rounded-[20px]">
          <img
            className="rounded-[20px]"
            src={banner.venti}
            alt="Dashboard Interface of Venti.id Event Management System"
          />
        </div>
        <div className="product-banner mt-14 container mx-auto md:hidden max-w-[370px] drop-shadow-xl">
          <img
            className="rounded-[20px] mx-auto"
            src={banner.mobileventi}
            alt="Venti.id Mobile Ticketing App for Attendees"
          />
        </div>

        {/* PRODUCT EXPLANATION SECTION */}
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start px-7 sm:px-20 lg:px-40 mt-20">
          <div className="lg:w-1/3">
            <span className="block text-lg lg:text-xl text-gray-600 mb-4 font-semibold">
              Our Product
            </span>
            <h1 className="text-2xl lg:text-4xl font-bold text-gray-700 mb-6 leading-snug">
              What is Venti.id ?
            </h1>
          </div>

          <div className="lg:w-2/3">
            <p className="[text-align:justify] text-base lg:text-lg text-gray-500 leading-relaxed">
              Venti.id is a digital event and ticketing management system. It
              supports digital registration, payment processing, attendance
              monitoring, and analytics. Venti.id integrates with Strava for
              sport events and Latihan.id for academic competitions, includes
              seat mapping capabilities, and offers payment options through bank
              transfers, QRIS, and credit cards.
            </p>
          </div>
        </div>

        {/* DOWNLOAD & DEMO BUTTONS */}
        <div className="md:flex container mx-auto justify-center gap-8 items-center mt-[60px] px-4">
          {/* Tombol Kiri - Download Aplikasi */}
          <div className="shadow-lg rounded-[50px] transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer w-[250px] mb-4 sm:mb-0 mx-auto md:mx-0">
            <a
              href="https://play.google.com/store/apps/details?id=com.zerone.venti&pcampaignid=web_share"
              className="download flex items-center border-2 border-[#00A9E8] rounded-[50px] px-3 py-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="button-icon flex items-center rounded-full p-1 mr-2">
                <img
                  src={logos.playstore}
                  className="w-5"
                  alt="Download Venti Event App on Google Play Store"
                />
              </span>
              <span className="button-text">Download on Playstore</span>
            </a>
          </div>

          {/* Tombol Kanan - Request Demo Aplikasi */}
          <div className="shadow-lg rounded-[50px] transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer w-[250px] mb-4 sm:mb-0 mx-auto md:mx-0">
            <a
              href="https://venti.id/"
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
              <span className="text-white">Create Your Event</span>
            </a>
          </div>
        </div>

        {/* SOCIAL MEDIA SECTION */}
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start px-7 sm:px-20 lg:px-40 my-30">
          <div className="lg:w-1/2">
            <img
              className="rounded-[20px] container mx-auto w-[350px]"
              src={sosialmedia.socialVenti}
              alt="Venti.id Event Community Activities"
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
              Want your event to be a success? Follow Venti for ticketing
              management tips, promotional strategies, and platform feature
              updates. The ultimate ticketing solution for all types of events
              and competitions.
            </p>

            {/* button */}
            <div className="shadow-lg rounded-[50px] transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer w-[250px] mb-4 mt-8 sm:mb-0 mx-auto md:mx-0">
              <a
                href="https://www.instagram.com/ventiid/"
                className="download flex items-center border-2 border-[#00A9E8] rounded-[50px] px-3 py-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="button-icon flex items-center rounded-full p-1 mr-2">
                  <img
                    src={logos.instagram}
                    className="w-5"
                    alt="Follow Venti.id Official Instagram"
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
            Efficient, All‑in‑One Event & Ticketing
            <br className="hidden md:inline" />
            &nbsp; Solution for Seamless Experiences
          </h2>
        </div>

        {/* FEATURES GRID */}
        <div className="container mx-auto lg:px-30 lg:mt-10">
          <div className="my-10 px-3 lg:px-[200px] grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3 bg-no-repeat bg-cover rounded-[20px] ">
            {/* Box 1 */}
            <div className="shadow-lg w-full text-center m-2 p-5 bg-[#F5F9FF] rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
              <img
                src={ilustration.ilusventi1}
                className="w-20 mx-auto pb-5"
                alt="Illustration of Complete Event Management Solutions"
              />
              <h3 className="text-[16px] md:text-[18px] text-gray-600 font-medium text-center">
                Complete Event Management Solutions
              </h3>
            </div>

            {/* Box 2 */}
            <div className="shadow-lg w-full text-center m-2 p-5 bg-[#F5F9FF] rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
              <img
                src={ilustration.ilusventi2}
                className="w-20 mx-auto pb-5"
                alt="Illustration of Unified Event Platform"
              />
              <h3 className="text-[16px] md:text-[18px] text-gray-600 font-medium text-center">
                One Platform for Every Event
              </h3>
            </div>

            {/* Box 3 */}
            <div className="shadow-lg w-full text-center m-2 p-5 bg-[#F5F9FF] rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
              <img
                src={ilustration.ilusventi3}
                className="w-20 mx-auto pb-5"
                alt="Illustration of Seamless Ticketing System"
              />
              <h3 className="text-[16px] md:text-[18px] text-gray-600 font-medium text-center">
                Seamless Ticketing and Registration System
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
