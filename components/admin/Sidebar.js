import { 
    FaAdn
  } from "react-icons/fa";
import {
    FolderOpenIcon,
    ChevronLeftIcon,
    ChevronDownIcon,
    ViewBoardsIcon

} from "@heroicons/react/solid";
import { useState } from "react";

function Sidebar({Sidebar}) {
    const [toggle, setToggle] = useState({
    
            "dashboard" : true,
            "berita" : false,
            "video" : false
      
    })

    

    
    const dropdown = (e, va) => {

        switch (e) {
            case "Dashboard":
                setToggle({
                    ...toggle,
                    "dashboard" : !toggle.dashboard,
                })
            break;
            case "Berita":
                setToggle({
                    ...toggle,
                    "berita" : !toggle.berita,
                })
            break;
            case "Video":
                setToggle({
                    ...toggle,
                    "video" : !toggle.video,
                })
            break;
        }
       
        // console.log(e)


       
    }

   

    
    return (
        
            // <div className={`${Sidebar ? "block" : "hidden"} hidden lg:block bg-gray-700 h-screen`}>
            <div className="bg-gray-700 ">
                <div className="flex  border-b-[1px] border-opacity-10 border-gray-50 p-2">
                    <FaAdn  className="w-8 h-8 text-gray-300 ml-4 "/>
                    <div className="p-1 text-gray-400 mb-1 "><p className="font-thin"> Admin</p></div>
                </div>
                
                <div className="">
                    <ul role="menu" className="p-5 ml-3">
                        <li>
                            <div className="flex items-center bg-blue-500 mb-1 hover:cursor-pointer hover:bg-gray-600 rounded-md" onClick={() => dropdown("Dashboard")}>
                                <FolderOpenIcon className="w-7 h-7 text-gray-100"/>
                                <span className="text-gray-300 p-2 font-light">Dashboard</span>
                                {toggle.dashboard ? (
                                
                                    <ChevronDownIcon className="w-5 h-5 text-gray-400 ml-16" />
                                ) : (
                                    <ChevronLeftIcon className="w-5 h-5 text-gray-400 ml-16" />
                                )}
                                
                            </div>
                            <ul className={`${toggle.dashboard ? "inline" : "hidden"}`}>
                                <li className="flex items-center space-x-2 p-1 bg-gray-300 hover:cursor-pointer hover:bg-gray-600 rounded-md">
                                    <div className="w-5 h-5 border-2 border-gray-500 rounded-full"/>
                                    <span className="text-gray-500">Banner v1</span>
                                </li>
                                <li className="flex items-center space-x-2 mb-2 mt-2 p-1 hover:cursor-pointer hover:bg-gray-600 rounded-md">
                                    <div className="w-5 h-5 border-2 border-gray-400 rounded-full"/>
                                    <span className="text-gray-400">Banner v2</span>
                                </li>
                                <li className="flex items-center space-x-2 -600 p-1 hover:cursor-pointer hover:bg-gray-600 rounded-md">
                                    <div className="w-5 h-5 border-2 border-gray-400 rounded-full"/>
                                    <span className="text-gray-400">Banner v3</span>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <div className="flex items-center mb-1 hover:cursor-pointer hover:bg-gray-600 rounded-md" onClick={() => dropdown("Berita")}>
                                <ViewBoardsIcon className="w-5 h-5 text-gray-100"/>
                                <span className="text-gray-300 p-2 font-light">Berita</span>

                                {toggle.berita ? (
                                
                                    <ChevronDownIcon className="w-5 h-5 text-gray-400 ml-28" />
                                ) : (
                                    <ChevronLeftIcon className="w-5 h-5 text-gray-400 ml-28" />
                                )}
                                
                               
                            </div>
                            <ul className={`${toggle.berita ? "inline" : "hidden"}`}>
                                <li className="flex items-center space-x-2 p-1 hover:cursor-pointer hover:bg-gray-600 rounded-md">
                                    <div className="w-5 h-5 border-2 border-gray-400 rounded-full"/>
                                    <span className="text-gray-400">Posting Berita</span>
                                </li>
                                <li className="flex items-center space-x-2 mb-2 mt-2 p-1 hover:cursor-pointer hover:bg-gray-600 rounded-md">
                                    <div className="w-5 h-5 border-2 border-gray-400 rounded-full"/>
                                    <span className="text-gray-400">Data Berita</span>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <div className="flex items-center mb-1 rounded-md hover:cursor-pointer hover:bg-gray-600 " onClick={() => dropdown("Video")}>
                                <ViewBoardsIcon className="w-5 h-5 text-gray-100"/>
                                <span className="text-gray-300 p-2 font-light">Video</span>
                                {toggle.video ? (
                                
                                    <ChevronDownIcon className="w-5 h-5 text-gray-400 ml-[115px]" />
                                ) : (
                                    <ChevronLeftIcon className="w-5 h-5 text-gray-400 ml-[115px]" />
                                )}
                                
                            </div>
                            <ul className={`${toggle.video ? "inline" : "hidden"}`}>
                                <li className="flex items-center space-x-2 p-1 hover:cursor-pointer hover:bg-gray-600 rounded-md">
                                    <div className="w-5 h-5 border-2 border-gray-400 rounded-full"/>
                                    <span className="text-gray-400">Posting Video</span>
                                </li>
                                <li className="flex items-center space-x-2 mb-2 mt-2 p-1 hover:cursor-pointer hover:bg-gray-600 rounded-md">
                                    <div className="w-5 h-5 border-2 border-gray-400 rounded-full"/>
                                    <span className="text-gray-400">Data Video</span>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <ul className="p-5 ml-3">
                        <p className="text-sm text-gray-300">LABELS</p>
                        <li className="flex items-center space-x-2 mb-2 mt-2 p-1 hover:cursor-pointer hover:bg-gray-600 rounded-md">
                            <div className="w-5 h-5 border-2 border-red-600 rounded-full"/>
                            <span className="text-sm text-gray-400 ">Keluar</span>
                        </li>
                    </ul>
                </div>
            </div>
        
    )
}

export default Sidebar
