'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import './Navbar.css';

export default function Navbar() {
    const { data: session } = useSession();
    const router = useRouter();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollTop, setLastScrollTop] = useState(0);

    const navLinks = [
        { title: 'Home', href: '/' },
        { title: 'About', href: '/about' },
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
        <div className={`navbar bg-white shadow-lg ${isScrolled ? 'navbar-fixed' : 'fixed top-0'} ${!isVisible ? 'navbar-hidden' : ''}`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {
                            navLinks.map((navLink) => <li key={navLink.title}><Link href={navLink.href}>{navLink.title}</Link></li>)
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">PaperPerfect Hub</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navLinks.map((navLink) => <li key={navLink.title}><Link href={navLink.href}>{navLink.title}</Link></li>)
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    session ? (
                        <div className="flex items-center">
                            <span className="mr-2">{session.user?.name}</span>
                            <button onClick={() => signOut()} className="btn btn-ghost">Sign Out</button>
                        </div>
                    ) : (
                        <button onClick={() => router.push('signin')} className="btn btn-ghost">Sign In</button>
                    )
                }
            </div>
        </div>
    )
}
