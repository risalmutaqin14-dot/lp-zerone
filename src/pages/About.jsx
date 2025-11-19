import { logos, heroImage, ilustration, ourteam } from "../data";
import "../css/About.css";


export default function About() {
  return (
    <>
      <div className="about-page">
        <div className="container mx-auto py-5 pt-50">
          <img
            src={logos.bluelogo}
            className="lg:w-100 w-50 d-block mx-auto img-fluid"
            alt=""
          />
        </div>
        <h3 className="text-[36px] sm:text-3xl lg:text-4xl font-bold text-Black text-center pt-10  mb-6">
          About Zerone
        </h3>

        {/* deskripsi zerone */}
        <div className="container mx-auto lg:px-30 px-5 lg:mt-20 grid grid-cols-1 gap-15 sm:grid-cols-2  lg:grid-cols-2">
          <div>
            <p className="[text-align:justify] text-[24px]">
              Zerone is a digital solution company focused on helping and
              ensuring business entities grow and accelerate their potential by
              using a high-quality software engineering method. We help
              companies from various backgrounds, especially educational service
              companies, schools, and project managers to utilize technology
              usage and accelerate their growth.
            </p>
          </div>
          <div>
            <p className="[text-align:justify] text-[24px] ">
              Founded in 2021 by education technologies and developers,
              zerone.id has solid and creative team members that have proven to
              deliver high-quality software applications to maximize the goals
              of a product or project. We focus on providing high-edge software
              products, mainly for educational purposes, and also on helping
              companies to digitize their ideas or services.
            </p>
          </div>
        </div>

        {/* Section  visi misi*/}
        <div className="container mx-auto lg:px-30 px-5 mt-8 lg:mt-20 grid grid-cols-1 gap-4 sm:grid-cols-2  lg:grid-cols-2 ">
          <div
            className="bg-no-repeat bg-cover p-10 text-white lg:mr-5 rounded-[20px]"
            style={{ backgroundImage: `url(${heroImage.visimisi})` }}
          >
            <h3 className="text-[30px] font-bold text-Black mb-4">
              Our Vision
            </h3>
            <ul className="">
              <li className="mb-2 text-[24px]">
                To become the most trusted digital partner for education and
                community innovation in Southeast Asia.
              </li>
            </ul>
          </div>

          <div
            className="bg-no-repeat bg-cover p-10 text-white lg:mr-5 rounded-[20px]"
            style={{ backgroundImage: `url(${heroImage.visimisi})` }}
          >
            <h3 className="text-[30px] font-bold text-Black mb-4">
              Our Mission
            </h3>
            <ul className="custom-list">
              <li className="mb-2 text-[24px]">
                Simplify digital transformation for schools & institutions
              </li>
              <li className="mb-2 text-[24px]">
                Empower learning with modern, integrated platforms
              </li>
              <li className="mb-2 text-[24px]">
                Enable efficient community engagement and event management
              </li>
            </ul>
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
            <div className="w-full text-center m-2">
              <img
                src={ilustration.ilusAbout1}
                className="w-20 mx-auto pb-5"
                alt="Customer Oriented"
              />
              <h3 className="text-[20px] font-semibold text-white">
                Customer Oriented
              </h3>
              <span className="text-justify text-[16px] text-white">
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
              <h3 className="text-[20px] font-semibold text-white">
                Collaborative
              </h3>
              <span className="text-justify text-[16px] text-white">
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
          <h3 className="text-[36px] sm:text-3xl lg:text-4xl font-bold text-Black text-center pt-10  mb-[50px]">
            Our Team
          </h3>
          <div className=" mt-5 grid grid-cols-2 gap-5 sm:grid-cols-4  lg:grid-cols-4">
            <img src={ourteam.team1} alt="" />
            <img src={ourteam.team1} alt="" />
            <img src={ourteam.team1} alt="" />
            <img src={ourteam.team1} alt="" />
            <img src={ourteam.team1} alt="" />
            <img src={ourteam.team1} alt="" />
            <img src={ourteam.team1} alt="" />
            <img src={ourteam.team1} alt="" />
            <img src={ourteam.team1} alt="" />
            <img src={ourteam.team1} alt="" />
          </div>
        </div>
      </div>
      
    </>
  );
}
