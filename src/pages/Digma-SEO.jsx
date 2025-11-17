import { mockup } from "../data";

export default function DigmaSEO() {
  return (
    <>
      <div className="webApp pt-15 lg:pt-5">
        {/* deskripsi zerone */}
        <div className="container mx-auto pt-[80px] lg:px-30 px-5 lg:mt-20 grid grid-cols-1 gap-4 sm:grid-cols-2  lg:grid-cols-2">
          <div className="pr-6">
            <h3 className="text-[24px] md:text-[36px] font-bold text-black mb-6 pt-2">
              Digital Marketing
              <br /> and SEO
            </h3>
            <span className="text-justify text-[18px] md:text-[24px] ">
              Fast-Growing Business Tactics: Digital Marketing and SEO
            </span>
            <br /> <br />
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
          </div>
          <div>
            <img
              src=""
              alt="Digital Mareting & SEO"
              className="w-300 pt-10 lg:pt-0 lg:pl-35 md:pl-20"
            />
          </div>
        </div>
        <div className="container mx-auto px-5">
          <h3 className=" text-center text-[16px] lg:text-[20px] lg:mt-20 mt-10 ">
            “It is not the job of Search Engine Optimization to make a pig fly.
            It is the job of the SEO to <br></br>genetically re-engineer the web site so
            that it becomes an eagle.”
          </h3>
          <h3 className=" text-[16px] lg:text-[20px] font-bold itaic text-center pb-10">
            Bruce Clay
          </h3>
        </div>
      </div>
    </>
  );
}
