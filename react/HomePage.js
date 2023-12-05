import React,{useEffect} from 'react'
import './css/Homepage/Homepage.css';
import AOS from 'aos';

import 'aos/dist/aos.css'; 
const HomePage = () => {

  useEffect(()=>
  {
    AOS.init({duration:'500' })
  },[])
 
 
  

  return (
    <div>
        <div className='fullpage'>
        <div className='division1'>
        <div className='section1'>
        <p className='heading1' data-aos="fade-down" >  The Bank </p>
        </div>
        <div  className='section1' data-aos="fade-down" >
          <p className='para1'>Welcome to the Bank Management System, your one-stop solution for managing your finances and banking needs. We are committed to providing you with a seamless and secure banking experience.</p>
        <button className='button2 btn btn-warning' ><a href="/register" style={{textDecoration:'none', color:'black'}}>Signup</a></button>
        </div>
        <div className='section1'>
        <span className='subheading' data-aos="fade-down">Security and Privacy</span>
        <p className='para2'  data-aos="fade"  data-aos-delay="1000">Your financial security is our top priority. We use the latest encryption and security technologies to protect your data and transactions. Rest assured that your information is safe with us.</p>
        </div>
        <div className='section1' >
        <span className='subheading' data-aos="fade-up" id='about-us'>About Us</span>
       <p className='para3' data-aos="fade" data-aos-delay="1000"> Bank Management System has been serving customers for over 50 years. Our mission is to empower individuals and businesses to achieve their financial goals. Learn more about our history and values here.</p>
        </div>
        <div className='section1'>
        <span className='subheading' data-aos="fade-up">Contact Us</span>
        <p className='para2'data-aos="fade-up" >Have questions or need assistance? Our customer support team is here to help. You can reach us through the following channels:</p>
        <p className='para2' data-aos="fade-up">Phone: 1-800-123-4567 <br/>
        Email: support@TheBank.com<br/>
        Visit Us: Find your nearest branch on maps</p>
        </div>
       
        </div>
        </div>
    </div>
    
  )
}

export default HomePage