import Head from 'next/head'
import Banner from '../components/Banner'
import Feeds from '../components/Feeds'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      
          <Header/>

       
          <Banner />
          <Feeds/>
          <Footer />
       

      
    </div>
  )
}
