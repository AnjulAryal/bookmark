import { React, useState } from 'react'
import Arrow from "../assets/images/icon-arrow.svg";
const FrequentlyAskedQuestions = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const faqs = [
        {
            question: "What is Bookmark?",
            answer:
                "Bookmark is a simple bookmark manager that helps you organize your bookmarks efficiently."
        },
        {
            question: "How can I request a new browser?",
            answer:
                "You can request a new browser by contacting our support team via email."
        },
        {
            question: "Is there a mobile app?",
            answer:
                "Currently, there is no mobile app, but one is planned for the future."
        },
        {
            question: "What about other Chromium browsers?",
            answer:
                "Bookmark supports most Chromium-based browsers including Chrome and Edge."
        }
    ];
    const toggleFAQs = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    }
    return (
        <section className='faq flex flex-col justify-center items-center gap-10 p-10 md:p-30'>
            <h1 className='text-2xl font-bold text-center'>Frequently Asked Questions</h1>
            <p className='text-center text-[#9194A1] font-semibold text-sm'>Here are some of our frequently asked questions. <br />If you have any other questions you'd like answered, please feel free to email us at <br />contact@bookmark.com.</p>
            <ul className='max-w-lg w-full'>
                {
                    faqs.map((faq, index) => {
                        return (
                            <li className='faq-item border-b-[0.5px] border-[#9194A1] py-5 text-center ' key={index}>
                                <div className='arrow flex justify-between items-center gap-5 cursor-pointer'>
                                    <h2>{faq.question}</h2>
                                    <img src={Arrow} alt="Arrow icon" onClick={() => toggleFAQs(index)} />
                                </div>
                                {
                                    openIndex === index && (
                                        <p className='text-[#9194A1] mt-5 text-start transition-all duration-300'>{faq.answer}</p>
                                    )
                                }
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}

export default FrequentlyAskedQuestions
