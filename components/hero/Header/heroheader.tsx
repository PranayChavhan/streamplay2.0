import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const HeroHeader = () => {
  return (
    <div className="md:py-4 md:px-10">
      <div className="flex items-center py-2 justify-center gap-2 md:gap-x-8">


        <Link href={'organization'} className='tracking-wider text-xs md:text-sm'>
          Organization
        </Link>
        <Link href={'tournaments'} className='tracking-wider text-xs md:text-sm'>
          About Us
        </Link>
        <div className="w-16 md:w-28 h-16 md:h-28">
          <Link href={'/'}>
            <Image src="/hero-img.png" alt="logo" width={500} height={500} />
          </Link>
        </div>
        <Link href={'tournaments'} className='tracking-wider text-xs md:text-sm'>
          Tournaments
        </Link>
        <Link href={'tournaments'} className='tracking-wider text-xs md:text-sm'>
          Contact Us
        </Link>

      </div>
    </div>
  )
}

export default HeroHeader