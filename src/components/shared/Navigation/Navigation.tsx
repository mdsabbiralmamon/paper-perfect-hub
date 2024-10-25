"use client"

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FaHome } from "react-icons/fa";

const Navigation = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(Boolean); // Split path into segments and remove empty strings

  return (
    <nav className="flex md:m-24 mt-20 ml-6 items-center text-gray-500 space-x-2">
      {/* Home icon with link to the root */}
      <Link href="/">
        <FaHome className="text-xl" />
      </Link>
      <span>/</span>

      {/* Generate Navigation links */}
      {pathSegments.map((segment, index) => {
        const href = '/' + pathSegments.slice(0, index + 1).join('/');
        return (
          <span key={index} className="flex items-center space-x-2">
            <Link href={href}>
              <span className="capitalize">{segment}</span>
            </Link>
            {index < pathSegments.length - 1 && <span>/</span>}
          </span>
        );
      })}
    </nav>
  );
};

export default Navigation;