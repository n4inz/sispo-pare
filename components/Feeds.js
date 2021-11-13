import Cards from "./Cards";
import {
    ArrowCircleDownIcon

} from "@heroicons/react/solid";
import VideoKegiatan from "./VideoKegiatan";
import KegiatanTerakhir from "./KegiatanTerakhir";
import FollowUs from "./FollowUs";


function Feeds() {
    return (
        <div className="lg:grid grid-flow-col lg:mx-auto xl:p-10 p-2">
            <div className="">
                <div className="flex space-x-2">
                    <p className="font-semibold">Kegiatan Tahunan</p>
                    <ArrowCircleDownIcon className="h-7 w-7 text-red-600"/>
                </div>
                <Cards />
                <Cards />
            </div>
            <div className="">
                <div>
                    <p className="font-semibold">Video Kegiatan</p>
                    <VideoKegiatan />
                </div>
                <div>
                    <p className="font-semibold mb-5">Kegiatan Terakhir</p>
                    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 lg:gap-10">
                  
                            <KegiatanTerakhir />
                            <KegiatanTerakhir />
                            <KegiatanTerakhir />
                            <KegiatanTerakhir />
              
                    </div>
                </div>
                <div className="mt-5 ">
                    <p className="font-semibold mb-5">Follow US</p>
                    <FollowUs />
                   
                    <svg data-testid="DeleteIcon"></svg>

                </div>
            </div>
        </div>
    )
}

export default Feeds
