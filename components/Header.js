import React from 'react';

import {
    BadgeCheckIcon,
    ChartBarIcon,
    GlobeAltIcon

} from "@heroicons/react/solid";
function Header() {
    return (
        <div className="grid grid-cols-2 bg-blue-500 p-4 shadow-2xl drop-shadow-lg ">
            <div className="flex space-x-6 text-white text-lgm">
                <label>PAREPARE-KU</label>
                <label>HOME</label>
                <label>VIDEO</label>
                <label>KEGIATAN</label>
                <label>HUBUNGI KAMI</label>
            </div>

            <div className="flex justify-end space-x-4">
                <BadgeCheckIcon className="h-5 w-5 text-white"/>
                <ChartBarIcon className="h-5 w-5 text-white"/>
                <GlobeAltIcon className="h-5 w-5 text-white"/>
            </div>

        </div>

        
    )
}

export default Header