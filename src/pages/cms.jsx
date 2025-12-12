import { mockup } from "../data";
import { Helmet } from "react-helmet-async";

export default function CMS() {
  return (
    <>
      {/* TYPO FIX: pt-15 -> pt-16 */}
      <div className="webApp pt-16 lg:pt-5 bg-white">
        <Helmet>
          {/* Title */}
          <title>CMS Development | Zerone Global Digital Solution</title>

          {/* Meta Description: Translated to English for consistency */}
          <meta
            name="description"
            content="Zerone Global provides Content Management System (CMS) development services to help businesses manage website content easily, securely, and flexibly. Our digital solutions improve your online efficiency and reputation."
          />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://www.zerone.id/cms" />

          {/* Open Graph */}
          <meta
            property="og:title"
            content="CMS Development | Zerone Global Digital Solution"
          />
          <meta
            property="og:description"
            content="Zerone Global CMS solutions help businesses manage website content easily, securely, and flexibly."
          />
          <meta property="og:url" content="https://www.zerone.id/cms" />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://www.zerone.id/assets/meta-image-zerone.webp"
          />
        </Helmet>

        {/* deskripsi zerone */}
        <div className="container mx-auto pt-[80px] lg:px-32 px-5 lg:mt-20 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="pr-6">
            <h1 className="text-[24px] md:text-[36px] font-bold text-black mb-6 pt-2">
              Content Management
              <br />
              System (CMS)
            </h1>
            <h2 className="text-justify text-[18px] md:text-[24px]">
              CMS Solutions That Put You in Control
            </h2>
            <br />
            <p className="[text-align:justify]">
              A website is the core of your business identity a place where your
              products, values, and professionalism shine. A thoughtfully
              designed website helps you earn trust, attract customers, and open
              new business opportunities. That's why you need to maximize your
              Content Management System, an application or software for managing
              website content. You can manage your website content as you wish,
              with complete freedom. Attractively designed website content will
              enable your sales to grow significantly.
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
              src={mockup.cms}
              alt="Custom Content Management System (CMS) Dashboard Interface by Zerone Global"
              className="hidden lg:block w-full max-w-[500px] pt-10 lg:pt-0 lg:pl-32 md:pl-20 relative lg:left-[-50px] left-[-5px]"
            />
          </div>
        </div>

        <div className="container mx-auto px-5">
          <h3 className="text-center text-[16px] lg:text-[20px] lg:mt-20 mt-10">
            “Content builds relationships. Relationships are built on trust.
            Trust drives revenue.”
          </h3>
          <h3 className="text-[16px] lg:text-[20px] font-bold italic text-center pb-10">
            Andrew Davis
          </h3>
        </div>
      </div>
    </>
  );
}