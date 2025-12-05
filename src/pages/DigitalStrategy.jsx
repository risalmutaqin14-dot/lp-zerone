import { mockup, solutionDigitalStrategy } from "../data";

export default function DigitalStrategy() {
  return (
    <>
      <div className="webApp pt-15 lg:pt-5 bg-white">
        {/* deskripsi zerone */}
        <div className="container mx-auto pt-[80px] lg:px-30 px-5 lg:mt-20 grid grid-cols-1  sm:grid-cols-2  lg:grid-cols-2">
          <div className="pr-6">
            <h3 className="text-[24px] md:text-[36px] font-bold text-black mb-6 pt-2">
              Digital Strategy
              <br /> Consulting
            </h3>
            <span className="text-justify text-[18px] md:text-[24px] ">
              The King of Modern Business: Digitalization
            </span>
            <br /> <br />
            <p className="[text-align:justify]">
              The term digital or digitization appears almost everywhere. In the
              business sector, government, education, and even tourism use this
              term. It relates to products, methods, or even just information.
              But what does this term actually mean? Simply put, digital or
              digitization is the application of computerized systems to the way
              we work, produce, and even use goods or services.
            </p>
            {/* button */}
            <div className="flex mt-7 container mx-auto">
              <div className="w-[240px] mb-4 sm:mb-0">
                <a
                  href="/contact"
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
                    Get The Solution
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div>
            <img
              src={mockup.digcon}
              alt="Digital Strategy Consulting"
              className="w-300 pt-10 lg:pt-0 lg:pl-35 md:pl-20 relative lg:left-[-80px] left-[-18px]"
            />
          </div>
        </div>
        <div className="container mx-auto px-5">
          <h3 className=" text-center text-[16px] lg:text-[20px] lg:mt-20 mt-10 ">
            Digitalization can bring sellers and buyers together in a more
            effective way. This is because <br />both parties are in the same system.
          </h3>
          <h3 className=" text-[16px] lg:text-[20px] font-bold itaic text-center pb-10">
            Consult and tell us your needs only with Zerone!
          </h3>
        </div>
        <section className="features-section container mx-auto  lg:px-35 bg-white">
            <div className="mt-5 mb-10  grid grid-cols-1 ">
            <img src={solutionDigitalStrategy.digstra1} className="shadow-lg rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer" alt="Ai App & Automation Development" />
            </div>
        </section>
      </div>
    </>
  );
}
