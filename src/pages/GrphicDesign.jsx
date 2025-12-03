import { mockup, solutionDesain } from "../data";

export default function GrafikDesain() {
  return (
    <>
      <div className="webApp pt-15 lg:pt-5 bg-white">
        {/* deskripsi zerone */}
        <div className="container mx-auto pt-[80px] lg:px-30 px-5 lg:mt-20 grid grid-cols-1 gap-4 sm:grid-cols-2  lg:grid-cols-2">
          <div className="pr-6">
            <h3 className="text-[24px] md:text-[36px] font-bold text-black mb-6 pt-2">
              Graphic and Video
              <br /> Production
            </h3>
            <span className="text-justify text-[18px] md:text-[24px] ">
              Video and Graphics That Captivate Your Prospective Customers
            </span>
            <br /> <br />
            <p className="[text-align:justify]">
              Both videos and graphics are often relied upon in business.
              Introducing products, boosting branding, and maximizing sales are
              three of the goals. Through videos, your business will be more
              quickly and easily remembered by potential customers. Its
              audio-visual nature is the reason why. Potential customers can
              clearly recognize your advertisements or products. Graphics
              deliver powerful messages fast through posters, billboards, and
              brochures. With quality design and video content from Zerone’s
              experienced team, your business can grow rapidly.
            </p>
          </div>
          <div>
            <img
              src={mockup.graphic}
              alt="Graphic and Video Production"
              className="w-300 pt-10 lg:pt-0 lg:pl-35 md:pl-20 relative lg:left-[-80px] mb-10"
            />
          </div>
        </div>


        <div className="container mx-auto mt-10 mb-10">
            <h3 className="text-[24px] md:text-[36px] font-bold text-center text-black mb-3 pt-2">
              Professional Graphic Design & Video<br className="hidden md:inline" />&nbsp;Production Services
            </h3>
            <h5 className="text-[16px] md:text-[18px] text-center">
              Boost your branding! Get professional graphic design and creative <br className="hidden md:inline" />&nbsp;video production services for promotional and marketing content.
            </h5>
        </div>
        <section className="features-section container mx-auto  lg:px-35 bg-white">
          <div className="mt-5 mb-10  grid grid-cols-1 gap-6 sm:grid-cols-3  lg:grid-cols-3 ">
            <img src={solutionDesain.desain1} className="shadow-lg rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer" alt="Content Management System" />
            <img src={solutionDesain.desain2} className="shadow-lg rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer" alt="Mobile App Development" />
            <img src={solutionDesain.desain3} className="shadow-lg rounded-[11px] transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer" alt="Web App Development" />
            <iframe className="rounded-[11px] w-[370px] h-[208px] md:w-[400px] md:h-[220px]transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer" src="https://www.youtube.com/embed/gdbBQZeMSco?si=ghIiIZeu5eOz3GwP&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe className="rounded-[11px] w-[370px] h-[208px] md:w-[400px] md:h-[220px]transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer" src="https://www.youtube.com/embed/YzgNGhSqhxQ?si=-4fwxNqsyjSn0jtg&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe className="rounded-[11px] w-[370px] h-[208px] md:w-[400px] md:h-[220px]transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer" src="https://www.youtube.com/embed/2PXPVu01XAo?si=SxET07cRO7Db7XkO&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </section>
      </div>
    </>
  );
}
