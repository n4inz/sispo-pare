import Iframe from 'react-iframe';
function VideoKegiatan() {
    return (
        <div className="grid grid-cols-2 xl:grid-cols-1 gap-10 p-5 lg:justify-items-center">
            <div>
                <Iframe url="https://www.youtube.com/embed/k_B5LaDKdz8"
                    
                    className="h-48 w-80"
                    display="initial"
                    loading="lazy"
                    
                />
                <p className="hidden lg:grid text-gray-500 text-center mt-5 font-semibold hover:text-gray-800 hover:cursor-pointer hover:underline">Upacara Bendera RI 76</p>
            </div>
            <div></div>

     
        </div>
    )
}

export default VideoKegiatan
