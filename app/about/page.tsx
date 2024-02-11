
import React from "react";
import { Outfit } from "next/font/google";
import HeroHeader from "@/components/hero/heroheader";
import Image from "next/image";

const outfit = Outfit({ subsets: ["latin"] });



const AboutPage = () => {
  return (

   <>
   
   
   <section className=" bg-slate-900 ">
   <HeroHeader/>
        <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-6 md:px-6">
            <div className="flex flex-wrap items-center">
                <div className="w-full px-4 mb-10 xl:w-1/2 lg:mb-8">
                    <div className="flex flex-wrap">
                        <div className="w-full px-4 md:w-1/2">
                            <img src="https://www.dotmagazine.online/_Resources/Persistent/8/a/b/2/8ab2ced6db72fde6d6ddf3a751a925ba2b755651/iStock-1010650382_WEB-720x405.jpeg" alt=""
                                className="object-cover w-full mb-6 rounded-lg h-80"/>
                            <img src="https://i.pcmag.com/imagery/roundups/06aZpvBQZ867G11u8zPWqox-5..v1595426570.jpg" alt=""
                                className="object-cover w-full rounded-lg h-80"/>
                        </div>
                        <div className="w-full px-4 md:w-1/2 xl:mt-11">
                            <img src="https://i0.wp.com/www.alphr.com/wp-content/uploads/2017/04/video_game_streaming_-_overwatch_gameplay.jpg?fit=569%2C320&ssl=1" alt=""
                                className="object-cover w-full mb-6 rounded-lg h-80"/>
                            <img src="https://media.istockphoto.com/id/1010650450/photo/back-view-shot-of-the-beautiful-professional-gamer-girl-playing-in-online-first-person.jpg?s=612x612&w=0&k=20&c=n_joNYAQ0E3rhUe5j-UgBoaTw2u4e2QN_Yo1HQvNbU4=" alt=""
                                className="object-cover w-full rounded-lg h-80"/>
                        </div>
                    </div>
                </div>
                <div className="w-full px-4 mb-10 xl:w-1/2 lg:mb-8">
                    <span className="text-sm font-semibold  text-blue-400">Why choose us</span>
                    <h2 className="mt-2 mb-4 text-2xl font-bold  text-gray-300">
                        We are providing a better facility
                    </h2>
                    <p className="mb-4 text-base leading-7  text-gray-400">
                    Our mission is to empower tournament organizers, teams, and players with the tools they need to succeed in the fast-paced world of esports. Whether you're a seasoned professional or just starting out, our platform offers a comprehensive suite of features designed to streamline tournament management and enhance the overall esports experience.
                    </p>
                    <ul className="mb-10">
                        <li className="flex items-center mb-4 text-base  text-gray-400">
                            <span className="mr-3  text-blue-400 ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="w-6 h-6 bi bi-1-circle-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z" />
                                </svg>
                            </span>
                            seamless team registration to efficient match scheduling
                        </li>
                        <li className="flex items-center mb-4 text-base  text-gray-400">
                            <span className="mr-3  text-blue-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="w-6 h-6 bi bi-2-circle-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM6.646 6.24c0-.691.493-1.306 1.336-1.306.756 0 1.313.492 1.313 1.236 0 .697-.469 1.23-.902 1.705l-2.971 3.293V12h5.344v-1.107H7.268v-.077l1.974-2.22.096-.107c.688-.763 1.287-1.428 1.287-2.43 0-1.266-1.031-2.215-2.613-2.215-1.758 0-2.637 1.19-2.637 2.402v.065h1.271v-.07Z" />
                                </svg>
                            </span>
                            live streaming integration
                        </li>
                        <li className="flex items-center mb-4 text-base  text-gray-400">
                            <span className="mr-3  text-blue-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="w-6 h-6 bi bi-3-circle-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-8.082.414c.92 0 1.535.54 1.541 1.318.012.791-.615 1.36-1.588 1.354-.861-.006-1.482-.469-1.54-1.066H5.104c.047 1.177 1.05 2.144 2.754 2.144 1.653 0 2.954-.937 2.93-2.396-.023-1.278-1.031-1.846-1.734-1.916v-.07c.597-.1 1.505-.739 1.482-1.876-.03-1.177-1.043-2.074-2.637-2.062-1.675.006-2.59.984-2.625 2.12h1.248c.036-.556.557-1.054 1.348-1.054.785 0 1.348.486 1.348 1.195.006.715-.563 1.237-1.342 1.237h-.838v1.072h.879Z" />
                                </svg>
                            </span>
                            real-time score tracking
                        </li>
                        <li className="flex items-center mb-4 text-base  text-gray-400">
                            <span className="mr-3  text-blue-400 ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="w-6 h-6 bi bi-4-circle-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM7.519 5.057c-.886 1.418-1.772 2.838-2.542 4.265v1.12H8.85V12h1.26v-1.559h1.007V9.334H10.11V4.002H8.176c-.218.352-.438.703-.657 1.055ZM6.225 9.281v.053H8.85V5.063h-.065c-.867 1.33-1.787 2.806-2.56 4.218Z" />
                                </svg>
                            </span>
                            platform provides everything you need to organize
                        </li>
                    </ul>
                    <a href="#"
                        className="px-4 py-2 text-gray-100  rounded-md bg-blue-400  hover:bg-blue-600">
                        Learn more
                    </a>
                </div>
            </div>
        </div>






        <section className="text-gray-300 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="text-2xl font-medium title-font mb-4 text-gray-300">OUR TEAM</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://avatars.githubusercontent.com/u/85397500?s=400&u=9f596e30e737d3066f7900e842bb7493e9f2a783&v=4"/>
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-gray-200">Pranay Chavhan</h2>
            <h3 className="text-gray-500 mb-3">Full stack Developer</h3>
            <p className="mb-4">PICT Pune</p>
            <span className="inline-flex">
              <a className="text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://avatars.githubusercontent.com/u/69710917?v=4"/>
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-gray-200">Ayush Bulbule</h2>
            <h3 className="text-gray-500 mb-3">Full stack Developer</h3>
            <p className="mb-4">PICT Pune</p>
            <span className="inline-flex">
              <a className="text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://avatars.githubusercontent.com/u/111428696?v=4"/>
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-gray-200">Yadhnesh Gangurde</h2>
            <h3 className="text-gray-500 mb-3">Frontend Developer</h3>
            <p className="mb-4">PICT Pune</p>
            <span className="inline-flex">
              <a className="text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://avatars.githubusercontent.com/u/121752066?v=4"/>
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-gray-200">Sumit Suryawanshi</h2>
            <h3 className="text-gray-500 mb-3">ML Developer</h3>
            <p className="mb-4">PICT Pune</p>
            <span className="inline-flex">
              <a className="text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>





    </section>
   
   
   
   </>
  );
};

export default AboutPage;