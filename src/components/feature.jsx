import { React, useState } from 'react'
import Tab1 from "../assets/images/illustration-features-tab-1.svg";
import Tab2 from "../assets/images/illustration-features-tab-2.svg";
import Tab3 from "../assets/images/illustration-features-tab-3.svg";
const feature = () => {
    const [activeTab, setActiveTab] = useState(0);
    const tabs = [
        {
            title: "Simple Bookmarking",
            image: Tab1,
            heading: "Bookmark in one click",
            description:
                "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
        },
        {
            title: "Speedy Searching",
            image: Tab2,
            heading: "Intelligent search",
            description:
                "Our powerful search feature will help you find saved sites in no time at all."
        },
        {
            title: "Easy Sharing",
            image: Tab3,
            heading: "Share your bookmarks",
            description:
                "Easily share your bookmarks and collections with others."
        }
    ];
    return (
        <section className="feature  p-5 md:px-20 lg:px-40 grid grid-rows-[0.5fr_0.5fr_2fr] items-center justify-center gap-10 relative">
            <div className="row-1  text-center ">
                <h1 className='font-bold text-3xl mb-5'>Features</h1>
                <p className='text-md text-[#9194A1] text-center'>
                    Our aim is to make it quick and easy for you to access your <br />favorite websites. Your bookmarks sync between your devices <br />and browsers, so you can access them anywhere you wish.
                </p>
            </div>
            <div className="row-2 flex flex-col md:flex-row justify-center border-b">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`mb-5 px-6 py-4 cursor-pointer transition-colors duration-300 border-b-4 ${activeTab === index
                            ? 'border-[#FA5959] text-black'
                            : 'border-transparent text-[#9194A1]'
                            }`}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>
            <div className="row-3 flex gap-10 flex-col-reverse md:flex-row items-center ">
                <img
                    src={tabs[activeTab].image}
                    alt=""
                    className="transition-opacity duration-300"
                />

                <div className="content py-20 px-10 flex flex-col gap-5">
                    <h1 className='font-bold text-2xl'>
                        {tabs[activeTab].heading}
                    </h1>

                    <p className='text-[#9194A1]'>
                        {tabs[activeTab].description}
                    </p>

                    <button className='bg-[#5268DF] text-white px-8 py-3 w-fit rounded-sm hidden md:flex'>
                        More Info
                    </button>
                </div>
                <div className="box bg-[#5268DF] absolute top-200 md:top-100 md:bottom-0 left-0 w-[50%] md:w-[30%] h-[35%] md:h-[50%] rounded-r-[50%] z-[-1] lg:h-[60%]">  

                </div>
            </div>
        </section>
    )
}

export default feature
