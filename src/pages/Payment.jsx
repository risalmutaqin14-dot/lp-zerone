import { mockup, solutionpayment } from "../data";
import { Helmet } from "react-helmet-async";

export default function Payment() {
  return (
    <>
      <div className="webApp pt-16 lg:pt-5 bg-white">
        <Helmet>
          <title>
            Payment Gateway Integration | Zerone Global Digital Solution
          </title>
          <meta
            name="description"
            content="Zerone Global provides Payment Gateway Integration services to streamline online transactions. Our solutions connect buyers and sellers with secure, fast, and integrated payment systems."
          />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://www.zerone.id/payment-gateway" />

          {/* Open Graph */}
          <meta
            property="og:title"
            content="Payment Gateway Integration | Zerone Global Digital Solution"
          />
          <meta
            property="og:description"
            content="Zerone Global Payment Gateway solutions make it easy for businesses to provide secure and integrated online payment systems."
          />
          <meta
            property="og:url"
            content="https://www.zerone.id/payment-gateway"
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
              Payment Gateway
              <br /> Integration
            </h1>
            <h2 className="md:text-justify text-[18px] md:text-[24px] ">
              Extra Simple Payment System
            </h2>
            <br />
            <p className="[text-align:justify]">
              Payment Gateway Integration is a third-party payment method that
              connects buyers and sellers on a single platform. Buyers do not
              need to leave the purchase page. The page provides easily
              accessible payment options that are integrated with various
              systems.
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
              src={mockup.payment}
              alt="Secure Payment Gateway Integration System Mockup by Zerone Global"
              className="hidden lg:block w-full max-w-[500px] pt-10 lg:pt-0 lg:pl-32 md:pl-20 relative lg:left-[-80px]"
            />
          </div>
        </div>

        <div className="container mx-auto px-5">
          <h3 className=" text-center text-[16px] lg:text-[20px] lg:mt-20 mt-10 ">
            Confused about how to make payments that are directly connected to
            the system? Payment Gateway is the answer.
          </h3>
          {/* TYPO FIX: itaic -> italic */}
          <h3 className=" text-[16px] lg:text-[20px] font-bold italic text-center pb-10">
            Tell us your needs, and Zerone will make them happen, exactly as you
            want.
          </h3>
        </div>

        <section className="features-section container mx-auto lg:px-32 bg-white">
          <div className="pb-20 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-3">
            <img
              src={solutionpayment.payment1}
              className="shadow-lg rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
              alt="Secure Online Payment Processing Interface - Zerone Global"
            />
            <img
              src={solutionpayment.payment2}
              className="shadow-lg rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
              alt="Mobile Banking and E-wallet Integration - Zerone Global"
            />
            <img
              src={solutionpayment.payment3}
              className="shadow-lg rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
              alt="Real-time Transaction Monitoring Dashboard - Zerone Global"
            />
          </div>
        </section>
      </div>
    </>
  );
}