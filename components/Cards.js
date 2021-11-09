import Image from "next/image";
import Dummy1 from "../public/dummy/dummy1.jpg"
function Cards() {
    return (
        <div className="flex p-10 relative">
           <div className=" w-[100%]">
                <Image 
                    src={Dummy1}
                    objectFit="contain"
                    className="hover:scale-110 transition transform duration-500 ease-out"
                />

           </div>

           <div className="p-5">
                <div className="absolute bg-gray-50 p-3 left-64 font-extrabold ">
                    Kerja Bakti
                </div>

               <div className="mt-16 text-gray-500 text-base">
                    Di harapkan kepada semua ketua RT Kota parepare, agar kiranya menghimbau warganya
                    agar ikut serta dalam kegiatan kerja bakti di lingkungannya masing masing. agar kiranya ...
               </div>
               <div className="flex space-x-2 p-1">
                   <p className="bg-red-500 rounded-sm text-white text-xs">BAKTI SOSIAL</p>
                   <p className="text-xs  text-gray-500">
                        13-09-2020
                   </p>
               </div>

           </div>
        </div>
    )
}

export default Cards
