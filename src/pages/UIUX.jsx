import { mockup, solutionUIUX } from "../data";
import { Helmet } from "react-helmet-async";


export default function UIUX() {
  return (
    <>
      <div className="webApp pt-15 lg:pt-5 bg-white">
        <Helmet>
        {/* Title */}
        <title>UI/UX Design | Zerone Global Digital Solution</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Zerone Global menyediakan layanan UI/UX Design untuk aplikasi dan website. Solusi desain digital kami memastikan pengalaman pengguna yang intuitif, nyaman, dan menarik sehingga meningkatkan kepercayaan serta engagement pelanggan."
        />

        {/* Robots */}
        <meta name="robots" content="index, follow" />

        {/* Canonical */}
        <link rel="canonical" href="https://www.zerone.id/uiux" />

        {/* Open Graph */}
        <meta property="og:title" content="UI/UX Design | Zerone Global Digital Solution" />
        <meta
          property="og:description"
          content="Solusi UI/UX dari Zerone Global membantu bisnis membangun aplikasi dan website dengan desain modern, intuitif, dan user-centered."
        />
        <meta property="og:url" content="https://www.zerone.id/uiux" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.zerone.id/assets/meta-image-zerone.webp" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="UI/UX Design | Zerone Global Digital Solution" />
        <meta
          name="twitter:description"
          content="Solusi UI/UX dari Zerone Global membantu bisnis membangun aplikasi dan website dengan desain modern, intuitif, dan user-centered."
        />
        <meta name="twitter:image" content="https://www.zerone.id/assets/meta-image-zerone.webp" />
      </Helmet>

        {/* deskripsi zerone */}
        <div className="container mx-auto pt-[80px] lg:px-30 px-5 lg:mt-20 grid grid-cols-1 gap-4 sm:grid-cols-2  lg:grid-cols-2">
          <div className="pr-6">
            <h1 className="text-[24px] md:text-[36px] font-bold text-black mb-6 pt-2">
              UIUX Design
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
              alt="UIUX Design"
              className="w-300 pt-10 lg:pt-0 lg:pl-35 md:pl-20"
            />
          </div>
        </div>

        <div className="container mx-auto mt-10 mb-10">
          <h3 className="text-[24px] md:text-[36px] font-bold text-center text-black mb-3 pt-2">
            Digital Transformation
            <br className="hidden md:inline" />
            &nbsp;Through User-Centered UI/UX Design
          </h3>
          <h4 className="text-[16px] md:text-[18px] text-center">
            End-to-End Digital Product Design Solutions: UI/UX, User Research,
            Prototyping, and Design Systems. <br className="hidden md:inline" />
            &nbsp;Develop successful products with our team of experts.
          </h4>
        </div>

        <section className="features-section container mx-auto  lg:px-35 bg-white">
          <div className="mt-5 mb-10  grid grid-cols-1 gap-6 sm:grid-cols-3  lg:grid-cols-3 ">
            <img
              src={solutionUIUX.uiux1}
              className="shadow-lg rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
              alt="Content Management System"
            />
            <img
              src={solutionUIUX.uiux2}
              className="shadow-lg rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
              alt="Mobile App Development"
            />
            <img
              src={solutionUIUX.uiux3}
              className="shadow-lg rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
              alt="Web App Development"
            />
            <img
              src={solutionUIUX.uiux4}
              className="shadow-lg rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
              alt="wordpess Development"
            />
            <img
              src={solutionUIUX.uiux5}
              className="shadow-lg rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
              alt="uiux design"
            />
            <img
              src={solutionUIUX.uiux6}
              className="shadow-lg rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
              alt="digital marketing"
            />
          </div>
        </section>
      </div>
    </>
  );
}
