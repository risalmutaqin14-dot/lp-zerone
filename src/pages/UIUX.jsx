import { mockup } from "../data";

export default function CMS() {
  return (
    <>
      <div className="webApp pt-15 lg:pt-5">
        {/* deskripsi zerone */}
        <div className="container mx-auto pt-[80px] lg:px-30 px-5 lg:mt-20 grid grid-cols-1 gap-4 sm:grid-cols-2  lg:grid-cols-2">
          <div className="pr-6">
            <h3 className="text-[24px] md:text-[36px] font-bold text-black mb-6 pt-2">
              UIUX Design
            </h3>
            <span className="text-justify text-[18px] md:text-[24px] ">
              What Makes Your Applications and Websites Easy to Access
            </span>
            <br /> <br />
        <p className="[text-align:justify]">
              UI stands for user interface. Meanwhile, UX stands for user
              experience. Both play a very important role in digital products
              such as applications and websites. UI functions to design the
              appearance so that your product is pleasing to the eye. Icons,
              colors, fonts, animations, shapes, and layouts are all part of the
              user interface (UI). UX ensures your product feels intuitive,
              comfortable, and memorable. From menu structure to content flow,
              every detail affects how users experience your product. The better
              your UI/UX, the more confident and likely customers are to engage
              and purchase.
            </p>
          </div>
          <div>
            <img
              src=""
              alt="UIUX Design"
              className="w-300 pt-10 lg:pt-0 lg:pl-35 md:pl-20"
            />
          </div>
        </div>
        <div className="container mx-auto px-5">
          <h3 className=" text-center text-[16px] lg:text-[20px] lg:mt-20 mt-10 ">
            “If you think good design is expensive, you should look at the cost of bad design.”
          </h3>
          <h3 className=" text-[16px] lg:text-[20px] font-bold itaic text-center pb-10">
            Ralf Speth
          </h3>
        </div>
      </div>
    </>
  );
}
