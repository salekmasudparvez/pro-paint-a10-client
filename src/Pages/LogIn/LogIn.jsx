import { useState } from "react";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import Swal from "sweetalert2";


const LogIn = () => {
    const [pass, setPass] = useState("password");
    const { creatUserGoogle ,signInWithPassword, creatUserGithub} = useAuth();


    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;
        signInWithPassword(email,password)
        .then(res=>{
            if(res){
                Swal.fire({
                    title: "Good job!",
                    text: "You clicked the button!",
                    icon: "success"
                  })              

            }
        })
        .catch(error=>{if(error){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Invaild email or password!",
              });
        }})
    }
    return (
        <div className="hero min-h-screen bg-[url('https://cdn.stocksnap.io/img-thumbs/960w/paint-tube_YQBJGLGPPQ.jpg')] bg-no-repeat bg-center bg-cover">
            <div className="hero-content w-full justify-evenly flex-col lg:flex-row-reverse">
                <div className="text-center lg:w-1/2 lg:text-left">
                    <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-[#481E14]">Login now!</h1>
                    <p className="py-6 text-[#481e14ad] text-sm md:text-base">Enjoy awesome painting and drawing . Don&#39;t miss anything .Log in right now!</p>
                </div>
                <div className="card lg:w-1/2 shrink-0 w-full max-w-sm shadow-2xl bg-white bg-opacity-60">
                    <form onSubmit={handleLogin} className="p-3 text-gray-500">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                <RiLockPasswordFill />
                                <input type={pass} className="grow" placeholder="Password" name="password" />
                                <label className="swap swap-rotate">
                                    <input type="checkbox" />
                                    <FaEye onClick={() => setPass("text")} className="swap-on fill-current text-lg" />
                                    <FaEyeSlash onClick={() => setPass("password")} className="swap-off fill-current text-lg" />
                                </label>
                            </label>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-outline text-white bg-[#F2613F] hover:bg-[#f2603f9d]">Login</button>
                        </div>
                    </form>
                    <div className="divider mx-4">Or </div>
                    <div className="flex justify-center items-center gap-6 my-2">
                        <div className="border border-black p-3 text-blue-500 hover:text-white hover:bg-orange-800 rounded-full" onClick={creatUserGoogle}><FaGoogle /></div>
                        <div className="border border-black p-3 hover:text-white hover:bg-orange-800 rounded-full text-gray-500" onClick={creatUserGithub}><FaGithub /></div>
                    </div>
                    <div className="text-center pb-3">
                        <p>Don&apos;t have any account ? <Link to='/signup' className="btn btn-link text-orange-800 p-0">Sign up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;