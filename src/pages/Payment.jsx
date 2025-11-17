import { mockup } from "../data";

export default function Payment() {
  return (
    <>
      <div className="webApp pt-15 lg:pt-5">
        {/* deskripsi zerone */}
        <div className="container mx-auto pt-[80px] lg:px-30 px-5 lg:mt-20 grid grid-cols-1 gap-4 sm:grid-cols-2  lg:grid-cols-2">
          <div className="pr-6">
            <h3 className="text-[24px] md:text-[36px] font-bold text-black mb-6 pt-2">
              Payment Gateway
              <br /> Integration
            </h3>
            <span className="text-justify text-[18px] md:text-[24px] ">
              Extra Simple Payment System
            </span>
            <br /> <br />
            <p className="[text-align:justify]">
              Payment Gateway Integration is a third-party payment method that
              connects buyers and sellers on a single platform. Buyers do not
              need to leave the purchase page. The page provides easily
              accessible payment options that are integrated with various
              systems.
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
            Confused about how to make payments that are directly connected to
            the system? Payment Gateway is the answer.
          </h3>
          <h3 className=" text-[16px] lg:text-[20px] font-bold itaic text-center pb-10">
            Tell us your needs, and Zerone will make them happen, exactly as you want.
          </h3>
        </div>
      </div>
    </>
  );
}
