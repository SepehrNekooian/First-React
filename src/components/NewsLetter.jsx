import React from 'react'
import photocontent1 from "../../public/img/606.png"




const NewsLetter = () => {
 

  return (
    <section className="max-w-screen-2xl mx-auto relative z-10">
        <div className='bg-white-97 p-8 flex flex-col md:flex-row items-center justify-between mt-40 px-40'>
            {/* text content */}
            <div className='md:w-1/2 'data-aos="zoom-out-right">

            <h2 className='text-3xl lg:text-4xl font-bold mb-4'>Im <span className='text-red'>Sepehr Nekooian</span></h2>
            <p className='text-gray-700 mb-6'>If you have any questions, contact us!</p>
            <a href="" className='inline-flex items-center px-6 py-3 bg-white border border-red
            text-black font-medium rounded hover:bg-gray-100 transition-transform transform 
            hover:scale-105 duration-200 ease-in'>
            Contact Us
            <span className='text-lg ml-2'>→</span>
            </a>

            </div>

            {/* photo content */}
            <div>
                <img src={photocontent1} alt="Al"  className='w-80 mx-auto md:mt-12' data-aos="zoom-out-left"/>
            </div>

        </div>
        
    </section>
  )
}

export default NewsLetter