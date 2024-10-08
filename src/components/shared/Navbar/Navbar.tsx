'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import './Navbar.css';

export default function Navbar() {
    const { data: session } = useSession();
    // console.log(session.user);

    const router = useRouter();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollTop, setLastScrollTop] = useState(0);

    const navLinks = [
        { title: 'Home', href: '/' },
        { title: 'Resource', href: '/resource' },
        { title: 'Contact', href: '/contact' },
    ]

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop && lastScrollTop < 500) {
                setIsVisible(false);
            }
            else {
                setIsVisible(true);
            }
            setLastScrollTop(scrollTop);
            setIsScrolled(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollTop]);

    return (
        <div className={`navbar bg-white lg:px-20 ${isScrolled ? 'navbar-fixed' : 'fixed top-0'} ${!isVisible ? 'navbar-hidden' : ''}`}>
            <div className="navbar-start">
                <div className="dropdown mr-2">
                    <div tabIndex={0} role="button" className="lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className=" space-y-2 menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {
                            navLinks.map((navLink) => <li className='group font-bold transition-all duration-100 ease-in-out' key={navLink.title}><Link className='bg-left-bottom ml-1 bg-gradient-to-r from-[#1660a0] to-[#1660a0] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out hover:text-[#1660a0]' href={navLink.href}>{navLink.title}</Link></li>)
                        }
                    </ul>
                </div>
                <Link href={'/'} className='flex items-center space-x-2'>
                    <Image
                        src='/logo.png'
                        alt='logo'
                        width={40}
                        height={40}
                    />
                    <h1 className='text-sm md:text-lg font-semibold text-black'>Paper Perfect Hub</h1>
                </Link>
            </div>
            <div className=" hidden lg:flex">
                <ul className="space-x-10 menu-horizontal px-1">
                    {
                        navLinks.map((navLink) => <li className='group font-bold transition-all duration-100 ease-in-out' key={navLink.title}><Link className='bg-left-bottom ml-1 bg-gradient-to-r from-[#1660a0] to-[#1660a0] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out hover:text-[#1660a0]' href={navLink.href}>{navLink.title}</Link></li>)
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    session ? (
                        <div className="flex items-center cursor-pointer">
                            <Link className=' mr-4' href={'/user/dashboard'}>
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="btn btn-ghost btn-circle avatar"
                                >
                                    <div className="w-10 rounded-full">
                                        <Image
                                            src={session.user?.image}
                                            alt={session.user?.name}
                                            width={40}
                                            height={40}
                                        />
                                    </div>
                                </div>
                            </Link>
                            <button
                                onClick={() => signOut()}
                                className="px-6 py-2 text-black rounded-full font-semibold bg-yellow-300 shadow-yellow-300 "
                            >
                                Sign Out
                            </button>
                        </div>

                    ) : (
                        <button onClick={() => router.push('signin')} className="px-6 py-2 font-semibold text-black rounded-full bg-yellow-300  shadow-2xl shadow-yellow-300 ">Sign In</button>
                    )
                }
            </div>
        </div>
    )
}
