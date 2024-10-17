"use client"

import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { PiUserCircleFill } from "react-icons/pi";
import { FaUserEdit } from "react-icons/fa";
import { MdChromeReaderMode, MdOutlineReviews, MdAttachMoney, MdBookmarkAdded, MdPendingActions } from "react-icons/md";
import { IoMdWallet } from "react-icons/io";
import { HiUsers } from "react-icons/hi2";
import { usePathname } from 'next/navigation';
import Navigation from '@/components/shared/Navigation/Navigation';
const Page = () => {

    const { data: session } = useSession();

    const userLinks = [
        {
            title: 'Edit Profile',
            href: '/account/edit',
            icon: FaUserEdit
        },
        {
            title: 'My orders',
            href: '/account/order',
            icon: MdChromeReaderMode
        },
        {
            title: 'Transactions',
            href: '/account/transaction',
            icon: IoMdWallet
        },
        {
            title: 'Reviews',
            href: '/account/review',
            icon: MdOutlineReviews
        }
    ]


    const adminLinks = [
        {
            title: 'Complete Orders',
            href: '/account/total-order',
            icon: MdBookmarkAdded
        },
        {
            title: 'Pending Orders',
            href: '/account/new-order',
            icon: MdPendingActions
        },
        {
            title: 'Revenue',
            href: '/account/revenue',
            icon: MdAttachMoney
        },
        {
            title: 'Users',
            href: '/account/users',
            icon: HiUsers
        }
    ]

    const Breadcrumb = () => {
        const pathname = usePathname();
        const pathSegments = pathname.split('/').filter(Boolean);
    }

    return (

        <div>
            <Navigation />
            <div className='mt-0 max-w-5xl md:mx-auto mx-4 '>

                {/* User Section */}

                <div className='md:flex justify-between items-center'>
                    <div className='flex items-center gap-4'>
                        <PiUserCircleFill className='text-7xl' />
                        <div className='font-bold'>
                            <h1>Hello</h1>
                            <p>{session?.user?.name}</p>
                        </div>
                    </div>

                    {/* stats */}

                    <div className='flex justify-around items-center mt-4 md:mt-0 py-3 md:py-2 text-center border md:border-none'>

                        <div className="overflow-hidden w-full md:w-fit">
                            <div className="px-6">
                                <h4 className="text-lg lg:text-2xl font-bold text-gray-900">0</h4>
                                <p className="mt-1.5 text-xs md:text-sm font-medium leading-tight text-gray-500">Total Order</p>
                            </div>
                        </div>

                        <div className="overflow-hidden w-full md:w-fit">
                            <div className="px-6 border-l-2 md:border-red-500">
                                <h4 className="text-lg lg:text-2xl font-bold text-gray-900">0</h4>
                                <p className="mt-1.5 text-xs md:text-sm font-medium leading-tight text-gray-500">Total Order</p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Dashboard section for user */}

                <div className='grid grid-cols-3 lg:grid-cols-4 gap-4 mt-10 text-center'>
                    {userLinks.map(userLink => {
                        return (
                            <Link
                                key={userLink.title}
                                href={userLink.href}
                                className="flex flex-col items-center py-8 px-4 font-bold hover:border hover:border-blue-800 shadow-xl rounded-lg border">
                                <userLink.icon className="text-5xl text-[#3749bb] bg-blue-100 rounded-full p-2" />
                                <span className='text-sm m-0 mt-2'>{userLink.title}</span>
                            </Link>
                        )
                    })}

                    {adminLinks.map(userLink => {
                        return (
                            <Link
                                key={userLink.title}
                                href={userLink.href}
                                className="flex flex-col items-center py-8 px-4 font-bold hover:border hover:border-blue-800 shadow-xl rounded-lg border">
                                <userLink.icon className="text-5xl text-[#3749bb] bg-blue-100 rounded-full p-2" />
                                <span className='text-sm m-0 mt-2'>{userLink.title}</span>
                            </Link>
                        )
                    })}

                </div>
            </div>
        </div>



    );
};

export default Page;
