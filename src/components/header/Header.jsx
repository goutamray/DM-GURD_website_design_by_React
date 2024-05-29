import { Link } from "react-router-dom"
import logo from "../../assets/DM-GURD.png"
import { FaCartArrowDown } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";


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
          <div className="col-md-6 part2">
             <div className="menu">
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
                  <Link to="/tips"> Tips </Link>
                </li>
                <li>
                  <Link to="/contact"> Contact </Link>
                </li>
              </ul>
             </div>
          </div>
          <div className="col-md-4 part3">
             <div className="support-btn">
                 <Link to="/my-account" className="order-btn"> my order <span> <FaCartArrowDown /> </span> </Link>
                 <Link to="" className="support-btn"> Support <span> <IoIosSend /> </span> </Link>
             </div>
          </div>
        </div>
      </div>
     </div>
    </>
  )
}

export default Header


