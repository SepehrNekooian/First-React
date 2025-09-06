import React from 'react'
import Blogimg1 from "../../public/img/soon/1.jpg";
import Blogimg2 from "../../public/img/soon/2.jpg";
import Blogimg3 from "../../public/img/soon/3.webp";
import arrowIcon from "../../public/img/arrow-right-line.png";



import {MdLightMode} from "react-icons/md";
import {MdDarkMode} from "react-icons/md";

const Blog = ({mode, setMode}) => {
    const handLerTheme = () =>{
    //change handlerTheme
   mode=="light"?setMode("dark"):setMode("light");
 }
  return (
    <section >
        <div className='max-w-screen-2xl container mx-auto mt-20 px-20 '>
            {/* header */}
            <div className='flex justify-between w-full' data-aos="fade-up">
                <h2 className='text-3xl lg:text-4xl font-bold text-red'>
                S<span className='text-white-97'>oon</span></h2>


            <div >
                <button className=' text-white-97 border-orange-50 px-6 py-3 border mx-auto
                    flex items-center  gap-2 text-sm font-medium rounded-md transition-transform
                    transform hover:scale-105'>
                    View  All<span><img src={arrowIcon} alt="arrow Icon" className='bg-white-97 rounded-full'/></span>
                </button>
            </div>
                
            </div>

            {/* blogs cards section */}

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 '>
                {/* card-1 */}
                <div className='border-b-gray-950 rounded-lg relative overflow-hidden shadow-lg hover:scale-105 
                transition-all duration-200 ease-in   bg-gray' data-aos="fade-up">
                    <img src={Blogimg1} alt="Blog img 1" className='w-full object-cover'/>
                    <div className='p-4'>
                        <p className='text-sm text-red mb-2'>Predator: Badlands 2025</p>
                        <h3 className='text-orange-50 text-lg font-semibold mb-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores porro et nobis nam iste fuga nihil aut neque! Ducimus, blanditiis.</h3>
                    </div>
                </div>

                {/* card-2 */}
                <div className='border-b-gray-950r rounded-lg relative overflow-hidden shadow-lg hover:scale-105 
                transition-all duration-200 ease-in  bg-gray'data-aos="fade-down">
                    <img src={Blogimg2} alt="Blog img 1" className='w-full object-cover'/>
                    <div className='p-4'>
                        <p className='text-sm text-red mb-2'>The Conjuring 2025</p>
                        <h3 className='text-orange-50 text-lg font-semibold mb-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque adipisci consequatur nesciunt nobis voluptates ipsa non repudiandae tempora earum mollitia.</h3>
                    </div>
                </div>

                {/* card-3 */}
                <div className='border-b-gray-950 rounded-lg relative overflow-hidden shadow-lg hover:scale-105
                transition-all duration-200 ease-in  bg-gray' data-aos="fade-up">
                    <img src={Blogimg3} alt="Blog img 1" className='w-full object-cover'/>
                    <div className='p-4'>
                        <p className='text-sm text-red mb-2'>Tron: Ares 2025</p>
                        <h3 className='text-orange-50 text-lg font-semibold mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sit doloribus ut numquam fugiat modi corrupti consectetur temporibus aliquid architecto!</h3>
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
                      {/* Clients Logo */}
                
            
    </section>
  )
}

export default Blog;