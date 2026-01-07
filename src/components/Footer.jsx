import React from 'react'
import Logo from "../assets/images/logo-bookmark.svg"
import Facebook from "../assets/images/icon-facebook.svg";
import Twitter from "../assets/images/icon-twitter.svg";
const Footer = () => {
    return (
        <footer className='bg-[#5268DF]  flex flex-col gap-5 p-5 md:p-0 '>
            <p className='mt-10 text-center text-white tracking-[0.25rem] uppercase'>35,000+ already joined</p>
            <h1 className='text-center text-white text-3xl font-bold'>Stay up-to-date with what <br />we're doing</h1>
            <div className="input-container flex flex-col justify-center gap-5 md:flex-row">
                <input type="text" className='bg-white outline-0 px-5 py-2 rounded-sm'/>
                <button className='bg-[#FA5756] text-white px-5 py-1 rounded-sm cursor-pointer'>Contact us</button>
            </div>
            <div className="mt-10 footer flex justify-between bg-[#252B46] p-10 bottom-0 flex-col items-center gap-10">
                <div className="left flex  flex-col md:flex-row">
                    <img src={Logo} alt="" className='mb-4 md:m-0'/>
                    <nav className='text-white flex gap-4 flex-col md:flex-row items-center'>
                        <a href="">FEATURES</a>
                        <a href="">PRICING</a>
                        <a href="">CONTACT</a>
                    </nav>
                </div>
                <div className="right flex flex-cols gap-10">
                    <img src={Facebook} alt="" />
                    <img src={Twitter} alt="" />
                </div>
            </div>
        </footer>
    )
}

export default Footer
