import { mockup, solutionUIUX } from "../data";

export default function CMS() {
  return (
    <>
      <div className="webApp pt-15 lg:pt-5 bg-white">
        {/* deskripsi zerone */}
        <div className="container mx-auto pt-[80px] lg:px-30 px-5 lg:mt-20 grid grid-cols-1 gap-4 sm:grid-cols-2  lg:grid-cols-2">
          <div className="pr-6">
            <h3 className="text-[24px] md:text-[36px] font-bold text-black mb-6 pt-2">
              UIUX Design
            </h3>
            <span className="text-justify text-[18px] md:text-[24px] ">
              What Makes Your Applications and Websites Easy to Access
            </span>
            <br /> <br />
            <p className="[text-align:justify]">
              UI stands for user interface. Meanwhile, UX stands for user
              experience. Both play a very important role in digital products
              such as applications and websites. UI functions to design the
              appearance so that your product is pleasing to the eye. Icons,
              colors, fonts, animations, shapes, and layouts are all part of the
              user interface (UI). UX ensures your product feels intuitive,
              comfortable, and memorable. From menu structure to content flow,
              every detail affects how users experience your product. The better
              your UI/UX, the more confident and likely customers are to engage
              and purchase.
            </p>
          </div>
          <div>
            <img
              src={mockup.uiux}
              alt="UIUX Design"
              className="w-300 pt-10 lg:pt-0 lg:pl-35 md:pl-20"
            />
          </div>
        </div>

        <div className="container mx-auto mt-10 mb-10">
          
            <h3 className="text-[24px] md:text-[36px] font-bold text-center text-black mb-3 pt-2">
              Digital Transformation
              <br className="hidden md:inline" />&nbsp;Through User-Centered UI/UX Design
            </h3>
            <h5 className="text-[16px] md:text-[18px] text-center">
              End-to-End Digital Product Design Solutions: UI/UX, User Research,
              Prototyping, and Design Systems. <br className="hidden md:inline" />&nbsp;Develop successful products with
              our team of experts.
            </h5>
          
        </div>

        <section className="features-section container mx-auto  lg:px-35 bg-white">
          <div className="mt-5 mb-10  grid grid-cols-1 gap-6 sm:grid-cols-3  lg:grid-cols-3 ">
            <img src={solutionUIUX.uiux1} className="shadow-lg rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer" alt="Content Management System" />
            <img src={solutionUIUX.uiux2} className="shadow-lg rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer" alt="Mobile App Development" />
            <img src={solutionUIUX.uiux3} className="shadow-lg rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer" alt="Web App Development" />
            <img src={solutionUIUX.uiux4} className="shadow-lg rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer" alt="wordpess Development" />
            <img src={solutionUIUX.uiux5} className="shadow-lg rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer" alt="uiux design" />
            <img src={solutionUIUX.uiux6} className="shadow-lg rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer" alt="digital marketing" />
          </div>
        </section>
      </div>
    </>
  );
}
