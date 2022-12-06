import React from 'react'
import Balance from './balance'
import { Icon } from '@iconify/react';
import Beneficiaries from './beneficiaries';
import Icons from './icons';
import Transaction from './transaction';
import { Link } from 'react-router-dom';
import Search from './search';
import Mobilerecent from './mobilerecent';
import TransactionArray from './transactionArray';

function Main() {
  return (
    <>
    <div className='lg:flex block justify-between w-[100%]'>
        <div className=''>
            <div className='pt-2'>
                    <p className='text-sm my-4'>Account Number: 2352672636 Wema Bank </p>
                    <div className='flex lg:justify-between justify-start'>
                        <Balance icon={<Icon icon="material-symbols:account-balance-wallet-outline" color="#554e90" width="30" />} 
                            name="Wallet Balance" price="N100,000"
                        />
                        <Balance icon={<Icon icon="ph:money-fill" color="#554e90" width="30" />} 
                            name="CG Balance" price="N100"
                        />
                    </div>
            </div>

            <div className='bg-[#fff] lg:w-full md:w-[90%] sm:w-full p-4 mt-8 rounded-lg'>

                    <p>Recent Beneficiaries</p>

                    <div className='flex items-center justify-evenly my-4 mt-8'>

                        <div className=''>
                            <div className='bg-[#6863B2] flex justify-center mr-4 p-2 items-center rounded-full'>
                                <Search/>
                            </div>
                            <p>Search</p>
                        </div>

                        <Beneficiaries img={"/assets/guy1.png"} name="Mark Rashford" />
                        <Beneficiaries img={"/assets/guy2.png"} name="Jack sparrow"/>
                        <Beneficiaries img={"/assets/guy2.png"} name="Jack Grealish"/>
                    </div>

                </div>
                
            </div>

        <div>

        {/* ICONS */}

        <div className='w-[100%] lg:w-full md:w-[90%] sm:full'>
            <Icons />
        </div>
    </div>

    </div>

        <div className='md:flex bloxk lg:w-full md:w-[90%] sm:full justify-between bg-[#fff] mt-8 p-4 rounded-lg'>
            <div>
                <p className='text-[#3E396B] font-semibold mb-4'>Analytics</p>
                <p className='text-[#333] text-sm sm:text-base'>Check out your daily income and other statistics</p>

                <Link to="/analytics">
                    <p className='text-[#3E396B] md:mt-24 mt-12 underline'>Explore more</p>
                </Link>

            </div>

            <div className=' mr-12'>
                <img className='m-auto text-center' src='/assets/dashbord-graph.png' alt='graph' />
            </div>
        </div>

        <div className='lg:w-full md:w-[90%] sm:w-full md:block hidden'>
            <Transaction />
        </div>

        <div className='md:hidden block bg-[#fff] mt-4 rounded-lg p-4 '>

        <div className='flex justify-between my-4 w-[95%] items-center'>
            <p className='md:text-base text-sm'>Latest Transaction</p>

            <Link to="/transaction">         
                <p className='md:text-base text-sm'>See all</p>
            </Link>
            
        </div>

            {TransactionArray.map((item)=>{
                return <Mobilerecent name={item.name} type={item.type} 
                amount={item.amount} date={item.date} status={item.status}/>
                
            })}
        </div>
    
    </>
  )
}

export default Main