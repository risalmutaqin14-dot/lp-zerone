import { banner, ilustration, logos } from "../data";

export default function Venti() {
  return (
    <>
      <div className="webApp pt-10 lg:pt-5">
        <div className="product-banner mt-26 container mx-auto lg:max-w-6xl hidden sm:block shadow-lg rounded-[20px]">
          <img
            className="rounded-[20px]"
            src={banner.venti}
            alt="venti banner hidden "
          />
        </div>
        <div className="product-banner mt-2 container mx-auto md:hidden max-w-[370px] drop-shadow-xl">
          <img
            className="rounded-[20px] mx-auto"
            src={banner.mobileventi}
            alt="venti"
          />
        </div>

        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start px-7 sm:px-20 lg:px-40 mt-20">
          <div className="lg:w-1/3">
            <h3 className="text-lg lg:text-xl text-gray-600 mb-4">
              Our Product
            </h3>
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-700 mb-6 leading-snug">
              What is Venti.id ?
            </h2>
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

        {/* button request demo */}
        <div className="md:flex contaier mx-auto justify-center gap-8 items-center mt-[60px] px-4">
          {/* Tombol kiri - Download Aplikasi */}
          <div className="shadow-lg rounded-[50px] transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer w-[250px] mb-4 sm:mb-0 mx-auto md:mx-0">
            <a
              href="https://play.google.com/store/apps/details?id=com.zerone.venti&pcampaignid=web_share"
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
              href="https://venti.id/"
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
              <span className="text-white">Create Your Event</span>
            </a>
          </div>
        </div>

        <div className="container mx-auto px-5">
          <h3 className="text-[24px] my-10 md:my-15 sm:text-3xl lg:text-4xl font-bold text-Black text-center">
            Efficient, All‑in‑One Event & Ticketing 
            <br className="hidden md:inline" />
            &nbsp; Solution for Seamless Experiences
          </h3>
        </div>

        <div className="container mx-auto  lg:px-30 lg:mt-10">
          <div className="my-10 px-3 lg:px-[200px] grid grid-cols-3 gap-4 md:grid-cols-3 lg:grid-cols-3 bg-no-repeat bg-cover rounded-[20px] ">
            {/* Box 1 */}
            <div className="shadow-lg w-full text-center m-2 p-5 rounded-[15px] bg-[#F5F9FF] rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
              <img
                src={ilustration.ilusventi1}
                className="w-20 mx-auto pb-5"
                alt="Customer Oriented"
              />
              <span className="text-justify text-[16px] md:text-[20px] text-grey-600">
                Complete Event Management Solutions
              </span>
            </div>

            {/* Box 2 */}
            <div className="shadow-lg w-full text-center m-2 p-5 rounded-[15px] bg-[#F5F9FF] rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
              <img
                src={ilustration.ilusventi2}
                className="w-20 mx-auto pb-5"
                alt="Collaborative"
              />
              <span className="text-justify text-[16px] md:text-[20px] text-grey-600">
                One Platform for Every Event
              </span>
            </div>

            {/* Box 3 */}
            <div className="shadow-lg w-full text-center m-2 p-5 rounded-[15px] bg-[#F5F9FF] rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
              <img
                src={ilustration.ilusventi3}
                className="w-20 mx-auto pb-5"
                alt="Support 24/7"
              />
              <span className="text-justify text-[16px] md:text-[20px] text-grey-600">
                Seamless Ticketing and Registration System
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
