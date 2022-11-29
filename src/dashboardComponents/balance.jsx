import React from 'react'

function Balance({icon,name,price}) {
  return (
    <div className='rounded-lg bg-[#fff] ml-2 p-4'>
    
        <div className='flex justify-between '>
            <div>{icon}</div>
            <div className='text-right  ml-8'>
                <p className=' text-sm my-2 text-[#273C92]'>{name}</p>
                <p className='text-xl text-right font-semibold'>{price}</p>
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