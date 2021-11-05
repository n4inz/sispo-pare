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
              <div className="mx-3">
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
