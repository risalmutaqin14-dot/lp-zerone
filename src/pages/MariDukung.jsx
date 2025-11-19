import { banner, ilustration } from "../data";

export default function MariDukung() {
  return (
    <>
      <div className="webApp pt-20 lg:pt-5">
        <div className="product-banner mt-35 container mx-auto lg:max-w-6xl ">
          <img className="rounded-[20px]" src={banner.maridukung} alt="Mari Dukung Banner" />
        </div>
        <div className="container mx-auto px-5">
          <h3 className="text-[30px] mt-20 sm:text-3xl lg:text-4xl font-bold text-Black text-center pt-10  mb-6">
            Empowering Change with Easy and Secure 
            <br className="hidden md:inline" />
            Fundraising and Donation Solutions
          </h3>
        </div>

        <div className="container mx-auto  lg:px-30 lg:mt-10">
          <div
            className="mt-10 p-[30px] grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 bg-no-repeat bg-cover rounded-[20px] py-20"
            
          >
            {/* Box 1 */}
            <div className="w-full text-center m-2">
              <img
                src={ilustration.ilusmaridukung1}
                className="w-20 mx-auto pb-5"
                alt="Customer Oriented"
              />
              <span className="text-justify text-[20px] text-grey-600">
                Donation
              </span>
            </div>

            {/* Box 2 */}
            <div className="w-full text-center m-2">
              <img
                src={ilustration.ilusmaridukung2}
                className="w-20 mx-auto pb-5"
                alt="Collaborative"
              />
              <span className="text-justify text-[20px] text-grey-600">
                Fundraising
              </span>
            </div>

            {/* Box 3 */}
            <div className="w-full text-center m-2">
              <img
                src={ilustration.ilusmaridukung3}
                className="w-20 mx-auto pb-5"
                alt="Support 24/7"
              />
              <span className="text-justify text-[20px] text-grey-600">
                Assistance
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
