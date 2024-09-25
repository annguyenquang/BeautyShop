import React, { useState } from 'react'
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { MemberShipImage } from '../../assets/assets';
import MaintennacePage from '../../pages/MaintennacePage'; 
import {Link} from 'react-router-dom';


const MemberSection = () => {

    const [swiper, setSwiper] = useState(null);
    const handleNextClick = () => swiper?.slideNext();
    const handlePrevClick = () => swiper?.slidePrev();

    const quiz = [
        {
            id: 1,
            question: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit Lorem ipsum dolor sit.",
            link: "Start Quiz",
        },
        {
            id: 1,
            question: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit Lorem ipsum dolor sit.",
            link: "Submit",
        },
        {
            id: 1,
            question: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit Lorem ipsum dolor sit.",
            link: "Submit",
        },
        {
            id: 1,
            question: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit Lorem ipsum dolor sit.",
            link: "Submit",
        },
    ]


    return (
        <div>
            <div className='w-72 relative md:w-full h-72 lg:w-[50rem] mx-auto'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    onSwiper={setSwiper}
                    breakpoints={{
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 10
                        },
                    }}
                    modules={[Navigation]}
                    className="mySwiper w-full h-full py-10 "
                >
                    {quiz.map((q) => {
                        return <SwiperSlide className='w-full h-full px-4 py-4 text-white flex flex-col gap-4 items-center shadow-xl transition-all duration-[0.3s] hover:shadow-lg hover:shadow-rose-600 hover:-translate-y-5 rounded-lg bg-gradient-to-b from-rose-400 to-rose-500 border-[0.1px] border-black lg:gap-0 lg:px-8'>

                            <p className='text-base text-center md:text-left'>{q.question}</p>
                            <Link to={"/maintennace"} className="bg-rose-700 text-white px-4 py-2 md:mt-2 flex items-center rounded-lg hover:bg-rose-600 text-sm lg:text-base hover:text-white">{q.link}</Link>

                        </SwiperSlide>
                    })}
                </Swiper>

                <div
                    className="swiper-button-prev after:content-['prev'] after:text-2xl after:font-semibold after:text-center after:px-[13px] after:py-2 after:rounded-full after:text-black absolute top-[50%] -left-2 md:-left-10"
                    onClick={handlePrevClick}
                ></div>
                <div
                    className="swiper-button-next after:content-['next'] after:text-2xl after:font-semibold after:text-center after:px-[13px] after:py-2 after:rounded-full after:text-black absolute top-[50%] -right-2 md:-right-10"
                    onClick={handleNextClick}
                ></div>
            </div>

            <div className="flex sm:justify-end justify-center bg-gradient-to-b from-rose-300  to-rose-400 items-center h-[280px] md:h-[320px] border-[0.1px] border-gray-700 rounded-[20px] overflow-hidden">
                <div className="flex flex-col justify-center sm:justify-center items-center gap-4 h-full  bg-gradient-to-b from-rose-300  to-rose-400 z-[2] px-4 py-2">
                    <div className="md:text-xl lg:text-2xl font-extrabold">
                        Get Personalised message directly in your inbox
                    </div>
                    <div className="text-sm text-slate-800">
                        <p>here you can have all your favourite products</p>
                        <p>By using our websitte, you agree with our Term & conditions</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-3">
                        <input
                            type="text"
                            className="w-60 sm:w-80 h-[45px] outline-none rounded-3xl text-center"
                            placeholder="Enter your email"
                        />
                        <button className="bg-rose-700 border-[2px] hover:bg-rose-600 border-rose-700 hover:text-white text-white px-8 py-2 h-[45px] rounded-lg">
                            Let me in
                        </button>
                    </div>
                </div>
                <div className="hidden sm:block sm:w-[65%] sm:h-full">
                    <img src={MemberShipImage} alt="" className="w-full h-full mix-blend-darken" />
                </div>
            </div>
        </div>
    )
}

export default MemberSection






