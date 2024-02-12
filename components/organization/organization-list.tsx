'use client';
import React, { useEffect, useState } from 'react'

const OrganisationList = () => {
    const [orgs, setOrgs] = useState([]);

    useEffect(() => {
        const fetchOrg = async () => {

            console.log("Organization!!!")
            const res = await fetch('/api/organization/get')
            const data = await res.json()
            setOrgs(data.organization)
            console.log(data)
        }

        fetchOrg();

    }, []);

    return (
        <div>

            <h1 className=" text-2xl font-semibold my-3 mt-8">Your Organization's</h1>

            {
                !orgs.length && <p className="mb-4">You have not created any organization yet!!</p>
            }
            <div className="grid grid-cols-3 gap-8">
                {
                    !!orgs.length && orgs.map((org: any, index) => (
                        <div className="card px-4 py-3 flex  rounded-full bg-slate-800 shadow-three">
                            <div className="h-24 w-24 flex-shrink-0">
                                <img src={org?.imageUrl || ''} alt="Imag" className='w-full h-full rounded-full' />
                            </div>
                            <div className="flex-col flex px-4">
                                <h1>Name {org.name}</h1>
                                <p className='line-clamp-1'>{org.description}</p>
                                <p>Date: {org.foundingDate}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default OrganisationList