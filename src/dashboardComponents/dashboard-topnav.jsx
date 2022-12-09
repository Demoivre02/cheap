import React from 'react'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

function Dashboardtopnav() {
  return (
    <>
        <div style={{background:"url('/assets/topnav.png')"
            ,backgroundSize:"cover",overflow:"hidden"}} className='pb-12' >

            <div className='flex justify-between w-[90%]  m-auto'>

                <div className='flex  justify-between'>
                    <Link to="/">
                        <img src='/assets/cheapdata-Logo.png' alt='logo' className='cursor-pointer'/>
                    </Link>
                    <div className='bg-[#fff] ml-8 rounded-[4px] w-[52%] p-[1px] items-center m-auto opacity-40  flex'>
                        <Icon icon="ic:baseline-search" color="white" width="25" />
                        <input className='outline-0 rounded-[4px] w-[52%] lg:p-[1px] p-0' type={"search"}  placeholder="Search..."/>
                    </div>
                </div>

                <div className='flex justify-between items-center xl:w-[20%] w-[35%]' >

                    <Icon icon="ph:bell" color="white" height="25" />

                    <div className='flex justify-between items-center'>
                        <div className='lg:p-4 p-2 rounded-full bg-[#fff] opacity-40'></div>
                            <p className='mx-8 text-[#fff]'>Patrick</p>
                            <Icon icon="material-symbols:keyboard-arrow-down-rounded" color="white" height="15" />
                        </div>
                        <Icon icon="material-symbols:settings" color="white" width="25" height="25" />

                    </div>

                </div>
                
            </div>

    </>
  )
}

export default Dashboardtopnav