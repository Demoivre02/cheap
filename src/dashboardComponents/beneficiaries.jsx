import React from 'react'
import { Icon } from '@iconify/react';

function Beneficiaries({img,name}) {
  return (
    <div>
        <div className='flex justify-between'>
            
            <div className='flex flex-col mx-4 items-center'>
                <img src={img} />
                <p className='text-center'>{name}</p>
            </div>


        </div>
    </div>
  )
}

export default Beneficiaries