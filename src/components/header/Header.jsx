import { Link } from "react-router-dom"
import logo from "../../assets/DM-GURD.png"
import { FaCartArrowDown } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { FiMenu } from "react-icons/fi";


import "./Header.css"
const Header = () => {
  return (
    <>
     <div className="header">
      <div className="container">
        <div className="row">
          <div className="col-md-2 part1">
             <div className="logo">
              <Link to="/"> 
                 <img src={logo} alt="" />
              </Link>
             </div>
          </div>
          <div className="col-md-10 part2">
              <input className="check-box" type="checkbox"/>
              <span > <FiMenu /> </span>
           
          
              <ul>
                <li>
                  <Link to="/"> Home </Link>
                </li>
                <li>
                  <Link to="/about-us"> About Us </Link>
                </li>
                <li>
                  <Link to="/replace-rule"> Replace Rules </Link>
                </li>
              
                <li>
                  <Link to="/contact"> Contact </Link>
                </li>
                <li className="my-btn">
                  <Link to="/my-account" className="order-btn"> my order <span> <FaCartArrowDown /> </span> </Link>
                </li>
                <li>
                <Link to="" className="support-btn"> Support <span> <IoIosSend /> </span> </Link>
                </li>

              </ul>
        
          </div>
        </div>
      </div>
     </div>
    </>
  )
}

export default Header


