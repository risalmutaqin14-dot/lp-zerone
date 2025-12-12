import { banner, ilustration, logos, sosialmedia } from "../data";
import { Helmet } from "react-helmet-async";

export default function EduNav() {
  return (
    <>
      <div className="webApp pt-20 lg:pt-5 container mx-auto bg-white">
        <Helmet>
          <title>Edunav | School Information System by Zerone Global</title>

          <meta
            name="description"
            content="Edunav is an integrated school information system by Zerone Global. It helps digitize academics, administration, finance, attendance, communication, and parent engagement in one unified platform."
          />
          <meta
            name="keywords"
            content="School Information System, SIS, School Management Software, Academic Digitization, Edunav, Zerone Global"
          />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://www.zerone.id/edunav" />

          {/* Open Graph */}
          <meta
            property="og:title"
            content="Edunav | School Information System by Zerone Global"
          />
          <meta
            property="og:description"
            content="Edunav helps schools operate more efficiently with an integrated information system for academics, administration, and communication."
          />
          <meta property="og:url" content="https://www.zerone.id/edunav" />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://www.zerone.id/assets/meta-image-zerone.webp"
          />
        </Helmet>

        {/* Hero Section */}
        <div className="product-banner mt-26 container mx-auto lg:max-w-6xl hidden sm:block shadow-lg rounded-[20px]">
          <img
            className="rounded-[20px]"
            src={banner.edunav}
            alt="Edunav School Information System Dashboard Interface"
          />
        </div>
        <div className="product-banner mt-2 container mx-auto md:hidden max-w-[370px] drop-shadow-xl">
          <img
            className="rounded-[20px] container mx-auto shadow-lg"
            src={banner.mobileedunav}
            alt="Edunav Mobile App Interface for Students and Teachers"
          />
        </div>

        {/* PRODUCT DESCRIPTION */}
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start px-7 sm:px-20 lg:px-40 mt-20">
          <div className="lg:w-1/3">
            <span className="block text-lg lg:text-xl text-gray-600 mb-4 font-semibold">
              Our Product
            </span>
            <h1 className="text-2xl lg:text-4xl font-bold text-gray-700 mb-6 leading-snug">
              What is Edunav ?
            </h1>
          </div>

          {/* Right Section */}
          <div className="lg:w-2/3">
            <p className="[text-align:justify] text-base lg:text-lg text-gray-500 leading-relaxed">
              Edunav is a comprehensive School Information System designed to
              digitize and streamline academic, administrative, and
              communication workflows in educational institutions. It provides
              integrated modules for academics, finance, attendance, guidance,
              health, reporting, communication, and parent engagement, all
              within one unified platform. With features that support teachers,
              students, parents, and school management, Edunav helps schools
              operate more efficiently, make data-driven decisions, and improve
              the overall learning experience.
            </p>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="md:flex container mx-auto justify-center gap-8 items-center mt-[60px] px-4">
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
                  alt="Download Edunav School App on Google Play Store"
                />
              </span>
              <span className="button-text">Download on PlayStore</span>
            </a>
          </div>

          <div className="shadow-lg rounded-[50px] transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer w-[250px] mb-4 sm:mb-0 mx-auto md:mx-0">
            <a
              href="https://apps.apple.com/id/app/edunav/id1616739654"
              className="download flex items-center border-2 border-[#00A9E8] rounded-[50px] px-3 py-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="button-icon flex items-center rounded-full p-1 mr-2">
                <img
                  src={logos.appStore}
                  className="w-6"
                  alt="Download Edunav School App on Apple App Store"
                />
              </span>
              <span className="button-text">Download on AppStore</span>
            </a>
          </div>

          {/* Tombol kanan - Request Demo Aplikasi */}
          <div className="shadow-lg rounded-[50px] transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer w-[250px] mb-4 sm:mb-0 mx-auto md:mx-0">
            <a
              href="https://wa.me/6281370000299?text=Hi%2C%20I%20want%20to%20ask%20about%20zerOne.id%20service"
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
              <span className="text-white">Request App Demo</span>
            </a>
          </div>
        </div>

        {/* SOCIAL MEDIA SECTION */}
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start px-7 sm:px-20 lg:px-40 my-30">
          <div className="lg:w-1/2">
            <img
              className="rounded-[20px] container mx-auto w-[350px]"
              src={sosialmedia.socialEdunav}
              alt="Edunav Social Media Community and Updates"
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
              Improve your school's administrative efficiency! Follow Edunav on
              social media for system implementation tips, feature updates, and
              guides for easier, more integrated school data management.
            </p>

            {/* button */}
            <div className="shadow-lg rounded-[50px] transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer w-[250px] mb-4 mt-8 sm:mb-0 mx-auto md:mx-0">
              <a
                href="https://www.instagram.com/edunav.sis/"
                className="download flex items-center border-2 border-[#00A9E8] rounded-[50px] px-3 py-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="button-icon flex items-center rounded-full p-1 mr-2">
                  <img
                    src={logos.instagram}
                    className="w-5"
                    alt="Follow Edunav Official Instagram"
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
            The Most Advanced and Complete
            <br className="hidden md:inline" />
            &nbsp; School Information System Suitable
            <br className="hidden md:inline" />
            &nbsp; for Your School.
          </h2>
        </div>

        {/* FEATURES GRID */}
        <div className="container mx-auto mt-0 lg:px-30 lg:mt-10">
          <div className="my-10 px-3 lg:px-[200px] grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3 bg-no-repeat bg-cover rounded-[20px] ">
            {/* Box 1 */}
            <div className="shadow-lg w-full text-center m-2 p-5 rounded-[15px] bg-[#F5F9FF] rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
              <img
                src={ilustration.ilusEdunav1}
                className="w-20 mx-auto pb-5"
                alt="Edunav Feature for Teacher Efficiency"
              />
              {/* HEADING FIX: Use H3 for feature title */}
              <h3 className="text-justify text-[16px] text-gray-600 font-medium">
                Efficiency is the key to ease of teaching. Edunav provides that
                for teachers.
              </h3>
            </div>

            {/* Box 2 */}
            <div className="shadow-lg w-full text-center m-2 p-5 rounded-[15px] bg-[#F5F9FF] rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
              <img
                src={ilustration.ilusEdunav2}
                className="w-20 mx-auto pb-5"
                alt="Parental Monitoring and Student Details in Edunav"
              />
              <h3 className="text-justify text-[16px] text-gray-600 font-medium">
                No more hassle, support and monitor the details of your child's
                studies through Edunav.
              </h3>
            </div>

            {/* Box 3 */}
            <div className="shadow-lg w-full text-center m-2 p-5 rounded-[15px] bg-[#F5F9FF] rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
              <img
                src={ilustration.ilusEdunav3}
                className="w-20 mx-auto pb-5"
                alt="Student Learning Process Support System"
              />
              <h3 className="text-justify text-[16px] text-gray-600 font-medium">
                Enjoy every learning process with Edunav, a school information
                system that makes the atmosphere at your school memorable.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
