import React from 'react'
import Dashboardtopnav from '../dashboardComponents/dashboard-topnav'
import DashboardSidenav from '../dashboardComponents/dashboard-sidenav'
import Main from '../dashboardComponents/main'

function Dashboard() {
  return (
    <div >
        <Dashboardtopnav/>
        <div className='bg-[#F8F8F8] '>

          <div className='w-[95%] m-auto flex  justify-between'>
            <DashboardSidenav/>

            <div className='w-[85%]'>
              <Main/>
            </div>


          </div>
        </div>
        
    </div>
  )
}

export default Dashboard