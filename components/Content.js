import Iframe from "react-iframe";
import VideoKegiatan from "../components/VideoKegiatan";
import KegiatanTerakhir from "../components/KegiatanTerakhir";
import FollowUs from "./FollowUs";
import MyModal from "./Modal";
import { useState } from 'react';
function Content() {
    const [isOpen, setIsOpen] = useState(false)
     console.log('isi state:', isOpen);
    
    const click = () => {
        setIsOpen(!isOpen)
       
       
    } 

    const triggre = (value) => {
        
         setIsOpen(value)
         console.log('data',isOpen)
         return isOpen;
       
    }
   
    return (
        
        <div className="grid lg:flex p-2 lg:p-10">
            <div className=" lg:w-3/4 mx-auto grid justify-items-center relative " >
                <Iframe url="https://www.youtube.com/embed/k_B5LaDKdz8"
                    
                    className=" h-[250px] w-[90%] lg:h-[450px]"
                    display="initial"
                    loading="lazy"
                    
                    
                />
                <div className=" absolute h-[100%] w-[100%]  top-0 z-20" onClick={() => click() } />
                    
                
                <div className="text-center w-[100%] lg:w-[70%] rounded-sm p-5 mx-24   z-10 "> 
                    <div className="font-bold text-sm lg:text-3xl hover:cursor-pointer hover:underline">

                        Upacara Bendera RI 76
                    </div>
                    <div className="text-center text-xs lg:text-base text-gray-500 mb-4 mt-5">
                        Pengibaran bendera pusaka pada tanggal (17-Agustus-2020) Untuk memperingati hari kemerdekaan republik indonesia
                    </div>
                    <div className=" text-xs lg:text-sm text-gray-400">
                        <span>VIDEOS</span> / <span>13-09-2020</span> / <span>PEMKOT</span>
                    </div>
                </div>
                
            </div>
            <div className="w-1/4 grid">
                <div className="font-semibold text-gray-900">
                    Videos Terakhir
                </div>
                <div>
                    <VideoKegiatan/>
                </div>
                <div className="font-semibold text-gray-900 mb-5">
                    Kegiatan Terakhir
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 lg:gap-2 mx-auto">
                    <KegiatanTerakhir />
                    <KegiatanTerakhir />
                    <KegiatanTerakhir />
                </div>
                <div className="font-semibold text-gray-900 mb-5 mt-5">
                    Follow US
                </div>
                <div>
                    <FollowUs />
                </div>
            </div>
            <MyModal Modal={triggre} Trigger={isOpen}/>
        </div>
    )
}

export default Content
