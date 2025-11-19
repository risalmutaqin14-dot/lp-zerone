import { banner, ilustration } from "../data";

export default function EduNav() {
  return (
    <>
      <div className="webApp pt-20 lg:pt-5">
        <div className="product-banner mt-35 container mx-auto lg:max-w-6xl">
          <img className="rounded-[20px]" src={banner.edunav} alt="edunav" />
        </div>
        <div className="container mx-auto px-5">
          <h3 className="text-[24px] mt-20 md:text-2xl lg:text-4xl font-bold text-Black text-center pt-10  mb-6">
            The Most Advanced and Complete
            <br className="hidden md:inline" />
            School Information System Suitable
            <br className="hidden md:inline" />
            for Your School.
          </h3>
        </div>

        <div className="container mx-auto mt-0 lg:px-30 lg:mt-10">
          <div
            className="mt-10 p-[30px] grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 bg-no-repeat bg-cover rounded-[20px] pt-0 pb-10 lg:py-20"
            
          >
            {/* Box 1 */}
            <div className="w-full text-center m-2">
              <img
                src={ilustration.ilusEdunav1}
                className="w-20 mx-auto pb-5"
                alt="Customer Oriented"
              />
              
              <span className="text-justify text-[16px] text-grey-600">
                Efficiency is the key to ease of teaching. Edunav provides that for teachers.
              </span>
            </div>

            {/* Box 2 */}
            <div className="w-full text-center m-2">
              <img
                src={ilustration.ilusEdunav2}
                className="w-20 mx-auto pb-5"
                alt="Collaborative"
              />
              
              <span className="text-justify text-[16px] text-grey-600">
                No more hassle, support and monitor the details of your child's studies through Edunav.
              </span>
            </div>

            {/* Box 3 */}
            <div className="w-full text-center m-2">
              <img
                src={ilustration.ilusEdunav3}
                className="w-20 mx-auto pb-5"
                alt="Support 24/7"
              />
              
              <span className="text-justify text-[16px] text-grey-600">
                Enjoy every learning process with Edunav, a school information system that makes the atmosphere at your school memorable.


              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
