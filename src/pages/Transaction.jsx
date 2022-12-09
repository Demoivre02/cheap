import React from 'react'
import Dashboardtopnav from '../dashboardComponents/dashboard-topnav'
import DashboardSidenav from '../dashboardComponents/dashboard-sidenav'
import TransactionPageArray from '../dashboardComponents/transactionPageArray'
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import Sidemobilenav from '../dashboardComponents/dashboardMobileDrawer'
import Mobilerecent from '../dashboardComponents/mobilerecent';

function TransactionPage() {

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

          <div className='lg:w-[95%] w-full m-auto flex h-screen justify-between'>
            
            <div className='md:block hidden'> 
              <DashboardSidenav/>
            </div>

                <div className='lg:w-[85%] xl:ml-0 md:ml-16 ml-4 w-[90%] lg:m-0 '>

                    <div className='cursor-pointer md:m-auto md:block hidden my-4' onClick={()=>{back(-1)}}>
                        <Icon icon="material-symbols:arrow-back-rounded" color="#333" width="30" />
                    </div>

                <div className='bg-[#fff] rounded-lg md:p-4 p-2 my-2'>

              
                  <div className='flex justify-between md:my-6 my-2 w-[95%] items-center'>
                      <p className='font-semibold'>Latest Transaction</p>
                  </div>

                  <div className='md:flex hidden justify-between w-[90%] my-4 items-center'>
                      <p>Date </p>
                      <p>Phone Number</p>
                      <p>Data Type</p>
                      <p>Data Amount</p>
                      <p>Payment Status</p>
                  </div>

                  {TransactionPageArray.map((items)=>{
                      return <div className='md:flex my-2 hidden border-t justify-between items-center text-sm'>
                          <p className='my-1 w-[20%] text-left'>{items.date}</p>
                          <p className='my-1 w-[20%] text-left'>{items.number}</p>
                          <p className='my-1 w-[20%] text-left'>{items.type}</p>
                          <p className='my-1 w-[20%] text-left'>{items.amount}</p>
                          <div style={{backgroundColor: items.status==="Successful" ? "green":"red" }} className='my-1 text-white p-2 text-center rounded-sm cursor-pointer w-[20%]  text-left'>{items.status}</div>
                      </div>
                  })}

                  {TransactionPageArray.map((item)=>{
                    return <Mobilerecent name={item.name} type={item.type} 
                    amount={item.amount} date={item.date} status={item.status}/>
                  })}


                  </div>

                </div>
          </div>
        </div>
    </div>
  )
}

export default TransactionPage