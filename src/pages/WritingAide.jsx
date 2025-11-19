import { banner, ilustration } from "../data";

export default function WritingAide() {
  return (
    <>
      <div className="webApp pt-20 lg:pt-5">
        <div className="product-banner mt-35 container mx-auto lg:max-w-6xl ">
          <img className="rounded-[20px]" src={banner.writingaide} alt="Writing-Aide Banner" />
        </div>
        <div className="container mx-auto px-5">
          <h3 className="text-[30px] mt-20 sm:text-3xl lg:text-4xl font-bold text-Black text-center pt-10  mb-6">
            Boost Your Test Scores with AI-Powered 
            <br className="hidden md:inline" />
            Writing Assistance for TOEFL and IELTS Success
          </h3>
        </div>

        <div className="container mx-auto  lg:px-30 lg:mt-10">
          <div
            className="mt-10 p-[30px] grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 bg-no-repeat bg-cover rounded-[20px] py-20"
            
          >
            {/* Box 1 */}
            <div className="w-full text-center m-2">
              <img
                src={ilustration.iluswriting1}
                className="w-20 mx-auto pb-5"
                alt="Customer Oriented"
              />
              <span className="text-justify text-[16px] text-grey-600">
                TOEFL
              </span>
            </div>

            {/* Box 2 */}
            <div className="w-full text-center m-2">
              <img
                src={ilustration.iluswriting2}
                className="w-20 mx-auto pb-5"
                alt="Collaborative"
              />
              <span className="text-justify text-[16px] text-grey-600">
                IELTS
              </span>
            </div>

            {/* Box 3 */}
            <div className="w-full text-center m-2">
              <img
                src={ilustration.iluswriting3}
                className="w-20 mx-auto pb-5"
                alt="Support 24/7"
              />
              <span className="text-justify text-[16px] text-grey-600">
                GCSE
              </span>
            </div>

            {/* Box 4 */}
            <div className="w-full text-center m-2">
              <img
                src={ilustration.iluswriting4}
                className="w-20 mx-auto pb-5"
                alt="Support 24/7"
              />
              <span className="text-justify text-[16px] text-grey-600">
                Custom Test
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
