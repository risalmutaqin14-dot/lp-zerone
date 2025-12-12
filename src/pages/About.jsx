import { logos, heroImage, ilustration, ourteam, whychoose } from "../data";
import "../css/About.css";
import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Zerone Global | Secure & Scalable Digital Solutions</title>
        
        <meta
          name="description"
          content="Discover Zerone Global, your trusted digital transformation partner in Southeast Asia. We deliver innovation through high-quality software engineering for education and business."
        />
        <meta name="keywords" content="Software House Indonesia, Digital Transformation, Education Technology, Web Development, Mobile App Development, Zerone Global" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.zerone.id/about" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="About Zerone Global | Secure & Scalable Digital Solutions"
        />
        <meta
          property="og:description"
          content="Zerone Global is the trusted digital partner for schools, organizations, and companies in Southeast Asia. We accelerate growth through technology."
        />
        <meta property="og:url" content="https://www.zerone.id/about" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.zerone.id/assets/meta-image-zerone.webp"
        />
      </Helmet>

      <div className="about-page bg-white pt-15 md:pt-40">
        {/* Deskripsi Zerone */}
        <div className="bg-white">
          <section className="features-section container mx-auto lg:px-35 px-8 bg-white">
            <div className="container mx-auto flex flex-col lg:flex-row items-start justify-between md:space-y-8 lg:space-y-0 px-6">
              <div className="lg:w-1/3">
                <span className="block md:text-[24px] text-left text-gray-600 mb-2 font-semibold">
                  About Us
                </span>
                <h1 className="text-[24px] md:text-[36px] font-bold text-gray-600 mb-3 md:mb-6">
                  Zerone Global <br />
                  Digital Solution
                </h1>
              </div>

              <div className="lg:w-2/3 text-left text-gray-500">
                <p className="[text-align:justify] md:text-[18px] mb-4">
                  Zerone is a digital solution company focused on helping and
                  ensuring business entities grow and accelerate their potential
                  by using a high-quality software engineering method. We help
                  companies from various backgrounds, especially educational
                  service companies, schools, and project managers to utilize
                  technology usage and accelerate their growth.
                </p>

                <p className="[text-align:justify] md:text-[18px]">
                  Founded in 2021 by education technologies and developers,
                  zerone.id has solid and creative team members that have proven
                  to deliver high-quality software applications to maximize the
                  goals of a product or project. We focus on providing high-edge
                  software products, mainly for educational purposes, and also
                  on helping companies to digitize their ideas or services.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Vision & Mission Section */}
        <div className="container mx-auto grid lg:grid-cols-2 lg:px-35 p-8 bg-white md:pt-20">
          <div className="flex items-center justify-left mt-[50px] p-7 md:mt-0">
            <img
              className="w-[450px] max-w-full"
              src={whychoose.whychooseus}
              alt="Why choose Zerone Global for your digital solutions"
            />
          </div>
          
          {/* Kolom 1: Vision & Mission */}
          <div>
            <div className="vision shadow-lg rounded-[20px] p-10 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
              <h3 className="text-[24px] md:text-[30px] font-bold text-black mb-4 text-gray-600">
                Our Vision
              </h3>
              <ul>
                <li className="[md:text-align:justify] md:text-[18px]">
                  To become the most trusted digital partner for education{" "}
                  &nbsp;
                  <br className="hidden md:inline" />
                  and community innovation in Southeast Asia.
                </li>
              </ul>
            </div>
            <br />
            <div className="mission shadow-lg rounded-[20px] p-10 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
              <h3 className="text-[24px] md:text-[30px] font-bold text-black mb-4 text-gray-600">
                Our Mission
              </h3>
              <ul className="custom-list list-disc list-inside">
                <li className="[md:text-align:justify] md:text-[18px]">
                  Simplify digital transformation for schools & institutions
                </li>
                <li className="[md:text-align:justify] md:text-[18px]">
                  Empower learning with modern, integrated platforms
                </li>
                <li className="[md:text-align:justify] md:text-[18px]">
                  Enable efficient community engagement and event management
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section Core Values */}
        <div className="container mx-auto lg:px-30 lg:mt-10">
          <div
            className="mt-10 md:p-[30px] grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 bg-no-repeat bg-cover rounded-[20px] py-20"
            style={{
              backgroundImage: `url(${heroImage.bgHorizontal})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Box 1 */}
            <div className="w-full text-center my-2 px-15">
              <img
                src={ilustration.ilusAbout1}
                className="w-20 mx-auto pb-5"
                alt="Customer Oriented Service Icon"
                loading="lazy"
              />
              <h3 className="text-[20px] font-semibold text-white">
                Customer Oriented
              </h3>
              <span className="text-justify md:text-[16px] text-white">
                Clients speak up about their wishes, We make it happen.
              </span>
            </div>

            {/* Box 2 */}
            <div className="w-full text-center my-2 px-15">
              <img
                src={ilustration.ilusAbout2}
                className="w-20 mx-auto pb-5"
                alt="Collaborative Teamwork Icon"
                loading="lazy"
              />
              <h3 className="text-[20px] font-semibold text-white">
                Collaborative
              </h3>
              <span className="text-justify md:text-[16px] text-white">
                Our team works collaboratively with clients and expertise to
                deliver high-quality software solutions.
              </span>
            </div>

            {/* Box 3 */}
            <div className="w-full text-center my-2 px-15">
              <img
                src={ilustration.ilusAbout3}
                className="w-20 mx-auto pb-5"
                alt="24/7 Technical Support Icon"
                loading="lazy"
              />
              <h3 className="text-[20px] font-semibold text-white">
                Support 24/7
              </h3>
              <span className="text-justify md:text-[16px] text-white">
                Ideas fly fast, so that’s why we do not limit the discussion
                space. Whenever you need us, we are always on hand.
              </span>
            </div>
          </div>
        </div>

        {/* Section Our Team */}
        <div className="container mx-auto lg:px-30 px-5 lg:mt-20 mb-20">
          <div className="text-center my-20">
            <span className="block md:text-[24px] text-gray-600 mb-1 font-semibold">
              Our Team
            </span>
            <h2 className="text-[24px] md:text-[36px] font-bold text-gray-600 mb-6">
              Zerone Global Digital Solution{" "}
              <br className="hidden md:inline" />
              Experts Behind Your Project Success
            </h2>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-5 sm:grid-cols-4 lg:grid-cols-4">
            <img 
              src={ourteam.team1} 
              loading="lazy" 
              alt="Director of Zerone Global Digital Solution" 
            />
            <img 
              src={ourteam.team2} 
              loading="lazy" 
              alt="Software Engineer 1 - Zerone Global Expert Team" 
            />
            <img 
              src={ourteam.team3} 
              loading="lazy" 
              alt="Software Engineer 2 - Zerone Global Expert Team" 
            />
            <img 
              src={ourteam.team4} 
              loading="lazy" 
              alt="Software Engineer 3 - Zerone Global Expert Team" 
            />
            <img 
              src={ourteam.team5} 
              loading="lazy" 
              alt="Software Engineer 4 - Zerone Global Expert Team" 
            />
            <img 
              src={ourteam.team6} 
              loading="lazy" 
              alt="Software Engineer 5 - Zerone Global Expert Team" 
            />
            <img 
              src={ourteam.team7} 
              loading="lazy" 
              alt="Software Engineer 6 - Zerone Global Expert Team" 
            />
            <img 
              src={ourteam.team8} 
              loading="lazy" 
              alt="Web Designer - Zerone Global Expert Team" 
            />
            <img 
              src={ourteam.team9} 
              loading="lazy" 
              alt="UI/UX Designer - Zerone Global Expert Team" 
            />
            <img 
              src={ourteam.team10} 
              loading="lazy" 
              alt="Graphic Designer & Video Editor - Zerone Global Expert Team" 
            />
            <img 
              src={ourteam.team11} 
              loading="lazy" 
              alt="Digital Marketing Specialist - Zerone Global Expert Team" 
            />
          </div>
        </div>
      </div>
    </>
  );
}