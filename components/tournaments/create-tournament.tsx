'use client';
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import {
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog"

const CreateTournament = () => {
    // SState 
    const [org, setOrg] = useState([]);
    useEffect(() => {
        //fetych organisations
        const fetchOrg = async () => {
            console.log("Organization!!!")
            const res = await fetch('/api/organization/get')
            const data = await res.json()
            console.log(data)
            setOrg(data.organization);
        }

        fetchOrg();
    }, []);

    const router = useRouter();
    // id             String        @id @default(uuid())
    // title          String
    // description    String
    // organization   Organization? @relation(fields: [organizationId], references: [id]) // Association with Organization
    // startDate      DateTime
    // endDate        DateTime
    // rules          String
    // gameName       String
    // thumbnailUrl   String?
    // organizationId S

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        organization: '',
        startDate: '',
        endDate: '',
        gameName: '',
        thumbnailUrl: '',
        rules: '',
        foundingDate: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        console.log(formData);
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
            // const data = await fetch('/api/organization/create', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(body),
            // });

            // //redirect to the organization page
            // router.push('/organization');
            console.log("Response Here is:")
            console.log(body)
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>
                    <h4 className="text-xl">Host Tournament</h4>
                </DialogTitle>
                <DialogDescription>
                    <form onSubmit={handleSubmit}>
                        <div className="-mx-4 flex flex-wrap">
                            <div className="w-full px-4 md:w-1/2">
                                <div className="mb-8">
                                    <label
                                        htmlFor="name"
                                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                                    >
                                        Title
                                    </label>
                                    <input
                                        value={formData.title}
                                        onChange={handleChange}
                                        type="text"
                                        name="title"
                                        placeholder="Name"
                                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-lg border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-sky-300 dark:border-transparent dark:bg-[#2C303B] dark:focus:border-sky-300 dark:focus:shadow-none"
                                    />
                                </div>
                            </div>


                            <div className="w-full px-4 md:w-1/2">
                                <div className="mb-8">
                                    <label
                                        htmlFor="gameName"
                                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                                    >
                                        Game
                                    </label>
                                    <input
                                        value={formData.gameName}
                                        onChange={handleChange}
                                        type="gameName"
                                        name="gameName"
                                        id="gameName"
                                        placeholder="Enter your gameName"
                                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-lg border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-sky-300 dark:border-transparent dark:bg-[#2C303B] dark:focus:border-sky-300 dark:focus:shadow-none"
                                    />
                                </div>
                            </div>

                            <div className="w-full px-4 col-span-2">
                                <div className="mb-8">
                                    <label
                                        htmlFor="name"
                                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                                    >
                                        Image URL
                                    </label>
                                    <input
                                        value={formData.thumbnailUrl}
                                        onChange={handleChange}
                                        type="text"
                                        name="thumbnailUrl"
                                        placeholder="Enter thumbnail"
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
                                        Start Date
                                    </label>
                                    <input
                                        value={formData.startDate}
                                        onChange={handleChange}
                                        name="startDate"
                                        type="date"
                                        placeholder="Enter your organisation location"
                                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-lg border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-sky-300 dark:border-transparent dark:bg-[#2C303B] dark:focus:border-sky-300 dark:focus:shadow-none"
                                    />
                                </div>
                            </div> <div className="w-full px-4 md:w-1/2">
                                <div className="mb-8">
                                    <label
                                        htmlFor="name"
                                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                                    >
                                        End Date
                                    </label>
                                    <input
                                        value={formData.endDate}
                                        onChange={handleChange}
                                        name="endDate"
                                        type="date"
                                        placeholder="Enter your organisation location"
                                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-lg border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-sky-300 dark:border-transparent dark:bg-[#2C303B] dark:focus:border-sky-300 dark:focus:shadow-none"
                                    />
                                </div>
                            </div>


                            <div className="w-full px-4 ">
                                <div className="mb-8">
                                    <label
                                        htmlFor="name"
                                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                                    >
                                        Description
                                    </label>
                                    <input
                                        value={formData.description}
                                        onChange={handleChange}
                                        type="text"
                                        name="description"
                                        placeholder="Enter description"
                                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-lg border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-sky-300 dark:border-transparent dark:bg-[#2C303B] dark:focus:border-sky-300 dark:focus:shadow-none"
                                    />
                                </div>
                            </div>
                            <div className="w-full px-4">
                                <div className="mb-8">
                                    <label
                                        htmlFor="name"
                                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                                    >
                                        Select Organization
                                    </label>
                                    {
                                        org.length > 0 && (
                                            <select
                                                value={formData.organization}
                                                onChange={handleChange}
                                                onSelect={(e) => {
                                                    setFormData({ ...formData, organization: e.target!.value });
                                                }}
                                                name="organization"
                                                id="organization"
                                                className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-lg border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-sky-300 dark:border-transparent dark:bg-[#2C303B] dark:focus:border-sky-300 dark:focus:shadow-none"
                                            >
                                                <option value="">Select Organization</option>
                                                {
                                                    org.map((org: any, index: number) => (
                                                        <option key={index} value={org.id}>{org.name}</option>
                                                    ))
                                                }
                                            </select>
                                        )
                                    }
                                </div>
                            </div>
                            <div className="w-full px-4">
                                <div className="mb-8">
                                    <label
                                        htmlFor="message"
                                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                                    >
                                        Rules
                                    </label>
                                    <textarea
                                        value={formData.rules}
                                        onChange={handleChange}
                                        name="rules"
                                        id="rules"
                                        rows={5}
                                        placeholder="Enter Rules"
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
                </DialogDescription>
            </DialogHeader>
        </DialogContent>
    )
}

export default CreateTournament