import Image from "next/image";
import Dummy1 from "../public/dummy/dummy1.jpg"
function KegiatanTerakhir() {
    return (
        <div className="lg:flex">
            <div className="mr-5 lg:w-24">
                <Image 
                src={Dummy1}
                objectFit="contain"
                
                />
            </div>
            <div>
                <p className=" font-medium ">Kerja Bakti</p>
                <p className="text-gray-500 text-sm">13-09-202</p>

            </div>
        </div>
    )
}

export default KegiatanTerakhir
