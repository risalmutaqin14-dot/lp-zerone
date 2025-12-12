import { mockup, solutionUIUX } from "../data";
import { Helmet } from "react-helmet-async";

export default function UIUX() {
  return (
    <>
      <div className="webApp pt-16 lg:pt-5 bg-white">
        <Helmet>
          <title>UI/UX Design | Zerone Global Digital Solution</title>

          <meta
            name="description"
            content="Zerone Global provides professional UI/UX Design services for apps and websites. Our digital design solutions ensure intuitive, comfortable, and engaging user experiences to boost customer trust and engagement."
          />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://www.zerone.id/uiux" />
          {/* Open Graph */}
          <meta
            property="og:title"
            content="UI/UX Design | Zerone Global Digital Solution"
          />
          <meta
            property="og:description"
            content="Zerone Global UI/UX solutions help businesses build apps and websites with modern, intuitive, and user-centered designs."
          />
          <meta property="og:url" content="https://www.zerone.id/uiux" />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://www.zerone.id/assets/meta-image-zerone.webp"
          />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="UI/UX Design | Zerone Global Digital Solution"
          />
          <meta
            name="twitter:description"
            content="Zerone Global UI/UX solutions help businesses build apps and websites with modern, intuitive, and user-centered designs."
          />
          <meta
            name="twitter:image"
            content="https://www.zerone.id/assets/meta-image-zerone.webp"
          />
        </Helmet>

        {/* deskripsi zerone */}
        <div className="container mx-auto pt-[80px] lg:px-32 px-5 lg:mt-20 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="pr-6">
            <h1 className="text-[24px] md:text-[36px] font-bold text-black mb-6 pt-2">
              UI/UX Design
            </h1>
            <h2 className="text-justify text-[18px] md:text-[24px] ">
              What Makes Your Applications and Websites Easy to Access
            </h2>
            <br />
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
              src={mockup.uiux}
              alt="Professional UI/UX Design Mockup for Mobile and Web Apps by Zerone Global"
              className="hidden lg:block w-full max-w-[500px] pt-10 lg:pt-0 lg:pl-32 md:pl-20"
            />
          </div>
        </div>

        <div className="container mx-auto mt-10 mb-10">
          <h3 className="text-[24px] md:text-[36px] font-bold text-center text-black mb-3 pt-2">
            Digital Transformation
            <br className="hidden md:inline" />
            &nbsp;Through User-Centered UI/UX Design
          </h3>
          <h4 className="text-[16px] md:text-[18px] text-center px-4">
            End-to-End Digital Product Design Solutions: UI/UX, User Research,
            Prototyping, and Design Systems. <br className="hidden md:inline" />
            &nbsp;Develop successful products with our team of experts.
          </h4>
        </div>

        <section className="features-section container mx-auto lg:px-32 bg-white">
          <div className="mt-5 mb-10 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-3">
            <img
              src={solutionUIUX.uiux1}
              className="shadow-lg rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
              alt="Dashboard Interface Design Portfolio - Zerone Global"
            />
            <img
              src={solutionUIUX.uiux2}
              className="shadow-lg rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
              alt="Mobile App User Experience Design - Zerone Global"
            />
            <img
              src={solutionUIUX.uiux3}
              className="shadow-lg rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
              alt="Web App UI Prototype - Zerone Global"
            />
            <img
              src={solutionUIUX.uiux4}
              className="shadow-lg rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
              alt="E-commerce Website Design System - Zerone Global"
            />
            <img
              src={solutionUIUX.uiux5}
              className="shadow-lg rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
              alt="User-Centered Interface Design - Zerone Global"
            />
            <img
              src={solutionUIUX.uiux6}
              className="shadow-lg rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
              alt="Digital Product Design & Strategy - Zerone Global"
            />
          </div>
        </section>
      </div>
    </>
  );
}