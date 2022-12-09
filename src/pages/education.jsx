import React from 'react'
import Dashboardtopnav from '../dashboardComponents/dashboard-topnav'
import DashboardSidenav from '../dashboardComponents/dashboard-sidenav'
import {Link} from "react-router-dom"
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import Sidemobilenav from '../dashboardComponents/dashboardMobileDrawer'

function Education() {
  const back= useNavigate()


  const EducationArray=[
    {
        id:1,
        link:"/payWaec",
        img: <img className=" md:h-[50px] h-[30px] md:w-[70%] w-[50px]" src="/assets/waec.png" />,
        text:"WAEC"
    },
    {
        id:2,
        link:"/payNeco",
        img: <img className=" md:h-[50px] h-[30px] md:w-[70%] w-[50px]" src="/assets/neco.png" />,
        text:"NECO "
    },
    {
        id:3,
        link:"/payUtme",
        img: <img className=" md:h-[50px] h-[30px] md:w-[70%] w-[50px]" src="/assets/jamb.png" />,
        text:"UTME"
    },
  ]




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

            <div className='lg:w-[85%] xl:ml-0 md:ml-16 ml-4 w-[90%] lg:m-0'>


            <div className='bg-[#fff] rounded-lg md:w-[70%]  md:mx-auto w-full mt-4 md:p-4 p-3 md:py-8 py-2'>

            <div className='cursor-pointer md:m-auto md:block hidden my-4' onClick={()=>{back(-1)}}>
              <Icon icon="material-symbols:arrow-back-rounded" color="#333" width="30" />
            </div>

                    <p className='my-4 md:text-base text-[14px]'>Education</p>
                        <div className='grid grid-cols-2  md:gap-2 gap-4'>
                            {EducationArray.map((items)=>{
                                return <Link to={items.link}>  <div key={items.id} className='bg-[#F2F2F2] w-[90%] cursor-pointer p-2 px-4 flex justify-between items-center  rounded-lg'>
                                                <div className='bg-[#fff] w-[120px] rounded-lg  shadow-lg p-1'>{items.img}</div>
                                                <p className='md:text-sm text-[12px] ml-2'>{items.text}</p>
                                        </div></Link>
                            })}
                        </div>
                </div>
            
            </div>


          </div>
        </div>
    </div>
  )
}

export default Education