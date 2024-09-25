import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { sub_1, sub_2, sub_3, sub_4 } from "../../../assets/assets";
import { FaRegStar, FaRegStarHalfStroke, FaStar } from "react-icons/fa6";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const Slider = () => {
  const slidesData = [
    {
      img: sub_1,
      name: "Beauty Combo",
      price: 8400,
      original_price: 12000,
      rating: 4.5,
    },
    {
      img: sub_2,
      name: "Beauty Combo",
      price: 8400,
      original_price: 12000,
      rating: 3.2,
    },
    {
      img: sub_3,
      name: "Beauty Combo",
      price: 8400,
      original_price: 12000,
      rating: 2.6,
    },
    {
      img: sub_4,
      name: "Beauty Combo",
      price: 8400,
      original_price: 12000,
      rating: 5,
    },
    {
      img: sub_1,
      name: "Beauty Combo",
      price: 8400,
      original_price: 12000,
      rating: 3.2,
    },
    {
      img: sub_2,
      name: "Beauty Combo",
      price: 8400,
      original_price: 12000,
      rating: 3.2,
    },
    {
      img: sub_3,
      name: "Beauty Combo",
      price: 8400,
      original_price: 12000,
      rating: 3.2,
    },
    {
      img: sub_4,
      name: "Beauty Combo",
      price: 8400,
      original_price: 12000,
      rating: 3.2,
    },
    {
      img: sub_1,
      name: "Beauty Combo",
      price: 8400,
      original_price: 12000,
      rating: 3.2,
    },
    {
      img: sub_2,
      name: "Beauty Combo",
      price: 8400,
      original_price: 12000,
      rating: 3.2,
    },
    {
      img: sub_3,
      name: "Beauty Combo",
      price: 8400,
      original_price: 12000,
      rating: 3.2,
    },
    {
      img: sub_4,
      name: "Beauty Combo",
      price: 8400,
      original_price: 12000,
      rating: 3.2,
    },
    {
      img: sub_1,
      name: "Beauty Combo",
      price: 8400,
      original_price: 12000,
      rating: 3.2,
    },
    {
      img: sub_2,
      name: "Beauty Combo",
      price: 8400,
      original_price: 12000,
      rating: 3.2,
    },
    {
      img: sub_3,
      name: "Beauty Combo",
      price: 8400,
      original_price: 12000,
      rating: 3.2,
    },
    {
      img: sub_4,
      name: "Beauty Combo",
      price: 8400,
      original_price: 12000,
      rating: 3.2,
    },
  ];

  const [swiper, setSwiper] = useState(null);

  const handleNextClick = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const handlePrevClick = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  return (
    <div className="">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        onSwiper={(swiper) => setSwiper(swiper)}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        breakpoints={{
          425: {
            slidesPerView: 2,

          },
          600: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          800: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },

        }}
        modules={[Navigation, Pagination]}
        className="mySwiper  w-[95%] relative px-12 md:px-9 py-6 "
      >
        {slidesData.map((data, i) => (
          <SwiperSlide
            className="border rounded-lg overflow-hidden shadow-md shadow-zinc-400 bg-white"
            key={i}
          >
            <div className=" ">
              <img
                src={data.img}
                alt=""
                className="w-full h-[150px] md:h-[200px] object-cover bg-black"
              />
            </div>
            <div className="opacity-0 bg-black hover:opacity-100 hover:bg-opacity-20 absolute top-0 left-0 right-0 bottom-0 h-[100%] transition-all duration-[0.7s] flex items-center justify-center">
              <Link to={""}>
                <button className="bg-rose-700 text-white cursor-pointe text-sm p-3 rounded-md shadow-md font-medium shadow-black hover:bg-rose-600">
                  Buy Now
                </button>
              </Link>
            </div>
            <div className="flex flex-col px-3 md:py-2 w-full">
              <div className="flex flex-col items-start">
                <div className="">
                  {/* Product Name */}
                  <p className=" text-rose-950 text-sm md:text-base pt-1 font-medium">{data.name} product</p>
                  {/* StarIcons */}
                  <div className="flex text-[10px] md:text-xs  text-[#f5911e]">
                    {[...Array(Math.floor(data.rating))].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                    {data.rating % 1 !== 0 ? (
                      data.rating % 1 <= 0.5 ? (
                        <FaRegStarHalfStroke />
                      ) : (
                        <FaRegStar />
                      )
                    ) : (
                      <></>
                    )}
                    {[...Array(5 - Math.ceil(data.rating))].map((_, i) => (
                      <FaRegStar key={i} />
                    ))}
                  </div>
                </div>
                {/* Pricings */}
                <div className="flex gap-2">
                  <p className="text-sm md:text-lg py-2 font-medium text-rose-800"><span className="text-xs align-text-top">₹</span>
                    {data.price}/-</p>
                  <p className="text-xs text-slate-400 self-center ">

                    <span className="text-emerald-600 pr-1">
                      {(data.price / data.original_price) * 100}%
                    </span>
                    <del className="text-[10px]">₹{data.original_price}/-</del>
                  </p>
                </div>
              </div>
              {/* <p className="text-xs pr-3 py-1 text-slate-600">
                Lorem ipsum dolor sit amet consec tetur adipisicing elit.
              </p> */}

              {/* <div className="flex flex-col items-center">
                <div className="text-black mt-[5px] mx-0 text-[1rem] font-medium text-left flex items-center gap-4 relative w-full">
                  // {data.name}
                  <div className="flex flex-col items-center absolute -top-4 right-0"></div>
                </div>
              </div> */}
            </div>
          </SwiperSlide>
        ))}
        <div
          className="swiper-button-prev after:content-['prev'] after:text-xs after:font-extrabold after:text-center after:px-[13px] after:py-2 after:rounded-full after:text-white after:bg-rose-700 rounded-full after:hover:bg-rose-800 absolute top-1/2 left-2"
          onClick={handlePrevClick}
        ></div>
        {/* <div
          className="swiper-button-prev after:content-['prev'] after:text-xs after:font-extrabold after:text-center after:px-[13px] after:py-2 after:rounded-full after:text-rose-800 after:hover:text-white rounded-full after:hover:bg-rose-700 absolute top-1/2 left-2"
          onClick={handlePrevClick}
        ></div> */}

        <div
          className="swiper-button-next absolute top-1/2 right-0 after:content-['next'] after:text-xs after:font-extrabold after:text-center after:px-[13px] after:py-2 after:rounded-full after:text-white after:bg-rose-700 rounded-full after:hover:bg-rose-800"
          onClick={handleNextClick}
        ></div>
      </Swiper>
    </div>
  );
};

export default Slider;
