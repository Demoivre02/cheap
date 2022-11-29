import React from 'react'
import Dashboardtopnav from '../dashboardComponents/dashboard-topnav'
import DashboardSidenav from '../dashboardComponents/dashboard-sidenav'
import {Link} from "react-router-dom"
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

function Education() {
  const back= useNavigate()


  const EducationArray=[
    {
        id:1,
        link:"/payWaec",
        img: <img className=" h-[50px] w-[70%]" src="/assets/waec.png" />,
        text:"WAEC"
    },
    {
        id:2,
        link:"/payNeco",
        img: <img className=" h-[50px] w-[70%]" src="/assets/neco.png" />,
        text:"NECO "
    },
    {
        id:3,
        link:"/payUtme",
        img: <img className=" h-[50px] w-[70%]" src="/assets/jamb.png" />,
        text:"UTME"
    },
  ]




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

            <div className='bg-[#fff] rounded-lg w-[70%] mt-8 p-4 py-8'>

                    <p className='my-4'>Pay Internet Bills</p>
                        <div className='grid grid-cols-2  gap-2'>
                            {EducationArray.map((items)=>{
                                return <Link to={items.link}>  <div key={items.id} className='bg-[#F2F2F2] w-[90%] cursor-pointer p-2 px-4 flex justify-between items-center  rounded-lg'>
                                                <div className='bg-[#fff] w-[120px] rounded-lg  shadow-lg p-1'>{items.img}</div>
                                                <p className='text-sm'>{items.text}</p>
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