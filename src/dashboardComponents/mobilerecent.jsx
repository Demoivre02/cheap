import React from 'react'
import TransactionArray from './transactionArray'

function Mobilerecent({name,type,amount,date,status}) {
  return (
    <div className='flex justify-between mb-2'>
        <div className='flex justify-between items-center'>
            <div className='p-4 rounded-full bg-[#333333] mr-2'></div>
            <div className='md:flex sm:block mb-2'>
                <p className='font-medium sm:text-base mb-2 text-[12px]'>{name}</p>
                <p className='text-[#5B5B66] sm:text-base text-[12px]'>{type}</p>
            </div>
        </div>
        <div>
        {
            TransactionArray.map((items)=>{
                <div style={{backgroundColor: items.status==="Successful" ? "green":"red" }} className='my-1 text-white p-2 text-center rounded-sm cursor-pointer w-[20%]  text-left'>{items.status}</div>
            })
        }
            <p className='font-medium mb-2 sm:text-base text-[12px]'>{amount}</p>
            <p className='text-[#5B5B66] sm:text-base text-[12px]' >{date}</p>

        </div>
        
    </div>
  )
}

export default Mobilerecent