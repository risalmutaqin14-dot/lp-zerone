import { mockup, solutionAppDev } from "../data";

export default function MobileApp() {
  return (
    <>
      <div className="webApp pt-15 lg:pt-5 bg-white">
        {/* deskripsi zerone */}
        <div className="container mx-auto pt-[80px] lg:px-30 px-5 lg:mt-20 grid grid-cols-1 gap-4 sm:grid-cols-2  lg:grid-cols-2">
          <div className="pr-6">
            <h3 className="text-[36px] font-bold text-black mb-6 pt-2">
              Mobile App
              <br className="hidden md:inline" />
              Development
            </h3>
            <span className="text-justify text-[24px] ">
              Building the World in Your Hands
            </span>
            <br /> <br />
            <p className="[text-align:justify]">
              Mobile technology is currently in high demand due to its ease and
              speed of access. To achieve user satisfaction and accessibility,
              software that can be accessed anytime and anywhere using only a
              mobile device is required. Mobile application development is an
              effort to improve a system so that it can be accessed instantly by
              opening it through a mobile device, whether it be a smartphone or
              tablet. The most popular mobile operating systems today are
              Android and iOS. To build a mobile-based application, it must be
              based on structured programming and interactive design ideas. You
              don't need to worry about starting to design and develop the
              application you need.
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
              src={mockup.mobileapp}
              alt="webApp"
              className="w-300 pt-10 lg:pt-0 lg:pl-35 md:pl-20 relative lg:left-[-80px] left-[-2px]"
            />
          </div>
        </div>
        <div className="container mx-auto mt-30 mb-15">
          <h3 className="text-[24px] md:text-[36px] font-bold text-center text-black mb-3 pt-2">
            Digital Solutions that
            <br className="hidden md:inline" />
            &nbsp;Increase Business Productivity
          </h3>
          <h5 className="text-[16px] md:text-[18px] text-center">
            We build Android & iOS applications that are scalable, secure,
            Prototyping, and Design Systems. <br className="hidden md:inline" />
            &nbsp;and ready to compete in the global market
          </h5>
        </div>

        <section className="features-section container mx-auto  lg:px-35 bg-white">
          <div className=" mb-20  grid grid-cols-1 gap-6 sm:grid-cols-3  lg:grid-cols-3 ">
            <img
              src={solutionAppDev.appDev1}
              className="shadow-lg rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
              alt="Mobile App Development - Latihan.id"
            />
            <img
              src={solutionAppDev.appDev2}
              className="shadow-lg rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
              alt="Mobile App Development - vanti.id"
            />
            <img
              src={solutionAppDev.appDev3}
              className="shadow-lg rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
              alt="Mobile App Development - Rajin.id"
            />
          </div>
        </section>
      </div>
    </>
  );
}
