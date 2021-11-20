import Header from "../../components/admin/Header";
import Sidebar from "../../components/admin/Sidebar";
import {
    MinusSmIcon,
    XIcon ,
} from "@heroicons/react/solid";
import { 
    FaWrench
  } from "react-icons/fa";

import {RootContext} from "../../context";

function dashboard() {
   
    return (
        <RootContext.Consumer>
            {
                value => {
                    return (
                        <div className="">
                            <div className="flex">
                                <div className={`${value.togle ? "hidden lg:inline" : "hidden"} z-10 `}>    
                                    <Sidebar />
                                </div>
                                <div className={`${value.togle ? "lg:hidden inline" : "hidden"} z-10 `}>    
                                    <Sidebar/>
                                </div>
                
                                <div className={`${value.togle ? " w-full lg:w-4/5" : "w-full"} absolute right-0`}>
                                        <div className="fixed left-0 right-0">
                                            <Header  />
                                        </div>
                                        <div className="flex p-3 mt-14">
                                            <div className=" w-1/4 text-gray-700 text-sm lg:text-2xl">
                                                Post Artikel 1
                                            </div>
                                            <div className="flex justify-end items-center w-3/4 text-sm space-x-1">
                                                <span className=" text-blue-500 hover:cursor-pointer">Home</span><span className="text-gray-400">/</span><span className="text-gray-400">Artikel</span>
                                            </div>
                                        </div>
                                    
                                        <div className="mx-9 bg-gray-50 p-2 rounded-sm border ">
                                            <div className="flex justify-end space-x-2 text-gray-600 border-b-[1px] w-full mb-2 p-2">
                                                    <MinusSmIcon className="h-4 w-4 hover:cursor-pointer" />
                                                    <FaWrench className="h-4 w-4 hover:cursor-pointer" />
                                                    <XIcon className="h-4 w-4 hover:cursor-pointer" />
                                            </div>
                                            <div className="flex">
                                                <div className="w-1/4 "><input type="file"/></div>
                                                <div className="w-1/4 "><input type="text" placeholder="Jenis Kegiatan" className="text-sm p-1 pl-4 outline-none bg-gray-50 border border-gray-400 rounded-md"/></div>
                                                <div className="w-1/4 "><input type="text" placeholder="Judul" className="text-sm p-1 pl-4 outline-none bg-gray-50 border border-gray-400 rounded-md"/></div>
                                                <div className="w-1/4 "><input type="text" placeholder="Yang bertanggung jawab" className="text-sm p-1 pl-4 outline-none bg-gray-50 border border-gray-400 rounded-md"/></div>
                                                
                                            </div>

                    

                    
                                        </div>
                                </div>
                            </div>   
                        </div>
                    )
                }
            }
        </RootContext.Consumer>
        
    )
}

export default dashboard
