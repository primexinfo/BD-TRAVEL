import React, {useEffect} from "react";
import "./home.css";
import Banner from "../../assets/video/homebg2.mp4";
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { FaTripadvisor } from "react-icons/fa";
import { TbMenu2 } from "react-icons/tb";
import { TbApps } from "react-icons/tb";
import Aos from "aos";
import 'aos/dist/aos.css'
import Main from "../Main/Main";
const Home = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])


  return (
    <>
    <section className="home">
      <div className="overlay">
        <video src={Banner} muted autoPlay loop type="video/mp4"></video>
      </div>
      <div className="homecontent container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">Our packeges</span>
          <h1 data-aos="fade-up" className="homeTitle">Search Your holidays in Bangladesh</h1>
        </div>
        <div data-aos="fade-up" className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Search Your Destination:</label>
            <div className="input flex">
              <input type="text" placeholder="Enter name here...." />
              <GrLocation className="icon" />
              
            </div>
          </div>
          <div className="dateInput">
            <label htmlFor="city">Select your date:</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>
          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Max price:</label>
              <h3 className="total">BDT 5000</h3>
            </div>
            <div className="input flex">
              <input type="range" max="5000" min="1000" />
            </div>
          </div>
          <div className="searchOptions flex">
            <HiFilter className="icon" />
            <span>MORE FILTERS</span>
          </div>
        </div>
        <div data-aos="fade-up" className="homefooterIcons flex">
          <div className="rightIcon">
            <FiFacebook className="icon" />
            <BsInstagram className="icon" />
            <FaTripadvisor className="icon" />
          </div>
          <div className="leftIcon">
            <TbMenu2 className="icon" />
            <TbApps className="icon" />
          </div>
        </div>
      </div>
    </section>
    <Main/>
    </>
  );
};

export default Home;
