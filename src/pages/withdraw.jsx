import React from 'react'
import Dashboardtopnav from '../dashboardComponents/dashboard-topnav'
import DashboardSidenav from '../dashboardComponents/dashboard-sidenav'
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import Sidemobilenav from '../dashboardComponents/dashboardMobileDrawer'

function Withdraw() {
  const back= useNavigate()



  return (
    <div>

        <div className='md:block hidden'> 
            <Dashboardtopnav/>
        </div>

          <div className='md:hidden block'>
              <Sidemobilenav/>
          </div>
        
        <div className='bg-[#F8F8F8] '>

          <div className='md:w-[95%] w-full m-auto flex h-screen justify-between'>
          
          <div className='md:block hidden'> 
              <DashboardSidenav/>
          </div>


            <div className='lg:w-[85%] xl:ml-0 md:ml-16 ml-4 w-[90%] lg:m-0'>

            <div className='cursor-pointer md:block hidden  my-4' onClick={()=>{back(-1)}}>
                  <Icon icon="emojione-monotone:back-arrow" color="#333" width="30" />
            </div>

            
            <div className='md:w-[55%] w-full bg-[#fff] rounded-lg md:p-4 p-2 mt-4'>

                <p className='my-4 md:text-base text-[14px]'>Withdraw</p>


                <div>
                  <input style={{border:"2px solid  #C4C4C4"}} className="md:w-[100%] w-[95%] p-2 my-2"  type={"num"} placeholder="Enter Amount" />
                  <input style={{border:"2px solid  #C4C4C4"}} className="md:w-[100%] w-[95%] p-2 my-2"  type={"text"} placeholder="Bank" />

                </div>

                <div className='bg-[#554E90]   my-4 p-1 rounded-lg text-[#fff]  text-center'>
                  <p>Pay</p>
                </div>

                </div>


            </div>



            </div>


          </div>
    </div>
  )
}

export default Withdraw