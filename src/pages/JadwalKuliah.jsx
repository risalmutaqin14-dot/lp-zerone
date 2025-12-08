import { banner, ilustration } from "../data";
import { Helmet } from "react-helmet-async";


export default function JadwalKuliah() {
  return (
    <>
      <div className="webApp pt-20 lg:pt-5 bg-white">
         <Helmet>
        <title>JadwalKuliah | Smart College Schedule Management</title>
        <meta
          name="description"
          content="JadwalKuliah adalah platform manajemen jadwal kuliah digital yang membantu mahasiswa mengatur jadwal akademik dengan mudah. Dilengkapi fitur notifikasi real-time, pencarian fleksibel, dan profil pengguna untuk pengalaman belajar yang lebih efisien."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.zerone.id/jadwalkuliah" />

        {/* Open Graph */}
        <meta property="og:title" content="JadwalKuliah | Smart College Schedule Management" />
        <meta
          property="og:description"
          content="Platform JadwalKuliah membantu mahasiswa mengatur jadwal akademik dengan notifikasi real-time, pencarian fleksibel, dan profil pengguna."
        />
        <meta property="og:url" content="https://www.zerone.id/jadwalkuliah" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.zerone.id/assets/meta-image-zerone.webp" />
      </Helmet>


        <div className="product-banner mt-26 container mx-auto lg:max-w-6xl hidden sm:block shadow-lg rounded-[20px]">
          <img className="rounded-[20px]" src={banner.jadwalkuliah} alt="Jadwal Kuliah Banner" />
        </div>
        <div className="product-banner mt-2 container mx-auto md:hidden max-w-[370px] drop-shadow-xl">
          <img className="rounded-[20px] mx-auto" src={banner.mobilejadwalkuliah} alt="Jadwal Kuliah" />
        </div>


        {/* button request demo */}
        <div className="flex justify-center mt-20">
          <div className="shadow-lg rounded-[50px] transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer w-[210px] ">
            <a
              href="https://jadwalkuliah.id/"
              className="download flex items-center border-2 bg-[linear-gradient(90deg,#1c76d2,#3498db)] border-[#00A9E8] rounded-[50px] px-3 py-3"
            >
              <span className="button-icon flex items-center bg-[#00A9E8] rounded-full p-1 mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#FFFFFF"
                >
                  <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
                </svg>
              </span>
              <span className="text-white pl-3 font-medium">Start Free Trial</span>
            </a>
          </div>
        </div>
        


        <div className="container mx-auto px-5 motion-safe:animate-slideUp">
          <h1 className="text-lg lg:text-xl text-gray-600 mb-4">
              Our Product
            </h1>
          <h2 className="text-[24px] my-10 lg:pt-[110px] md:my-10 sm:text-3xl lg:text-4xl font-bold text-Black text-center">
            Simplify Your College Life with Smart 
            <br className="hidden md:inline" />
            Schedule Management and Academic Tools
          </h2>
        </div>

        <div className="container mx-auto  lg:px-30 lg:mt-10">
          <div
            className="my-10 px-3 px-[20px]  md:px-[100px] lg:px-[190px] grid grid-cols-3 gap-4 md:grid-cols-3 lg:grid-cols-3 bg-no-repeat bg-cover rounded-[20px]  "
            
          >
            {/* Box 1 */}
            <div className="shadow-lg w-full text-center m-2 p-5 rounded-[15px] bg-[#F5F9FF] rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
              <img
                src={ilustration.ilusjadwalkuliah1}
                className="w-20 mx-auto pb-5"
              />
              <span className="text-justify text-[18px] md:text-[20px] text-grey-600">
                Real-Time Notifications
              </span>
            </div>

            {/* Box 2 */}
            <div className="shadow-lg w-full text-center m-2 p-5 rounded-[15px] bg-[#F5F9FF] rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
              <img
                src={ilustration.ilusjadwalkuliah2}
                className="w-20 mx-auto pb-5"
              />
              <span className="text-justify text-[18px] md:text-[20px] text-grey-600">
                Flexible Search Feature
              </span>
            </div>

            {/* Box 3 */}
            <div className="shadow-lg w-full text-center m-2 p-5 rounded-[15px] bg-[#F5F9FF] rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
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
