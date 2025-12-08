import { logos, heroImage, ilustration, ourteam, whychoose } from "../data";
import "../css/About.css";
import { Helmet } from "react-helmet-async";


export default function About() {
  return (
    <>
      <Helmet>
        <title>About Zerone Global | Solusi Digital Aman & Skalabel</title>
        <meta
          name="description"
          content="Kenali Zerone Global, mitra solusi digital pendidikan & bisnis di Asia Tenggara. Hadirkan inovasi dengan software engineering berkualitas tinggi"
        />

        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.zerone.id/about" />

        <meta property="og:title" content="About Zerone Global | Solusi Digital Aman & Skalabel" />
        <meta
          property="og:description"
          content="Zerone Global adalah mitra digital terpercaya untuk sekolah, organisasi, komunitas, institusi dan perusahaan di Asia Tenggara."
        />
        <meta property="og:url" content="https://www.zerone.id/about" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.zerone.id/assets/meta-image-zerone.webp" />
      </Helmet>


      <div className="about-page bg-white pt-30">
        {/* deskripsi zerone */}
        <div className="bg-white">
          <section className="features-section container mx-auto  lg:px-35 p-8 bg-white pt-20">
            <div className="container mx-auto flex flex-col lg:flex-row items-start justify-between space-y-8 lg:space-y-0">
              <div className=" lg:w-1/3">
                <h2 className="text-[24px] text-left  text-gray-600 mb-1">
                  About Us
                </h2>
                <h1 className="text-[36px] font-bold text-gray-600 mb-6">
                  Zerone Gobal <br />
                  Digital Solution
                </h1>
              </div>

              <h4 className="lg:w-2/3 text-left  text-gray-500">
                <div>
                  <p className="[text-align:justify] text-[18px]">
                    Zerone is a digital solution company focused on helping and
                    ensuring business entities grow and accelerate their
                    potential by using a high-quality software engineering
                    method. We help companies from various backgrounds,
                    especially educational service companies, schools, and
                    project managers to utilize technology usage and accelerate
                    their growth.
                  </p>

                  <p className="[text-align:justify] text-[18px] ">
                    Founded in 2021 by education technologies and developers,
                    zerone.id has solid and creative team members that have
                    proven to deliver high-quality software applications to
                    maximize the goals of a product or project. We focus on
                    providing high-edge software products, mainly for
                    educational purposes, and also on helping companies to
                    digitize their ideas or services.
                  </p>
                </div>
              </h4>
            </div>
          </section>
        </div>

        <div className="container mx-auto grid lg:grid-cols-2 lg:px-35 p-8 bg-white pt-20 ">
          {/* Kolom 2: Gambar */}
          <div className="flex items-center justify-left mt-[50px] md:mt-0">
            <img
              className="w-[450px] max-w-full"
              src={whychoose.whychooseus}
              alt="kenapa harus memilih kami sebagai solusi kebuthan anda?"
            />
          </div>
          {/* Kolom 1: Vision & Mission */}
          <div>
            <div className="vision shadow-xl rounded-[20px] p-10 shadow-lg rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
              <h3 className="text-[30px] font-bold text-Black mb-4 text-gray-600">
                Our Vision
              </h3>
              <ul>
                <li className="[text-align:justify] text-[18px]">
                  To become the most trusted digital partner for education{" "}
                  &nbsp;
                  <br className="hidden md:inline" />
                  and community innovation in Southeast Asia.
                </li>
              </ul>
            </div>
            <br />
            <div className="mission shadow-xl rounded-[20px] p-10 shadow-lg rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
              <h3 className="text-[30px] font-bold text-Black mb-4 text-gray-600">
                Our Mission
              </h3>
              <ul className="custom-list list-disc list-inside">
                <li className="[text-align:justify] text-[18px]">
                  Simplify digital transformation for schools & institutions
                </li>
                <li className="[text-align:justify] text-[18px]">
                  Empower learning with modern, integrated platforms
                </li>
                <li className="[text-align:justify] text-[18px]">
                  Enable efficient community engagement and event management
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section  core values*/}

        <div className="container mx-auto  lg:px-30 lg:mt-10">
          <div
            className="mt-10 p-[30px] grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 bg-no-repeat bg-cover rounded-[20px] py-20"
            style={{
              backgroundImage: `url(${heroImage.bgHorizontal})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Box 1 */}
            <div className="w-full text-center m-2 px-15">
              <img
                src={ilustration.ilusAbout1}
                className="w-20 mx-auto pb-5"
                alt="Customer Oriented"
                loading="lazy"
              />
              <h3 className="text-[20px] font-semibold text-white">
                Customer Oriented
              </h3>
              <span className="text-justify text-[16px] text-white">
                Clients speak up about their wishes, We make it happen.
              </span>
            </div>

            {/* Box 2 */}
            <div className="w-full text-center m-2 px-15">
              <img
                src={ilustration.ilusAbout2}
                className="w-20 mx-auto pb-5"
                alt="Collaborative"
                loading="lazy"
              />
              <h3 className="text-[20px] font-semibold text-white">
                Collaborative
              </h3>
              <span className="text-justify text-[16px] text-white">
                Our team works collaboratively with clients and expertise to
                deliver high-quality software solutions.
              </span>
            </div>

            {/* Box 3 */}
            <div className="w-full text-center m-2 px-15">
              <img
                src={ilustration.ilusAbout3}
                className="w-20 mx-auto pb-5"
                alt="Support 24/7"
                loading="lazy"
              />
              <h3 className="text-[20px] font-semibold text-white">
                Support 24/7
              </h3>
              <span className="text-justify text-[16px] text-white">
                Ideas fly fast, so that’s why we do not limit the discussion
                space. Whenever you need us, we are always on hand.
              </span>
            </div>
          </div>
        </div>

        {/* Section  Our Team*/}
        <div className="container mx-auto lg:px-30 px-5 lg:mt-20 mb-20">
          <div className="text-center mb-20">
                <h3 className="text-[24px]   text-gray-600 mb-1">
                  Our Team
                </h3>
                <h2 className="text-[36px] font-bold text-gray-600 mb-6">
                  Zerone Global Digital Solution <br />
                  Experts Behind Your Project Success
                </h2>
              </div>
          
          <div className=" mt-5 grid grid-cols-2 gap-5 sm:grid-cols-4  lg:grid-cols-4">
            <img src={ourteam.team1} loading="lazy" alt="diector - Zerone Digital Solution" />
            <img src={ourteam.team2} loading="lazy" alt="software enginer 1 - Zerone Digital Solution Expert Team" />
            <img src={ourteam.team3} loading="lazy" alt="software enginer 2 - Zerone Digital Solution Expert Team" />
            <img src={ourteam.team4} loading="lazy" alt="software enginer 3 - Zerone Digital Solution Expert Team" />
            <img src={ourteam.team5} loading="lazy" alt="software enginer 4 - Zerone Digital Solution Expert Team" />
            <img src={ourteam.team6} loading="lazy" alt="software enginer 5 - Zerone Digital Solution Expert Team" />
            <img src={ourteam.team7} loading="lazy" alt="software enginer 6 - Zerone Digital Solution Expert Team" />
            <img src={ourteam.team8} loading="lazy" alt="Website Desain - Zerone Digital Solution Expert Team" />
            <img src={ourteam.team9} loading="lazy" alt="UIUX desain - Zerone Digital Solution Expert Team" />
            <img src={ourteam.team10} loading="lazy" alt="graphic desain & vidio editor - Zerone Digital Solution Expert Team" />
            <img src={ourteam.team11} loading="lazy" alt="digital marketing - Zerone Digital Solution Expert Team" />
          </div>
        </div>
      </div>
    </>
  );
}
