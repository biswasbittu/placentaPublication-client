import { useState } from "react";
import { FiMenu, FiX, } from "react-icons/fi";
import Logo from "../../../component/Logo/Logo";
import { Link, NavLink } from "react-router";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = <>

    
    <NavLink  to='/' className={({isActive})=>isActive ? "text-green-600 underline" : "hover:text-green-600 text-black" }>Home</NavLink>
    <NavLink  to='#about' className={(isActive)=>isActive ? "text-green-600 underline" : "hover:text-green-600" }>About</NavLink>
    <NavLink  to='#services' className={(isActive)=>isActive ? "text-green-600 underline" : "hover:text-green-600" }>Services</NavLink>
    <NavLink  to='/Shop' className={({isActive})=>isActive ? "text-green-600 underline" : "hover:text-green-600" }>BookS Shop</NavLink>
    <NavLink  to='#Contact' className={(isActive)=>isActive ? "text-green-600 underline" : "hover:text-green-600" }>Contact</NavLink>



  </>

  return (
    <nav className="w-full  fixed top-0 left-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className=" px-5 flex items-center justify-between">

        {/* Logo */}
        <div className="text-xl md:text-2xl font-bold text-green-700 flex items-center ">
          <Logo />  প্লাসেন্টা পাবলিকেশন
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          {links}
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <button className="bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition cursor-pointer">
            Get Started
          </button>
        </div>

        {/* Mobile Icon */}
        <div className="md:hidden text-2xl">
          <button onClick={() => setOpen(!open)}>
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <div
        className={`md:hidden bg-white overflow-hidden transition-all duration-500 ease-in-out ${open ? "max-h-96 opacity-100 py-5" : "max-h-0 opacity-0"
          }`}
      >
        <ul className="flex flex-col gap-5 px-5 text-gray-700 font-medium">
          {links}
        </ul>

        <div className="px-5 mt-5">
          {/* <button className="w-full bg-green-600 text-white py-2 rounded-full hover:bg-green-700 transition">
            Get Started
          </button> */}
          <button className="">
            <Link className="w-full bg-green-600 text-white py-2 
          rounded-full hover:bg-green-700 transition cursor-pointer "
          >Get Started</Link>
          </button>
        </div>
      </div>
    </nav>
  );
}