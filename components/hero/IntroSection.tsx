import React from 'react'
import Link from 'next/link'
import HeroHeader from './Header/heroheader'
import { SignInButton, currentUser } from '@clerk/nextjs'

const IntroSection = async () => {
    const user = await currentUser();

    console.log("User:")
    console.log(user);
    return (
        <section className={`bg-[url('/games/hero-bg.jpg')]`} >
            <div className={`bg-[#060435dd]`} >
                {/* Header */}
                <HeroHeader />
                {/*  Hero Section */}
                <div className="container md:py-6 flex-col-reverse md:flex-row flex max-w-screen-xl font-inter items-center justify-center ">
                    <div className="md:w-1/2">
                        <div className="uppercase text-sky-300">STREAMPLAY</div>
                        <h1 className="text-gray-200 text-3xl md:text-5xl my-2 leading-[10rem] font-semibold" style={{ lineHeight: 1.3 }}>Elevating <span className='text-sky-300 hover:text-cyan-300'>Esports</span> Management to New Heights</h1>
                        <div className="">
                            {!user && (
                                <SignInButton>
                                    <button className="bg-gray-200/20 text-gray-200 px-5 py-3 rounded-md">Login</button>
                                </SignInButton>
                            )}
                        </div>

                        {
                            !!user && (
                                <div className="mt-8">
                                    <Link href={'/play'} className="bg-gray-200/20 text-gray-200 px-5 py-3 rounded-md">View Tournaments</Link>
                                </div>
                            )
                        }
                    </div>
                    <div className="md:w-1/2 h-[34rem] md:px-16 overflow-hidden ">
                        {/* scrolling image grid  */}
                        <div className="scroll-grid grid grid-cols-2 h-[46rem] gap-6 relative">
                            <div className="grid gap-6 ">
                                <div className="w-full">
                                    <img src="/games/cos.jpg" alt="COD" className="w-full rounded-xl" />
                                </div>
                                <div className="w-full">
                                    <img src="/games/cod.jpeg" alt="COD" className="w-full rounded-xl" />
                                </div>
                                <div className="w-full">
                                    <img src="/games/ff.jpg" alt="COD" className="w-full rounded-xl" />
                                </div>
                                {/* <div className="w-full h-32"></div> */}
                            </div>
                            <div className="grid gap-6 ">
                                <div className="w-full">
                                    <img src="/games/valorent.jpg" alt="COD" className="w-full rounded-xl" />
                                </div>
                                <div className="w-full">
                                    <img src="/games/lol.jpg" alt="COD" className="w-full rounded-xl" />
                                </div>
                                <div className="w-full">
                                    <img src="/games/pubg.webp" alt="COD" className="w-full rounded-xl" />
                                </div>
                                {/* <div className="w-full h-32"></div> */}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>)
}

export default IntroSection