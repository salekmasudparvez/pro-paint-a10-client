import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Toaster } from "react-hot-toast";


const Root = () => {
    return (
        <div>
            <Navbar />
            <div>
                <Outlet />
            </div>
            <Toaster />
            <Footer />
        </div>
    );
};

export default Root;