import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const AboutUs = () => {
    return (
        <>
            <div className="heading md:pt-16 pt-8 md:pb-8">
                <hr className="bg-gradient-to-l from-rose-700" data-aos="fade-right" data-aos-delay="3000" data-aos-duration="2000" data-aos-easing="ease-in" />
                <h2 className="text-nowrap" data-aos="fade-up" data-aos-delay="3000" data-aos-duration="2000" data-aos-easing="ease-in">Know More About Divueens</h2>
                <hr className="bg-gradient-to-r from-rose-700" data-aos="fade-left" data-aos-delay="3000" data-aos-duration="2000" data-aos-easing="ease-in" />
            </div>
            <div className='px-8 text-center mt-8 md:mt-0 md:text-left'>
                <h3 className='text-base md:text-xl lg:text-2xl font-semibold'>About Us</h3>

                <div className='mt-4'>
                    <p className='text-xs md:text-sm mb-4 tracking-wide'>Divueens, your one destination for every occasion. The power of beauty lies in our
                        confidence, it derives our identity and illuminates our route. Our name “divueens” is a fusion of“diva” with “queens", diva associated with glamour and
                        likewise queen stands for royalty. </p>

                    <p className='text-xs md:text-sm mt-4 tracking-wide'>Divueens honours every women who is queen to her own self. We believe that beauty isn't
                        instinct but something we can shape. After all beauty is not always about covering
                        imperfections, but it is a tool to define every “you”.</p>

                    <div className='ml-auto md:mr-auto md:ml-0 w-fit my-4'>
                        <Link to={'/about-us'} className='text-xs group text-white bg-black/60 rounded-lg px-2 py-1 md:py-2 md:px-4 flex items-center gap-2 border hover:bg-black md:text-sm'>More <FaLongArrowAltRight className='group-hover:animate-pulse' size={20} /></Link>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AboutUs