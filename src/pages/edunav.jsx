import { banner, ilustration } from "../data";

export default function EduNav() {
  return (
    <>
      <div className="webApp pt-20 lg:pt-5">
        <div className="product-banner mt-35 container mx-auto lg:max-w-6xl ">
          <img src={banner.venti} alt="" />
        </div>
        <div className="container mx-auto px-5">
          <h3 className="text-[30px] mt-20 sm:text-3xl lg:text-4xl font-bold text-Black text-center pt-10  mb-6">
            The Most Advanced and Complete
            <br className="hidden md:inline" />
            School Information System Suitable
            <br className="hidden md:inline" />
            for Your School.
          </h3>
        </div>

        <div className="container mx-auto  lg:px-30 lg:mt-10">
          <div
            className="mt-10 p-[30px] grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 bg-no-repeat bg-cover rounded-[20px] py-20"
            
          >
            {/* Box 1 */}
            <div className="w-full text-center m-2">
              <img
                src={ilustration.ilusAbout1}
                className="w-20 mx-auto pb-5"
                alt="Customer Oriented"
              />
              <h3 className="text-[20px] font-semibold text-black ">
                Customer Oriented
              </h3>
              <span className="text-justify text-[16px] text-grey-600">
                Clients speak up about their wishes, We make it happen.
              </span>
            </div>

            {/* Box 2 */}
            <div className="w-full text-center m-2">
              <img
                src={ilustration.ilusAbout2}
                className="w-20 mx-auto pb-5"
                alt="Collaborative"
              />
              <h3 className="text-[20px] font-semibold text-black">
                Collaborative
              </h3>
              <span className="text-justify text-[16px] text-grey-600">
                Our team works collaboratively with clients and expertise to
                deliver high-quality software solutions.
              </span>
            </div>

            {/* Box 3 */}
            <div className="w-full text-center m-2">
              <img
                src={ilustration.ilusAbout3}
                className="w-20 mx-auto pb-5"
                alt="Support 24/7"
              />
              <h3 className="text-[20px] font-semibold text-black">
                Support 24/7
              </h3>
              <span className="text-justify text-[16px] text-grey-600">
                Ideas fly fast, so that’s why we do not limit the discussion
                space. Whenever you need us, we are always on hand.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
