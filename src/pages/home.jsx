import React, { useState } from 'react'
import './homeStyles.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Icon } from '@iconify/react';
import {Link} from 'react-router-dom'

function Home() {

    const [openNav, setOpenNav]=useState(false)
    function handleNav(){
        setOpenNav(!openNav)
    }

  return (
   <React.Fragment>
     <header>

        <nav>
            <div className="nav-container p-2 ">
                <div className="logo-div">
                    <img src='/assets/Logo-new.png' />
                </div>
                <div className='flex   justify-between'>
                    <ul className="list-body ">
                        <li className="list-item w-[45px]">Home</li>
                        <li className="list-item  w-[70px]">About us</li>
                        <li className="list-item  w-[80px]">Contact us</li>
                    </ul>

                    <div className="buttons flex justify-around w-[30%]">
                        <Link to="/login">
                            <div className=" p-1 border hover:bg-[#fff] rounded-lg hover:text-[#000] h-[40px] text-center  text-base w-[100px] flex items-center justify-center text-white ">
                            Login
                             </div>
                        </Link>

                            <Link to="signup ">
                                <div className=" bg-[#fff] hover:bg-transparent rounded-lg hover:text-[#fff] hover:border p-1 h-[40px] ml-6 text-center text-base w-[100px] flex items-center justify-center ">
                                    Register
                                </div>
                        </Link>
                    </div>

                </div>

                
                <div onClick={handleNav} className="burger">
                    <Icon icon="fontisto:nav-icon" color="white" width="22" />
                </div>

            </div>
        </nav>

        <div style={{display: openNav? "block" :"none"}} className="mobilenav">
            <div>
                <ul className="mobileNavBody">
                    <li className="mobileNavItem" >Home</li>
                    <li className="mobileNavItem" >About us</li>
                    <li className="mobileNavItem" >Contact us</li>
                    <div className=' translate-y-[100%]' >
                        <Link to="/login">
                            <li className="mobileNavItem font-medium cursor-pointer " >LOGIN</li>
                        </Link>
                        <Link to="/signup">
                            <li className="mobileNavItem font-medium cursor-pointer">REGISTER</li>
                        </Link>
                    </div>
                </ul>
            </div>
        </div>

        <div  style={{background:"url('/assets/Pattern Design-03.svg')"
      ,backgroundSize:"cover",overflow:"hidden"}} className="hero">

            <div className="hero-content">

                <div className="hero-text-div">
                    <div className="cta-div">
                        <h1 className="hero-cta">We offer the cheapest and best quality subscriptions</h1>
                    </div>

                    <div>
                        <p className="hero-text ">We offer the cheapest and best quality subscriptions such
                            as cheapest instant activation on data and airtime 
                            purchases both Vtu top up and
                            share Airtime for all networks.
                        </p>
                    </div>
                    <div className="bg-[#564CB4] md:m-0  m-auto md:my-4 my-4 w-[40%]  sm:w-[25%] rounded-lg p-2 text-center cursor-pointer text-[#fff] mt-4 getStarted">
                    <Link to="/signup">
                        <p className='sm:text-xl sm:p-2 p-1 text-sm'>Get Started</p>
                    </Link>
                       
                    </div>
                    
                </div>
                <div className="heroImgDiv">
                    <div className="hero-img-div">
                            <img className="sitting-guy" src="/assets/Macbook Pro 16 mockup.png" alt=""/>
                    </div>
                </div>

            </div>
        </div>



        <div className="attest-body p-4">
            <div className="attest-flex p-4">
                <div>
                    <p className='font-bold '>Transactions</p>
                    <h2 className=' mt-4'>87k+</h2>
                </div>

                <hr className='attest-hr'/>

                <div>
                    <p className='font-bold'>Customers</p>
                    <h2 className=' mt-4'>2K+</h2>
                </div>

                <hr className='attest-hr'/>

                <div>
                    <p className='font-bold'>Experience</p>
                    <h2 className=' mt-4'>10years</h2>
                </div>

            </div>
        </div>
    </header>

<main>



<section className="service-section">

        <div className="services-header">
            <h2 className=''>Our services</h2>
        </div>



        <div className="flex-section">

            <div className="networks-img-div">
                <img className="networks-div" src="/assets/Group 289376 1.png" alt=""/>
            </div>

            <div className="services-text">
                <div className='mt-8'>
                    <h3 className=" serveices-text-header">
                        Data Sales
                    </h3>
                    <p>
                        We sell all mobile network data at a very affordable price
                    </p>
                </div>

                <div className='mt-8'>
                    <h3 className=" font-bold serveices-text-header">
                        Airtime Topup
                    </h3>
                    <p>
                        Receive huge discounts on Airtime purchase.

                    </p>
                </div>

                <div className='mt-8'>
                    <div style={{borderBottom:0}} className=''>
                        <h3 className=" font-bold  serveices-text-header">
                        Convert Airtime to Cash   
                        </h3>
                    </div>
                  
                        <p> We convert all network airtime to cash instantly</p>

                </div>
                
            </div>

        </div>



    <div className="service-two-div">
        <div className="flex-section-2">

            <div className="service-two-text ">
                <div className='push'>

                <div className="services-text second">
                <div className='mt-8'>
                    <h3 className=" serveices-text-header">
                        Cable Tv Subscription
                    </h3>
                    <p>
                        Swift and instant TV subscription
                    </p>
                </div>

                <div className='mt-8'>
                    <h3 className=" font-bold serveices-text-header">
                        Electricity Payment
                    </h3>
                    <p>
                        Fast bills payment

                    </p>
                </div>

                <div className='mt-8'>
                    <div style={{borderBottom:0}} className=''>
                        <h3 className=" font-bold  serveices-text-header">
                            Internet Subscription  
                        </h3>
                    </div>
                  
                        <p></p>

                </div>
                
            </div>

                </div>

            </div>

            <div className="logos-div">
               <img  src='/assets/Group 8.png' />
            </div>
        </div>

    </div>

</section>



<section className="scroller-section">

        <div className="scroller-div">

        <Swiper
            slidesPerView={4}
            spaceBetween={3}
            pagination={{
            clickable: true
            }}
            >
        <SwiperSlide className='w-[90%]'>
            <div>
                <img className='w-[90%]' src="/assets/image 1.png" alt=""/>
                <div className="image-text-body">
                    <p className="scroller-img-text">Convert airtime to cash</p>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div>
                <img className='w-[90%]' src="/assets/image 2.png" alt=""/>
                <div className="image-text-body">
                    <p className="scroller-img-text">95% automated secure services</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img className='w-[90%]' src="/assets/image 3.png" alt=""/>
                <div className="image-text-body">
                <p className="scroller-img-text">Instant and secure wallet funding</p> 
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>     
            <div>
                <img className='w-[90%]' src="/assets/image 4.png" alt=""/>
                <div className="image-text-body">
                    <p className="scroller-img-text">Available 24/7</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
             <div>
                <img className='w-[90%]' src="/assets/image 5.png" alt=""/>
                <div className="image-text-body">
                    <p className="scroller-img-text">Fastest deals and quick resolution services</p>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>


        </div>

       

    <div className="mobile-carousel">

    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
            <div>
                <img className=' w-[100%]' src="/assets/image 1.png" alt=""/>
                <div className="image-text-body  text-center ">
                    <p className="scroller-img-text">Convert airtime to cash</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img className='w-[100%]' src="/assets/image 2.png" alt=""/>
                <div className="image-text-body text-center">
                    <p className="scroller-img-text">95% automated secure services</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img className='w-[100%]' src="/assets/image 3.png" alt=""/>
                <div className="image-text-body text-center">
                <p className="scroller-img-text">Instant and secure wallet funding</p> 
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img className='w-[100%]' src="/assets/image 4.png" alt=""/>
                <div className="image-text-body text-center">
                    <p className="scroller-img-text">Available 24/7</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide> 
            <div>
                <img className='w-[100%]' src="/assets/image 5.png" alt=""/>
                <div className="image-text-body text-center">
                    <p className="scroller-img-text">Fastest deals and quick resolution services</p>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>


    </div>
</section>



<section className='circle-section'>
    <div  style={{background:"url('/assets/mission.png')"
      ,backgroundSize:"cover",overflow:"hidden"}}  className="mission-container">
        <div className="circle-container">
            <div className="circle">
                <div>
                    <h3>Our Mission</h3>
                    <p> To deliver best service in the quickest amount of time.</p>
                </div>

            </div>
        </div>
    </div>
</section>



<section  style={{background:"url('/assets/Pattern Design-03.svg')"
      ,backgroundSize:"cover",overflow:"hidden"}}  className="form-contact">
    <div className="form-section">

        <div className="form-div">
           <h3>How can we help you</h3> 
            <form action="">
                <input className="form-input" type="text" placeholder="Your full name"/><br/><br/>
                <input type="email" name="" className="form-input" placeholder="Your email" id=""/><br/><br/>
                <input type="tel" name="" id="" className="form-input" placeholder="Phone Number"/><br/><br/>
                <textarea name="" id="" cols="30" rows="5" placeholder="Your message"></textarea> <br/> <br/>
                <input className='submit-form' type={"submit"}/>

            </form>
        </div>

        <div  className="contact-div">
            <h3>Contact us</h3>

                <div style={{alignItems:"center"}}  className="location">

                    <div>
                        <Icon className=''  icon="material-symbols:location-on-outline" color="#000"  width="20" />
                    </div>

                    <div>
                        <p> 5 Agbo street, off Micheal umodu labour institute olunlade, Ilorin Kwara state
                        </p>
                    </div>

                </div>

                <div className="phone">

                    <div style={{alignItems:"center"}}  className='flex items-center'>
                        <Icon className='mr-2 ' icon="material-symbols:phone-in-talk" color="#000" width="15" />
                        <p className='contact-numbers' >+111111111</p>
                    </div>

                    <div  style={{alignItems:"center"}} >
                        <Icon className='mr-2 ' icon="ic:baseline-whatsapp" color="#000" width="15" />
                        <p className='contact-numbers' >+000111100</p>
                    </div>
                    
                </div>
                <div style={{alignItems:"center"}} className="location">
                    <Icon className='mr-2 ' icon="mdi:envelope-outline" color="#000" width="20" />
                    <div>
                        <p> cheapdatasale@gmail.com</p>
                    </div>
                   
                </div>
        </div>

    </div>
</section>
</main>

<footer>
<div className="footer-flex">
    <div className="one">
        <h3>Cheapdatasales</h3>
    </div>

    <div className="two">
        <p className="footer-list-header">Quick Links</p>
        <ul className="footer-list-body">
            <li className="footer-list-item" >Home</li>
            <li className="footer-list-item" >About us</li>
            <li className="footer-list-item" >Contact us</li>
            <li className="footer-list-item icons" >
                <span><Icon icon="mdi:instagram" color="white" width="20" /></span>
                <span><Icon icon="ri:facebook-fill" color="white" width="20" /></span>
                <span><Icon icon="mdi:twitter" color="white" width="20" /></span>
            </li>
        </ul>
    </div>

    <div className="three">
        <p className="footer-list-header">Others</p>
        <ul className="footer-list-body">
            <li className="footer-list-item" >Our service</li>
            <li className="footer-list-item" >Our mission</li>
        </ul>
    </div>
</div>

<div className="copyright">
    <p>Copyright © 2022. All rights reserved.</p>
</div>
</footer>

</React.Fragment>
  )
}
export default Home