import React from 'react'
import { Icon } from '@iconify/react';

function Beneficiaries({img,name}) {
  return (
    <div>
        <div className='flex justify-between'>
            
            <div className='flex flex-col mx-4 items-center'>
                <img src={img} />
                <p className='text-center xl:text-base lg:text-[12px] text-[12px]'>{name}</p>
            </div>


        </div>
    </div>
  )
}

export default Beneficiaries