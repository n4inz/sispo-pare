import 'tailwindcss/tailwind.css'
import {useState } from "react";
import {Provider} from "../context";

function MyApp({ Component, pageProps }) {

  const [togle,setTogle] = useState(true)

  const disPatch = () => {
    setTogle(!togle)
  }
  return(
    <Provider value={{ 
      togle,
      disPatch
     }}>
        <Component {...pageProps} />
    </Provider>
    
  )
}

export default MyApp
