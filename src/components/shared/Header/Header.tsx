'use client'

import React from 'react'
import Navbar from '../Navbar/Navbar'
import { usePathname } from 'next/navigation';

export default function Header() {
    const path = usePathname();
  return (
    <header>
        <Navbar />
        {
            path === '/' ? <div>banner</div> : null
        }
    </header>
  )
}
