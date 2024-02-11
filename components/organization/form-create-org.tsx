"use client";
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const FormCreateOrg = () => {

  //router instance
  const router = useRouter();


  const [formData, setFormData] = useState({
    name: '',
    description: '',
    email: '',
    location: '',
    imageUrl: '',
    foundingDate: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    try {
      e.preventDefault();
      console.log('Form Data:', formData);

      //create a new Date
      const date = new Date();
      formData.foundingDate = date.toISOString();
      //save to database at post at orhganization/create
      const body = { ...formData };
      const data = await fetch('/api/organization/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      //redirect to the organization page
      router.push('/organization');
      console.log("Response Here is:")
      console.log(data)
    } catch (error) {
      console.error(error);
    }
  };



  return (
    <>
      <h1 className=" text-2xl font-semibold my-3">Create Organization</h1>
      <div className="-mx-4 flex flex-wrap">

        <div className="lg:w-5/12 xl:w-4/12 py-24">
          <img src="/gamingboy.svg" alt="/gamingboy" />
        </div>
        <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
          <div
            className="wow fadeInUp shadow-three dark:bg-gray-dark mb-12 rounded-lg px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
            data-wow-delay=".15s
        "
          >
            <form onSubmit={handleSubmit}>
              <div className="-mx-4 flex flex-wrap">
                <div className="w-full px-4 md:w-1/2">
                  <div className="mb-8">
                    <label
                      htmlFor="name"
                      className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      Your Organisation Name
                    </label>
                    <input
                      value={formData.name}
                      onChange={handleChange}
                      type="text"
                      name="name"
                      placeholder="Enter your organisation name"
                      className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-lg border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-sky-300 dark:border-transparent dark:bg-[#2C303B] dark:focus:border-sky-300 dark:focus:shadow-none"
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
                      value={formData.email}
                      onChange={handleChange}
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter your email"
                      className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-lg border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-sky-300 dark:border-transparent dark:bg-[#2C303B] dark:focus:border-sky-300 dark:focus:shadow-none"
                    />
                  </div>
                </div>
                <div className="w-full px-4 md:w-1/2">
                  <div className="mb-8">
                    <label
                      htmlFor="name"
                      className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      Location (City)
                    </label>
                    <input
                      value={formData.location}
                      onChange={handleChange}
                      name="location"
                      type="text"
                      placeholder="Enter your organisation location"
                      className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-lg border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-sky-300 dark:border-transparent dark:bg-[#2C303B] dark:focus:border-sky-300 dark:focus:shadow-none"
                    />
                  </div>
                </div>

                <div className="w-full px-4 md:w-1/2">
                  <div className="mb-8">
                    <label
                      htmlFor="name"
                      className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      Image URL
                    </label>
                    <input
                      value={formData.imageUrl}
                      onChange={handleChange}
                      type="text"
                      name="imageUrl"
                      placeholder="Enter organizer contact number"
                      className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-lg border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-sky-300 dark:border-transparent dark:bg-[#2C303B] dark:focus:border-sky-300 dark:focus:shadow-none"
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
                      name="description"
                      id="description"

                      rows={5}
                      placeholder="Enter Description"
                      className="border-stroke dark:text-body-color-dark dark:shadow-two w-full resize-none rounded-lg border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-sky-300 dark:border-transparent dark:bg-[#2C303B] dark:focus:border-sky-300 dark:focus:shadow-none"
                    ></textarea>
                  </div>
                </div>
                <div className="w-full px-4">
                  <button type="submit" className="shadow-submit dark:shadow-submit-dark rounded-full bg-blue-500 px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

      </div>
    </>
  )
}

export default FormCreateOrg