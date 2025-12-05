import { mockup, solutionWebApp } from "../data";

export default function WebApp() {
  return (
    <>
      <div className="webApp pt-15 lg:pt-5 bg-white">
        {/* deskripsi zerone */}
        <div className="container mx-auto pt-[80px] lg:px-30 px-5 lg:mt-20 grid grid-cols-1 gap-4 sm:grid-cols-2  lg:grid-cols-2">
          <div className="pr-6">
            <h3 className="text-[36px] font-bold text-black mb-6 pt-2">
              Web App
              <br className="hidden md:inline" />
              Development
            </h3>
            <span className="text-justify text-[24px] ">
              Improve Information Systems Online
            </span>
            <br /> <br />
            <p className="[text-align:justify]">
              To maximize the user experience, businesses need to develop online
              programs. With online systems/programs, it is easier and faster to
              access information about the company/institution's programs and
              operations.
          
              To maximize the user experience, businesses need to develop online
              programs. With online systems/programs, it is easier and faster to
              access information about the company/institution's programs and
              operations.
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
              src={mockup.webapp}
              alt="webApp"
              className="w-300 pt-10 lg:pt-0 lg:pl-35 md:pl-20 relative lg:left-[-80px] left-[-10px]"
            />
          </div>
        </div>
        <div className="container mx-auto px-5">
          <h3 className=" text-center text-[16px] lg:text-[20px] lg:mt-20 mt-10 ">
            Interested in developing a web-based system that can help simplify
            your organization's tasks?
          </h3>
          <h3 className=" text-[16px] lg:text-[20px] font-bold itaic text-center pb-10">
            Don't hesitate to consult us about your digitization issues, Zerone
            is always ready to help!
          </h3>
          
        </div>
                <section className="features-section container mx-auto  lg:px-35 bg-white">
                  <div className="pb-20  grid grid-cols-1 gap-6 sm:grid-cols-3  lg:grid-cols-3 ">
                    <img src={solutionWebApp.webApp3} className="shadow-lg rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer" alt="web app development - venti.id" />
                    <img src={solutionWebApp.webApp2} className="shadow-lg rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer" alt="web app development - latihan.id" />
                    <img src={solutionWebApp.webApp1} className="shadow-lg rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer" alt="web app development - edunav" />
                  </div>
                </section>
      </div>
    </>
  );
}
