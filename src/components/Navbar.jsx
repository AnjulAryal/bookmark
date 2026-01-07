import React, { useState } from 'react'
import Logo from "../assets/images/logo-bookmark.svg"
import HamburgerMenu from "../assets/images/icon-hamburger.svg";
import Close from "../assets/images/icon-close.svg";
import Facebook from "../assets/images/icon-facebook.svg";
import Twitter from "../assets/images/icon-twitter.svg";
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className={`flex justify-between items-center ${menuOpen ? "bg-[#3B4059]" : "bg-white"} md:bg-white w-full`}>
            <div className='logo flex justify-between items-center w-full z-1000000 transition-all ease-in-out duration-500'>
                <img src={Logo} className='text-white' />
                <img src={menuOpen ? Close : HamburgerMenu} alt="" className='md:hidden' onClick={() => setMenuOpen(prev => !prev)} />
            </div>
            {/* Desktop Navbar */}
            <nav className='hidden md:flex gap-10 items-center'>
                <a href="">FEATURES</a>
                <a href="">PRICING</a>
                <a href="">CONTACT</a>
                <a href="" className='bg-[#FA5756] text-white px-8 py-1 rounded-sm hover:bg-white hover:text-[#FA5756] hover:border-2 transition-all duration-700 ease-in-out'>LOGIN</a>
            </nav>
            {/* Mobile Navbar */}
            {
                menuOpen && (
                    <nav className=' absolute top-0  h-screen bg-[#3B4059] md:hidden  text-white left-0 w-full pt-30 p-20'>
                        <div className="flex flex-col items-center ">
                            <a href="" className='text-2xl text-center w-full py-5 border-y-[0.45px]'>FEATURES</a>
                            <a href="" className='text-2xl text-center w-full py-5 border-b-[0.45px]'>PRICING</a>
                            <a href="" className='text-2xl text-center w-full py-5 border-b-[0.45px]'>CONTACT</a>
                            <a href="" className='bg-none text-white px-8 py-1 rounded-sm hover:bg-white transition-all duration-700 ease-in-out w-full text-center mt-15 border-2 py-5'>LOGIN</a>
                        </div>
                        <div className="logos flex items-center gap-10 mt-40 justify-center">
                            <img src={Facebook} alt="" />
                            <img src={Twitter} alt="" />
                        </div>
                    </nav>
                )
            }
        </header>
    )
}

export default Navbar
