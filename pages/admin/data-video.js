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
import Editor from "../../components/admin/Editor";

const dataVideo = () => {
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
                                                Video
                                            </div>
                                            <div className="flex justify-end items-center w-3/4 text-sm space-x-1">
                                                <span className=" text-blue-500 hover:cursor-pointer">Home</span><span className="text-gray-400">/</span><span className="text-gray-400">Video</span>
                                            </div>
                                        </div>
                                    
                                        <div className="mx-9 bg-gray-50 p-2 rounded-sm border ">
                                            <div className="flex justify-end space-x-2 text-gray-600 border-b-[1px] w-full mb-2 p-2">
                                                    <MinusSmIcon className="h-4 w-4 hover:cursor-pointer" />
                                                    <FaWrench className="h-4 w-4 hover:cursor-pointer" />
                                                    <XIcon className="h-4 w-4 hover:cursor-pointer" />
                                            </div>
                                            <div className="text-center border rounded-md">
                                                <div className="flex justify-center font-semibold border-b-2 border-gray-200">
                                                    <div className="w-1/12 border ">No</div>
                                                    <div className="w-4/12 border">Judul</div>
                                                    <div className="w-4/12 border">Deskripsi</div>
                                                    <div className="w-3/12 border">Tanggal</div>
                                                    <div className="w-3/12 border">Hapus</div>
                                                </div>
                                                <div className="flex justify-center text-left text-sm">
                                                    <div className="w-1/12 border">1</div>
                                                    <div className="w-4/12 border">Upacara Bendera RI 76</div>
                                                    <div className="w-4/12 border">Pengibaran bendera pusaka pada tanggal (17-Agustus-2020) Untuk memperingati hari kemerdekaan republik indonesia</div>
                                                    <div className="w-3/12 border">13-09-2020</div>
                                                    <div className="w-3/12 border">Hapus</div>
                                                </div>
                                                

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

export default dataVideo
