import React from 'react'
import Balance from './balance'
import { Icon } from '@iconify/react';
import Beneficiaries from './beneficiaries';
import Icons from './icons';
import Transaction from './transaction';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <>
    <div className='flex justify-between w-[100%]'>
        <div>
            <div className='pt-2'>
                    <p className='text-sm my-4'>Account Number: 2352672636 Wema Bank </p>
                    <div className='flex justify-between'>
                        <Balance icon={<Icon icon="material-symbols:account-balance-wallet-outline" color="#554e90" width="30" />} 
                            name="Wallet Balance" price="N100,000"
                        />
                        <Balance icon={<Icon icon="ph:money-fill" color="#554e90" width="30" />} 
                            name="CG Balance" price="N100"
                        />
                    </div>
            </div>

            <div className='bg-[#fff] p-4 mt-8 rounded-lg'>

                    <p>Recent Beneficiaries</p>

                    <div className='flex items-center my-4 mt-8'>

                        <div className=''>
                            <div className='bg-[#6863B2] flex justify-center mr-4 p-2 items-center rounded-full'>
                                <Icon icon="ic:baseline-search" color="white" width="35" />
                            </div>
                            <p>Search</p>
                        </div>

                        <Beneficiaries img={"/assets/guy1.png"} name="Rashford" />
                        <Beneficiaries img={"/assets/guy2.png"} name="Jack sparrow"/>
                        <Beneficiaries img={"/assets/guy2.png"} name="Jack Grealish"/>
                    </div>

                </div>
                
            </div>
        <div>

        {/* ICONS */}

        <div className='w-[100%]'>
            <Icons />
        </div>
    </div>

    </div>

        <div className='flex justify-between bg-[#fff] mt-8 p-4 rounded-lg'>
            <div>
                <p className='text-[#3E396B] font-semibold mb-4'>Analytics</p>
                <p className='text-[#333] text-base'>Check out your daily income and other statistics</p>

                <Link to="/analytics">
                    <p className='text-[#3E396B] mt-24 underline'>Explore more</p>
                </Link>

            </div>

            <div className=' mr-12'>
                <img className='m-auto text-center' src='/assets/dashbord-graph.png' alt='graph' />
            </div>
        </div>

        <div>
            <Transaction />
        </div>
    
    </>
  )
}

export default Main