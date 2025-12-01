import React from "react";
import { mockup } from "../data";
import { useForm } from "react-hook-form";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Di sini kamu bisa mengirim data ke API atau proses lebih lanjut
  };
  return (
    <>
      <div className="webApp pt-15 lg:pt-5">
        {/* Contact */}
        <div className="container mx-auto pt-[80px] lg:px-30 px-5 lg:mt-20 grid grid-cols-1 gap-4 sm:grid-cols-2  lg:grid-cols-2">
          <div className="pr-6">
            <span className="text-justify text-[24px] ">Contact US</span>
            <h3 className="text-[36px] font-bold text-black mb-6 pt-2">
              Let’s Connect and
              <br className="hidden md:inline" />
              Collaborate with Zerone
            </h3>
            <span className="text-justify text-[24px] pr-20">
              Connect with us for project inquiries, technical support, or
              general questions. We’ll respond as soon as possible.
            </span>
            <div className=" lg:w-1/2 align-middle lg:pl-6">
              <div className="flex mt-8 items-center">
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
                <span className="button-text text-[18px]">
                  +62 813 7000 2999 | (021) 2784 6241
                </span>
              </div>
              <div className="flex mt-2 items-center">
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
                <span className="button-text text-[18px]">info@zerone.id</span>
              </div>
              <div className="flex mt-2 items-center">
                <span className="mr-2 flex rounded-full p-1 mr-4">
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
                <span className="button-text text-[18px]">
                  My Republic Plaza, Wing A, Zone 6 Green Office Park, BSD City,
                  Tangerang, Banten – Indonesia
                </span>
              </div>
            </div>
          </div>
          {/* Form */}
          <div className=" p-6 rounded-[20px]  shadow-md bg-[#F5F9FF]">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Name Field */}
              <div>
                <input
                  id="name"
                  type="text"
                  placeholder="Name"
                  {...register("name", { required: "Name is required" })}
                  className="w-full h-[60px] mt-1 px-3 py-2 border-2 border-[#00A9E8] rounded-[15px] focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                {errors.name && (
                  <span className="text-red-500 text-sm">
                    {errors.name.message}
                  </span>
                )}
              </div>

              {/* Email Field */}
              <div>
                <input
                  id="email"
                  type="email"
                  placeholder="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value:
                        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                      message: "Invalid email address",
                    },
                  })}
                  className="w-full h-[60px] mt-1 px-3 py-2 border-2 border-[#00A9E8] rounded-[15px] focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    {errors.email.message}
                  </span>
                )}
              </div>

              {/* Number Field */}
              <div>
                <input
                  id="name"
                  type="tel"
                  placeholder="Phone / WhatsApp"
                  {...register("name", { required: "Name is required" })}
                  className="w-full h-[60px] mt-1 px-3 py-2 border-2 border-[#00A9E8] rounded-[15px] focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                {errors.name && (
                  <span className="text-red-500 text-sm">
                    {errors.name.message}
                  </span>
                )}
              </div>

              {/* Message Field */}
              <div>
                <textarea
                  id="message"
                  placeholder="Your Message"
                  {...register("message", { required: "Message is required" })}
                  rows="4"
                  className="w-full mt-1 px-3 py-2 border-2 border-[#00A9E8] rounded-[15px] focus:outline-none focus:ring-2 focus:ring-blue-400"
                ></textarea>
                {errors.message && (
                  <span className="text-red-500 text-sm">
                    {errors.message.message}
                  </span>
                )}
              </div>

              {/* Submit Button */}
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
                    Submit
                  </span>
                </a>
              </div>
            </div>
            </form>
          </div>
        </div>

        <div className=" container mx-auto max-w-screen-xl my-30">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d701.0432617503754!2d106.65250108970972!3d-6.303182023946195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fbecde2cc1b1%3A0xa154bae00576df77!2sPT.%20Global%20Zerone%20Digital!5e0!3m2!1sid!2sid!4v1762569849687!5m2!1sid!2sid"
            width="100%"
            height="400px"
            style={{ borderRadius: "20px" }}
          />
        </div>
      </div>
    </>
  );
}
