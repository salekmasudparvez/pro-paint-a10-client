import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import { RingLoader } from "react-spinners";
import { Tooltip } from "react-tooltip";
import { Turn as Hamburger } from 'hamburger-react'
import Navitem from "./Navitem";


const Navbar = () => {

    const [isOpen, setOpen] = useState(false)
    const [updateTheme, setUpdateTheme] = useState(localStorage.getItem('theme') || "light")

    const { user, LogOutUser, loading } = useAuth();


    useEffect(() => {
        localStorage.setItem('theme', updateTheme)
        document.querySelector('html').setAttribute('data-theme', updateTheme);
    }, [updateTheme])


    const links = <>
        <Navitem to='/' name="Home"></Navitem>
        <Navitem to='/artAndCraft' name="All Art & craft Items"> </Navitem>
        <Navitem to='/addCraftItems' name="Add Craft Item"></Navitem>
        <Navitem to='/myArtAndCraftList' name="My Art&Craft List"> </Navitem>
    </>
    return (
        <div>
            <div className="navbar shadow-lg md:px-12 w-full">
                <div className="navbar-start w-[30%] flex justify-start ">
                    <div className=" w-full lg:hidden">
                       
                        <div className="">
                            <Hamburger size="22" toggled={isOpen} toggle={setOpen} />
                        </div>
                       
                        {isOpen && (
                            <div className={`bg-white border lg:hidden transform ease-in-out duration-1000 w-full absolute flex flex-col z-10 rounded-b pb-4 space-y-1 px-3 left-0 right-0 
    ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}>
                                {links}
                                <Link to='/logIn' className="btn btn-outline md:btn-md btn-sm hover:bg-[#481E14]">Login</Link>
                                <Link to='/signup' className="btn btn-outline md:btn-md btn-sm hover:bg-[#481E14]">Sign up</Link>
                                <label className="mx-3 flex justify-center">
                                    <svg onClick={() => setUpdateTheme("dark")} className={`${updateTheme === "light" ? "flex" : "hidden"} fill-current w-10 h-10`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                                    </svg>
                                    <svg onClick={() => setUpdateTheme("light")} className={`${updateTheme === "dark" ? "flex" : "hidden"} fill-current w-10 h-10`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                                    </svg>
                                </label>
                            </div>
                        )}


                    </div>
                    <Link to='/' className="font-playfair font-bold md:text-xl text-lg"><sup className="text-[#c2624a6f] text-xs">Pro</sup><span className="text-[#ff9178]">PAINTING</span></Link>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-4 ">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end text-sm md:text-lg md:gap-3 ">
                    <label className=" mx-3 lg:inline-grid hidden">
                        <svg onClick={() => setUpdateTheme("dark")} className={`${updateTheme === "light" ? "flex" : "hidden"} fill-current w-10 h-10`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                        <svg onClick={() => setUpdateTheme("light")} className={`${updateTheme === "dark" ? "flex" : "hidden"} fill-current w-10 h-10`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                    </label>

                    {user ?
                        <div data-tooltip-id="my-tooltip" data-tooltip-content="Profile" className="avatar w-14 h-14 object-cover dropdown dropdown-end ring ring-orange-700 ring-offset-base-100 ring-offset-2 rounded-full">
                            <img className="rounded-full " tabIndex={0} role="button" src={user.photoURL ? user.photoURL :
                                "https://cdn-icons-png.freepik.com/256/3177/3177440.png"} />
                            <ul tabIndex={0} className="dropdown-content z-[10] menu shadow bg-base-100 rounded-box p-3 w-52">
                                <li><a className="text-lg font-bold text-orange-600">{user.displayName}</a></li>
                                <li><a onClick={() => LogOutUser()} className="btn btn-outline ">Log out</a></li>
                            </ul>

                        </div> : loading ? <RingLoader color="#36d7b7" /> :
                            <div className="lg:flex hidden space-x-2">
                                <Link to='/logIn' className="btn btn-outline md:btn-md btn-sm hover:bg-[#481E14]">Login</Link>
                                <Link to='/signup' className="btn btn-outline md:btn-md btn-sm hover:bg-[#481E14]">Sign up</Link>
                            </div>
                    }

                </div>
            </div>
            <Tooltip id="my-tooltip" />

        </div>
    );
};

export default Navbar;