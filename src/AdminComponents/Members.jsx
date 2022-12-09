import React, { useState } from 'react'
import Popup from './PopupModal'


const membersArray=[
    {id:1,name:"Adekunle Ibukun",email:"adeibukun@gmail.com",img:"/assets/ikide.png",phhone:"08134872345"},
    {id:2,name:"Alex Sule",email:"alexSuule@gmail.com",img:"/assets/alexsule.png",phhone:"08129384859"},
    {id:3,name:"Ikide Caleb",email:"ikyiki@gmail.com",img:"/assets/ikide.png",phhone:"09012347586"},
    {id:4,name:"Atiku Abubakar",email:"atickbakarn@gmail.com",img:"/assets/atiku.png",phhone:"09123784657"},
    {id:5,name:"Ahmed Tinubu",email:"Atinubuuu@gmail.com",img:"/assets/tinubu.png",phhone:"08033465789"}
]

function Members() {
    const [highlight, sethighlight]=useState(false)

  return (
    <div>
            {membersArray.map((items)=>{
             return   <div  className='justify-between md:flex grid grid-cols-2 p-2 items-center border border-b'>

                    <div className='w-[5%]'>
                        <input type={"checkbox"} />
                    </div>

                    <div className='md:w-[10%] w-[20%]'>
                        <img src={items.img} />
                    </div>

                    <div className='md:w-[20%] lg:text-base md:text-[14px] text-[12px] md:text-left'>
                        <p>{items.name}</p>
                        <p>{items.email}</p>
                    </div>

                    <div className=' lg:text-base md:text-[14px] text-[12px] '>
                        <p>{items.phhone}</p>
                    </div>
                    <div>
                        <Popup/>
                    </div>
             </div>
            })}
    </div>
  )
}

export default Members