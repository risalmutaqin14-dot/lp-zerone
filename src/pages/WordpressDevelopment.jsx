import { mockup, ilustration } from "../data";

export default function WordpressDev() {
  return (
    <>
      <div className="webApp pt-15 lg:pt-5">
        {/* deskripsi zerone */}
        <div className="container mx-auto pt-[80px] lg:px-30 px-5 lg:mt-20 grid grid-cols-1 gap-4 sm:grid-cols-2  lg:grid-cols-2">
          <div className="pr-6">
            <h3 className="text-[24px] md:text-[36px] font-bold text-black mb-6 pt-2">
              Websitee/Wordpress
              <br />
              Development
            </h3>
            <span className="text-justify text-[18px] md:text-[24px] ">
              Make Your Business More Trustworthy with a Website/WordPress
            </span>
            <br /> <br />
            <p className="">
              A website/WordPress is an online site that presents its owner's
              content. For example, if you are a clothing business owner, your
              website/WordPress will contain clothing products. Similarly, if
              you are a shoe business owner, your website/WordPress will contain
              a variety of shoe options.
            </p>
          </div>
          <div>
            <img
              src={mockup.webapp}
              alt="website/wordpress development"
              className="w-300 pt-10 lg:pt-0 lg:pl-35 md:pl-20"
            />
          </div>
        </div>
        <h3 className="text-[24px] md:text-[36px] text-center font-bold text-black mb-6 pt-25">
          The advantages of having a <br />
          website/WordPress for business people
        </h3>

        <div className="container mx-auto  lg:px-30 lg:mt-5">
          <div className="mt-10 p-[30px] grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 bg-no-repeat bg-cover rounded-[20px] py-5">
            {/* Box 1 */}
            <div className="w-full text-center m-2">
              <img
                src={ilustration.ilusAbout1}
                className="w-20 mx-auto pb-5"
                alt="Customer Oriented"
              />
              <span className="text-justify text-[16px] text-grey-600">
                Convincing potential customers about product quality
              </span>
            </div>

            {/* Box 2 */}
            <div className="w-full text-center m-2">
              <img
                src={ilustration.ilusAbout2}
                className="w-20 mx-auto pb-5"
                alt="Collaborative"
              />
              <span className="text-justify text-[16px] text-grey-600">
                Promotions that appear professional
              </span>
            </div>

            {/* Box 3 */}
            <div className="w-full text-center m-2">
              <img
                src={ilustration.ilusAbout3}
                className="w-20 mx-auto pb-5"
                alt="Support 24/7"
              />
              <span className="text-justify text-[16px] text-grey-600">
                Prospective customers are free to choose product variants
              </span>
            </div>

            {/* Box 3 */}
            <div className="w-full text-center m-2">
              <img
                src={ilustration.ilusAbout3}
                className="w-20 mx-auto pb-5"
                alt="Support 24/7"
              />
              <span className="text-justify text-[16px] text-grey-600">
                Store and seller reputation
              </span>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-5">
          <h3 className=" text-center text-[16px] lg:text-[20px] lg:mt-20 mt-10 ">
            “You can’t convince anyone of anything. You can <br />only give them the
            right information, so that they can convince themselves.”
          </h3>
          <h3 className=" text-[16px] lg:text-[20px] font-bold itaic text-center pb-10">
            Eben Pagan
          </h3>
        </div>
      </div>
    </>
  );
}
