import { banner, ilustration, logos, sosialmedia } from "../data";

export default function WritingAide() {
  return (
    <>
      <div className="webApp pt-20 lg:pt-5 bg-white">
        <div className="product-banner mt-26 container mx-auto lg:max-w-6xl hidden sm:block shadow-lg rounded-[20px]">
          <img
            className="rounded-[20px]"
            src={banner.writingaide}
            alt="Writing-Aide Banner"
          />
        </div>
        <div className="product-banner mt-2 container mx-auto md:hidden max-w-[370px] drop-shadow-xl">
          <img
            className="rounded-[20px] mx-auto"
            src={banner.mobilewritingaide}
            alt="writing-aide"
          />
        </div>

        {/* button request demo */}
        <div className="flex justify-center mt-20">
          <div className="shadow-lg rounded-[50px] transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer w-[200px] mb-4 sm:mb-0">
            <a
              href="https://writing-aide.zerone.id/"
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
              <span className="text-white pl-3 font-medium">
                Try it for free
              </span>
            </a>
          </div>
        </div>

        {/* soial media section */}
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start px-7 sm:px-20 lg:px-40 my-30">
          <div className="lg:w-1/2">
            <img
              className="rounded-[20px] container mx-auto w-[350px]"
              src={sosialmedia.socialWritingAide}
              alt="social media Writing Aide"
            />
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2">
            <h3 className="text-lg lg:text-xl text-gray-600 mt-20 md:mt-10 mb-2">
              Follow Us On
            </h3>
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
                href="https://www.instagram.com/aidee_edtech/"
                className="download flex items-center border-2 border-[#00A9E8] rounded-[50px] px-3 py-3"
              >
                <span className="button-icon flex items-center rounded-full p-1 mr-2">
                  <img
                    src={logos.instagram}
                    className="w-5"
                    alt="https://www.instagram.com/aidee_edtech/"
                  />
                </span>
                <span className="button-text">Follow Instagram</span>
              </a>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-5">
          <h3 className="text-[24px] my-10 md:my-15 sm:text-3xl lg:text-4xl font-bold text-Black text-center">
            Boost Your Test Scores with AI-Powered
            <br className="hidden md:inline" /> &nbsp; Writing Assistance for
            TOEFL and IELTS Success
          </h3>
        </div>

        <div className="container mx-auto  lg:px-30 lg:mt-10">
          <div className="my-10 px-3 lg:px-[200px] grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-4 bg-no-repeat bg-cover rounded-[20px] ">
            {/* Box 1 */}
            <div className="shadow-lg w-full text-center m-2 p-5 rounded-[15px] bg-[#F5F9FF] rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
              <img
                src={ilustration.iluswriting1}
                className="w-20 mx-auto pb-5"
                alt="Customer Oriented"
              />
              <span className="text-justify text-[16px] md:text-[20px] text-grey-600">
                TOEFL
              </span>
            </div>

            {/* Box 2 */}
            <div className="shadow-lg w-full text-center m-2 p-5 rounded-[15px] bg-[#F5F9FF] rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
              <img
                src={ilustration.iluswriting2}
                className="w-20 mx-auto pb-5"
                alt="Customer Oriented"
              />
              <span className="text-justify text-[16px] md:text-[20px] text-grey-600">
                IELTS
              </span>
            </div>

            {/* Box 3 */}
            <div className="shadow-lg w-full text-center m-2 p-5 rounded-[15px] bg-[#F5F9FF] rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
              <img
                src={ilustration.iluswriting3}
                className="w-20 mx-auto pb-5"
                alt="Support 24/7"
              />
              <span className="text-justify text-[16px] md:text-[20px] text-grey-600">
                GCSE
              </span>
            </div>

            {/* Box 4 */}
            <div className="shadow-lg w-full text-center m-2 p-5 rounded-[15px] bg-[#F5F9FF] rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
              <img
                src={ilustration.iluswriting4}
                className="w-20 mx-auto pb-5"
                alt="Support 24/7"
              />
              <span className="text-justify text-[16px] md:text-[20px] text-grey-600">
                Custom Test
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
