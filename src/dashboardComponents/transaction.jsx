import React, { useEffect, useState } from 'react'
import TransactionArray from './transactionArray'
import { Link } from 'react-router-dom'

function Transaction() {

  return (
    <div className='bg-[#fff] rounded-lg p-4 my-8'>

        <div className='flex justify-between my-4 w-[95%] items-center'>
            <p>Latest Transaction</p>

            <Link to="/transaction">         
                <p>See all</p>
            </Link>
            
        </div>

        <div className='flex justify-between w-[90%] my-4 items-center'>
            <p>Date </p>
            <p>Phone Number</p>
            <p>Data Type</p>
            <p>Data Amount</p>
            <p>Payment Status</p>
        </div>

        {TransactionArray.map((items)=>{
            return <div className='flex my-2 border-t justify-between items-center text-sm'>
                <p className='my-1 w-[20%] text-left'>{items.date}</p>
                <p className='my-1 w-[20%] text-left'>{items.number}</p>
                <p className='my-1 w-[20%] text-left'>{items.type}</p>
                <p className='my-1 w-[20%] text-left'>{items.amount}</p>
                <div style={{backgroundColor: items.status==="Successful" ? "green":"red" }} className='my-1 text-white p-2 text-center rounded-sm cursor-pointer w-[20%]  text-left'>{items.status}</div>
            </div>
        })}



    </div>
  )
}

export default Transaction