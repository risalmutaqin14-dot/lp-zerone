import { mockup } from "../data";

export default function WebApp() {
  return (
    <>
      <div className="webApp pt-15 lg:pt-5">
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
            <span className="pt-[20px] ">
              To maximize the user experience, businesses need to develop online
              programs. With online systems/programs, it is easier and faster to
              access information about the company/institution's programs and
              operations.
            </span>
            <span className="mt-10 ">
              To maximize the user experience, businesses need to develop online
              programs. With online systems/programs, it is easier and faster to
              access information about the company/institution's programs and
              operations.
            </span>
          </div>
          <div>
            <img
              src={mockup.webapp}
              alt="webApp"
              className="w-300 pt-10 lg:pt-0 lg:pl-35 md:pl-20"
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
      </div>
    </>
  );
}
