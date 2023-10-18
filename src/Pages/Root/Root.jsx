import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../Footer/Footer";

const Root = () => {
    return (
        <div className="bg-[#2B2024]">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;