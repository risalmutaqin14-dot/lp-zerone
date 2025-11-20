import { banner, ilustration } from "../data";

export default function JadwalKuliah() {
  return (
    <>
      <div className="webApp pt-20 lg:pt-5">
        <div className="product-banner mt-26 container mx-auto lg:max-w-6xl hidden sm:block">
          <img className="rounded-[20px]" src={banner.jadwalkuliah} alt="Jadwal Kuliah Banner" />
        </div>
        <div className="product-banner mt-2 container mx-auto lg:hidden max-w-[370px] drop-shadow-xl">
          <img className="rounded-[20px] mx-auto" src={banner.mobilejadwalkuliah} alt="Jadwal Kuliah" />
        </div>
        <div className="container mx-auto px-5 motion-safe:animate-slideUp">
          <h3 className="text-[24px] my-10 lg:pt-[110px] md:my-15 sm:text-3xl lg:text-4xl font-bold text-Black text-center">
            Simplify Your College Life with Smart 
            <br className="hidden md:inline" />
           <span className=""> Schedule Management and Academic Tools</span>
          </h3>
        </div>

        <div className="container mx-auto  lg:px-30 lg:mt-10">
          <div
            className="my-10 px-3 md:px-[250px] grid grid-cols-3 gap-4 sm:grid-cols-2 lg:grid-cols-3 bg-no-repeat bg-cover rounded-[20px] "
            
          >
            {/* Box 1 */}
            <div className="w-full text-center m-2">
              <img
                src={ilustration.ilusjadwalkuliah1}
                className="w-20 mx-auto pb-5"
              />
              <span className="text-justify text-[18px] md:text-[20px] text-grey-600">
                Real-Time Notifications
              </span>
            </div>

            {/* Box 2 */}
            <div className="w-full text-center m-2">
              <img
                src={ilustration.ilusjadwalkuliah2}
                className="w-20 mx-auto pb-5"
              />
              <span className="text-justify text-[18px] md:text-[20px] text-grey-600">
                Flexible Search Feature
              </span>
            </div>

            {/* Box 3 */}
            <div className="w-full text-center m-2">
              <img
                src={ilustration.ilusjadwalkuliah3}
                className="w-20 mx-auto pb-5"
              />
              <span className="text-justify text-[18px] md:text-[20px] text-grey-600">
                User Profile
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
