import { banner, ilustration } from "../data";
import FAQs from "../components/FAQs";

export default function Faqs() {
  return (
    <>
      <div className="webApp mx-auto lg:py-50 lg:pt-5 bg-white px-[30px] md:px-0">
        <div className="service bg-white mx-auto">
          <div className="tech-stack container mx-auto container mx-auto  lg:px-35 bg-white bg-[#dfe7f2]">
            <div className="lg:w-1/2">
              <h2 className="text-[36px] font-bold text-gray-600 mb-6 mt-[100px]">
                Frequently
                <br className="hidden md:inline" />
                Asked Questions
              </h2>
              <h4 className="text-[24px] text-left  text-gray-600 mb-6 lg:mt-5">
                Find quick answers to common questions about our services,
                pricing, and support. Get the information you need in one place.
              </h4>
            </div>
            
              <FAQs />
            
          </div>
        </div>
      </div>
    </>
  );
}
