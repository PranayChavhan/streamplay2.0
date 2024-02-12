import Link from 'next/link'
import React from 'react'
import { Outfit } from 'next/font/google'
import HeroHeader from '../components/hero/Header/heroheader'
import IntroSection from '@/components/hero/IntroSection'

const outfit = Outfit({ subsets: ['latin'] })


const Page = () => {
    return (
        <>
            {/* Main Hero Section */}
            <IntroSection />
        </>
    )
}

export default Page