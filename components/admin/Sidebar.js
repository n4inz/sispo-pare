import { 
    FaAdn
  } from "react-icons/fa";
import {
    FolderOpenIcon,
    ChevronLeftIcon,
    ChevronDownIcon,
    ViewBoardsIcon,
    MenuIcon

} from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import {RootContext} from "../../context";

import Link from "next/link";
import { useRouter } from 'next/router';

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
       
      
    }

    
    const router = useRouter();



    useEffect(()=>{
        
        if(router.pathname == "/admin/berita" || router.pathname == "/admin/data-berita") {
            setToggle({
                ...toggle,
                "dashboard" : !toggle.dashboard,
                "berita" : !toggle.berita
            })
        }else if(router.pathname == "/admin/video" || router.pathname == "/admin/data-video"){
            setToggle({
                ...toggle,
                "dashboard" : !toggle.dashboard,
                "video" : !toggle.video
            })
        }else{
            setToggle({
                ...toggle,
                "dashboard" : !toggle.dashboard == false
                
            })
        }
        
    }, []);
    
    

    
    return (

            
        
            // <div className={`${Sidebar ? "block" : "hidden"} hidden lg:block bg-gray-700 h-screen`}>
            <RootContext.Consumer>
                {
                    
                    value  => {
                        
                        return (
                            <div className="bg-gray-700 h-screen fixed bottom-0 top-0">
                                <div className="flex  border-b-[1px] border-opacity-10 border-gray-50 p-2">
                                    
                                    <div className="flex space-x-1 items-center text-gray-400 mb-1 ">
                                        <FaAdn  className="w-8 h-8 text-gray-300 ml-4 "/>
                                        <p className="font-thin"> Admin</p>
                                    </div>
                                    <div className="flex lg:hidden w-full  justify-end items-center"><MenuIcon className="h-6 w-6 text-gray-300 hover:cursor-pointer" onClick={() => value.disPatch()} /></div>
                                    
                                </div>
                                
                                <div className="">
                                    <ul role="menu" className="p-5 ml-3">
                                        <li>
                                            {
                                                router.pathname ==  "/admin/dashboard-v1" || router.pathname == "/admin/dashboard-v2" || router.pathname == "/admin/dashboard-v3"  ? (
                                                    <div className="flex items-center  mb-1 bg-blue-500 hover:cursor-pointer hover:bg-gray-600 rounded-md" onClick={() => dropdown("Dashboard")}>
                                                        <FolderOpenIcon className="w-7 h-7 text-gray-100"/>
                                                        <span className="text-gray-300 p-2 font-light">Dashboard</span>
                                                        {toggle.dashboard ? (
                                                        
                                                            <ChevronDownIcon className="w-5 h-5 text-gray-400 ml-16" />
                                                        ) : (
                                                            <ChevronLeftIcon className="w-5 h-5 text-gray-400 ml-16" />
                                                        )}
                                                    
                                                    </div>
                                                ) : (
                                                    <div className="flex items-center  mb-1  hover:cursor-pointer hover:bg-gray-600 rounded-md" onClick={() => dropdown("Dashboard")}>
                                                        <FolderOpenIcon className="w-7 h-7 text-gray-100"/>
                                                        <span className="text-gray-300 p-2 font-light">Dashboard</span>
                                                        {toggle.dashboard ? (
                                                        
                                                            <ChevronDownIcon className="w-5 h-5 text-gray-400 ml-16" />
                                                        ) : (
                                                            <ChevronLeftIcon className="w-5 h-5 text-gray-400 ml-16" />
                                                        )}
                                                    
                                                    </div>
                                                )
                                            }
                                            <ul className={`${toggle.dashboard ? "inline" : "hidden"}`}>
                                                <Link href="/admin/dashboard-v1">
                                                    {
                                                        router.pathname == "/admin/dashboard-v1" ? (
                                                            <li className="flex items-center space-x-2 p-1 bg-gray-300 hover:cursor-pointer  rounded-md">
                                                                <div className="w-5 h-5 border-2 border-gray-500 rounded-full"/>
                                                                <span className="text-gray-500">Banner v1</span>
                                                            </li>
                                                        ) : (
                                                            <li className="flex items-center space-x-2 p-1 hover:cursor-pointer hover:bg-gray-600 rounded-md">
                                                                <div className="w-5 h-5 border-2 border-gray-500 rounded-full"/>
                                                                <span className="text-gray-400">Banner v1</span>
                                                            </li>
                                                        )
                                                    }

                                                </Link>
                                                <Link href="/admin/dashboard-v2">
                                                    {
                                                        router.pathname == "/admin/dashboard-v2" ? (
                                                            <li className="flex items-center space-x-2 mb-2 mt-2 p-1 bg-gray-300 hover:cursor-pointer  rounded-md">
                                                                <div className="w-5 h-5 border-2 border-gray-400 rounded-full"/>
                                                                <span className="text-gray-500">Banner v2</span>
                                                            </li>
                                                        ) : (
                                                            <li className="flex items-center space-x-2 mb-2 mt-2 p-1 hover:cursor-pointer hover:bg-gray-600 rounded-md">
                                                                <div className="w-5 h-5 border-2 border-gray-400 rounded-full"/>
                                                                <span className="text-gray-400">Banner v2</span>
                                                            </li>
                                                        )
                                                    }

                                                </Link>

                                                <Link href="/admin/dashboard-v3">
                                                    {
                                                        router.pathname == "/admin/dashboard-v3" ? (
                                                            <li className="flex items-center space-x-2 -600 p-1 bg-gray-300 hover:cursor-pointer rounded-md">
                                                                <div className="w-5 h-5 border-2 border-gray-400 rounded-full"/>
                                                                <span className="text-gray-500">Banner v3</span>
                                                            </li>
                                                        ) : (
                                                            <li className="flex items-center space-x-2 -600 p-1 hover:cursor-pointer hover:bg-gray-600 rounded-md">
                                                                <div className="w-5 h-5 border-2 border-gray-400 rounded-full"/>
                                                                <span className="text-gray-400">Banner v3</span>
                                                            </li>
                                                        )
                                                    }
                                                </Link>
                                            </ul>
                                        </li>

                                        <li>
                                            {

                                                router.pathname == "/admin/berita" || router.pathname == "data-berita" ? (
                                                    <div className="flex items-center mb-1 bg-blue-500 hover:cursor-pointer hover:bg-gray-600 rounded-md" onClick={() => dropdown("Berita")}>
                                                        <ViewBoardsIcon className="w-5 h-5 text-gray-100"/>
                                                        <span className="text-gray-300 p-2 font-light">Berita</span>
        
                                                        {toggle.berita ? (
                                                        
                                                            <ChevronDownIcon className="w-5 h-5 text-gray-400 ml-28" />
                                                        ) : (
                                                            <ChevronLeftIcon className="w-5 h-5 text-gray-400 ml-28" />
                                                        )}
                                                    
                                                
                                                    </div>
                                                ) : (
                                                    <div className="flex items-center mb-1 hover:cursor-pointer hover:bg-gray-600 rounded-md" onClick={() => dropdown("Berita")}>
                                                        <ViewBoardsIcon className="w-5 h-5 text-gray-100"/>
                                                        <span className="text-gray-300 p-2 font-light">Berita</span>
        
                                                        {toggle.berita ? (
                                                        
                                                            <ChevronDownIcon className="w-5 h-5 text-gray-400 ml-28" />
                                                        ) : (
                                                            <ChevronLeftIcon className="w-5 h-5 text-gray-400 ml-28" />
                                                        )}
                                                    
                                                
                                                    </div>
                                                )
                                            }
                                            <ul className={`${toggle.berita ? "inline" : "hidden"}`}>
                                                {
                                                    router.pathname == "/admin/berita" ? (
                                                        <Link
                                                            href="/admin/berita"
                                                        >
                                                            <li className="flex items-center space-x-2 p-1 bg-gray-300 hover:cursor-pointer hover:bg-gray-600 rounded-md">
                                                                <div className="w-5 h-5 border-2 border-gray-400 rounded-full"/>
                                                                <span className="text-gray-400">Posting Berita</span>
                                                            </li>
                                                        </Link>
                                                    ) : (
                                                        <Link
                                                        href="/admin/berita"
                                                        >
                                                            <li className="flex items-center space-x-2 p-1 hover:cursor-pointer hover:bg-gray-600 rounded-md">
                                                                <div className="w-5 h-5 border-2 border-gray-400 rounded-full"/>
                                                                <span className="text-gray-400">Posting Berita</span>
                                                            </li>
                                                        </Link>
                                                    )
                                                }
                                                {
                                                    router.pathname == "/admin/data-berita" ? (
                                                        <Link
                                                        href="/admin/data-berita"
                                                        >
                                                        
                                                            <li className="flex items-center space-x-2 mb-2 mt-2 p-1 bg-gray-300 hover:cursor-pointer  rounded-md">
                                                                <div className="w-5 h-5 border-2 border-gray-400 rounded-full"/>
                                                                <span className="text-gray-400">Data Berita</span>
                                                            </li>
                                                        </Link>
                                                    ) : (
                                                        <Link
                                                        href="/admin/data-berita"
                                                        >
                                                        
                                                            <li className="flex items-center space-x-2 mb-2 mt-2 p-1 hover:cursor-pointer hover:bg-gray-600 rounded-md">
                                                                <div className="w-5 h-5 border-2 border-gray-400 rounded-full"/>
                                                                <span className="text-gray-400">Data Berita</span>
                                                            </li>
                                                        </Link>
                                                    )
                                                }
                                            </ul>
                                        </li>

                                        <li>
                                            {
                                                router.pathname == "/admin/video" || router.pathname == "/admin/data-video" ? (
                                                    <div className="flex items-center mb-1 rounded-md bg-blue-500 hover:cursor-pointer hover:bg-gray-600 " onClick={() => dropdown("Video")}>
                                                        <ViewBoardsIcon className="w-5 h-5 text-gray-100"/>
                                                        <span className="text-gray-300 p-2 font-light">Video</span>
                                                        {toggle.video ? (
                                                        
                                                            <ChevronDownIcon className="w-5 h-5 text-gray-400 ml-[115px]" />
                                                        ) : (
                                                            <ChevronLeftIcon className="w-5 h-5 text-gray-400 ml-[115px]" />
                                                        )}
                                                        
                                                    </div>
                                                ) : (
                                                    <div className="flex items-center mb-1 rounded-md hover:cursor-pointer hover:bg-gray-600 " onClick={() => dropdown("Video")}>
                                                        <ViewBoardsIcon className="w-5 h-5 text-gray-100"/>
                                                        <span className="text-gray-300 p-2 font-light">Video</span>
                                                        {toggle.video ? (
                                                        
                                                            <ChevronDownIcon className="w-5 h-5 text-gray-400 ml-[115px]" />
                                                        ) : (
                                                            <ChevronLeftIcon className="w-5 h-5 text-gray-400 ml-[115px]" />
                                                        )}
                                                        
                                                    </div>
                                                )
                                            }
                                            <ul className={`${toggle.video ? "inline" : "hidden"}`}>
                                            {
                                                router.pathname == "/admin/video" ? (
                                                    <Link
                                                        href="/admin/video"
                                                    >
                                                        <li className="flex items-center space-x-2 p-1 bg-gray-300 hover:cursor-pointer rounded-md">
                                                            <div className="w-5 h-5 border-2 border-gray-400 rounded-full"/>
                                                            <span className="text-gray-400">Posting Video</span>
                                                        </li>
                                                    </Link>
                                                ) : (
                                                    <Link
                                                        href="/admin/video"
                                                    >
                                                        <li className="flex items-center space-x-2 p-1 hover:cursor-pointer hover:bg-gray-600 rounded-md">
                                                            <div className="w-5 h-5 border-2 border-gray-400 rounded-full"/>
                                                            <span className="text-gray-400">Posting Video</span>
                                                        </li>
                                                    </Link>
                            
                                                )
                                            }
                                            {
                                                router.pathname == "/admin/data-video" ? (
                                                    <Link
                                                        href="/admin/data-video"
                                                    >
                                                        <li className="flex items-center space-x-2 mb-2 mt-2 p-1 bg-gray-300 hover:cursor-pointer  rounded-md">
                                                            <div className="w-5 h-5 border-2 border-gray-400 rounded-full"/>
                                                            <span className="text-gray-400">Data Video</span>
                                                        </li>
                                                    </Link>
                                                ) : (
                                                    <Link 
                                                        href="/admin/data-video"
                                                    >
                                                        <li className="flex items-center space-x-2 mb-2 mt-2 p-1 hover:cursor-pointer hover:bg-gray-600 rounded-md">
                                                            <div className="w-5 h-5 border-2 border-gray-400 rounded-full"/>
                                                            <span className="text-gray-400">Data Video</span>
                                                        </li>
                                                    </Link>
                                                )
                                            }
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
                }
            </RootContext.Consumer>
            
        
    )
}

export default Sidebar
