import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";



const Root = () => {
    return (
        <div>
            <Navbar />
            <div className="min-h-[calc(100vh-100px)]">
                <Outlet />
            </div>
            
            <Footer />
        </div>
    );
};

export default Root;