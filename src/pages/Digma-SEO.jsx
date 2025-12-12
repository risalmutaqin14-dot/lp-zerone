import { mockup, solutionDigmar } from "../data";
import { Helmet } from "react-helmet-async";

export default function DigmaSEO() {
  return (
    <>
      <div className="webApp pt-16 bg-white lg:pt-5">
        <Helmet>
          <title>
            Digital Marketing & SEO | Zerone Global Digital Solution
          </title>

          <meta
            name="description"
            content="Zerone Global provides Digital Marketing & SEO services to increase your business visibility. Our solutions help place your website at the top of Google search results and accelerate business growth."
          />
          <meta name="robots" content="index, follow" />
          <link
            rel="canonical"
            href="https://www.zerone.id/digital-marketing"
          />

          {/* Open Graph */}
          <meta
            property="og:title"
            content="Digital Marketing & SEO | Zerone Global Digital Solution"
          />
          <meta
            property="og:description"
            content="Zerone Global Digital Marketing & SEO solutions help businesses increase online visibility and attract more customers."
          />
          <meta
            property="og:url"
            content="https://www.zerone.id/digital-marketing"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://www.zerone.id/assets/meta-image-zerone.webp"
          />
        </Helmet>

        {/* deskripsi zerone */}
        <div className="container mx-auto pt-[80px] lg:px-32 px-5 lg:mt-20 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="pr-6">
            <h1 className="text-[30px] font-bold text-black mb-6 pt-2">
              Digital Marketing
              <br /> and SEO
            </h1>
            <h2 className="text-justify text-[18px] md:text-[24px] ">
              Fast-Growing Business Tactics: Digital Marketing and SEO
            </h2>
            <br />
            <p className="[text-align:justify]">
              Digital marketing is advertising or promoting a business through
              digital systems such as maximizing the internet, using special
              applications, and reliable technological skills. Unlike
              conventional advertising such as banners, brochures or billboards,
              digital marketing can measure success with numbers so that
              advertising is easy to evaluate. Meanwhile, SEO (Search Engine
              Optimization) is a technique for placing websites at the top of
              Google search results. With SEO, your business products are more
              likely to be purchased by potential customers. This is because
              your website is easily and directly visited by potential customers
              who search for it via Google.
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
              src={mockup.digmar}
              alt="Digital Marketing and SEO Strategy Dashboard by Zerone Global"
              className="hidden lg:block w-full max-w-[500px] pt-10 lg:pt-0 lg:pl-32 md:pl-20"
            />
          </div>
        </div>

        <div className="container mx-auto px-5">
          <h3 className=" text-center text-[16px] lg:text-[20px] lg:mt-20 mt-10 ">
            “It is not the job of Search Engine Optimization to make a pig fly.
            It is the job of the SEO to <br></br>genetically re-engineer the web
            site so that it becomes an eagle.”
          </h3>
          <h3 className=" text-[16px] lg:text-[20px] font-bold italic text-center pb-10">
            Bruce Clay
          </h3>
        </div>

        <section className="features-section container mx-auto lg:px-32 bg-white">
          <div className="mt-5 mb-10 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-3">
            <img
              src={solutionDigmar.digmar1}
              className="shadow-lg rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
              alt="SEO Analysis and Keyword Strategy - Zerone Global"
            />
            <img
              src={solutionDigmar.digmar2}
              className="shadow-lg rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
              alt="Social Media Marketing Campaign Results - Zerone Global"
            />
            <img
              src={solutionDigmar.digmar3}
              className="shadow-lg rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
              alt="Google Analytics and Performance Reporting - Zerone Global"
            />
          </div>
        </section>
      </div>
    </>
  );
}