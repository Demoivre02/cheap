import React from 'react'
import Dashboardtopnav from '../dashboardComponents/dashboard-topnav'
import DashboardSidenav from '../dashboardComponents/dashboard-sidenav'
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

function Admin() {
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
                        <p className='font-semibold text-xl my-4'> Admin</p>

                        <div className='border-y p-3'>
                            <Link to="/managemembers">
                                <p>Manage Members</p>
                            </Link>
                        </div>

                        <div className='border-b p-3 my-2'>
                            <Link to="/adminPassword">
                                <p>Changer User Password</p>
                            </Link>
                        </div>

                        <div className='border-b p-3 my-2'>
                            <Link to="/adminPin">
                                <p>Change Pin</p>
                            </Link>
                        </div>

                        <div className='border-b p-3 my-2'>
                            <Link to="/admintransaction">
                                <p>Transaction</p>
                            </Link>
                        </div>





                    </div>
                </div>
          </div>
        </div>
    </div>
  )
}

export default Admin