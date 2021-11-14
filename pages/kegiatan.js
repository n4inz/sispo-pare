import Footer from "../components/Footer";
import Header from "../components/Header";
import {FaHistory} from "react-icons/fa"
import Head from "../components/Head";
import Kegiatan from "../components/Kegiatan";

function kegiatan() {
    return (
        <div>
            <Header />
            <Head Icon={FaHistory} page="Daftar Kegiatan" kegiatan="Daftar Kegiatan"/>
            <Kegiatan />
            <Footer />
        </div>
    )
}

export default kegiatan
