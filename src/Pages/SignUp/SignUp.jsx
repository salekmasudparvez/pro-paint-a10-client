import { useState } from "react";
import { FaEye, FaEyeSlash, FaUser } from "react-icons/fa";
import { MdAddAPhoto, MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";


const SignUp = () => {
    const[pass, setPass]=useState("password")
    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value
        const photo = form.photo.value
        console.log(name, email, password, photo);
    }
    return (
        <div className="bg-no-repeat bg-center py-10 bg-cover">
            <form onSubmit={handleSignUp} className=" max-w-md mx-auto bg-gray-500 bg-opacity-60 space-y-3 border rounded-lg p-8">
                <label className="input input-bordered flex items-center gap-2">
                    <FaUser />
                    <input type="text" className="grow" name="name" placeholder="Name" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <MdEmail />
                    <input type="text" className="grow" name="email" placeholder="Email" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <MdAddAPhoto />
                    <input type="text" className="grow" name="photo" placeholder="PhotoURL" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <RiLockPasswordFill />
                    <input type={pass} className="grow" placeholder="Password" name="password" />
                    <label className="swap swap-rotate">
                        <input  type="checkbox" />
                        <FaEye onClick={()=>setPass("text")}  className="swap-on fill-current text-lg" />
                        <FaEyeSlash onClick={()=>setPass("password")} className="swap-off fill-current text-lg" />
                    </label>
                </label>
                <div><button type="submit" className="btn btn-block  text-white bg-[#F2613F] hover:bg-[#f2603f9d]">Sign up</button></div>
            </form>
        </div>
    );
};

export default SignUp;