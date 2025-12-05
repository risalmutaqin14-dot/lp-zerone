import { mockup, solutionAI, solutionDesain } from "../data";

export default function AiAppAutomation() {
  return (
    <>
      <div className="webApp pt-15 md:pt-4 bg-white pb-30">
        {/* deskripsi zerone */}
        <div className="container mx-auto pt-[80px] lg:px-30 px-5 lg:mt-20 grid grid-cols-1 gap-4 sm:grid-cols-2  lg:grid-cols-2">
          <div className="pr-6">
            <h3 className="text-[24px] md:text-[36px] font-bold text-black pt-2">
              AI App &
              <br /> Automation Development
            </h3>
            <br />
            <p className="[text-align:justify]">
              Zerone.id’s AI App & Automation Development service empowers
              businesses to build intelligent applications while automating
              critical workflows end-to-end. We combine advanced AI models,
              smart integrations, and process automation to eliminate manual
              work, reduce errors, and accelerate growth. From custom AI apps to
              fully automated business systems, we help organizations operate
              with greater efficiency and intelligence. Our solutions ensure
              that technology not only works faster—but works smarter for your
              business.
            </p><br /><br />
            <p className="text-[14px] italic">
                "efficiency is doing things right, effectiveness is doing the right things."
            </p>
            <p className="font-bold">- Peter Drucker</p>
            {/* button */}
            <div className="flex mt-6 container mx-auto">
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
              src={mockup.zeroneAI}
              alt="AI App & Automation Development"
              className="w-280 pt-10 lg:pt-0 lg:pl-35 md:pl-20 relative lg:left-[-80px] mb-10"
            />
          </div>
        </div>

        <div className="container mx-auto mt- mb-10">
          <h3 className="text-[24px] md:text-[36px] font-bold text-center text-black mb-3 pt-2">
            Smart Integrations 
            <br className="hidden md:inline" />
            &nbsp;to Reduce Errors and Manual Work
          </h3>
          <h5 className="text-[16px] md:text-[18px] text-center">
            Our solutions reduce manual work, minimize errors, and accelerate growth.{" "}
          </h5>
        </div>
        <section className="features-section container mx-auto  lg:px-35 bg-white">
            <div className="mt-5 mb-10  grid grid-cols-1 gap-6 sm:grid-cols-3  lg:grid-cols-3 ">
            <img src={solutionAI.ai1} className="shadow-lg rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer" alt="Ai App & Automation Development" />
            <img src={solutionAI.ai2} className="shadow-lg rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer" alt="Ai App & Automation Development" />
            <img src={solutionAI.ai3} className="shadow-lg rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer" alt="Ai App & Automation Development" />
            <img src={solutionAI.ai4} className="shadow-lg rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer" alt="Ai App & Automation Development" />
            <img src={solutionAI.ai5} className="shadow-lg rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer" alt="Ai App & Automation Development" />
            <img src={solutionAI.ai6} className="shadow-lg rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer" alt="Ai App & Automation Development" />
            </div>
        </section>
      </div>
    </>
  );
}
