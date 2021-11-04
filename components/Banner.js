import Image from "next/image";
import Upacara from "../public/dummy/upacara.jpg";
import Lomba from "../public/dummy/lomba.jpg";
import Pawai from "../public/dummy/pawai.jpg";
function Banner() {
    return (
        <div className="flex p-5">
            <div className="max-w-2xl">
                <Image 
                    src={Upacara}
                    
                    objectFit="contain"
                />
            </div>
            <div className="flex max-w-xl ">
                <div className="mx-3 w-24">
                    <Image 
                        src={Lomba}
                        
                        objectFit="contain"
                    />
                </div>
                <div className="">
                    <Image 
                        src={Pawai}
                        
                        objectFit="contain"
                    />
                </div>
            </div>
        </div>
    )
}

export default Banner
