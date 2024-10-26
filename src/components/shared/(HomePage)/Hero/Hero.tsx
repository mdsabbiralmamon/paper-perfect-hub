import { useSession } from 'next-auth/react';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import './Hero.css';

export default function Hero() {

  const { data: session } = useSession();
  return (
    <div className="">
      <section className="bg-[#FCF8F1] bg-opacity-30 py-10 mt-10 sm:pt-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 ">
          <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <p className="text-xs font-semibold text-[#1660a0] uppercase">Get Your Academic Work Done Perfectly</p>
              <h1 className="text-3xl font-bold text-black lg:mt-8 md:text-5xl xl:text-[54px] font-lora"><span className='text-[#f4ae14] font-lora'>Assignments, Reports, Presentations, and Excel Sheets</span>
              <br />We’ve Got You Covered.</h1>
              <p className="text-xs mt-4 text-gray-600 lg:mt-8 sm:text-xl">Simplify your studies with professional help, anytime you need it.</p>
              {
                session ? 
                <></> :
                <Link href="/signin" title="" className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-yellow-400" role="button">
                  Join for free
                  <svg className="w-6 h-6 ml-8 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </Link>
              }

            </div>

            {/* <div className='bg-transparent rounded-full'> */}
              <Image
                width={600}
                height={400}
                src="/hero.png"
                alt="Hero Image"
                className="image-shadow" 
              />
            {/* </div> */}
          </div>
        </div>
      </section>
    </div>
  )
}
