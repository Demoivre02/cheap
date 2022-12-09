import React from 'react'
import optionsArrray from './optionsArray'
import {Link} from 'react-router-dom'

function icons() {
  return (
    <div className='bg-[#fff] sm:p-5 p-2 mt-5 rounded-lg'>

        <p className='my-3 font-semibold'>Quick options</p>

        <div className='grid grid-cols-3 xl:gap-4 sm:gap-2 gap-1'>
            {optionsArrray.map((items)=>{
                return<Link to={items.link}> <div key={items.id} className=" bg-[#F4F3FF] flex flex-col w-[80%] cursor-pointer text-center m-auto p-2 rounded-lg items-center justify-center">
                  
                    <div> {items.icon} </div>
                    <p className='lg:text-[12px] xl:text-base text-[10px] my-1 text-[#554e90]'>{items.text}</p>
                  
                </div></Link>
            })}
        </div>

    </div>
  )
}

export default icons