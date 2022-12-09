import React from 'react'
import Dashboardtopnav from '../dashboardComponents/dashboard-topnav'
import DashboardSidenav from '../dashboardComponents/dashboard-sidenav'
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import Sidemobilenav from '../dashboardComponents/dashboardMobileDrawer'

function EditUser() {
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

          <div className='md:w-[95%] w-full m-auto flex  h-screen  justify-between'>
            
            <div className='md:block hidden'> 
              <DashboardSidenav/>
            </div>
                <div className='lg:w-[85%] xl:ml-0 md:ml-16 ml-4 w-[90%] lg:m-0 '>


                    <div className='md:w-[55%] md:mx-auto w-full bg-[#fff] rounded-lg p-4 mt-4'>

                    <div className='cursor-pointer md:m-auto md:block hidden my-4' onClick={()=>{back(-1)}}>
                    <Icon icon="material-symbols:arrow-back-rounded" color="#333" width="30" />
                    </div>
                       
                        <p className='font-medium text-xl my-4'> Profile</p>

                        
                        <div>
                        
                            <div>
                                <input style={{border:"2px solid  #C4C4C4"}} className="md:w-[100%] w-[95%] md:p-2 p-1 my-2"  type={"text"} placeholder="Name" />
                            </div>

                            <div>
                                <input style={{border:"2px solid  #C4C4C4"}} className="md:w-[100%] w-[95%] md:p-2 p-1 my-2"  type={"num"} placeholder="Mobile Number" />
                            </div>
                        
                            <div>
                                <input style={{border:"2px solid  #C4C4C4"}} className="md:w-[100%] w-[95%] md:p-2 p-1 my-2"  type={"text"} placeholder="State" />
                            </div>

                            <div>
                                <input style={{border:"2px solid  #C4C4C4"}} className="md:w-[100%] w-[95%] md:p-2 p-1 my-2"  type={"email"} placeholder="Email" />
                            </div>

                            <div>
                                <input style={{border:"2px solid  #C4C4C4"}} className="md:w-[100%] w-[95%] md:p-2 p-1 my-2"  type={"text"} placeholder="Country" />
                            </div>

                            <div>
                                <input style={{border:"2px solid  #C4C4C4"}} className="md:w-[100%] w-[95%] md:p-2 p-1 my-2"  type={"text"} placeholder="Home Address" />
                            </div>
            
                        </div>

                        <div className='bg-[#554E90]  md:text-base text-[14px]  my-4 p-1 cursor-pointer rounded-lg text-[#fff]  text-center'>
                            <p className='text-sm'>Save Changes</p>
                        </div>

                        <div className='bg-transparent  md:text-base text-[14px] text-[#333333] border-2  my-4 p-1 cursor-pointer rounded-lg text-[#fff]  text-center'>
                            <p className='text-sm'>Cancel</p>
                        </div>

                     </div>


                 </div>
            </div>
        </div>
    </div>
  )
}

export default EditUser