import React from 'react'

function Balance({icon,name,price}) {
  return (
    <div className='rounded-lg bg-[#fff] ml-2 md:p-4 p-2'>
    
        <div className='flex justify-between '>
            <div>{icon}</div>
            <div className='text-right  ml-8'>
                <p className=' sm:text-sm text-[12px] my-2 text-[#273C92]'>{name}</p>
                <p className='md:text-xl text-base text-right font-semibold'>{price}</p>
            </div>
        </div>

        <div>
            <p className='text-right '>
                Top up
            </p>
        </div>
       
    </div>
  )
}

export default Balance