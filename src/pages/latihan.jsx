import { banner, ilustration } from "../data";

export default function Latihan() {
  return (
    <>
      <div className="webApp pt-20 lg:pt-5">
        <div className="product-banner mt-26 container mx-auto lg:max-w-6xl hidden sm:block">
          <img className="rounded-[20px]" src={banner.latihan} alt="Latihan.id Banner" />
        </div>
        <div className="product-banner mt-2 container mx-auto lg:hidden max-w-[370px] drop-shadow-xl">
          <img className="rounded-[20px] mx-auto" src={banner.mobilelatihan} alt="latihan.id" />
        </div>
        <div className="container mx-auto px-5">
          <h3 className="text-[24px] my-10 md:my-15 sm:text-3xl lg:text-4xl font-bold text-Black text-center">
            The Most Secure and Reliable Exam Platform 
            <br className="hidden md:inline" />&nbsp;
            for a Seamless and Fair Testing Experience
          </h3>
        </div>

        <div className="container mx-auto  lg:px-30 lg:mt-10">
          <div
            className="my-10 px-3 md:px-[250px] grid grid-cols-3 gap-4 sm:grid-cols-2 lg:grid-cols-3 bg-no-repeat bg-cover rounded-[20px] "
            
          >
            {/* Box 1 */}
            <div className="w-full text-center m-2">
              <img
                src={ilustration.iluslatihan1}
                className="w-20 mx-auto pb-5"
                alt="Customer Oriented"
              />
              <span className="text-justify text-[16px] md:text-[20px] text-grey-600">
                Flexible and Efficient Online Exams
              </span>
            </div>

            {/* Box 2 */}
            <div className="w-full text-center m-2">
              <img
                src={ilustration.iluslatihan2}
                className="w-20 mx-auto pb-5"
                alt="Collaborative"
              />
              <span className="text-justify text-[16px] md:text-[20px] text-grey-600">
                Secure and Trusted Online Exam System
              </span>
            </div>

            {/* Box 3 */}
            <div className="w-full text-center m-2">
              <img
                src={ilustration.iluslatihan3}
                className="w-20 mx-auto pb-5"
                alt="Support 24/7"
              />
              <span className="text-justify text-[16px] md:text-[20px] text-grey-600">
                Easy-to-Use Interface
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
