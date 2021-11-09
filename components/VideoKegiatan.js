import Iframe from 'react-iframe';
function VideoKegiatan() {
    return (
        <div className="p-10">
            <Iframe url="https://www.youtube.com/embed/k_B5LaDKdz8"
                
                className="h-48 w-80"
                display="initial"
                loading="lazy"
                
            />
            <p className="text-gray-500 text-center mt-5 font-semibold hover:text-gray-800 hover:cursor-pointer hover:underline">Upacara Bendera RI 76</p>
        </div>
    )
}

export default VideoKegiatan
