import { useState } from "react";
import { FaEye, FaEyeSlash, FaUser } from "react-icons/fa";
import { MdAddAPhoto, MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import toast from "react-hot-toast";
import {  updateProfile } from "firebase/auth";


const SignUp = () => {
    const[pass, setPass]=useState("password");
    const [passError , setPassError]=useState(null)
    const {creatUserPassword}= useAuth()
    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        if(!/^.{6,}$/.test(password)){
            setPassError("Password length must be at least 6 character")
            return
        }
        if(!/(?=.*[a-z])/.test(password)){
            setPassError("Please enter at least one lowercase character")
            return
        }
        if(!/(?=.*?[A-Z])/.test(password)){
            setPassError("Please enter at least one uppercase character")
            return
        }
        setPassError(null)
        creatUserPassword(email,password)
        .then(result=>{
            updateProfile(result.user,{
                displayName:name,
                photoURL:photo
            })
        })
        
        
        toast.success('Successfully Created an accound!')
        
    }
    return (
        <div className="bg-no-repeat bg-center py-10 bg-cover">
            <form onSubmit={handleSignUp} className=" max-w-md mx-auto bg-gray-500 bg-opacity-60 space-y-3 border rounded-lg p-8">
                <label className="input input-bordered flex items-center gap-2">
                    <FaUser />
                    <input type="text" className="grow" name="name" placeholder="Name" required />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <MdEmail />
                    <input type="text" className="grow" name="email" placeholder="Email" required />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <MdAddAPhoto />
                    <input type="text" className="grow" name="photo" placeholder="PhotoURL" required />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <RiLockPasswordFill />
                    <input type={pass} className="grow" placeholder="Password" name="password"  required/>
                    <label className="swap swap-rotate">
                        <input  type="checkbox" />
                        <FaEye onClick={()=>setPass("text")}  className="swap-on fill-current text-lg" />
                        <FaEyeSlash onClick={()=>setPass("password")} className="swap-off fill-current text-lg" />
                    </label>
                </label>
                <p className="text-red-500 text-sm">{passError}</p>
                <div><button type="submit" className="btn btn-block  text-white bg-[#F2613F] hover:bg-[#f2603f9d]">Sign up</button></div>
            </form>
             <div className="text-center"> Already have an account ?<Link to="/login" className="btn btn-link">Log in</Link></div>
        </div>
    );
};

export default SignUp;