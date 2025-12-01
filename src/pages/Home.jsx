import "../css/Home.css";
import "../css/ProductSection.css";
import "../css/Animasi.css";
import { Partner } from "../components/partners.jsx";
import { heroImage, servicesFeatures, whychoose } from "../data";
import { Link } from "react-router-dom"
import CardSwap, { Card } from "../components/visiMisi.jsx";
import Counter from "../components/counter.jsx";
import ProductSection from "../components/ProductSection.jsx";
import Faq from "../components/Faq";
import Workingproces from "../components/workingproces.jsx";
import ProgresBar from "../components/ProgresBar.jsx";
import Stack from "../components/stack.jsx";
import Testimonials from "../components/testimonial.jsx";

export default function Home() {
  return (
    <>
      <div className="hero max-h-[1220px]  mx-auto relative overflow-hidden">
        <div className="hero-line align-middle justify-center items-center w-full h-screen">
          <img
            className="background-pattern bg-cover bg-no-repeat"
            src={heroImage.bgHero}
            alt="bg-zerone-global"
          />

          <div className="hero-content">
            <h1 className="main-title slide-fade">
              Transform Your Institution with Zerone Global Digital Solution.
            </h1>

            <h2 className="tagline">Trusted | Secure | Scalable.</h2>

            <h3 className="description">
              Empowering innovation and enabling success for schools,
              organizations, and communities across Southeast Asia.
            </h3>

            <button className="cta-button">Explore Our Solutions</button>
            <div className="device-mockup justify-center items-center w-full h-screen ">
              <img
                src={heroImage.image}
                alt="Dashboard Edunav - School Information System (SIS)"
              />
            </div>
          </div>
        </div>
        <div className="bottom-gradient"></div>
      </div>

      {/* section partner */}
      <Partner />

      {/* Visi Misi Section */}
      <div
        className="visiMisi bg-no-repeat bg-cover w-h-[100px] md:max-h-[570px] overflow-hidden"
        style={{ backgroundImage: `url(${heroImage.bgHorizontal})` }}
      >
        <div className="flex flex-col lg:flex-row container mx-auto items-center justify-between gap-8 bg-cover bg-center pt-[40px]">
          <div className="w-full lg:w-1/2 flex flex-col px-4 sm:px-8 md:ml-[100px]">
            <h3 className="text-[24px] sm:text-xl text-white mb-4">
              Our Service
            </h3>
            <h2 className="text-[36px] sm:text-3xl lg:text-4xl font-bold text-white  mb-6 ">
              We create digital <br />
              solutions that matter.
            </h2>
            <h4 className="text-[18px] sm:text-lg lg:text-xl text-white  mb-6 ">
              PT Global Zerone Digital provides cutting-edge digital solutions
              for education, institutions, and community engagement. Our goal is
              to make technology simple, reliable, and impactful.
            </h4>
          </div>

          <div className="visiMisi overflow-hidden w-full lg:w-1/2 ">
            <div
              className="
            h-[250px] 
            sm:h-[200px] 
            md:h-[500px] 
            relative 
            top-[120px] 
            md:top-[158px] 
            left-[-130px] 
            sm:left-[-10px]
            md:left-[-100px] 
            lg:left-0 
            right-0
            z-19
              "
            >
              <CardSwap
                cardDistance={80}
                verticalDistance={70}
                delay={5000}
                pauseOnHover={false}
              >
                <Card>
                  <img src={heroImage.visi} alt="visi zerone" />
                </Card>
                <Card>
                  <img src={heroImage.misi} alt="misi zerone" />
                </Card>
              </CardSwap>
            </div>
          </div>
        </div>
      </div>

      {/* counter section */}
      <div className="counter-section text-center p-8 bg-white pt-20 ">
        <h2 className="tagline2 text-2xl font-semibold text-gray-800 ">
          Global Digital Solution
        </h2>
        <h3 className="tagline-description text-lg text-gray-600 my-4">
          We drive meaningful digital transformation that enables people,{" "}
          <br className="hidden md:inline" />
          businesses, and institutions to achieve lasting impact through
          technology.
        </h3>

        <div className="container mx-auto mt-20 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-4 lg:px-60 justify-items-center">
          <div className="mx-10 transition-all duration-500 transform hover:scale-110">
            <Counter start={0} end={5} duration={3000} />
            <p className="text-gray-500">Countries</p>
          </div>
          <div className="mx-10 transition-all duration-500 transform hover:scale-110">
            <Counter start={0} end={70} duration={3000} />
            <p className="text-gray-500">Schools</p>
          </div>
          <div className="mx-10 transition-all duration-500 transform hover:scale-110">
            <Counter start={0} end={42000} duration={3000} />
            <p className="text-gray-500">Users</p>
          </div>
          <div className="mx-10 transition-all duration-500 transform hover:scale-110">
            <Counter start={0} end={7} duration={3000} />
            <p className="text-gray-500">Product</p>
          </div>
        </div>
      </div>

      {/* section features */}
      <div className="bg-white">
        <section className="features-section container mx-auto  lg:px-35 p-8 bg-white pt-20">
          <div className="container mx-auto flex flex-col lg:flex-row items-start justify-between space-y-8 lg:space-y-0">
            <div className=" lg:w-1/2">
              <h3 className="text-[24px] text-left  text-gray-600 mb-6">
                Our Service
              </h3>
              <h2 className="text-[36px] font-bold text-gray-600 mb-6">
                Tailored Solutions <br />
                for Your Business
              </h2>
            </div>

            <h4 className="lg:w-1/2 text-left text-[18px] lg:text-[24px] text-gray-500">
              We provide a wide range of digital solutions designed to help your
              business grow and stay ahead in the modern era. From web and
              mobile app development to custom systems, we deliver reliable
              technology built for long-term success.
            </h4>
          </div>

          {/* Service Grid Section */}
          <div className=" mt-20 grid grid-cols-2 gap-4 md:gap-6 sm:grid-cols-3  lg:grid-cols-3 justify-items-center">
            <img src={servicesFeatures.cms} alt="Content Management System - Zerone Global Digital Solution" />
            <img src={servicesFeatures.appDev} alt="Mobile App Development - Zerone Global Digital Solution" />
            <img src={servicesFeatures.webDev} alt="Web App Development - Zerone Global Digital Solution" />
            <img src={servicesFeatures.wordpess} alt="wordpess Development - Zerone Global Digital Solution" />
            <img src={servicesFeatures.uiux} alt="uiux design - Zerone Global Digital Solution" />
            <img src={servicesFeatures.digmar} alt="digital marketing - Zerone Global Digital Solution" />
            <img src={servicesFeatures.payment} alt="Web App Development - Zerone Global Digital Solution" />
            <img src={servicesFeatures.desain} alt="Web App Development - Zerone Global Digital Solution" />
            <img src={servicesFeatures.strategy} alt="Web App Development - Zerone Global Digital Solution" />
          </div>
        </section>
      </div>

      <ProductSection />
      <Workingproces />

      <div className="service bg-white">
        <div className="tech-stack container mx-auto lg:flex container mx-auto  lg:px-35 p-8 bg-white lg:pt-20 pb-20 bg-[#dfe7f2]">
          <div className=" lg:w-1/2">
            <h4 className="text-[18px] text-[24px] text-left  text-gray-600 lg:mt-5 md:pr-[100px]">
              Why choose us
            </h4>
            <h2 className="text-[36px] font-bold text-gray-600 mb-6">
              Zerone Global Solution
            </h2>
            <h4 className="text-[18px] text-[24px] text-left  text-gray-600 mb-6 lg:mt-5 md:pr-[100px]">
              Client satisfaction is our greatest focus. We deliver
              professional, responsive, and tailored service to ensure every
              client’s needs are fully addressed.
            </h4>
            <ProgresBar />
          </div>
          <div className=" lg:w-1/2 align-middle mt-[50px] md:mt-0">
            <img
              className="w-[550px] mx-auto pl-[20px]"
              src={whychoose.whychooseus}
              alt="why chose us?"
            />
          </div>
        </div>
      </div>

      <div className="service bg-white">
        <div className="tech-stack container mx-auto lg:flex container mx-auto  lg:px-35 p-8 bg-white lg:pt-10 pb-20 bg-[#dfe7f2]">
          <div className=" lg:w-1/2">
            <h2 className="text-[36px] font-bold text-gray-600 mb-6 lg:mt-15">
              Built With <br></br>Modern Technologies
            </h2>
            <h4 className="text-[18px] text-[24px] mb-20 text-left  text-gray-600 mb-6 lg:mt-5 md:pr-[100px]">
              Our solutions are built using modern technologies that adapt to
              your business processes
            </h4>
          </div>
          <div className=" lg:w-1/2  md:mt-0">
            <Stack />
          </div>
        </div>
      </div>

      <Testimonials />

      <div className="service bg-white">
        <div className="contactUs">
          <h2 className="text-[36px] font-bold text-center text-gray-600 mb-6 pt-15">
            Contact US
          </h2>
        </div>
        <div className="tech-stack container mx-auto lg:flex container mx-auto  lg:px-35 p-8 bg-white pt-10 pb-20 bg-[#dfe7f2]">
          <div className=" lg:w-1/2 lg:pr-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d701.0432617503754!2d106.65250108970972!3d-6.303182023946195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fbecde2cc1b1%3A0xa154bae00576df77!2sPT.%20Global%20Zerone%20Digital!5e0!3m2!1sid!2sid!4v1762569849687!5m2!1sid!2sid"
              width="100%"
              height="400px"
              style={{ borderRadius: "20px" }}
            />
          </div>
          <div className=" lg:w-1/2 align-middle lg:pl-6">
            <h3 className="text-[26px] font-bold text-gray-600 mb-6 mt-15 md:mt-0">
              Let’s Connect and Collaborate
            </h3>
            <h4 className="text-[24px] text-left  text-gray-600 mb-6 lg:mt-5">
              Connect with us for project inquiries, technical support, or
              general questions. We’ll respond as soon as possible.
            </h4>
            <div className=" flex mt-8 items-center">
              <span className="mr-2 flex items-center  rounded-full p-1 mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#000000"
                >
                  <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
                </svg>
              </span>
              <p className="button-text text-[18px] mt-3 md:mt-0">
                +62 813 7000 2999 | (021) 2784 6241
              </p>
            </div>
            <div className="md:flex mt-2 items-center">
              <span className="mr-2 flex items-center  rounded-full p-1 mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#000000"
                >
                  <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
                </svg>
              </span>
              <p className="button-text text-[18px] text-center md:text-left mt-3 md:mt-0">info@zerone.id</p>
            </div>
            <div className="md:flex mt-2 items-center">
              <span className="mr-2 flex rounded-full p-1 mr-4 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#000000"
                >
                  <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
                </svg>
              </span>
              <p className="button-text text-[18px] text-center md:text-left mt-3 md:mt-0">
                My Republic Plaza, Wing A, Zone 6 Green Office Park, BSD City,
                Tangerang, Banten – Indonesia
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="service bg-white">
        <div className="tech-stack container mx-auto lg:flex container mx-auto  lg:px-35 p-8 bg-white pb-20 bg-[#dfe7f2]">
          <div className=" lg:w-1/2">
            <h2 className="text-[36px] font-bold text-gray-600 mb-6 mt-2">
              Frequently
              <br className="hidden md:inline" />
              Asked Questions
            </h2>
            <h4 className="text-[24px] text-left  text-gray-600 mb-6 lg:mt-5">
              Find quick answers to common questions about our services,
              pricing, and support. Get the information you need in one place.
            </h4>
          </div>
          <div className=" lg:w-1/2 align-middle p-[15px]">
            <Faq />
            {/* button */}
            <div className="flex mt-6 container mx-auto">
              <div className="w-[200px] mb-4 sm:mb-0">
                <a
                  href="/faqs"
                  className="transition duration-300 ease-in-out hover:scale-105 download flex items-center border-2 bg-[linear-gradient(90deg,#00BBD7,#0092D7,#6E92D7)] border-[#00A9E8] rounded-[50px] px-3 py-3"
                >
                  <span className="button-icon flex items-center bg-white rounded-full p-1 mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#0092d7"
                    >
                      <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
                    </svg>
                  </span>
                  <span className="text-white pl-3 font-medium">
                    See More FAQs
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
