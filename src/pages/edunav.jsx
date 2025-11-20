import { banner, ilustration } from "../data";

export default function EduNav() {
  return (
    <>
      <div className="webApp pt-20 lg:pt-5">
        <div className="product-banner mt-26 container mx-auto lg:max-w-6xl hidden sm:block">
          <img className="rounded-[20px]" src={banner.edunav} alt="edunav" />
        </div>
        <div className="product-banner mt-1 container mx-auto lg:hidden max-w-[370px] drop-shadow-xl">
          <img className="rounded-[20px] container mx-auto " src={banner.mobileedunav} alt="edunav" />
        </div>
        <div className="container mx-auto px-5">
          <h3 className="text-[24px] my-10 md:my-15 sm:text-3xl lg:text-4xl font-bold text-Black text-center">
            The Most Advanced and Complete
            <br className="hidden md:inline" />&nbsp;
            School Information System Suitable
            <br className="hidden md:inline" />&nbsp;
            for Your School.
          </h3>
        </div>

        <div className="container mx-auto mt-0 lg:px-30 lg:mt-10">
          <div
            className="my-10 px-3 md:px-[250px] grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 bg-no-repeat bg-cover rounded-[20px] "
            
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
