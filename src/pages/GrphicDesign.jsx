import { mockup } from "../data";

export default function GrafikDesain() {
  return (
    <>
      <div className="webApp pt-15 lg:pt-5">
        {/* deskripsi zerone */}
        <div className="container mx-auto pt-[80px] lg:px-30 px-5 lg:mt-20 grid grid-cols-1 gap-4 sm:grid-cols-2  lg:grid-cols-2">
          <div className="pr-6">
            <h3 className="text-[24px] md:text-[36px] font-bold text-black mb-6 pt-2">
              Grafhic and Vidio
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
              src=""
              alt="Digital Mareting & SEO"
              className="w-300 pt-10 lg:pt-0 lg:pl-35 md:pl-20"
            />
          </div>
        </div>
      </div>
    </>
  );
}
