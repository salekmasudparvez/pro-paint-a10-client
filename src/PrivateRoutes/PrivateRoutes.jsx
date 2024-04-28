import { Navigate } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import { RingLoader } from "react-spinners";


const PrivateRoutes = ({children}) => {
    const {user, loading}=useAuth();
    if(loading){
        return <div className="w-full flex justify-center items-center text-xl mb-10">
       <RingLoader color="#36d7b7" />
    </div>
    }

    if(user){
        return <>
        {children}
        </>
    }
        return <Navigate to='/signup' replace={true}></Navigate>
    
};

export default PrivateRoutes;