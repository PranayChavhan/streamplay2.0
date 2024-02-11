"use client";

import React, { useState } from 'react';

const CreateOrganisation = () => {
  const [formData, setFormData] = useState({
    organisationName: '',
    organisationEmail: '',
    location: '',
    organizerName: '',
    organizerContact: '',
    organizerEmail: '',
    profilePic: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value});
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Add logic to send the form data to your server or perform other actions.
  };


  
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-10">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="wow fadeInUp shadow-three dark:bg-gray-dark mb-12 rounded-lg bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Register Your Organisation
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="-mx-4 flex flex-wrap mt-20">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Organisation Name
                      </label>
                      <input
                      value={formData.organisationName}
                      onChange={handleChange}
                        type="text"
                        placeholder="Enter your organisation name"
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-lg border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>


                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Organisation Email
                      </label>
                      <input
                      value={formData.organisationEmail}
                      onChange={handleChange}
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your email"
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-lg border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>



                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Location
                      </label>
                      <input
                      value={formData.location}
                      onChange={handleChange}
                        type="text"
                        placeholder="Enter your organisation location"
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-lg border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>


                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Organizer name
                      </label>
                      <input
                      value={formData.organizerName}
                      onChange={handleChange}
                        type="text"
                        placeholder="Enter organizer name"
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-lg border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>


                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Organizer contact number
                      </label>
                      <input
                      value={formData.organizerContact}
                      onChange={handleChange}
                        type="text"
                        placeholder="Enter organizer contact number"
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-lg border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>


                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Organizer email
                      </label>
                      <input
                      value={formData.organizerEmail}
                      onChange={handleChange}
                        type="text"
                        placeholder="Enter organizer email"
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-lg border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>



                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="porfilepic"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                      Organisation Profile Picture
                      </label>
                      <input
                      value={formData.profilePic}
                      onChange={handleChange}
                        type="file"
                        name="porfilepic"
                        id="porfilepic"
                        placeholder="Select Your Organisation Profile Pic"
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-lg border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Organisation Description
                      </label>
                      <textarea
                      value={formData.description}
                      onChange={handleChange}
                        name="message"
                        id="message"
                        rows={5}
                        placeholder="Enter Description"
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full resize-none rounded-lg border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button type="submit" className="shadow-submit dark:shadow-submit-dark rounded-lg bg-blue-700 px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CreateOrganisation