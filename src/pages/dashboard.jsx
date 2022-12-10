import React from 'react'
import Dashboardtopnav from '../dashboardComponents/dashboard-topnav'
import DashboardSidenav from '../dashboardComponents/dashboard-sidenav'
import Main from '../dashboardComponents/main'
import Sidemobilenav from '../dashboardComponents/dashboardMobileDrawer'

function Dashboard() {
  return (
    <div >

      <div className='md:block hidden'> 
          <Dashboardtopnav/>
      </div>

      <div className='md:hidden block'>
          <Sidemobilenav/>
      </div>

        <div className='bg-[#F8F8F8] '>

          <div className='lg:w-[95%] w-full m-auto max-w-[1440px] flex  justify-between'>

            <div className='md:block hidden'> 
              <DashboardSidenav/>
            </div>

            <div className='lg:w-[85%] xl:ml-0 md:ml-16 ml-4 w-[90%] lg:m-0 '>
              <Main/>
            </div>


          </div>
        </div>
        
    </div>
  )
}

export default Dashboard