import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";


const Root = () => {
    return (
        <>
            <Navbar />
            <div className="max-w-6xl  mx-auto">
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default Root;