import { 
    FaAdn
  } from "react-icons/fa";
import {
    MenuIcon
} from "@heroicons/react/solid";
import { useState } from "react";
function Header({Sidebar}) {
    const [sidebar, setSidebar] = useState(true)

    const togle = () => {
        setSidebar(!sidebar) 
        
    }
    console.log("header",sidebar)

    Sidebar(sidebar);

    return (

            <div className="bg-gray-50 flex  border-b-[1px]  left-0 right-0 ">
                <div className="flex items-center space-x-4 p-4 w-1/5">
                    <div>
                        <MenuIcon className="h-5 w-5 text-gray-600 hover:cursor-pointer"  onClick={togle} />
                    </div>
                    <div className="text-sm text-gray-400">Home</div>
                </div>
                <div className={`${sidebar ? "flex items-center space-x-4 p-4 w-4/5" : "hidden"}`}>
                    <div>
                        <MenuIcon className="h-5 w-5 text-gray-600 hover:cursor-pointer"  onClick={togle} />
                    </div>
                    <div className="text-sm text-gray-400">Home</div>
                </div>
            </div>
    
    )
}

export default Header
