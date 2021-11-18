import { useState } from "react";
import Header from "../../components/admin/Header";
import Sidebar from "../../components/admin/Sidebar";
import {
    MinusSmIcon,
    XIcon ,
} from "@heroicons/react/solid";
import { 
    FaWrench
  } from "react-icons/fa";
function dashboard() {
    const [sidebar,setSidebar] = useState(true)
    console.log("dashboard",sidebar)
    
    return (
        <div className="">
            Percobaan Sidebar
            
        </div>
    )
}

export default dashboard
