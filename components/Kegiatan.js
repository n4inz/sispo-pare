import Cards from "./Cards";
import KegiatanTerakhir from "./KegiatanTerakhir";
import VideoKegiatan from "./VideoKegiatan";


function Kegiatan() {
    return (
        <div className="lg:grid grid-flow-col lg:mx-auto xl:p-10">
            <div className="">
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
            </div>
            <div className="">
                <div>
                    <p className="font-semibold">Video Kegiatan</p>
                    <VideoKegiatan />
                </div>
                <p className="font-semibold mb-5">Kegiatan Terakhir</p>
                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 lg:gap-10">
                    <KegiatanTerakhir />
                    <KegiatanTerakhir />
                    <KegiatanTerakhir />
                    <KegiatanTerakhir />
                </div>
            </div>
        </div>
    )
}

export default Kegiatan
