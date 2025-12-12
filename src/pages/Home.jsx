import React, { Suspense } from "react";
import "../css/Home.css";
import "../css/ProductSection.css";
import "../css/Animasi.css";
import { Partner } from "../components/partners.jsx";
import { heroImage, servicesFeatures, whychoose } from "../data";
import { Link } from "react-router-dom";
import CardSwap, { Card } from "../components/visiMisi.jsx";
import Counter from "../components/counter.jsx";
import ProductSection from "../components/ProductSection.jsx";
import Faq from "../components/Faq";
import Workingproces from "../components/workingproces.jsx";
import ProgresBar from "../components/ProgresBar.jsx";
import Stack from "../components/stack.jsx";
import Testimonials from "../components/testimonial.jsx";
import { Helmet } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>
          Zerone.id | Transform Your Institution with Zerone Global Digital
          Solution
        </title>
        <meta
          name="description"
          content="Zerone Global: Trusted, secure, and scalable digital solutions for schools, organizations, and communities across Southeast Asia. Empower your innovation today."
        />

        {/* Open Graph untuk social media */}
        <meta
          property="og:title"
          content="Zerone Global | Trusted & Scalable Digital Solutions"
        />
        <meta
          property="og:description"
          content="Your trusted technology partner for modernizing education management and enterprise operations across Southeast Asia."
        />

        {/* Link disesuaikan */}
        <meta property="og:url" content="https://www.zerone.id" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.zerone.id/assets/meta-image-zerone.webp"
        />

        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.zerone.id" />
      </Helmet>

      <div className="hero max-h-[1220px] mx-auto relative overflow-hidden">
        <div className="hero-line align-middle justify-center items-center w-full h-screen">
          <img
            className="background-pattern bg-cover bg-no-repeat"
            src={heroImage.bgHero}
            loading="eager"
            alt="Zerone Global abstract digital connectivity background pattern"
          />

          <div className="hero-content">
            <h1 className="main-title slide-fade">
              Transform Your Institution with Zerone Global Digital Solution.
            </h1>

            <h2 className="tagline">Trusted | Secure | Scalable.</h2>

            <h3 className="description">
              Your trusted technology partner for modernizing education
              management and enterprise operations across Southeast Asia
            </h3>

            <div className="flex justify-center items-center mt-6 container mx-auto">
              <div className="w-[250px] mb-4 sm:mb-0">
                <a
                  href="#our-solution"
                  className="transition duration-300 ease-in-out hover:scale-105 download flex items-center border-2 bg-white border-[#00A9E8] rounded-[50px] px-3 py-3"
                >
                  <span className="button-icon flex items-center bg-[#0092d7] rounded-full p-1 mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#fff"
                    >
                      <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
                    </svg>
                  </span>
                  <span className="text-[#0092d7] text-14 md:text-[16px] pl-3 font-semibold">
                    Explore Our Solution
                  </span>
                </a>
              </div>
            </div>

            <div className="device-mockup justify-center items-center w-full h-screen ">
              <img
                src={heroImage.image}
                loading="eager"
                alt="Zerone Global integrated digital solution dashboard displayed on laptop and mobile devices"
              />
            </div>
          </div>
        </div>
        <div className="bottom-gradient"></div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Partner />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <div
          className="visiMisi bg-no-repeat bg-cover w-full md:max-h-[570px] overflow-hidden"
          style={{ backgroundImage: `url(${heroImage.bgHorizontal})` }}
        >
          <div className="flex flex-col lg:flex-row container mx-auto items-center justify-between gap-8 bg-cover bg-center pt-[40px]">
            <div className="w-full lg:w-1/2 flex flex-col px-4 sm:px-8 md:ml-[100px]">
              <span className="block md:text-[24px] sm:text-xl text-white mb-4 font-medium">
                Our Vision and Mission
              </span>

              <h2 className="text-[24px] md:text-[36px] sm:text-3xl lg:text-4xl font-bold text-white mb-6">
                We create digital <br />
                solutions that matter.
              </h2>

              <p className="md:text-[18px] sm:text-lg lg:text-xl text-white mb-6 leading-relaxed">
                PT Global Zerone Digital provides cutting-edge digital solutions
                for education, institutions, and community engagement. Our goal
                is to make technology simple, reliable, and impactful.
              </p>
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
          z-20
        "
              >
                <CardSwap
                  cardDistance={80}
                  verticalDistance={70}
                  delay={5000}
                  pauseOnHover={false}
                >
                  <Card>
                    <img
                      src={heroImage.visi}
                      alt="Zerone Global Digital Solution's strategic vision for future technology"
                    />
                  </Card>
                  <Card>
                    <img
                      src={heroImage.misi}
                      alt="Zerone Global Digital Solution's mission to empower education and communities"
                    />
                  </Card>
                </CardSwap>
              </div>
            </div>
          </div>
        </div>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        {/* counter section */}
        <div className="counter-section text-center p-8 bg-white pt-20">
          <h2 className="tagline2 text-2xl font-semibold text-gray-800">
            Global Digital Solution
          </h2>
          <p className="tagline-description md:text-lg text-gray-600 my-4 leading-relaxed">
            We drive meaningful digital transformation that enables people,{" "}
            <br className="hidden md:inline" />
            businesses, and institutions to achieve lasting impact through
            technology.
          </p>

          {/* Layout OpKtimized: Removed lg:px-60, added max-w and gap */}
          <div className="container mx-auto mt-20 grid grid-cols-2 gap-8 sm:grid-cols-4 max-w-6xl justify-items-center">
            <div className="w-full flex flex-col items-center transition-all duration-500 transform hover:scale-110">
              <Counter start={0} end={5} duration={3000} />
              <p className="text-gray-500 mt-2 font-medium">Countries</p>
            </div>

            <div className="w-full flex flex-col items-center transition-all duration-500 transform hover:scale-110">
              <Counter start={0} end={70} duration={3000} />
              <p className="text-gray-500 mt-2 font-medium">Schools</p>
            </div>

            <div className="w-full flex flex-col items-center transition-all duration-500 transform hover:scale-110">
              <Counter start={0} end={42000} duration={3000} />
              <p className="text-gray-500 mt-2 font-medium">Users</p>
            </div>

            <div className="w-full flex flex-col items-center transition-all duration-500 transform hover:scale-110">
              <Counter start={0} end={7} duration={3000} />
              <p className="text-gray-500 mt-2 font-medium">Products</p>
            </div>
          </div>
        </div>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        {/* section features */}
        <div className="bg-white" id="our-solution">
          <section className="features-section container mx-auto lg:px-32 p-8 bg-white pt-20">
            <div className="container mx-auto flex flex-col lg:flex-row items-start justify-between space-y-8 lg:space-y-0">
              <div className="lg:w-1/2">
                <span className="block md:text-[24px] text-left text-gray-600 md:mb-6 font-medium">
                  Our Services
                </span>

                <h2 className="text-[24px] md:text-[36px] font-bold text-gray-600 md:mb-6 leading-tight">
                  Tailored Solutions <br />
                  for Your Business
                </h2>
              </div>

              <p className="lg:w-1/2 text-left text-[18px] lg:text-[24px] text-gray-500 leading-relaxed">
                We provide a wide range of digital solutions designed to help
                your business grow and stay ahead in the modern era. From web
                and mobile app development to custom systems, we deliver
                reliable technology built for long-term success.
              </p>
            </div>

            {/* Service Grid Section */}
            <div className="mt-8 md:mt-20 grid grid-cols-2 gap-4 md:gap-6 sm:grid-cols-3 lg:grid-cols-3 justify-items-center">
              <img
                src={servicesFeatures.cms}
                loading="lazy"
                alt="Custom Content Management System (CMS) development services"
                className="shadow-lg rounded-[50px] transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              />
              <img
                src={servicesFeatures.appDev}
                loading="lazy"
                alt="iOS and Android Mobile App Development solutions"
                className="shadow-lg rounded-[50px] transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              />
              <img
                src={servicesFeatures.webDev}
                loading="lazy"
                alt="Professional Website and Web App Development services"
                className="shadow-lg rounded-[50px] transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              />
              <img
                src={servicesFeatures.wordpress}
                loading="lazy"
                alt="WordPress Website Development and Customization"
                className="shadow-lg rounded-[50px] transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              />
              <img
                src={servicesFeatures.uiux}
                loading="lazy"
                alt="User Interface (UI) and User Experience (UX) Design services"
                className="shadow-lg rounded-[50px] transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              />
              <img
                src={servicesFeatures.digmar}
                loading="lazy"
                alt="Strategic Digital Marketing and Online Growth Consulting"
                className="shadow-lg rounded-[50px] transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              />
              <img
                src={servicesFeatures.payment}
                loading="lazy"
                alt="Secure Payment Gateway Integration for E-commerce"
                className="shadow-lg rounded-[50px] transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              />
              <img
                src={servicesFeatures.desain}
                loading="lazy"
                alt="Creative Graphic Design and Video Production services"
                className="shadow-lg rounded-[50px] transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              />
              <img
                src={servicesFeatures.strategy}
                loading="lazy"
                alt="Digital Business Strategy and Tech Consulting"
                className="shadow-lg rounded-[50px] transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              />
            </div>
          </section>
        </div>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductSection />
        <Workingproces />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <div className="service bg-white">
          <div className="tech-stack container mx-auto lg:flex items-center lg:px-32 p-8 bg-white lg:pt-20 pb-20">
            <div className="lg:w-1/2">
              <span className="block md:text-[18px] mb-3 text-left text-gray-600 lg:mt-5 font-medium uppercase tracking-wide">
                Why Choose Us
              </span>

              <h2 className="text-[24px] md:text-[36px] font-bold text-gray-600 mb-6">
                Zerone Global Solution
              </h2>

              <p className="md:text-[18px] text-left text-gray-600 mb-6 lg:mt-5 md:pr-[100px] leading-relaxed">
                Client satisfaction is our greatest focus. We deliver
                professional, responsive, and tailored service to ensure every
                client’s needs are fully addressed.
              </p>

              <ProgresBar />
            </div>

            <div className="lg:w-1/2 flex justify-center mt-[50px] md:mt-0">
              <img
                className="w-[550px] mx-auto pl-[20px]"
                src={whychoose.whychooseus}
                alt="Illustration of Zerone Global Solution team delivering professional and tailored digital services"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="service bg-white">
          <div className="tech-stack container mx-auto lg:flex items-center lg:px-32 md:p-8 bg-white lg:pt-10 pb-20">
            <div className="lg:w-1/2 px-8">
              <h2 className="text-[24px] md:text-[36px] font-bold text-gray-600 mb-6 lg:mt-16">
                Built With <br className="hidden md:block" />
                Modern Technologies
              </h2>

              <p className="md:text-[18px] md:mb-20 text-left text-gray-600 lg:mt-5 md:pr-[100px] leading-relaxed">
                Our solutions are built using modern technologies that adapt to
                your business processes.
              </p>
            </div>

            <div className="lg:w-1/2 mt-8 lg:mt-0">
              <Stack />
            </div>
          </div>
        </div>
      </Suspense>
      <Testimonials />

      <div className="service bg-white">
        <div className="contactUs">
          <h2 className="text-[24px] md:text-[36px] font-bold text-center text-gray-600 mb-6 pt-15">
            Contact US
          </h2>
        </div>
        <div className="tech-stack container mx-auto lg:flex container mx-auto  lg:px-35 p-8 bg-white pt-10 pb-20 bg-[#dfe7f2]">
          <div className=" lg:w-1/2 lg:pr-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d701.0432617503754!2d106.65250108970972!3d-6.303182023946195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fbecde2cc1b1%3A0xa154bae00576df77!2sPT.%20Global%20Zerone%20Digital!5e0!3m2!1sid!2sid!4v1762569849687!5m2!1sid!2sid"
              width="100%"
              height="400px"
              loading="lazy"
              style={{ borderRadius: "20px" }}
            />
          </div>
          <div className=" lg:w-1/2 align-middle lg:pl-6">
            <h3 className="text-[24px] md:text-[26px] font-bold text-gray-600 mb-6 mt-15 md:mt-0">
              Let’s Connect and Collaborate
            </h3>
            <h4 className="md:text-[24px] text-left  text-gray-600 lg:mt-5">
              Connect with us for project inquiries, technical support, or
              general questions. We’ll respond as soon as possible.
            </h4>
            <div className="lg:w-2/3 lg:pl-6 text-left flex flex-col items-start">
              {/* Phone */}
              <div className="flex mt-8 items-center justify-start">
                <span className="mr-4 flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-black">
                  <FontAwesomeIcon icon={faPhone} className="text-lg" />
                </span>
                <a
                  href="tel:02127846241"
                  className="button-text text-[16px] md:text-[18px] hover:text-blue-600 transition-colors"
                >
                  (021) 2784 6241
                </a>
              </div>

              {/* WhatsApp */}
              <div className="flex mt-3 items-center justify-start">
                <span className="mr-4 flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-black">
                  <FontAwesomeIcon icon={faWhatsapp} className="text-lg" />
                </span>
                <a
                  href="https://wa.me/6281370000299?text=Hi%2C%20I%20want%20to%20ask%20about%20zerOne.id%20service"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-text text-[16px] md:text-[18px] hover:text-blue-600 transition-colors"
                >
                  +62 813-7000-0299
                </a>
              </div>

              {/* Email */}
              <div className="flex mt-3 items-center justify-start">
                <span className="mr-4 flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-black">
                  <FontAwesomeIcon icon={faEnvelope} className="text-lg" />
                </span>
                <a
                  href="mailto:info@zerone.id"
                  className="button-text text-[16px] md:text-[18px] hover:text-blue-600 transition-colors"
                >
                  info@zerone.id
                </a>
              </div>

              {/* Location */}
              <div className="flex mt-3 items-start justify-start text-left">
                {/* shrink-0 wajib ada agar ikon tidak gepeng/mengecil saat teks panjang */}
                <span className="mr-4 flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-black shrink-0">
                  <FontAwesomeIcon icon={faLocationDot} className="text-lg" />
                </span>
                <a
                  href="https://www.google.com/maps/place/My+Republic+Plaza,+Wing+A,+Zone+6+Green+Office+Park,+BSD+City,+Tangerang,+Banten,+Indonesia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-text text-[16px] md:text-[18px] hover:text-blue-600 transition-colors"
                >
                  My Republic Plaza, Wing A, Zone 6 Green Office Park, BSD City,
                  Tangerang, Banten - Indonesia
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="service bg-white">
        <div className="tech-stack container mx-auto lg:flex container mx-auto  lg:px-35 p-8 bg-white pb-20 bg-[#dfe7f2]">
          <div className=" lg:w-1/2">
            <h2 className="text-[24px] md:text-[36px] font-bold text-gray-600 mb-6 mt-2">
              Frequently
              <br className="hidden md:inline" />
              Asked Questions
            </h2>
            <h4 className="md:text-[24px] text-left  text-gray-600 mb-6 lg:mt-5">
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
