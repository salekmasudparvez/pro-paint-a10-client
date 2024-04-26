import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    const links = <>
    <li><NavLink to='/' >Home</NavLink></li>
    <li><NavLink to='/artAndCraft'> All Art & craft Items</NavLink></li>
    <li><NavLink to='/addCraftItems'>Add Craft Item</NavLink></li>
    <li><NavLink to='/myArtAndCraftList'> My Art&Craft List</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar shadow-lg md:px-12">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                           {links}
                        </ul>
                    </div>
                    <Link to='/' className="font-playfair font-bold md:text-xl text-lg"><sup className="text-[#481e146f] text-xs">Pro</sup><span className="text-[#9B3922]">PAINTING</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end text-sm md:text-lg md:gap-3 ">
                    <Link to='/logIn' className="btn btn-outline md:btn-md btn-sm hover:bg-[#481E14]">Login</Link>
                    <Link to='/signup' className="btn btn-outline md:btn-md btn-sm hover:bg-[#481E14]">Sign up</Link>

                </div>
            </div>
        </div>
    );
};

export default Navbar;