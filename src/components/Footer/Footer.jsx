import React,{useEffect} from 'react'
import './footer.css'
import Logo from "../../assets/img/travellogo.png"
import {FiSend} from 'react-icons/fi'
import{AiFillTwitterCircle} from 'react-icons/ai'
import{BsFacebook} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import {TbBrandTripadvisor } from 'react-icons/tb'
import {FiChevronRight} from 'react-icons/fi'
import Banner from "../../assets/video/homebg2.mp4";
import Aos from "aos";
import 'aos/dist/aos.css'
const Footer = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <section className='footer'>
      <div className="videoDiv">
        <video src={Banner} loop autoPlay muted type="video/mp4"></video>
      </div>
      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>keep in touch</small>
            <h2>Travel with us</h2>
          </div>
          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder='Enter your email address' />
            <button data-aos="fade-up" className="btn flex" type='submit'>
              SEND <FiSend className='icon'/>
            </button>
          </div>
        </div>
        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="" className='logo flex'>
                <img className='icon' src={Logo} alt="" />
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
              We are a local tourism marketplace in Bangladesh to provide you with authentic travel experiences.
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
              <AiFillTwitterCircle className='icon'/>
              <BsFacebook className='icon' />
              <AiFillInstagram className='icon'/>
              <TbBrandTripadvisor className='icon'/>
            </div>
          </div>
          <div className="footerLinks grid">
            <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
              <span className="groupTitle">
                Discover
              </span>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Home
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Experience
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Holiday Home 
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                About
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Contact Us
              </li>
            </div>
            <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
              <span className="groupTitle">
                Company
              </span>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Corporate Sales
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Privacy Policy
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Booking Process 
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                EMI Policy
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Return & Refund
              </li>
            </div>
            <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
              <span className="groupTitle">
                Partners
              </span>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Primex
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Rentcars
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Trivago 
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Tripadvisor
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Booking.com
              </li>
            </div>
          </div>
          <div className="footerDiv flex">
            <small>ALL RIGHTS RESERVED BY TRAVEL BANGLADESH</small>
            <small>DESGIN AND DEVELOP BY - PRIMEX INFORMATION SYSTEM 2022</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer