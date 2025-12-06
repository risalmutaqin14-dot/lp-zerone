import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Helmet } from 'react-helmet-async';
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // state untuk pesan feedback
  const [submitMessage, setSubmitMessage] = useState(null);
  const [isError, setIsError] = useState(false);

  const onSubmit = async (data) => {
    try {
      // simulasi submit ke API
      console.log("Form data:", data);

      // kalau berhasil
      setSubmitMessage(
        "✅ Thank you! Your message has been sent successfully. Our team will get back to you soon."
      );
      setIsError(false);
    } catch (err) {
      // kalau gagal
      setSubmitMessage("❌ Oops, something went wrong. Please try again.");
      setIsError(true);
    }
  };

  return (
    <>
    <Helmet>
        <title>Hubungi Kami | Zerone Global Digital Solution</title>
        <meta 
          name="description" 
          content="Hubungi Zerone Global untuk pertanyaan proyek, dukungan teknis, atau kolaborasi. Temukan kontak telepon, WhatsApp, email, dan alamat kantor kami di BSD City, Indonesia." 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.zerone.id/contact" />
        {/* Tambahan: Opsional untuk Social Media (Open Graph) */}
        <meta property="og:title" content="Hubungi Zerone Global untuk Solusi Digital Terbaik" />
        <meta property="og:description" content="Kirim pesan atau hubungi kami langsung via WhatsApp/Telepon. Kami siap membantu proyek digital Anda." />
        <meta property="og:url" content="https://www.zerone.id/contact" />
      </Helmet>

      
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
            <div className="lg:w-2/3 align-middle lg:pl-6">
              {/* Phone */}
              <div className="flex mt-8 items-center">
                <span className="mr-4 flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-black">
                  <FontAwesomeIcon icon={faPhone} className="text-lg" />
                </span>
                <a
                  href="tel:+622127846241"
                  className="button-text text-[18px] hover:text-blue-600 transition-colors"
                >
                  (021) 2784 6241
                </a>
              </div>

              {/* WhatsApp */}
              <div className="flex mt-3 items-center">
                <span className="mr-4 flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-black">
                  <FontAwesomeIcon icon={faWhatsapp} className="text-lg" />
                </span>
                <a
                  href="https://wa.me/6281370002999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-text text-[18px] hover:text-blue-600 transition-colors"
                >
                  +62 813-7000-0299
                </a>
              </div>

              {/* Email */}
              <div className="flex mt-3 items-center">
                <span className="mr-4 flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-black">
                  <FontAwesomeIcon icon={faEnvelope} className="text-lg" />
                </span>
                <a
                  href="mailto:info@zerone.id"
                  className="button-text text-[18px] hover:text-blue-600 transition-colors"
                >
                  info@zerone.id
                </a>
              </div>

              {/* Location */}
              <div className="flex mt-3 items-start">
                <span className="w-25 mr-4 flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-black">
                  <FontAwesomeIcon icon={faLocationDot} className="text-lg" />
                </span>
                <a
                  href="https://www.google.com/maps/place/My+Republic+Plaza,+Wing+A,+Zone+6+Green+Office+Park,+BSD+City,+Tangerang,+Banten,+Indonesia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-text text-[18px] hover:text-blue-600 transition-colors"
                >
                  My Republic Plaza, Wing A, Zone 6 Green Office Park, BSD City,
                  Tangerang, Banten – Indonesia
                </a>
              </div>
            </div>
          </div>
          {/* Form */}
          <div className="p-6 rounded-[20px] shadow-md bg-[#F5F9FF]">
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
                  placeholder="Email"
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

              {/* Phone Field */}
              <div>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Phone / WhatsApp"
                  {...register("phone", { required: "Phone is required" })}
                  className="w-full h-[60px] mt-1 px-3 py-2 border-2 border-[#00A9E8] rounded-[15px] focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                {errors.phone && (
                  <span className="text-red-500 text-sm">
                    {errors.phone.message}
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
              <div className="flex mt-6 ">
                <button
                  type="submit"
                  className="w-[160px] transition duration-300 ease-in-out hover:scale-105 flex items-center border-2 bg-[linear-gradient(90deg,#00BBD7,#0092D7,#6E92D7)] border-[#00A9E8] rounded-[50px] px-4 py-3"
                >
                  <span className="button-icon flex items-center bg-white rounded-full p-1 mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20px"
                      viewBox="0 -960 960 960"
                      width="20px"
                      fill="#0092d7"
                    >
                      <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
                    </svg>
                  </span>
                  <span className="text-white pl-2 font-medium">Submit</span>
                </button>
              </div>

              {/* Feedback Message */}
              {submitMessage && (
                <div
                  className={`mt-4 text-sm font-medium ${
                    isError ? "text-red-600" : "text-green-600"
                  }`}
                >
                  {submitMessage}
                </div>
              )}
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
