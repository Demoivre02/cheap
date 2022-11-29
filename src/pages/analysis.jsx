import React from 'react'
import Dashboardtopnav from '../dashboardComponents/dashboard-topnav'
import DashboardSidenav from '../dashboardComponents/dashboard-sidenav'
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import Linechart from '../dashboardComponents/linechart';

function Analytics() {
  const back= useNavigate()

  return (
    <div>
        <Dashboardtopnav/>
        <div className='bg-[#F8F8F8] '>

          <div className='w-[95%] m-auto flex  h-screen  justify-between'>
            <DashboardSidenav/>

                <div className='w-[85%]'>

                <div className='cursor-pointer my-4' onClick={()=>{back(-1)}}>
                  <Icon icon="emojione-monotone:back-arrow" color="#333" width="30" />


                </div>

                    <div className='w-[85%] bg-[#fff] rounded-lg p-4 pb-16 mt-4'>
                       
                    <Linechart/>

                    </div>
                </div>
          </div>
        </div>
    </div>
  )
}

export default Analytics