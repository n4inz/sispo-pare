import Image from "next/image";
import Upacara from "../public/dummy/upacara.jpg";
import Lomba from "../public/dummy/lomba.jpg";
import Pawai from "../public/dummy/pawai.jpg";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

function Banner() {
  
    return (
        <>
            <Splide
              options={ {
                rewind: true,
                gap   : '1rem',
                width : '30%',
                heightRatio : 0.3,
                autoplay: true
              } }
            >
              <SplideSlide>
                <img src="dummy/upacara.jpg" alt="Image 1"/>
              </SplideSlide>
              <SplideSlide>
                <img src="dummy/lomba.jpg" alt="Image 2"/>
              </SplideSlide>
              <SplideSlide>
                <img src="dummy/pawai.jpg" alt="Image 3"/>
              </SplideSlide>
          </Splide>
        </>
    )
}

export default Banner
