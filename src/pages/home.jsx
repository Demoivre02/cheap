import React from 'react'
import './homeStyles.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Icon } from '@iconify/react';
import {Link} from 'react-router-dom'

function Home() {
  return (
   <React.Fragment>
     <header>

        <nav>
            <div className="nav-container p-2 ">
                <div className="logo-div">
                    <h3 className="logo">Logo</h3>
                </div>
                <div className='flex   justify-between'>
                    <ul className="list-body ">
                        <li className="list-item w-[45px]">Home</li>
                        <li className="list-item  w-[70px]">About us</li>
                        <li className="list-item  w-[80px]">Contact us</li>
                    </ul>

                    <div className="buttons flex justify-around w-[30%]">
                        <Link to="/login">
                            <div className=" p-1 border hover:bg-[#fff] hover:text-[#000] rounded-sm text-center text-base w-[80px] text-white ">
                            Login
                             </div>
                        </Link>

                            <Link to="signup ">
                                <div className=" bg-[#fff] hover:bg-transparent hover:text-[#fff] hover:border p-1 rounded-sm ml-6 text-center text-base w-[80px] ">
                                    Register
                                </div>
                        </Link>
                </div>

                </div>

                
                <div className="burger">
                <Icon icon="fontisto:nav-icon" color="white" width="25" />
                </div>

            </div>
        </nav>

        <div className="mobilenav">
            <div>
                <ul className="mobileNavBody">
                    <li className="mobileNavItem" >Home</li>
                    <li className="mobileNavItem" >About us</li>
                    <li className="mobileNavItem" >Contact us</li>
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
                            purchases both Vtu / top up and
                            share Airtime for all networks.
                        </p>
                    </div>
                    <div className="bg-[#564CB4] md:m-0  m-auto md:my-4 my-4 w-[40%]  sm:w-[25%] rounded-lg p-2 text-center cursor-pointer text-[#fff] mt-4 getStarted">
                    <Link to="/signup">
                        <p className='sm:text-base text-sm'>Get Started</p>
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
                    <p className='font-bold'>Transactions</p>
                    <h2 className='text-3xl font-medium mt-4'>87k+</h2>
                </div>

                <hr/>

                <div>
                    <p className='font-bold'>Customers</p>
                    <h2 className='text-3xl font-medium mt-4'>2K+</h2>
                </div>

                <hr/>

                <div>
                    <p className='font-bold'>Experience</p>
                    <h2 className='text-3xl font-medium mt-4'>10years</h2>
                </div>

            </div>
        </div>
    </header>

<main>



<section className="service-section">

        <div className="services-header">
            <h2 className='text-2xl font-semibold'>Our services</h2>
        </div>



        <div className="flex-section">

            <div className="networks-img-div">
                <img className="networks-div" src="/assets/networks-div.png" alt=""/>
            </div>

            <div className="services-text">
                <div className='mt-8'>
                    <h3 className=" font-bold text-2xl mb-4 serveices-text-header">
                        Data Sales
                    </h3>
                    <p>
                        We sell all mobile network data at a very affordable price
                    </p>
                </div>

                <div className='mt-8'>
                    <h3 className=" font-bold mb-4  serveices-text-header">
                        Airtime Topup
                    </h3>
                    <p>
                        Receive huge discounts on Airtime purchase.

                    </p>
                </div>

                <div className='mt-8'>
                    <h3 className=" font-bold mb-4  serveices-text-header">
                        Convert Airtime to Cash
                    </h3>
                    <p>
                        We convert all network airtime to cash instantly
                    </p>
                </div>
                
            </div>

        </div>



    <div className="service-two-div">
        <div className="flex-section-2">

            <div className="service-two-text">

                <div className="service-2-text-header">
                    <h3 className='font-bold mb-4  text-xl  '>Cable Tv Subscription and Bills Payment</h3>
                </div>
                
                <div>
                  <p className='w-[70%] sm:m-0 m-auto'> Swift and instant TV subscriptions and bills payment</p> 
                </div>

            </div>

            <div className="logos-div">
                <img className="logo-item" src="/assets/dstv.png" alt=""/>
                <img className="logo-item" src="/assets/gotv.png" alt=""/>
                <img className="logo-item" src="/assets/Startime 1.png" alt=""/>
                <img className="logo-item" src="/assets/eedc.png" alt=""/>
                <img className="logo-item" src="/assets/ekdc.png" alt=""/>
                <img className="logo-item" src="/assets/ibedc.png" alt=""/>
                <img className="logo-item" src="/assets/Port-Harcourt-Electricity-Distribution-PHED 1.png" alt=""/>
                <img className="logo-item" src="/assets/ikedc 1.png" alt=""/>
                <img className="logo-item" src="/assets/AEDC 1.png" alt=""/>
                <img className="logo-item" src="/assets/yedc.png" alt=""/>
                <img className="logo-item" src="/assets//Kaduna-Electric-KAEDCO 1.png" alt=""/>
                <img className="logo-item" src="/assets/Jos-Electric-JED 1.png" alt=""/>
                <img className="logo-item" src="/assets/kedco.png" alt=""/>
            </div>
        </div>

    </div>

</section>



<section className="scroller-section">

        <div className="scroller-div">
            <div>
                <img src="/assets/image 1.png" alt=""/>
                <div className="image-text-body">
                    <p className="scroller-img-text">Convert airtime to cash</p>
                </div>
            </div>

            <div>
                <img src="/assets/image 2.png" alt=""/>
                <div className="image-text-body">
                    <p className="scroller-img-text">95% automated secure services</p>
                </div>
            </div>
            <div>
                <img src="/assets/image 3.png" alt=""/>
                <div className="image-text-body">
                <p className="scroller-img-text">Instant and secure wallet funding</p> 
                </div>
            </div>
            <div>
                <img src="/assets/image 4.png" alt=""/>
                <div className="image-text-body">
                    <p className="scroller-img-text">Available 24/7</p>
                </div>
            </div>
            <div>
                <img src="/assets/image 5.png" alt=""/>
                <div className="image-text-body">
                    <p className="scroller-img-text">Fastest deals and quick resolution services</p>
                </div>
            </div>
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



<section>
    <div  style={{background:"url('/assets/mission.png')"
      ,backgroundSize:"cover",overflow:"hidden"}}  className="mission-container">
        <div className="circle-container">
            <div className="circle">
                <h3>Our Mission</h3>
                <p> To deliver best service in the quickest amount of time.</p>
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
                <input className="text-input" type="text" placeholder="Your full name"/><br/><br/>
                <input type="email" name="" className="text-email" placeholder="Your email" id=""/><br/><br/>
                <input type="tel" name="" id="" className="text-phone" placeholder="Phone Number"/><br/><br/>
                <textarea name="" id="" cols="30" rows="5" placeholder="Your message"></textarea>
            </form>
        </div>

        <div  className="contact-div">
            <h3>Contact us</h3>
                <div className="location className=' flex items-center'">
                    <Icon className='mr-2 mt-[1em]'  icon="material-symbols:location-on" color="#000"  width="25" />
                    <p> 5 Agbo street, off Micheal umodu labour institute olunlade, Ilorin Kwara state
                    </p>
                </div>
                <div className="phone">
                    <div className=' flex items-center'>
                        <Icon className='mr-2 mt-[1em]' icon="material-symbols:phone-in-talk" color="#000" width="20" />
                        <p>+111111111</p>
                    </div>
                    <div>
                        <Icon className='mr-2 mt-[1em]' icon="ic:baseline-whatsapp" color="#000" width="20" />
                        <p>+000111100</p>
                    </div>
                </div>
                <div className="location">
                    <Icon className='mr-2 mt-[1em]' icon="mdi:envelope-outline" color="#000" width="20" />
                    <p> cheapdatasale@gmail.com</p>
                </div>
        </div>

    </div>
</section>
</main>

<footer>
<div className="footer-flex">
    <div className="one">
        <h3>Cheapdatasale</h3>
    </div>

    <div className="two">
        <p className="footer-list-header">Quick Links</p>
        <ul className="footer-list-body">
            <li className="footer-list-item" >Home</li>
            <li className="footer-list-item" >About us</li>
            <li className="footer-list-item" >Contact us</li>
        </ul>
    </div>

    <div className="three">
        <p className="footer-list-header">Others</p>
        <ul className="footer-list-body">
            <li className="footer-list-item" >Our service</li>
            <li className="footer-list-item" >Our mission</li>
            <li className="footer-list-item" >
                {/* <span><iconify-icon icon="akar-icons:instagram-fill" width="20"></iconify-icon></span>
                <span><iconify-icon icon="bxl:facebook" width="20"></iconify-icon></span>
                <span><iconify-icon icon="akar-icons:twitter-fill" width="20"></iconify-icon></span> */}
            </li>
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