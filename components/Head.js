import {FaYoutube} from "react-icons/fa"

function Head({Icon ,page ,kegiatan}) {
    return (
        <div className="mt-16 flex flex-nowrap p-10 bg-gray-100">
            <div className="flex  w-1/2">
                <div><Icon className="w-7 h-7 lg:w-12 lg:h-12 text-red-600"/></div>
                <div className="p-2 lg:p-2 text-xs lg:text-2xl font-semibold text-gray-800">{kegiatan}</div>
            </div>

            <div className="w-1/2 flex justify-end p-2 text-xs lg:text-sm">
               
               <div><span className="hover:cursor-pointer hover:underline text-gray-800 text-xs lg:text-sm">Home</span>  / <span className="hover:cursor-pointer hover:underline text-gray-800 text-xs lg:text-sm">Blog</span> / <span className="hover:cursor-pointer hover:underline text-gray-400 text-xs lg:text-sm">{page}</span></div>

               
            </div>
        </div>
    )
}

export default Head
