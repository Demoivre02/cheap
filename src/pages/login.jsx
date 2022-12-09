import React from 'react'
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';


function Signup() {
  return (
    <div className="bg-[#554E90] pb-4 h-screen">

        <p className='md:text-xl text-[14px] text-[#fff] p pt-16 mb-8 text-center m-auto md:w-[45%] w-[80%]'>Your search for cheap and reliable data ends here and now</p>

        <div className='lg:w-[55%] md:w-[80%]  w-[90%]  bg-[#fff] pb-12 text-center m-auto rounded-[10px] shadow-lg'>
          <p className='text-2xl text-center pt-8 font-medium'>Welcome! </p>

          <div className='text-xl  w-[70%] m-auto md:mt-4 mt-1'>
              <p className='text-center text-base'>Login to your account</p>
          </div>

          <form className=''>
           
            <div className='mt:mt-2 mt-0'>
              <input style={{border:"2px solid  #C4C4C4"}} className=' m-auto lg:w-[45%] md:w-[65%] w-[85%] md:p-3 p-2 text-xl rounded-lg mt-4 ' type={"text"} name="email" placeholder=' Enter email'/>
            </div>
            <div className='mt:mt-2 mt-0'>
              <input style={{border:"2px solid  #C4C4C4"}} className=' m-auto lg:w-[45%] md:w-[65%] w-[85%] md:p-3 p-2 text-xl rounded-lg mt-4 ' type={"text"} name="password" placeholder='Confirm Password'/>
            </div>

            <Link to="/dashboard">
              <div className='md:p-3 p-2 bg-[#0E3F74] text-base md:mt-4 mt-8 hover:bg-transparent cursor-pointer hover:border-2 hover:text-[#0E3F74] text-[#fff] rounded-lg m-auto md:text-xl text-[12px] md:w-[45%] w-[80%]'>
                Login
              </div>
            </Link>


            <div className='p-3 bg-[#0E3F74] md:mt-8 mt-2 bg-white cursor-pointer border-2 border-[#0E3F74]  hover:text-[#0E3F74] text-[#0E3F74] rounded-lg m-auto text-xl md:w-[45%] w-[80%]'>
                <button className='flex items-center m-auto text-center'>
                <Icon icon="logos:google-icon" color="white" width="20" />
                 <p className='text-base ml-4 text-[#0E3F74]'>Sign in with Google</p> 
                </button>
            </div>

          </form>
          
        </div>
   

    </div>
  )
}

export default Signup