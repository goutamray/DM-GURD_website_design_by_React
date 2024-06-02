import { Link } from "react-router-dom"
import logo from "../../assets/DM-GURD.png"
 import { FaCartArrowDown } from "react-icons/fa";
 import { IoIosSend } from "react-icons/io";



 import "./Header.css"
const Header = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container my-container ">
         {/* logo part  */}
        <Link className="navbar-brand" href="#">
            <img src={logo} alt=""/> 
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
         {/* menu part  */}
        <div className="collapse navbar-collapse my-custom " id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

            <li className="nav-item me-2">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>

            <li className="nav-item me-2">
              <Link className="nav-link" to="/about-us">About us</Link>
            </li>

            <li className="nav-item me-2">
              <Link className="nav-link" to="/replace-rule"> Replace Rules </Link>
            </li>

            <li className="nav-item me-2">
              <Link className="nav-link" to="/contact"> Contact </Link>
            </li>

            <li className="nav-item me-2 my-btn">
                  <Link to="/my-account" className="nav-link"> my order <span> <FaCartArrowDown /> </span> </Link>        
            </li>
            <li className="nav-item me-2">
               <Link to="/" className="nav-link support-btn"> Support <span> <IoIosSend /> </span> </Link>
            </li>

          </ul>

        </div>
      </div>
      </nav>

    </>
  )
}

export default Header;


