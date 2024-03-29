import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";


const NavBar = () => {
    const { user, handleLogOut, handleThemeSwitch } = useContext(AuthContext);
    const [toggle, setToggle] = useState(true);




    const navItems = <>

        <button className=" block md:hidden ml-10" onClick={() => handleThemeSwitch()}>
            <span onClick={() => setToggle(!toggle)}>
                {
                    toggle === true ? <FaToggleOff className="text-3xl"></FaToggleOff> : <FaToggleOn className="text-3xl"></FaToggleOn>
                }
            </span>
        </button>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/rooms'>Rooms</NavLink></li>
        {
            user && <li><NavLink to='/my-Bookings'>My Bookings</NavLink></li>
        }
        <li><NavLink to='/gallery'>Gallery</NavLink></li>
        <li><NavLink to='/about-us'>About Us</NavLink></li>
    </>







    // console.log(user)
    const handleUserLogOut = () => {
        const email = user.email
        const userInfo = { email }
        handleLogOut()
            .then(() => {
                Swal.fire({
                    title: "Good job!",
                    text: "Your Logout is successfully done",
                    icon: "success"
                });
                axios.post('https://stay-nest-server.vercel.app/clear-token', userInfo, { withCredentials: true })
                    .then(res => {
                        console.log(222222222, res.data)
                    })


                // fetch('https://stay-nest-server.vercel.app/clear-token',{
                //     method:'POST',
                //     headers:{'content-type':'application-json'},
                //     body:JSON.stringify(userInfo)


                // })
                // .then(res=>res.json())
                // .then(data=>{
                //     console.log('navbar',data)
                // })





            })
            .catch(() => {
                console.log('user log out failed')
            })
    }
    return (
        <div className="navbar bg-base-100 dark:bg-black dark:text-slate-400 ">

            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-2xl font-bold text-[#09ad9b] ">StayNest.com</a>

                <button className=" hidden md:block ml-10" onClick={() => handleThemeSwitch()}>
                    <span onClick={() => setToggle(!toggle)}>
                        {
                            toggle === true ? <FaToggleOff className="text-3xl"></FaToggleOff> : <FaToggleOn className="text-3xl"></FaToggleOn>
                        }
                    </span>
                </button>

            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>

            </div>

            <div className="navbar-end">
                <div className="  mr-2">
                    {
                        user && <div className="block">
                            {
                                user?.photoURL && <img className="w-12 h-12 rounded-3xl" src={user?.photoURL} /> || <img className="rounded-3xl w-[50px] h-[50px]" src='https://i.ibb.co/K5Q1JQN/profile-1.jpg' />
                            }
                        </div>
                    }
                    <div className="hidden md:block">
                        {
                            user?.email && <span>{user?.email}</span>
                        }
                    </div>
                </div>

                {
                    user ? <><button onClick={handleUserLogOut} className="btn block btn-xs text-white md:btn-sm bg-[#0cc4b0] hover:bg-[#09ad9b]">Log Out</button></> : <><NavLink className="btn text-white btn-sm bg-[#0cc4b0] hover:bg-[#09ad9b]" to='/login'>Log In</NavLink></>
                }

            </div>

        </div>
    );
};

export default NavBar;