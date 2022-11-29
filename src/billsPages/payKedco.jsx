import React from 'react'
import Dashboardtopnav from '../dashboardComponents/dashboard-topnav'
import DashboardSidenav from '../dashboardComponents/dashboard-sidenav'
import { Switch,ChakraProvider } from '@chakra-ui/react'
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

function PayKedco() {
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

            <div className='w-[55%] bg-[#fff] rounded-lg p-4 mt-4'>

                <p className='my-4'>Kano Electricity</p>

                <div>
                <input style={{border:"2px solid  #C4C4C4"}} className="w-[100%] p-2 my-2"  type={"num"} placeholder="Meter number" />
                <input style={{border:"2px solid  #C4C4C4"}} className="w-[100%] p-2 my-2"  type={"num"} placeholder="Amount" />

                </div>

                <div className='flex my-2 items-center'>  
                  <p className='text-sm mr-2'>Save beneficiary</p>
                  <ChakraProvider>
                      <Switch colorScheme='green' size='sm' />
                  </ChakraProvider>
                </div>

                <div className='bg-[#554E90]   my-4 p-1 rounded-lg text-[#fff]  text-center'>
                  <p>Pay</p>
                </div>

                </div>


            </div>


          </div>
        </div>
    </div>
  )
}

export default PayKedco