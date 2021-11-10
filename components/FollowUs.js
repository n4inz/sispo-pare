import { FaFacebook, FaTwitter, FaGooglePlus, FaYoutube } from "react-icons/fa";

const FollowUs = () => {
    return (
        <div className="flex space-x-4">
           <div className="bg-blue-600 p-2 hover:cursor-pointer">
                <FaFacebook className="w-10 h-10 text-gray-100" />
                <p className="text-gray-100 text-center text-sm">27K</p>
           </div>
           <div className="bg-blue-400 p-2 hover:cursor-pointer">
                <FaTwitter className="w-10 h-10 text-gray-100" />
                <p className="text-gray-100 text-center text-sm">98K</p>
           </div>
           <div className="bg-red-500 p-2 hover:cursor-pointer">
               <FaGooglePlus className="w-10 h-10 text-gray-100" />
               <p className="text-gray-100 text-center text-sm">17K</p>
           </div>
           <div className="bg-red-600 p-2 hover:cursor-pointer">
                <FaYoutube className="w-10 h-10 text-gray-100" />
                <p className="text-gray-100 text-center text-sm">22k</p>
           </div>
        </div>
    )
}

export default FollowUs
