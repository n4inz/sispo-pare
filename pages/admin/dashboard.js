import { useState } from "react";
import Header from "../../components/admin/Header";
import Sidebar from "../../components/admin/Sidebar";
import {
    MinusSmIcon,
    XIcon ,
} from "@heroicons/react/solid";
import { 
    FaWrench
  } from "react-icons/fa";
function dashboard() {
    const [sidebar,setSidebar] = useState(true)
    console.log("dashboard",sidebar)
    
    return (
        <div className="">
            <div className="flex ">
                {/* <div className={`${sidebar ? "hidden lg:inline" : "hidden"} `}>    
                    <Sidebar />
                </div>
                <div className={`${sidebar ? "lg:hidden inline" : "hidden"} `}>    
                    <Sidebar />
                </div> */}
                <div className="w-1/5">    
                    <Sidebar />
                </div>
                <div className="w-4/5">
                    
                    <div className=" absolute">
                        <Header Sidebar={(value) => setSidebar(value)} />
                    </div>
                    <div className="flex p-3">
                        <div className=" w-1/4 text-gray-700 text-2xl">
                            Post Artikel 1
                        </div>
                        <div className="flex justify-end items-center w-3/4 text-sm space-x-1">
                            <span className=" text-blue-500 hover:cursor-pointer">Home</span><span className="text-gray-400">/</span><span className="text-gray-400">Artikel</span>
                        </div>
                    </div>
                    <div>
                    <div className="mx-9 bg-gray-100 p-5">
                       <div className="flex justify-end space-x-2 text-gray-600">
                            <MinusSmIcon className="h-5 w-5" />
                            <FaWrench className="h-5 w-5" />
                            <XIcon className="h-5 w-5" />
                       </div>
                       <div className="flex">
                           <div className="w-1/4"><input type="text" placeholder="Jenis Kegiatan" className="text-sm p-2 outline-none bg-gray-100 border border-gray-800 rounded-md"/></div>
                           <div className="w-1/4"><input type="text" placeholder="Judul"/></div>
                           <div className="w-1/4"><input type="text" placeholder="Yang bertanggung jawab"/></div>
                           <div className="w-1/4"><input type="file"/></div>
                       </div>
                       <div>

                       </div>
                       <div>

                       </div>
                    </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default dashboard
