import React from 'react'
import cardimg1 from "../../public/img/movies-series/1.webp"
import cardimg2 from "../../public/img/movies-series/2.webp"
import cardimg3 from "../../public/img/movies-series/3.webp"
import cardimg4 from "../../public/img/movies-series/4.webp"
import cardimg5 from "../../public/img/movies-series/5.webp"
import cardimg6 from "../../public/img/movies-series/6.jpg"
import arrowIcon from "../../public/img/arrow-right-line.png"




import {MdLightMode} from "react-icons/md";
import {MdDarkMode} from "react-icons/md";

const Gallery = ({mode, setMode}) => {
    const handLerTheme = () =>{
  //change handlerTheme
  mode=="light"?setMode("dark"):setMode("light");
 }
  return (
    <section >
        <div className='max-w-screen-2xl container mx-auto mt-40 px-40'>
            {/* {header} */}
            <div className='flex justify-between w-full' data-aos="fade-up">
                <h2 className='text-3xl lg:text-4xl font-bold text-red'>
                    S<span className='text-white-97'>eries</span></h2>
                
            <div className=' text-white-97 border-white-97 '>
                <button className='px-6 py-3 border mx-auto
                flex items-center  gap-2 text-sm font-medium rounded-md transition-transform
                transform hover:scale-105'>
                    View  All<span><img src={arrowIcon} alt="arrow Icon" className='bg-white-97 rounded-full'/></span>
                </button>
            </div>
                

            </div>

            {/* {Card section} */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20'>

                {/* {card-1} */}
                <div className='lg:-mb-16 lg:mt-16 relative overflow-hidden' data-aos="fade-right">
                    <img src={cardimg1} alt="card-1" className='w-full object-cover 
                    hover:scale-95 transition-all duration-200 ease-in cursor-pointer'/>
                    <div className='mt-4 flex justify-between items-center'>
                        <p className='text-white-97 font-bold md:text-[20px]'>Mary Kills People 2025</p>
                        <h3 className='text-white-97 text-sm font-medium  bg-red  hover:bg-red-600 px-5 py-2 rounded-md
                         hover:scale-95 transition-all duration-200 ease-in cursor-pointer'>WATCH</h3>
                    </div>
                </div>

                {/* {card-2} */}
                <div className='relative  overflow-hidden' data-aos="fade-down">
                    <img src={cardimg2} alt="card-1" className='w-full object-cover 
                    hover:scale-95 transition-all duration-200 ease-in cursor-pointer'/>
                    <div className='mt-4 flex justify-between items-center'>
                        <p className='text-white-97 font-bold md:text-[20px]'>Two Graves 2025</p>
                        <h3 className='text-white-97 text-sm font-medium  bg-red  hover:bg-red-600  px-5 py-2 rounded-md
                        hover:scale-95 transition-all duration-200 ease-in cursor-pointer'>WATCH</h3>
                    </div>
                </div>

                {/* {card-3} */}
                <div className=' lg:-mb-16 lg:mt-16 relative  overflow-hidden'data-aos="fade-left">
                    <img src={cardimg3} alt="card-1" className='w-full object-cover 
                    hover:scale-95 transition-all duration-200 ease-in cursor-pointer'/>
                    <div className='mt-4 flex justify-between items-center'>
                        <p className='text-white-97 font-bold md:text-[20px]'>Chief of War 2025</p>
                        <h3 className='text-white-97 text-sm font-medium bg-red  hover:bg-red-600  px-5 py-2 rounded-md
                        hover:scale-95 transition-all duration-200 ease-in cursor-pointer'>WATCH</h3>
                    </div>
                </div>
            </div>
            <div className='md:mt-20 mt-5'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {/* {card-4} */}
                <div className='lg:-mb-16 lg:mt-16 relative  overflow-hidden'data-aos="fade-right">
                    <img src={cardimg4} alt="card-1" className='w-full object-cover 
                    hover:scale-95 transition-all duration-200 ease-in cursor-pointer'/>
                    <div className='mt-4 flex justify-between items-center'>
                        <p className='text-white-97 font-bold md:text-[20px]'>Alien: Earth 2025</p>
                        <h3 className='text-white-97 text-sm font-medium bg-red  hover:bg-red-600  px-5 py-2 rounded-md
                        hover:scale-95 transition-all duration-200 ease-in cursor-pointer'>WATCH</h3>
                    </div>
                </div>

                {/* {card-5} */}

                <div className='  overflow-hidden' data-aos="fade-down">
                    <img src={cardimg5} alt="card-1" className='w-full object-cover 
                    hover:scale-95 transition-all duration-200 ease-in cursor-pointer'/>
                    <div className='mt-4 flex justify-between items-center'>
                        <p className='text-white-97 font-bold md:text-[20px]'>The Family Next Door 2025</p>
                        <h3 className='text-white-97 text-sm font-medium bg-red  hover:bg-red-600 px-5 py-2 rounded-md
                        hover:scale-95 transition-all duration-200 ease-in cursor-pointer'>WATCH</h3>
                    </div>
                </div>
                
                {/* {card-6} */}
                <div className=' lg:-mb-16 lg:mt-16 relative  overflow-hidden'data-aos="fade-left">
                    <img src={cardimg6} alt="card-1" className='w-full object-cover 
                    hover:scale-95 transition-all duration-200 ease-in cursor-pointer'/>
                    <div className='mt-4 flex justify-between items-center'>
                        <p className='text-white-97 font-bold md:text-[20px]'>Peacemaker 2022</p>
                        <h3 className='text-white-97 text-sm font-medium bg-red  hover:bg-red-600 px-5 py-2 rounded-md
                        hover:scale-95 transition-all duration-200 ease-in cursor-pointer'>WATCH</h3>
                    </div>
                </div>

                    </div>
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

export default Gallery