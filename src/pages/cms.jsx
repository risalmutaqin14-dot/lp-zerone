import { mockup } from "../data";

export default function CMS() {
  return (
    <>
      <div className="webApp pt-15 lg:pt-5">
        {/* deskripsi zerone */}
        <div className="container mx-auto pt-[80px] lg:px-30 px-5 lg:mt-20 grid grid-cols-1 gap-4 sm:grid-cols-2  lg:grid-cols-2">
          <div className="pr-6">
            <h3 className="text-[24px] md:text-[36px] font-bold text-black mb-6 pt-2">
              Content Management
              <br />
              System (CMS)
            </h3>
            <span className="text-justify text-[18px] md:text-[24px] ">
              CMS Solutions That Put You in Control
            </span>
            <br /> <br />
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
          </div>
          <div>
            <img
              src=""
              alt="CMS development"
              className="w-300 pt-10 lg:pt-0 lg:pl-35 md:pl-20"
            />
          </div>
        </div>
        <div className="container mx-auto px-5">
          <h3 className=" text-center text-[16px] lg:text-[20px] lg:mt-20 mt-10 ">
            “Content builds relationships. Relationships are built on trust. Trust drives revenue.”
          </h3>
          <h3 className=" text-[16px] lg:text-[20px] font-bold itaic text-center pb-10">
            Andrew Davis
          </h3>
        </div>
      </div>
    </>
  );
}
