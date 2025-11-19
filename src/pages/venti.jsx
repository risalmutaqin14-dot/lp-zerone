import { banner, ilustration } from "../data";

export default function Venti() {
  return (
    <>
      <div className="webApp pt-20 lg:pt-5">
        <div className="product-banner mt-35 container mx-auto lg:max-w-6xl ">
          <img className="rounded-[20px]" src={banner.venti} alt="venti banner" />
        </div>
        <div className="container mx-auto px-5">
          <h3 className="text-[30px] mt-20 sm:text-3xl lg:text-4xl font-bold text-Black text-center pt-10  mb-6">
            The Most Efficient and Comprehensive 
            <br className="hidden md:inline" />
            Event Management & Ticketing Solution for Seamless Experiences
            <br className="hidden md:inline" />
            Solution for Seamless Experiences
          </h3>
        </div>

        <div className="container mx-auto  lg:px-30 lg:mt-10">
          <div
            className="mt-10 p-[30px] grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 bg-no-repeat bg-cover rounded-[20px] py-20"
            
          >
            {/* Box 1 */}
            <div className="w-full text-center m-2">
              <img
                src={ilustration.ilusventi1}
                className="w-20 mx-auto pb-5"
                alt="Customer Oriented"
              />
              <span className="text-justify text-[20px] text-grey-600">
                Complete Event Management Solutions
              </span>
            </div>

            {/* Box 2 */}
            <div className="w-full text-center m-2">
              <img
                src={ilustration.ilusventi2}
                className="w-20 mx-auto pb-5"
                alt="Collaborative"
              />
              <span className="text-justify text-[20px] text-grey-600">
                One Platform for Every Event
              </span>
            </div>

            {/* Box 3 */}
            <div className="w-full text-center m-2">
              <img
                src={ilustration.ilusventi3}
                className="w-20 mx-auto pb-5"
                alt="Support 24/7"
              />
              <span className="text-justify text-[20px] text-grey-600">
                Seamless Ticketing and Registration System
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
