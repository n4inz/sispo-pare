import React, { useState } from 'react';
import Link from "next/link"
import {
    BadgeCheckIcon,
    ChartBarIcon,
    GlobeAltIcon,
    MenuIcon

} from "@heroicons/react/solid";
function Header() {

    const [dropDown, setDropDown] = useState(false)
    return (
        <div className="grid grid-cols-2 bg-blue-500 p-4 shadow-2xl drop-shadow-lg z-50 fixed left-0 right-0 top-0 ">
            <div className="flex space-x-6 text-white text-lgm">
                <label>PAREPARE-KU</label>
                <div className="hidden lg:inline space-x-6">
                    <Link href="/">
                        <label className="hover:cursor-pointer hover:underline hover:text-gray-500">HOME</label>
                    </Link>
                    <Link href="/videos">
                        <label className="hover:cursor-pointer hover:underline hover:text-gray-500">VIDEO</label>
                    </Link>
                    <Link href="/kegiatan">
                        <label className="hover:cursor-pointer hover:underline hover:text-gray-500">KEGIATAN</label>
                    </Link>
                    <Link href="/contact">
                        <label className="hover:cursor-pointer hover:underline hover:text-gray-500">HUBUNGI KAMI</label>
                    </Link>
                </div>
            </div>

            <div className="flex justify-end space-x-4">
                <div className="hidden lg:flex">
                    <BadgeCheckIcon className="h-5 w-5 text-white"/>
                    <ChartBarIcon className="h-5 w-5 text-white"/>
                    <GlobeAltIcon className="h-5 w-5 text-white"/>
                </div>
                <div className="lg:hidden hover:cursor-pointer" onClick={() => setDropDown(!dropDown)}>
                    <MenuIcon className="h-5 w-5 text-white" />
                </div>
            </div>
            <div className={`lg:hidden p-5 text-sm text-gray-100  ${!dropDown && 'hidden' }`}>
                <Link href="/">
                    <div className=" hover:cursor-pointer hover:underline hover:text-gray-100">HOME</div>
                </Link>
                <Link href="/videos">
                    <div className=" hover:cursor-pointer hover:underline hover:text-gray-100">VIDEO</div>
                </Link>
                <Link href="/kegiatan">
                    <div className=" hover:cursor-pointer hover:underline hover:text-gray-100">KEGIATAN</div>
                </Link>
                
                <Link href="/contact">
                    <div className=" hover:cursor-pointer hover:underline hover:text-gray-100">HUBUNGI KAMI</div>
                </Link>
                
            </div>

        </div>

        
    )
}

export default Header