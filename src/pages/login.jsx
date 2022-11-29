import React from 'react'
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';


function Signup() {
  return (
    <div className="bg-[#554E90] pb-4 h-screen">

        <p className='text-xl text-[#fff] p pt-16 mb-8 text-center m-auto w-[35%]'>Your search for cheap and reliable data ends here and now</p>

        <div className='w-[55%]   bg-[#fff] pb-12 text-center m-auto rounded-[10px] shadow-lg'>
          <p className='text-2xl text-center pt-8 font-medium'>Create an Account </p>

          <div className='text-xl  w-[70%] m-auto mt-4'>
              <p className='text-center text-base'>Let’s get you started</p>
          </div>

          <form className=''>
           
            <div className='mt-2'>
              <input style={{border:"2px solid  #C4C4C4"}} className=' m-auto w-[45%] p-2 text-xl rounded-lg mt-4 ' type={"text"} name="email" placeholder=' Enter email'/>
            </div>
            <div className='mt-2'>
              <input style={{border:"2px solid  #C4C4C4"}} className=' m-auto w-[45%] p-3 text-xl rounded-lg mt-4 ' type={"text"} name="password" placeholder='Confirm Password'/>
            </div>

            <Link to="/dashboard">
              <div className='p-3  bg-[#0E3F74] text-base mt-4 hover:bg-transparent cursor-pointer hover:border-2 hover:text-[#0E3F74] text-[#fff] rounded-lg m-auto text-xl w-[45%]'>
                Create Account
              </div>
            </Link>


            <div className='p-3 bg-[#0E3F74] mt-8 bg-transparent cursor-pointer border-2 border-[#0E3F74]  hover:text-[#0E3F74] text-[#0E3F74] rounded-lg m-auto text-xl w-[45%]'>
                <button className='flex items-center m-auto text-center'>
                <Icon icon="logos:google-icon" color="white" width="20" />
                 <p className='text-base ml-4'>Sign up with Google</p> 
                </button>
            </div>

          </form>
          
        </div>
   

    </div>
  )
}

export default Signup