import React from 'react'
import cardimg1 from "../../public/img/Testimonial/1.jpg";
import cardimg2 from "../../public/img/Testimonial/2.png";
import cardimg3 from "../../public/img/Testimonial/3.webp";
import quouteIcon from "../../public/img/arrow-left-line.png";


import {MdLightMode} from "react-icons/md";
import {MdDarkMode} from "react-icons/md";

const Testimonian = ({mode, setMode}) => {
    const handLerTheme = () =>{
    //change handlerTheme
   mode=="light"?setMode("dark"):setMode("light");
 }
  return (
    <section >
        
        <div className='max-w-screen-2xl container  mx-auto mt-30 px-30'>
            {/* header */}
            <div className='text-center mb-12' data-aos="fade-up">
                <h2 className='text-3xl lg:text-4xl font-bold text-white-97'>
                More Reasons to <span className='text-red'> Join</span></h2>
                <p className='mt-4 text-white-97 max-w-2xl mx-auto'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Repudiandae a labore ipsam corporis debitis et, modi consectetur vel iste officiis?</p>
            </div>

            {/* testimonial */}

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20'>
                {/* card-1 */}
                <div className='bg-gray rounded-lg shadow-md p-6'data-aos="flip-left">
                    <div className='mb-4'>
                        <img src={cardimg1} alt="" className='size-12 rounded-full object-cover'/>
                    </div>
                    <blockquote className='text-white-97 text-sm mb-3'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more. </blockquote>
                    <div className='text-start flex justify-between items-center'>
                        <div>
                            <h4 className='text-red font-semibold'>Enjoy on your TV</h4>
                            {/* <p className='text-sm text-gray-500'>Lorem, ipsum.</p> */}
                        </div>
                        <div>
                            <span className=''>
                                <img src={quouteIcon} alt="" className='bg-white-97 rounded-full'/>
                            </span>
                        </div>
                    </div>
                </div>

                {/* card-2 */}
                <div className='bg-gray rounded-lg shadow-md p-6'data-aos="flip-right">
                    <div className='mb-4'>
                        <img src={cardimg2} alt="" className='size-12 rounded-full object-cover'/>
                    </div>
                    <blockquote className='text-white-97 text-sm mb-3'>Save your favorites easily and always have something to watch. </blockquote>
                    <div className='text-start flex justify-between items-center'>
                        <div>
                            <h4 className='text-red font-semibold'>Download your Movies </h4>
                            {/* <p className='text-sm text-red'>Lorem, ipsum.</p> */}
                        </div>
                        <div>
                            <span className=''>
                                <img src={quouteIcon} alt="" className='bg-white-97 rounded-full' />
                            </span>
                        </div>
                    </div>
                </div>

                {/* card-3 */}
                <div className='bg-gray rounded-lg shadow-md p-6'data-aos="flip-left">
                    <div className='mb-4'>
                        <img src={cardimg3} alt="" className='size-12 rounded-full object-cover'/>
                    </div>
                    <blockquote className='text-white-97 text-sm mb-3'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV. </blockquote>
                    <div className='text-start flex justify-between items-center'>
                        <div>
                            <h4 className='text-red font-semibold'>Watch everywhere</h4>
                            {/* <p className='text-sm text-gray-500'>Lorem, ipsum.</p> */}
                        </div>
                        <div>
                            <span className=''>
                                <img src={quouteIcon} alt="" className='bg-white-97 rounded-full' />
                            </span>
                        </div>
                    </div>
                </div>

            </div>

            {/* dots for slider */}

            <div className='flex justify-center mt-8'>
                <div className='size-2 bg-red rounded-full mx-1'></div>
                <div className='size-2 bg-red-300 rounded-full mx-1'></div>
                <div className='size-2 bg-red-300 rounded-full mx-1'></div>
            </div>

        </div>

        {/* {
            mode=="light" ? (
            <MdDarkMode 
            size={35} 
            className='cursor-pointer' 
            onClick={()=>handLerTheme()}
            />
            ) : (
            <MdLightMode size={35} className='cursor-pointer text-white-97' onClick={()=>handLerTheme()}/>
        )} */}

    </section>
  )
}

export default Testimonian