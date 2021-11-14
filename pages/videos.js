import Content from "../components/Content";
import Footer from "../components/Footer";
import Head from "../components/Head";
import Header from "../components/Header";
import {FaYoutube} from "react-icons/fa"

function videos() {
    return (
        <>
            <Header />
            <Head Icon={FaYoutube} page="Videos" kegiatan="Video Kegiatan"/>
            <Content />
            <Footer />
        </>
    )
}

export default videos
