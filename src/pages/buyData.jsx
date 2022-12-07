import React from 'react'
import Dashboardtopnav from '../dashboardComponents/dashboard-topnav'
import DashboardSidenav from '../dashboardComponents/dashboard-sidenav'
import { Switch,ChakraProvider } from '@chakra-ui/react'
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import Sidemobilenav from '../dashboardComponents/dashboardMobileDrawer'

function BuyData() {
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

          <div className='md:w-[95%] w-full m-auto flex h-screen justify-between'>

          <div className='md:block hidden'> 
              <DashboardSidenav/>
            </div>

            <div className='lg:w-[85%] xl:ml-0 md:ml-16 ml-4 w-[90%] lg:m-0 '>

            <div className='cursor-pointer md:block hidden my-4' onClick={()=>{back(-1)}}>
                  <Icon icon="emojione-monotone:back-arrow" color="#333" width="30" />
            </div>


                <div className='md:w-[55%] w-full bg-[#fff] rounded-lg md:p-4 p-2 mt-4'>


                     <p className='my-4 md:text-base text-[14px]'>Buy data</p>
                     <input style={{border:"2px solid  #C4C4C4"}} className="md:w-[100%] w-[95%] md:p-2 p-1"  type={"num"} placeholder="Mobile number" />

                    <div>
                        <p className='my-4 md:text-base text-[14px]'>Network Provider</p>

                        <div className='flex justify-between md:w-full w-[95%] my-4'>
                            <img src='/assets/mtn.png' alt='mtn'/>
                            <img src='/assets/Glo.png' alt='mtn'/>
                            <img src='/assets/airtel.png' alt='mtn'/>
                            <img src='/assets/9mobile.png' alt='mtn'/>

                        </div>

                        <select style={{border:"2px solid  #C4C4C4"}}  placeholder='plan' className=' md:p-2 p-1 my-4 md:w-[100%]   w-[95%] rounded-lg'>
                            <option className=' md:text-sm text-[12px]'>plan</option>
                            <option className=' md:text-sm text-[12px]'>1gb</option>
                            <option className=' md:text-sm text-[12px]'>2gb</option>
                            <option className=' md:text-sm text-[12px]'>3gb</option>
                        </select>

                    </div>
                    
                    <div className='flex items-center'>  
                        <p className='text-sm mr-2 md:text-base text-[14px]'>Save beneficiary</p>
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

export default BuyData