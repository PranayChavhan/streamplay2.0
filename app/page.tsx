import React from 'react'
import { Outfit } from 'next/font/google'
import HeroHeader from '../components/hero/heroheader'

const outfit = Outfit({ subsets: ['latin'] })


const Page = () => {
    return (
        <section className={`${outfit.className} bg-[url('/games/hero-bg.jpg')]`} >
            <div className={` bg-[#060435dd]`} >
                {/* Header */}
                <HeroHeader />
                {/*  Hero Section */}
                <div className="container py-14 flex max-w-screen-2xl font-inter items-center justify-center ">
                    <div className="md:w-1/2">
                        <div className="uppercase text-sky-300">STREAMPLAY</div>
                        <h1 className="text-gray-200 text-5xl my-2 leading-relaxed">Elevating <span className='text-sky-300 hover:text-cyan-300'>Esports</span> Management to New Heights</h1>
                        <button className="bg-gray-200/20 text-gray-200 px-5 py-3 rounded-md mt-4">View Tournaments</button>
                    </div>
                    <div className="md:w-1/2 h-[40rem] px-16 overflow-hidden ">
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
                                <div className="w-full h-32"></div>
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
                                <div className="w-full h-32"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Page