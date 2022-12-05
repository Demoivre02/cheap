import React from 'react'
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';


function Signup() {
  return (
    <div className="bg-[#554E90] pb-4">

        <p className='md:text-xl text-[14px] text-[#fff] pt-16 mb-8 text-center m-auto md:w-[45%] w-[80%]'>Your search for cheap and reliable data ends here and now</p>

        <div className='lg:w-[55%]   md:w-[80%] w-[90%]  bg-[#fff] text-center m-auto rounded-[10px] shadow-lg'>
          <p className='md:text-2xl text-base text-center pt-8 font-medium'>Create an Account </p>

          <div className='text-xl  w-[70%] m-auto md:mt-4 mt-1'>
              <p className='text-center text-sm'>Let’s get you started</p>
          </div>

          <form className=''>
            <div className='md:mt-2 mt-0 border-black'>
              <input style={{border:"2px solid  #C4C4C4"}} className='  m-auto lg:w-[45%] md:w-[65%] w-[85%] md:p-3 p-2 text-xl rounded-lg mt-4 ' type={"text"} name="Fname" placeholder='First name'/>
            </div>
            <div className='md:mt-2 mt-0'>
              <input style={{border:"2px solid  #C4C4C4"}} className=' m-auto lg:w-[45%] md:w-[65%] w-[85%] md:p-3 p-2 text-xl rounded-lg mt-4 ' type={"text"} name="Lname" placeholder='Last name'/>
            </div>
            <div className='md:mt-2 mt-0'>
              <input style={{border:"2px solid  #C4C4C4"}} className=' m-auto lg:w-[45%] md:w-[65%] w-[85%] p-2 text-xl rounded-lg mt-4 ' type={"text"} name="email" placeholder=' Enter email'/>
            </div>
            <div className='md:mt-2 mt-0'>
              <input style={{border:"2px solid  #C4C4C4"}} className=' m-auto lg:w-[45%] md:w-[65%] w-[85%] md:p-3 p-2 text-xl rounded-lg mt-4 ' type={"text"} name="phone" placeholder=' Enter Phone number'/>
            </div>
            <div className='md:mt-2 mt-0'>
              <input style={{border:"2px solid  #C4C4C4"}} className=' m-auto lg:w-[45%] md:w-[65%] w-[85%] md:p-3 p-2 text-xl rounded-lg mt-4 ' type={"text"} name="password" placeholder='Enter Password'/>
            </div>
            <div className='md:mt-2 mt-0'>
              <input style={{border:"2px solid  #C4C4C4"}} className=' m-auto lg:w-[45%] md:w-[65%] w-[85%] md:p-3 p-2 text-xl rounded-lg mt-4 ' type={"text"} name="password" placeholder='Confirm Password'/>
            </div>
            
            <div className=' flex mt-3 md:w-[50%] w-[80%] mb-4 justify-center m-auto align-center'>
            <input type={"checkbox"} className='w-[5%] mr-4' />
            <span><p className='md:text-sm text-[10px]'>I accept the Terms of Use and Privacy Policy.</p></span>
            </div>

            <Link to="/dashboard">
              <div className='md:p-3 p-2 bg-[#0E3F74] md:mt-4 mt-8 hover:bg-transparent cursor-pointer hover:border-2 hover:text-[#0E3F74] text-[#fff] rounded-lg m-auto md:text-xl text-[12px] w-[80%] md:w-[45%]'>
                Create Account
              </div>
            </Link>


            <div className='p-3 bg-[#0E3F74] md:mt-8 mt-2 bg-white cursor-pointer border-2 border-[#0E3F74]  hover:text-[#0E3F74] text-[#0E3F74] rounded-lg m-auto md:text-xl text-[12px] md:w-[45%] w-[80%]'>
                <button className='flex items-center m-auto text-center'>
                <Icon icon="logos:google-icon" color="white" width="20" />
                 <p className=' ml-4 text-[#0E3F74]'>Sign up with Google</p> 
                </button>
            </div>

          </form>

          <p className='text-[#999999] md:text-base text-[12px]  mt-4 mb-4 pb-4'>Already have an account? <span className='text-[#0E3F74] cursor-pointer'> <Link to="/login">Sign In</Link></span> </p>
          
        </div>
   

    </div>
  )
}

export default Signup