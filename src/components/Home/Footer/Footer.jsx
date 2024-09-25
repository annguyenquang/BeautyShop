// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPinterest,
  FaChevronUp,
  FaChevronDown,
} from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
// import { Divueens } from "../../../assets/assets";
import { FaLinkedin } from "react-icons/fa";
import Divueens from "../../../assets/Divueens3.jpg";
import { Apple, FBG, Google } from "../../../assets/assets";
// import bg from "../../../assets/Shop_By_Category/background.svg";
const baadiList = [
  {
    title: "About us",
    chhotiList:
      [
        {
          url: "/about-us",
          txt: "Who are we ?",
        },
        {
          url: "/our-team",
          txt: "Our Team",
        },
        // {
        //   url: "",
        //   txt: "Press",
        // },

        {
          url: "/authenticity",
          txt: "Authenticity",
        },
        {
          url: "/careers",
          txt: "Careers",
        },

        // {
        //   url: "/CSR",
        //   txt: "Divueens CSR",
        // },
        {
          url: "/investor-relation",
          txt: "Investor Relation",
        },
      ]

  },
  {
    title: "Help",
    chhotiList: [
      // {
      //   url: "/privacy-policy",
      //   txt: "Privacy Policy",
      // },
      {
        url: "/contact-us",
        txt: "Contact Us",
      },
      {
        url: "/sell-on-divueens",
        txt: "Sell on Divueens",
      },
      {
        url: "/help-center",
        txt: "FAQs",
      },
      {
        url: "/return-policy",
        txt: "Cancellation & Returns",
      },
      {
        url: "/shippingdelivery",
        txt: "Shipping & Delivery",
      },
      {
        url: "/store-locator",
        txt: "Store Locator",
      },
    ],
  },
  {
    title: "Inspire Us",
    chhotiList: [
      {
        url: "/blogs",
        txt: "Cosmetic Chronicles",
      },
      {
        url: "/divueens-network",
        txt: "Network O' Divueens",
      },
      {
        url: "/virtual-try-on",
        txt: "Virtual TryOn",
      },
    ],
  },
  {
    title: "Quick Links",
    chhotiList: [
      {
        url: "/special-offers",
        txt: "Special Offers",
      },
      // {
      //   url: "/trendings",
      //   txt: "Trendings",
      // },
      // {
      //   url: "",
      //   txt: "New Launches",
      // },
      {
        url: "/membership",
        txt: "Membership",
      },
    ],
  },
  {
    title: "Top Categories",
    chhotiList: [
      {
        url: "/maintennace",
        txt: "Makeup",
      },
      {
        url: "/maintennace",
        txt: "Hair",
      },
      {
        url: "/maintennace",
        txt: "Organics",
      },
    ],
  },
];

function Footer() {
  const [toggleView, cngView] = useState(0);
  const [prev, cngPrev] = useState(0);
  const [textStyle, cngTextStyle] = useState('text-xs text-black transition hover:underline hover:text-rose-800');

  function ListItemsAll() {
    return baadiList.map((lst, index) => {
      return (
        <div
          className="col_ col-span-2 sm:col-span-1"
          // style={{ gridArea: `col_${index}` }}
          key={index}
          data-footer-part=""
        >
          <h3
            onClick={() =>
              prev !== index + 1 ? cngView(index + 1) : cngView(0)
            }

            className="drpBtn pb-1 text-xs text-black lg:text-base font-semibold"
          >
            {lst.title}
            {toggleView === index + 1 ? (
              <FaChevronUp className="btnShow" />
            ) : (
              <FaChevronDown className="btnShow" />
            )}
          </h3>
          <ul
            className={`close ${toggleView === index + 1 ? "all_Items" : ""
              } mt-4 space-y-1 text-sm`}
          >
            {lst.chhotiList.map((list2, int) => {
              return (
                <li key={int}>
                  <Link
                    to={list2.url}
                    className={textStyle}
                  >
                    {list2.txt}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      );
    });
  }

  useEffect(() => {
    ListItemsAll();
    cngPrev(toggleView);
  }, [toggleView]);

  return (
    <footer className="w-screen h-full lg:h-80 mt-4 relative">
      <div className="h-[26rem] lg:h-full opacity-40">
        <img src={FBG} className="object-cover w-full h-full" alt="" />
      </div>

      <div className={`absolute top-5 left-0 right-0 bottom-0 z-10`}>
        <div
          className="row_ md:mt-8 px-10 grid md:grid-cols-3 lg:mt-0 lg:grid-cols-6 sm:gap-y-8"
          data-footer-part=""
        >
          <div
            className="col_ col-span-2 sm:col-span-1 lg:col-span-1"
            //  style={{ gridArea: "col_Head" }}
            data-footer-part=""
          >
            <Link to="/" className="logo mx-auto">
              <img alt="" className="object-contain sm:mr-[200px] mx-auto h-[5rem] w-[10rem] md:h-[10rem] md:w-22 mix-blend-overlay" src={Divueens} />
            </Link>
            {/* <ul className="all_Items mt-6 space-y-3 text-sm">
              {_1stList.map((list2, int) => {
                return (
                  <li key={int}>
                    <Link
                      to={list2.url}
                      className={textStyle}
                    >
                      {list2.txt}
                    </Link>
                  </li>
                );
              })}
            </ul> */}
          </div>
          <ListItemsAll />
          {/* <ul className="col_ col-span-2 flex justify-center gap-8 pt-12 md:pt-5 lg:pr-12 lg:mr-6 sm:col-span-3 lg:col-span-4 lg:justify-end">
             */}
        </div>
        <ul className="flex justify-center mt-6 gap-4 md:gap-6 w-full relative float-right md:py-4 pt-6 pb-2 md:mr-24 md:justify-end">
          <li>
            <a href="/"
              className={textStyle}
            >
              <FaFacebook className="md:h-5  md:w-5 text-black hover:text-blue-500" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/divueens/"
              className={textStyle}
            >
              <FaInstagram className="md:h-5 md:w-5 text-black hover:text-pink-500" />
            </a>
          </li>
          <li>
            <a href="/"
              className={textStyle}
            >
              <FaWhatsapp className="md:h-5 md:w-5 text-black hover:text-green-500" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/divueens/about/"
              className={textStyle}
            >
              <FaLinkedin className="md:h-5 md:w-5 text-black hover:text-blue-600" />
            </a>
          </li>

          <div className="flex items-center md:gap-0 absolute -top-6 md:top-0 md:right-[20%] lg:right-40 md:bottom-0 w-fit h-12">
            <img src={Google} className="w-24 h-[2.5rem] md:w-36 md:h-12" alt="" />
            <img src={Apple} className="w-24 h-[2.5rem] md:w-36 md:h-12" alt="" />
          </div>
        </ul>

        <hr data-footer-part="" className="mt-6 mx-4 mb-3 border-none h-[0.6px] bg-black" />

        <div className="py-2 md:py-4 ">
          <div className="sm:flex sm:justify-between">
            <p className="copyright text-xs md:text-base pb-3 md:pb-0 text-black md:ml-20" data-footer-part="">
              DIVUEENS ©️ 2024 - All Rights Reserved
            </p>
            <ul className="flex flex-wrap justify-center md:mr-20 md:gap-4 gap-2 text-[0.6rem] sm:mt-0">
              <li>
                <Link to="/terms-and-conditions" className="text-black/80 transition hover:text-slate-800 hover:underline">
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link to="/privacy-policy" className="text-black/80 transition hover:text-slate-800 hover:underline">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link to="/" className="text-black/80 transition hover:text-slate-800 hover:underline">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
