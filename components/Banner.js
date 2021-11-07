import Image from "next/image";
import Upacara from "../public/dummy/upacara.jpg";
import Lomba from "../public/dummy/lomba.jpg";
import Pawai from "../public/dummy/pawai.jpg";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

function Banner() {
  
    return (
      <div className="flex p-5">
          <div className="max-w-2xl">
            <Splide
                options={ {
                  rewind: true,
                  
                  width : '100%',

                  autoplay: true
                } }
              >
                <SplideSlide>
                  <Image 
                      src={Upacara}
                      objectFit="contain"
                  />
                </SplideSlide>
                <SplideSlide>
                  <Image 
                        src={Lomba}
                        objectFit="contain"
                    />
                   
                </SplideSlide>
                <SplideSlide>
                  <Image 
                        src={Pawai}
                        objectFit="contain"
                    />
                </SplideSlide>
            </Splide>
          </div>
          <div className="flex ">
              <div className="mx-3 relative bg-yellow-500 h-[43%]">
                  <Image
                      className="brightness-75"
                      src={Lomba}
                      objectFit="contain"
                  />

                  <div className="absolute top-20 p-5">
                    <div className="text-sm bg-red-500 rounded-sm text-center text-white">Pertandingan</div>
                    <div className="text-white font-bold">Lomba 17 Agustus</div>
                    <div className="text-white text-xs">13-09-2020 / Pemerintah Kota</div>
                  </div>
              </div>
              <div className="relative">
                  <Image 
                      src={Pawai}
                      className="brightness-75"
                      objectFit="contain"
                  />
                  <div className="absolute top-20 p-5">
                    <div className="text-sm bg-red-500 rounded-sm text-center text-white">Pawai</div>
                    <div className="text-white font-bold">Pawai Budaya</div>
                    <div className="text-white text-xs">13-09-2020 / Pemerintah Kota</div>
                  </div>
              </div>
          </div>
      </div>

    )
}

export default Banner
