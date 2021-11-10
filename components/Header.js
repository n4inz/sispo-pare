import React, { useState } from 'react';

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
                    <label>HOME</label>
                    <label>VIDEO</label>
                    <label>KEGIATAN</label>
                    <label>HUBUNGI KAMI</label>
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
                <div className=" hover:cursor-pointer hover:underline hover:text-gray-100">HOME</div>
                <div className=" hover:cursor-pointer hover:underline hover:text-gray-100">VIDEO</div>
                <div className=" hover:cursor-pointer hover:underline hover:text-gray-100">KEGIATAN</div>
                <div className=" hover:cursor-pointer hover:underline hover:text-gray-100">HUBUNGI KAMI</div>
            </div>

        </div>

        
    )
}

export default Header