import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    const navLinks = [
        { title: 'Home', href: '/' },
        { title: 'About', href: '/about' },
        { title: 'Contact', href: '/contact' },
    ]

    return (
        <div className="navbar bg-white text-black border border-b-black">
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
                            navLinks.map( (navLink) => <li key={navLink.title}><Link href={navLink.href}>{navLink.title}</Link></li> )
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Paper Perfect Hub</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navLinks.map( (navLink) => <li key={navLink.title}><Link href={navLink.href}>{navLink.title}</Link></li> )
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Login</a>
            </div>
        </div>
    )
}