import React from 'react'
import ChromeLogo from "../assets/images/logo-chrome.svg";
import FirefoxLogo from "../assets/images/logo-firefox.svg";
import OperaLogo from "../assets/images/logo-opera.svg";
const download = () => {
  return (
    <section className="download grid grid-cols-1 md:grid-rows-[0.5fr_2fr] mx-10">
      <div className="row-1 w-full p-10">
        <h1 className='text-2xl text-center font-bold m-8'>Download the extension</h1>
        <p className='text-[#9194A1] w-full text-center '>We've got more browsers in the pipeline. Please do let us know if <br />you've got a favorite you'd like us to prioritize.</p>
      </div>
      <div className="row-2 grid grid-cols-1 md:grid-cols-3 w-full gap-3 md:p-20 md:gap-20 items-start lg:gap-10">
        {/* row1 */}
        <div className="card flex flex-col items-center text-center gap-5 shadow-xl p-6 rounded-2xl py-20">
          <img src={ChromeLogo} alt="Chrome Logo" />
          <h2 className='font-bold '>Add to Chrome</h2>
          <p className='text-[#9194A1]'>Minimum version: 62 </p>
          <div className='border-t-4 border-dotted border-[#9194A1] w-full pt-5 mt-5'>
          </div>
          <button className='bg-[#5268DF] text-white px-4 py-2 rounded-sm cursor-pointer  hover:bg-white hover:text-[#5268DF] hover:border-2 transition-all duration-700  ease-in-out'>Add & Install Extension</button>
        </div>
        {/* row2 */}
        <div className="card flex flex-col items-center text-center gap-5 shadow-2xl p-6 rounded-2xl py-20 mt-10">
          <img src={FirefoxLogo} alt="Chrome Logo" />
          <h2 className='font-bold '>Add to Firebox</h2>
          <p className='text-[#9194A1]'>Minimum version: 55 </p>
          <div className='border-t-4 border-dotted border-[#9194A1] w-full pt-5 mt-5'>
          </div>
          <button className='bg-[#5268DF] text-white px-4 py-2 rounded-sm cursor-pointer  hover:bg-white hover:text-[#5268DF] hover:border-2 transition-all duration-700  ease-in-out'>Add & Install Extension</button>
        </div>

        {/* row3 */}
        <div className="card flex flex-col items-center text-center gap-5 shadow-2xl p-6 rounded-2xl py-20 md:mt-25">
          <img src={OperaLogo} alt="Chrome Logo" />
          <h2 className='font-bold '>Add to Chrome</h2>
          <p className='text-[#9194A1]'>Minimum version: 46 </p>
          <div className='border-t-4 border-dotted border-[#9194A1] w-full pt-5 mt-5'>
          </div>
          <button className='bg-[#5268DF] text-white px-4 py-2 rounded-sm cursor-pointer hover:bg-white hover:text-[#5268DF] hover:border-2 transition-all duration-700  ease-in-out'>Add & Install Extension</button>
        </div>
      </div>
    </section>
  )
}

export default download
