import { 
    FaFacebookSquare, 
    FaTwitter,
    FaInstagram,
    FaGooglePlusG,
    FaPinterestSquare
  } from "react-icons/fa";
function Footer() {
    return (
        <div className="bg-black ">
            <div className="lg:flex p-10 lg:p-20 grid justify-items-center">
                <div className="mx-auto">
                    <div>
                        <p className="text-3xl text-gray-700 ">PAREPARE-KU</p>
                    </div>
                    <div className="mt-6">
                            <p className="text-base text-gray-500">Menjadikan Parepare sebagai Kota Industri Tanpa Cerobong Asap.</p>
                    </div>
                    <div className="mt-6 flex space-x-4">
                        <FaFacebookSquare className="h-7 w-7 text-gray-500"/>
                        <FaTwitter className="h-7 w-7 text-gray-500"/>
                        <FaInstagram className="h-7 w-7 text-gray-500"/>
                        <FaGooglePlusG className="h-7 w-7 text-gray-500"/>
                        <FaPinterestSquare className="h-7 w-7 text-gray-500"/>
                    </div>
                    <div className="mt-6 grid lg:flex lg:space-x-1">
               
                            <input className=" w-full h-14 lg:w-96  p-5 outline-none mb-2" type="text" placeholder="Enter your email address"/>

             
       
                            <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white  h-14 w-28">SUBMIT</button>

                    </div>
                </div>
                <div className="lg:flex grid mt-10  lg:space-x-4 mx-auto ">
                    <div className="text-white mb-10">
                        <div className="font-bold">
                            Popular Categories
                        </div>
                        <div className="mt-6">
                            <div className="border-dotted border-b-2 border-gray-500 space-x-12 p-2"><span>Kegiatan Harian</span> <span>(21)</span></div>
                            <div className="border-dotted border-b-2 border-gray-500 space-x-9 p-2"><span>Kegiatan Tahunan</span><span>(15)</span></div>
                            <div className="border-dotted border-b-2 border-gray-500 space-x-14 p-2"><span>Video Kegiatan</span><span>(31)</span></div>
                        </div>
                    </div>
                    <div className="text-white">
                        <div className="font-bold">
                            Copyrights
                        </div>
                        <div className="mt-6">
                            <div className="border-dotted border-b-2 border-gray-500 p-2">Pemkot Parepare</div>
                            <div className="border-dotted border-b-2 border-gray-500 p-2">Parepare</div>
                            <div className="border-dotted border-b-2 border-gray-500 p-2">Dinas Sosial</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" text-gray-500 text-center">
                &copy;Parepare Pemerintah Kota.
            </div>
            <div className=" h-11"/>
        </div>
        
    )
}

export default Footer
