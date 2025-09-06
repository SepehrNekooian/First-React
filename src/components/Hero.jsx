import React from 'react';
import {RiPlayFill, RiPlayLine} from "@remixicon/react";
import Marquee from "react-fast-marquee";
import "../Css/App.css"
import logowhite from "../../public/img/movies-2/white.png"
import Vidoeimg from "../../public/img/movies-2/15.webp"
import img7 from "../../public/img/movies-2/7.jpg"
import img8 from "../../public/img/movies-2/8.jpg"
import img9 from "../../public/img/movies-2/9.webp"
import img10 from "../../public/img/movies-2/10.jpg"
import img11 from "../../public/img/movies-2/11.jpg"
import img12 from "../../public/img/movies-2/12.webp"
import img13 from "../../public/img/movies-2/13.jpg"
import img14 from "../../public/img/movies-2/14.webp"



import {MdLightMode} from "react-icons/md";
import {MdDarkMode} from "react-icons/md";


const Hero = ({mode, setMode}) => {
    const handLerTheme = () =>{
    //change handlerTheme
   mode=="light"?setMode("dark"):setMode("light");
 }
  return (
    <section>
        
        <div  >
            {/* content */}
            <div className="mt-[10px] md:mt-10 text-center" >
                {/* title */}
                <div className="relative max-w-max mx-auto " >

                    <div className=" flex items-center bg-white border
                    border-white-97 rounded-lg p-3.5 justify-center
                    gap-2.5 max-w-max mx-auto flex-wrap text-center" >
                        <span>
                            <img src={logowhite} alt="title shape" width={48} height={48} data-aos="fade-up" />
                        </span>
                        <h1 className="text-2xl md:text-4xl" data-aos="fade-up">
                            <span className="text-red">BEST </span>MOVIES OF 2025
                        </h1>
                    </div>
                </div>
                <p className="text-2xl font-medium mt-4 md:text-[28px] text-white-97" data-aos="fade-down">Starts at USD 3.99. Cancel anytime.</p>
                <p className='text-white-97' data-aos="fade-up">Ready to watch? Enter your email to create or restart your membership.</p>

                {/* btn wrapper */}
                <div className="flex items-center justify-center gap-3 mt-8 flex-wrap">
                    <button className="primary-btn max-sm:w-[80%]" data-aos="fade-down">GET STARTED</button>
                    <button className="secondary-btn max-sm:w-[80%]" data-aos="fade-down">MORE</button>
                </div>


                {/* Marquee */}
                <div className="mt-10 lg:mt-10px] relative overflow-hidden" >
                    <div>
                        <Marquee direction='right' speed={100} >
                            <div className='image_wrapper'>
                                <img src={img7} alt=""/>
                            </div>
                             <div className='image_wrapper'>
                                <img src={img8} alt="" />
                            </div>
                             <div className='image_wrapper'>
                                <img src={img9} alt="" />
                            </div>
                             <div className='image_wrapper'>
                                <img src={img10} alt="" />
                            </div>
                             <div className='image_wrapper'>
                                <img src={img11} alt="" />
                            </div>
                             <div className='image_wrapper'>
                                <img src={img12} alt="" />
                            </div>
                             <div className='image_wrapper'>
                                <img src={img13} alt="" />
                            </div>
                             <div className='image_wrapper'>
                                <img src={img14} alt="" />
                            </div>
                        </Marquee>
                    </div>
                </div>
            </div>
            {/* Banner */}
            <figure className="relative rounded-xl overflow-hidden mt-14
            md:mt-14 lg:md-[50px] max-w-[920px] w-full h-[500px] mx-auto " data-aos="flip-left">
                <img src={Vidoeimg} alt="hero-banner" width={940} height={500} className="w-full h-full
                object-cover" />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/20 z-10"/>

                {/* play btn */}
                <div className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2
                translate-y-1/2 cursor-pointer">
                    <span className="flex bg-white w-16 h-16 items-center justify-center
                    rounded-full play-btn">
                        <RiPlayFill size={30}/>
                        
                    </span>
                </div>
            </figure>
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
  );
};

export default Hero;