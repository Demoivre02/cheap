import React from 'react'
import Dashboardtopnav from '../dashboardComponents/dashboard-topnav'
import DashboardSidenav from '../dashboardComponents/dashboard-sidenav'
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import Linechart from '../dashboardComponents/linechart';
import Sidemobilenav from '../dashboardComponents/dashboardMobileDrawer'

function Analytics() {
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


        <div className='lg:w-[95%] max-w-[1440px] w-full m-auto flex h-screen justify-between'>
          
            <div className='md:block hidden'> 
              <DashboardSidenav/>
            </div>


            <div className='lg:w-[85%] xl:ml-0 md:ml-16 ml-4 w-[90%] lg:m-0 '>



                    <div className='md:w-[85%] w-full bg-[#fff] rounded-lg p-4 pb-16 mt-4'>

                    <div className='cursor-pointer md:m-auto md:block hidden my-4' onClick={()=>{back(-1)}}>
                        <Icon icon="material-symbols:arrow-back-rounded" color="#333" width="30" />
                    </div>
                       
                    <Linechart/>

                    </div>
                </div>
          </div>
        </div>
    </div>
  )
}

export default Analytics