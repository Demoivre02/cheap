import React from 'react'
import Dashboardtopnav from '../dashboardComponents/dashboard-topnav'
import DashboardSidenav from '../dashboardComponents/dashboard-sidenav'
import { Switch,ChakraProvider } from '@chakra-ui/react'
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import Sidemobilenav from '../dashboardComponents/dashboardMobileDrawer'

function Spectranet() {
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

            <div className='lg:w-[85%] xl:ml-0 md:ml-16 ml-4 w-[90%] lg:m-0'>

            <div className='md:w-[55%]  md:mx-auto w-full bg-[#fff] rounded-lg p-4 mt-4'>

            <div className='cursor-pointer md:m-auto md:block hidden my-4' onClick={()=>{back(-1)}}>
              <Icon icon="material-symbols:arrow-back-rounded" color="#333" width="30" />
            </div>

                <p className='my-4 md:text-base text-[14px]'>Spectranet</p>

                <div>
                <input style={{border:"2px solid  #C4C4C4"}} className="md:w-[100%] w-[95%] md:p-2 my-2 p-1"  type={"num"} placeholder="Enter user account Id " />

                <select style={{border:"2px solid  #C4C4C4"}}  placeholder='plan' className=' md:p-2 p-1 my-4 md:w-[100%] w-[95%] rounded-lg'>
                            <option>Plan</option>
                            <option>1 month</option>
                            <option>2 months</option>
                            <option>3 Months</option>
                        </select>


                <input style={{border:"2px solid  #C4C4C4"}} className="md:w-[100%] w-[95%] md:p-2 p-1 my-2"  type={"num"} placeholder="Amount" />

                </div>

                <div className='flex my-2 items-center'>  
                  <p className='text-sm mr-2 md:text-sm text-[14px]'>Save beneficiary</p>
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

export default Spectranet