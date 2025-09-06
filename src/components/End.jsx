import Instagram from "../../public/img/instagram-line.png"
import FaceBook from "../../public/img/facebook-line.png"

const End = ({mode, setMode}) => {
     const handLerTheme = () =>{
  //change handlerTheme
  mode=="light"?setMode("dark"):setMode("light");
 }
  return (
    <section>

        <div className='max-w-screen-2xl container mx-auto mt-10 px-10 flex justify-end'>
            
                
            <div className=' text-white-97'data-aos="fade-down">
                <button className='px-20 py-3  mx-auto
                flex items-center  gap-2 text-sm font-medium rounded-md transition-transform
                transform hover:scale-105  bg-red hover:bg-red-600'>
                    Instagram<span><img src={Instagram} alt="arrow Icon" className='bg-white-97 rounded-full'/></span>
                </button>
            </div>
                

        </div>


        <div className='max-w-screen-2xl container mx-auto mt-5 px-10 flex justify-end'>
            
                
            <div className=' text-white-97 ' data-aos="fade-up">
                <button className='px-20 py-3  mx-auto
                flex items-center  gap-2 text-sm font-medium rounded-md transition-transform
                transform hover:scale-105  bg-blue-800 hover:bg-blue-600'>
                    FaceBook<span><img src={FaceBook} alt="arrow Icon" className='bg-white-97 rounded-full'/></span>
                </button>
            </div>
                

        </div>

        <div className="">
            <div className="flex justify-center  mt-20 px-10 text-gray-600">
                <p className="text-white-97"><span className="text-red font-semibold">C</span>inema-</p>
                <p> Copyright ©2025 All rights reserved </p>
            </div>
        </div>
        <div>
            <div className="mt-2"></div>
        </div>

            


                    
           
            
        
        
    </section>
  )
}

export default End