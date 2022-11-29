import React from 'react'
import Dashboardtopnav from '../dashboardComponents/dashboard-topnav'
import DashboardSidenav from '../dashboardComponents/dashboard-sidenav'
import TransactionPageArray from '../dashboardComponents/transactionPageArray';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

function Userhistory() {

  const back= useNavigate()

  return (
    <div>
        <Dashboardtopnav/>
        <div className='bg-[#F8F8F8] '>

          <div className='w-[95%] m-auto flex h-screen justify-between'>
            <DashboardSidenav/>

                <div className='w-[85%]'>

                <div className='cursor-pointer  my-4' onClick={()=>{back(-1)}}>
                  <Icon icon="emojione-monotone:back-arrow" color="#333" width="30" />
                </div>

                <div className='bg-[#fff] rounded-lg p-4 my-2'>

              
                  <div className='flex justify-between my-6 w-[95%] items-center'>
                      <p className='font-semibold'>Latest Transaction</p>
                  </div>

                  <div className='flex justify-between w-[90%] my-4 items-center'>
                      <p>Date </p>
                      <p>Phone Number</p>
                      <p>Data Type</p>
                      <p>Data Amount</p>
                      <p>Payment Status</p>
                  </div>

                  {TransactionPageArray.map((items)=>{
                      return <div className='flex my-2 border-t justify-between items-center text-sm'>
                          <p className='my-1 w-[20%] text-left'>{items.date}</p>
                          <p className='my-1 w-[20%] text-left'>{items.number}</p>
                          <p className='my-1 w-[20%] text-left'>{items.type}</p>
                          <p className='my-1 w-[20%] text-left'>{items.amount}</p>
                          <div style={{backgroundColor: items.status==="Successful" ? "green":"red" }} className='my-1 text-white p-2 text-center rounded-sm cursor-pointer w-[20%]  text-left'>{items.status}</div>
                      </div>
                  })}



                  </div>

                </div>
          </div>
        </div>
    </div>
  )
}

export default Userhistory