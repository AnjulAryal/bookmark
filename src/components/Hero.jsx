import React from 'react'
import DesHero from "../assets/images/illustration-hero.svg"
import Navbar from './Navbar'
const Hero = () => {
    return (
        <section className='p-10 md:px-20 lg:px-40  my-10 flex flex-col gap-5 md:gap-10 relative'>
            <Navbar />
            <div className="hero-container grid grid-rows-[1fr_1fr] md:grid-cols-[1fr_1fr] md:grid-rows-1 items-center gap-5 py-10">
                <div className="hero-content flex flex-col gap-5 mt-8">
                    <h1 className='text-3xl font-bold text-[#252B46] text-center md:text-start'>A Simple Bookmark <br />
                        Manager
                    </h1>
                    <p className='text-md text-[#9194A1]'>
                        A clean and simple interface to organize your <br />favorite websites. Open a new browser tab and see your sites load <br />instantly. Try it for free.
                    </p>
                    <div className="buttons flex gap-2 justify-center md:justify-start">
                        <button className='px-3 py-1.5 bg-[#5268DF] text-white rounded-sm cursor-pointer shadow-2xl'>
                            Get it on Chrome
                        </button>
                        <button className='px-3 py-1.5  bg-[#FFFFFF] shadow-2xl'>
                            Get it on Fiberbox
                        </button>
                    </div>
                </div>
                <div className="hero-image-container row-start-1 row-end-2 md:col-start-2 md:col-end-3 ">
                    <img src={DesHero} alt="" className='' />
                    <div className="box bg-[#5268DF] absolute top-50 md:bottom-0 right-0 w-[50%] md:w-[30%] h-[30%] md:h-[50%] rounded-l-[50%] z-[-1] lg:h-[60%]">  
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
