import Image from "next/image";
import Logo from "../../public/Logo/logo.png"
import {MailIcon, LockClosedIcon
} from "@heroicons/react/solid";
function index() {
    return (
        <div className="flex  justify-center p-10  h-screen bg-gradient-to-r from-indigo-500 to-purple-700">
            <div className="flex items-center justify-evenly my-16 lg:my-0 lg:w-[70%] bg-gray-50 rounded-lg">
                <div className="hidden lg:inline w-[25%]">
                    <Image
                        className="hover:scale-110 transition delay-200 ease-out"
                        src={Logo}
                        objectFit="contain"
                    />
                </div>
                <div className="p-4">
                    <div className=" font-semibold text-center text-2xl mb-5 text-gray-500 ">Admin Login</div>
                    <div className="relative border rounded-xl p-2 mb-2 ">
                        <div className="absolute inset-y-0 flex items-center pointer-events-none">
                            <MailIcon className="w-5 h-5 text-gray-500"/>
                        </div>
                        <input type="text" placeholder="Username" className="w-full pl-10 sm:text-sm focus:ring-black focus:border-black outline-none "/>
                    </div>
                    <div className="relative border rounded-xl p-2 mb-2 ">
                        <div className="absolute inset-y-0 flex items-center pointer-events-none">
                            <LockClosedIcon className="w-5 h-5 text-gray-500"/>
                        </div>
                        <input type="password" placeholder="Password" className="w-full pl-10 sm:text-sm focus:ring-black focus:border-black outline-none"/>
                    </div>
                    <div>
                        <button className=" bg-green-500 w-full text-gray-100 p-2 rounded-2xl font-semibold hover:bg-green-800">LOGIN</button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default index
