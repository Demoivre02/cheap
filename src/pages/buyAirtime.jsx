import React from 'react'
import Dashboardtopnav from '../dashboardComponents/dashboard-topnav'
import DashboardSidenav from '../dashboardComponents/dashboard-sidenav'
import { Switch,ChakraProvider } from '@chakra-ui/react'
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

function BuyAirtime() {
  const back= useNavigate()

  return (
    <div>
        <Dashboardtopnav/>
        <div className='bg-[#F8F8F8] '>

          <div className='w-[95%] m-auto flex  h-screen  justify-between'>
            <DashboardSidenav/>

            <div className='w-[85%]'>

            <div className='cursor-pointer  my-4' onClick={()=>{back(-1)}}>
                  <Icon icon="emojione-monotone:back-arrow" color="#333" width="30" />
            </div>

            <div className='w-[55%] bg-[#fff] rounded-lg p-4 mt-4'>


                     <p className='my-4'>Buy data</p>
                     <input style={{border:"2px solid  #C4C4C4"}} className="w-[100%] p-2"  type={"num"} placeholder="Mobile number" />

                    <div>
                        <p className='my-4'>Network Provider</p>

                        <div className='flex justify-between my-4'>
                            <img src='/assets/mtn.png' alt='mtn'/>
                            <img src='/assets/Glo.png' alt='mtn'/>
                            <img src='/assets/airtel.png' alt='mtn'/>
                            <img src='/assets/9mobile.png' alt='mtn'/>

                        </div>

                        <select style={{border:"2px solid  #C4C4C4"}}  placeholder='plan' className=' p-2 my-4 w-[100%] rounded-lg'>
                            <option>Amount</option>
                            <option>500</option>
                            <option>1000</option>
                            <option>5000</option>
                        </select>

                    </div>
                    
                    <div className='flex items-center'>  
                        <p className='text-sm mr-2'>Save beneficiary</p>
                        <ChakraProvider>
                            <Switch colorScheme='green' size='sm' />
                        </ChakraProvider>
                    </div>

                    <div className='bg-[#554E90]   my-4 p-1 rounded-sm text-[#fff]  text-center'>
                        <p className='text-sm'>Pay</p>
                    </div>

                </div>
            
            </div>


          </div>
        </div>
    </div>
  )
}

export default BuyAirtime