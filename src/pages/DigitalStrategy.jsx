import { mockup } from "../data";

export default function DigitalStrategy() {
  return (
    <>
      <div className="webApp pt-15 lg:pt-5">
        {/* deskripsi zerone */}
        <div className="container mx-auto pt-[80px] lg:px-30 px-5 lg:mt-20 grid grid-cols-1 gap-4 sm:grid-cols-2  lg:grid-cols-2">
          <div className="pr-6">
            <h3 className="text-[24px] md:text-[36px] font-bold text-black mb-6 pt-2">
              Digital Strategy
              <br /> Consulting
            </h3>
            <span className="text-justify text-[18px] md:text-[24px] ">
              The King of Modern Business: Digitalization
            </span>
            <br /> <br />
            <p className="[text-align:justify]">
              The term digital or digitization appears almost everywhere. In the
              business sector, government, education, and even tourism use this
              term. It relates to products, methods, or even just information.
              But what does this term actually mean? Simply put, digital or
              digitization is the application of computerized systems to the way
              we work, produce, and even use goods or services.
            </p>
          </div>
          <div>
            <img
              src=""
              alt="Digital Strategy Consulting"
              className="w-300 pt-10 lg:pt-0 lg:pl-35 md:pl-20"
            />
          </div>
        </div>
        <div className="container mx-auto px-5">
          <h3 className=" text-center text-[16px] lg:text-[20px] lg:mt-20 mt-10 ">
            Digitalization can bring sellers and buyers together in a more
            effective way. This is because <br />both parties are in the same system.
          </h3>
          <h3 className=" text-[16px] lg:text-[20px] font-bold itaic text-center pb-10">
            Consult and tell us your needs only with Zerone!
          </h3>
        </div>
      </div>
    </>
  );
}
