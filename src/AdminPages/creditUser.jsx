import React from 'react'
import Dashboardtopnav from '../dashboardComponents/dashboard-topnav'
import DashboardSidenav from '../dashboardComponents/dashboard-sidenav'
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import Sidemobilenav from '../dashboardComponents/dashboardMobileDrawer'


function CreditUser() {
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

          <div className='md:w-[95%] max-w-[1440px] w-full m-auto flex  h-screen  justify-between'>
           
          <div className='md:block hidden'> 
              <DashboardSidenav/>
          </div>

            <div className='lg:w-[85%] xl:ml-0 md:ml-16 ml-4 w-[90%] lg:m-0 '>


            <div className='md:w-[55%] w-full bg-[#fff]  md:mx-auto rounded-lg p-4 mt-4'>

            <div className='cursor-pointer md:m-auto md:block hidden my-4' onClick={()=>{back(-1)}}>
              <Icon icon="material-symbols:arrow-back-rounded" color="#333" width="30" />
            </div>


                     <p className='my-4'>Credit User</p>
                     <input style={{border:"2px solid  #C4C4C4"}} className="w-[100%] p-2"  type={"num"} placeholder="Amount" />

                    <div className='my-6'>
                        <input style={{border:"2px solid  #C4C4C4"}} className="w-[100%] p-2"  type={"num"} placeholder="Pin" />
                    </div>
                

                    <div className='bg-[#554E90] cursor-pointer  my-4 p-1 rounded-sm text-[#fff]  text-center'>
                        <p className='text-sm'>Pay</p>
                    </div>

                </div>
            
            </div>


          </div>
        </div>
    </div>
  )
}

export default CreditUser