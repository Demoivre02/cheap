import React from 'react'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';


function DashboardSidenav() {
  return (
    <div className='h-full' >
        <div className='w-[150%] bg-[#fff] rounded-lg h-full  text-center text-[#554e90] border'>

              <div className='my-6'>
                <div className='border border-[#554e90] rounded-full m-auto  w-fit p-1 border-dashed'>  
                  <img  src='/assets/dashboard-nav-picture.png'/>
                </div>
                <p>Patrick</p>
              </div>

            <ul>

              <Link to="/dashboard">
                <li className='flex my-4 hover:bg-slate-300 py-1 flex-col items-center justify-center'>
                    <Icon icon="ep:suitcase" color="#554e90" width="20" />
                    <p className='text-[10px] my-1'>Dashboard</p>
                </li>
              </Link>

              <Link to="/fundwallet">
                <li className='flex my-4 hover:bg-slate-300 py-1 flex-col items-center justify-center'>
                  <Icon icon="material-symbols:account-balance-wallet" color="#554e90" width="20" />
                    <p className='text-[10px] my-1'>Fund wallet</p>
                </li>
              </Link>

              <Link to="/transaction">
                <li className='flex my-4 hover:bg-slate-300 py-1 flex-col items-center justify-center'>
                    <Icon icon="ic:round-history" color="#554e90" width="20" />
                    <p className='text-[10px] my-1'>Transaction History</p>
                </li>
              </Link>

              <Link to="/settings">
                <li className='flex my-4 hover:bg-slate-300 py-1 flex-col items-center justify-center'>
                    <Icon icon="material-symbols:settings" color="#554e90" width="20" />
                    <p className='text-[10px] my-1'>Settings</p>
                </li>
              </Link>

              <Link to="/admin">
                <li className='flex my-4 hover:bg-slate-300 py-1 flex-col items-center justify-center'>
                    <Icon icon="material-symbols:admin-panel-settings-rounded" color="#554e90" width="20" />
                    <p className='text-[10px] my-1'>Admin</p>
                </li>
              </Link>

              <Link to="/faq">
                <li className='flex my-4 hover:bg-slate-300 py-1 flex-col items-center justify-center'>
                    <Icon icon="mdi:faq" color="#554e90" width="20" />
                    <p className='text-[10px] my-1'>FAQ</p>
                </li>
              </Link>

            </ul>
        </div>
    </div>
  )
}

export default DashboardSidenav