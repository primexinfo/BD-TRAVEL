import React, { useState } from "react";
import { SiYourtraveldottv } from "react-icons/si";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import Logo from "../../assets/img/travellogo.png";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  const [active, setActive] = useState("navBar");
  
  //   const [close , setClose] = useState('')

  const showNav = () => {
    setActive("navBar activeNavbar");
  };
  const removeNav = () => {
    setActive("navBar");
  };

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="" className="logo flex">
            <h1>
              {/* <SiYourtraveldottv className="icon" />
              travel. */}
              <Link to="/"> <img src={Logo} alt="" /></Link>
             
            </h1>
          </a>
        </div>
        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="" className="navLink">
                home
              </a>
            </li>
            <li className="navItem">
              <a href="" className="navLink">
                packege
              </a>
            </li>

            <li className="navItem">
              <a href="" className="navLink">
                Tour
              </a>
            </li>

            <li className="navItem">
              <a href="" className="navLink">
                News
              </a>
            </li>
            <li className="navItem">
              <a href="" className="navLink">
                Contact
              </a>
            </li>

            <button className="btn">
              <a href="">Book now</a>
            </button>
            <li className="navItem">
              <a href="" className="navLink"></a>
              <FaUserCircle className="icon" />
            </li>
          </ul>
          <div onClick={removeNav} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>
        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
