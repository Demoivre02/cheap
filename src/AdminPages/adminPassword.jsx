import React from 'react'
import Dashboardtopnav from '../dashboardComponents/dashboard-topnav'
import DashboardSidenav from '../dashboardComponents/dashboard-sidenav'
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import Sidemobilenav from '../dashboardComponents/dashboardMobileDrawer'

function AdminPasswordsettings() {
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

          <div className='lf:w-[95%] max-w-[1440px] w-full m-auto flex  h-screen  justify-between'>
            
            <div className='md:block hidden'> 
              <DashboardSidenav/>
            </div>

                <div className='lg:w-[85%] xl:ml-0 md:ml-16 ml-4 w-[90%] lg:m-0'>

                <div className='cursor-pointer  md:block hidden  my-4' onClick={()=>{back(-1)}}>
                  <Icon icon="emojione-monotone:back-arrow" color="#333" width="30" />


                </div>

                    <div className='md:w-[55%] w-full bg-[#fff] rounded-lg p-4 mt-4'>
                       
                    <p className='font-medium md:text-xl text-base my-4'> Change Password</p>

                    <div>
                        
                        <div>
                            <input style={{border:"2px solid  #C4C4C4"}} className="md:w-[100%] w-[95%] md:p-2 p-1 my-2"  type={"password"} placeholder="Old password" />
                        </div>

                        <div>
                            <input style={{border:"2px solid  #C4C4C4"}} className="md:w-[100%] w-[95%] md:p-2 p-1 my-2"  type={"password"} placeholder="New Password" />
                        </div>
                    
                        <div>
                            <input style={{border:"2px solid  #C4C4C4"}} className="md:w-[100%] w-[95%] md:p-2 p-1 my-2"  type={"password"} placeholder="Confirm Password" />
                        </div>

        
                    </div>

                        <div className='bg-[#554E90] md:text-sm text-[14px]  my-4 p-1 cursor-pointer rounded-lg text-[#fff]  text-center'>
                            <p>Change Password</p>
                        </div>

                        <div className='bg-transparent text-[#333333] md:text-sm text-[14px] border-2  my-4 p-1 cursor-pointer rounded-lg text-[#fff]  text-center'>
                            <p>Cancel</p>
                        </div>


                    </div>
                </div>
          </div>
        </div>
    </div>
  )
}

export default AdminPasswordsettings