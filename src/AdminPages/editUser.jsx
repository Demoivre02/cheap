import React from 'react'
import Dashboardtopnav from '../dashboardComponents/dashboard-topnav'
import DashboardSidenav from '../dashboardComponents/dashboard-sidenav'
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

function EditUser() {
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

                    <div className='w-[55%] bg-[#fff] rounded-lg p-4 mt-4'>
                       
                        <p className='font-medium text-xl my-4'> Profile</p>

                        
                        <div>
                        
                            <div>
                                <input style={{border:"2px solid  #C4C4C4"}} className="w-[100%] p-2 my-2"  type={"text"} placeholder="Name" />
                            </div>

                            <div>
                                <input style={{border:"2px solid  #C4C4C4"}} className="w-[100%] p-2 my-2"  type={"num"} placeholder="Mobile Number" />
                            </div>
                        
                            <div>
                                <input style={{border:"2px solid  #C4C4C4"}} className="w-[100%] p-2 my-2"  type={"text"} placeholder="State" />
                            </div>

                            <div>
                                <input style={{border:"2px solid  #C4C4C4"}} className="w-[100%] p-2 my-2"  type={"email"} placeholder="Email" />
                            </div>

                            <div>
                                <input style={{border:"2px solid  #C4C4C4"}} className="w-[100%] p-2 my-2"  type={"text"} placeholder="Country" />
                            </div>

                            <div>
                                <input style={{border:"2px solid  #C4C4C4"}} className="w-[100%] p-2 my-2"  type={"text"} placeholder="Home Address" />
                            </div>
            
                        </div>

                        <div className='bg-[#554E90]   my-4 p-1 cursor-pointer rounded-lg text-[#fff]  text-center'>
                            <p className='text-sm'>Save Changes</p>
                        </div>

                        <div className='bg-transparent text-[#333333] border-2  my-4 p-1 cursor-pointer rounded-lg text-[#fff]  text-center'>
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