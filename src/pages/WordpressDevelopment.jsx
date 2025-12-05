import { mockup, ilustration, solutionWordpress } from "../data";

export default function WordpressDev() {
  return (
    <>
      <div className="webApp pt-15 lg:pt-5 bg-white">
        {/* deskripsi zerone */}
        <div className="container mx-auto pt-[80px] lg:px-30 px-5 lg:mt-20 grid grid-cols-1 gap-4 sm:grid-cols-2  lg:grid-cols-2">
          <div className="pr-6">
            <h3 className="text-[24px] md:text-[36px] font-bold text-black mb-6 pt-2">
              Websitee/Wordpress
              <br />
              Development
            </h3>
            <span className="text-justify text-[18px] md:text-[24px] ">
              Make Your Business More Trustworthy with a Website/WordPress
            </span>
            <br /> <br />
            <p className="">
              A website/WordPress is an online site that presents its owner's
              content. For example, if you are a clothing business owner, your
              website/WordPress will contain clothing products. Similarly, if
              you are a shoe business owner, your website/WordPress will contain
              a variety of shoe options.
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
              src={mockup.wordpress}
              alt="website/wordpress development"
              className="w-300 pt-10 lg:pt-0 lg:pl-35 md:pl-20"
            />
          </div>
        </div>
        <h3 className="text-[24px] md:text-[36px] text-center font-bold text-black mb-6 pt-25">
          The advantages of having a <br />
          website/WordPress for business people
        </h3>

        <div className="container mx-auto  lg:px-30 lg:mt-5 bg-[">
          <div className="mt-10 p-[30px] grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 bg-no-repeat bg-cover rounded-[20px] py-5">
            {/* Box 1 */}
            <div className="w-full text-center m-2">
              <img
                src={ilustration.ilusAbout1}
                className="w-20 mx-auto pb-5"
                alt="Customer Oriented"
              />
              <span className="text-justify text-[16px] text-grey-600">
                Convincing potential customers about product quality
              </span>
            </div>

            {/* Box 2 */}
            <div className="w-full text-center m-2">
              <img
                src={ilustration.ilusAbout2}
                className="w-20 mx-auto pb-5"
                alt="Collaborative"
              />
              <span className="text-justify text-[16px] text-grey-600">
                Promotions that appear professional
              </span>
            </div>

            {/* Box 3 */}
            <div className="w-full text-center m-2">
              <img
                src={ilustration.ilusAbout3}
                className="w-20 mx-auto pb-5"
                alt="Support 24/7"
              />
              <span className="text-justify text-[16px] text-grey-600">
                Prospective customers are free to choose product variants
              </span>
            </div>

            {/* Box 3 */}
            <div className="w-full text-center m-2">
              <img
                src={ilustration.ilusAbout3}
                className="w-20 mx-auto pb-5"
                alt="Support 24/7"
              />
              <span className="text-justify text-[16px] text-grey-600">
                Store and seller reputation
              </span>
            </div>
          </div>
        </div>

        <div className="container mx-auto mt-15 mb-10 bg-white">
          <h3 className="text-[24px] md:text-[36px] font-bold text-center text-black pb-3 pt-2">
            Professional WordPress Web Design
            <br className="hidden md:inline" />
            &nbsp;The Best Digital Solution for Your Business
          </h3>
          <h5 className="text-[16px] md:text-[18px] text-center">
            Secure and flexible WordPress web design solutions, reflecting your{" "}
            <br className="hidden md:inline" />
            &nbsp; brand identity. Every project is a work of art designed for
            real results.
          </h5>
        </div>
        <section className="features-section container mx-auto  lg:px-35 bg-white">
          <div className="mb-20  grid grid-cols-1 gap-6 sm:grid-cols-3  lg:grid-cols-3 ">
            <img
              src={solutionWordpress.webpres1}
              className="shadow-lg rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
              alt="Desain website Pakar Belia Islamic Boarding School - zerone.id"
            />
            <img
              src={solutionWordpress.webpres2}
              className="shadow-lg rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
              alt="Desain website HIBISCUS Internasional School - zerone.id"
            />
            <img
              src={solutionWordpress.webpres3}
              className="shadow-lg rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
              alt="Berbagai desain website Kompetisi - zerone.id"
            />
            <img
              src={solutionWordpress.webpres4}
              className="shadow-lg rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
              alt="Desain website Kesatuan Bangsa School - zerone.id"
            />
            <img
              src={solutionWordpress.webpres5}
              className="shadow-lg rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
              alt="Desain website edunav.net - zerone.id"
            />
            <img
              src={solutionWordpress.webpres6}
              className="shadow-lg rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
              alt="Desain website Semesta School - zerone.id"
            />
          </div>
        </section>
      </div>
    </>
  );
}
