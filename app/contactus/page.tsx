import React from "react";
import { Outfit } from "next/font/google";
import { FaFacebook, FaTwitter, FaInstagram,FaGithub  } from 'react-icons/fa'
import HeroHeader from "@/components/hero/heroheader";


const outfit = Outfit({ subsets: ["latin"] });

const ContactUsPage = () => {
  return (
    <section className={`${outfit.className} bg-[url('/images/hero-bg.jpg')]`}>
      <div className={`p-0 bg-slate-900`}>
        <HeroHeader/>
        <div className=" container flex  max-w-screen-2xl items-center justify-center  h-screen -mt-32">
          <div className="md:w-1/2">
            <h1 className="my-2 text-5xl leading-relaxed text-gray-200">
              <span className="text-sky-300 hover:text-cyan-300">
                Contact Us
              </span>{" "}
            </h1>
            <div>
              <form>
                <div className="-mx-4 mt-20 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-white"
                      >
                        Your Organisation Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your organisation name"
                        className="w-full rounded-lg border border-stroke bg-transparent px-6  py-3 text-base text-body-color-dark  shadow-two outline-none focus:border-primary focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-white"
                      >
                        Your Organisation Email
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full rounded-lg border border-stroke bg-transparent px-6  py-3 text-base text-body-color-dark  shadow-two outline-none focus:border-primary focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="font-mediumtext-white mb-3 block text-sm"
                      >
                        Organisation Description
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Enter Description"
                        className="w-full rounded-lg border border-stroke bg-transparent px-6  py-3 text-base text-body-color-dark  shadow-two outline-none focus:border-primary focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4 flex items-center justify-center">
                    <button className=" rounded-lg bg-sky-500 px-6 py-2 text-base font-medium text-white shadow-submit-dark duration-300 hover:bg-sky-400">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
              <div className="flex items-center justify-center mt-4">
                <span className="w-1/3 border-b border-gray-300"></span>
                <span className="mx-4 text-gray-500">
                  Or, connect with us with
                </span>
                <span className="w-1/3 border-b border-gray-300"></span>
              </div>
              <div className="flex items-center justify-center mt-4">
                 <FaFacebook className="mx-2 text-blue-500 w-8 h-8 hover:h-10 hover:w-10" />
                 <FaTwitter className="mx-2 text-blue-500 w-8 h-8 hover:h-10 hover:w-10" />
                 <FaInstagram className="mx-2 text-blue-500 w-8 h-8 hover:h-10 hover:w-10" />
                 <FaGithub className="mx-2 text-blue-500 w-8 h-8 hover:h-10 hover:w-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsPage;