import React from 'react'
import Dashboardtopnav from '../dashboardComponents/dashboard-topnav'
import DashboardSidenav from '../dashboardComponents/dashboard-sidenav'
import cablesArray from '../dashboardComponents/subscriptionArray'
import {Link} from 'react-router-dom'
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import Sidemobilenav from '../dashboardComponents/dashboardMobileDrawer'

function Subscription() {
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

            <div className='lg:w-[85%] xl:ml-0 md:ml-16 ml-4 w-[90%] lg:m-0 '>

            <div className='cursor-pointer md:block hidden my-4' onClick={()=>{back(-1)}}>
                  <Icon icon="emojione-monotone:back-arrow" color="#333" width="30" />
            </div>

            
            <div className='bg-[#fff] rounded-lg md:w-[70%] w-full mt-4 md:p-4 p-3 md:py-8 py-2'>

                    <p className='my-4 md:text-base text-[14px]'>Pay Cable Bills</p>
                        <div className='grid grid-cols-2  md:gap-2 gap-4'>
                            {cablesArray.map((items)=>{
                                return <Link to={items.link}>  <div key={items.id} className='bg-[#F2F2F2] w-[90%] cursor-pointer p-2 px-4 flex justify-between items-center  rounded-lg'>
                                                <div className='bg-[#fff] w-[120px] rounded-lg  shadow-lg p-1'>{items.img}</div>
                                                <p className='md:text-sm text-[12px] ml-2'>{items.text}</p>
                                        </div></Link>
                            })}
                        </div>
                </div>


            </div>


          </div>
        </div>
    </div>
  )
}

export default Subscription