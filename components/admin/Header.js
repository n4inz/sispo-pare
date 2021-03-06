import { 
    FaAdn
  } from "react-icons/fa";
import {
    MenuIcon
} from "@heroicons/react/solid";



import {RootContext} from "../../context";
import { useEffect } from "react";
function Header() {


    return (
            <RootContext.Consumer>
                {
                    value => {
                        
                        return (
                            <div className="bg-gray-50 flex  border-b-[1px]  left-0 right-0 ">
                                <div className="flex items-center space-x-4 p-4 w-1/5">
                                    <div>
                                        <MenuIcon className="h-5 w-5 text-gray-600 hover:cursor-pointer" onClick={() => value.disPatch()} />
                                        </div>
                                        <div className="text-sm text-gray-400">Home</div>
                                    </div>
                                    <div className={`${value.togle ? "flex items-center space-x-4 p-4 w-4/5" : "hidden"}`}>
                                        <div>
                                            <MenuIcon className="h-5 w-5 text-gray-600 hover:cursor-pointer"  onClick={() => value.disPatch()} />
                                        </div>
                                    <div className="text-sm text-gray-400">Home</div>
                                </div>
                                
    
                            </div>
                        )
                    }
                }
            </RootContext.Consumer>


    
    )
}

export default Header
