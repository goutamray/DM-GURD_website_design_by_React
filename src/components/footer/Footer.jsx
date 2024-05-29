
import { FaTelegram } from "react-icons/fa";
import { Link } from "react-router-dom"


import "./Footer.css"
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
               <div className="footer-part1">
                  <h2> DM GURD </h2>
                  <h5> 123 5TH AVE, </h5>
                  <h5> NEW YORK, NY 10123 </h5>
               </div>
            </div>
            <div className="col-md-5">
                 <div className="footer-part2">
                  <p> Our main priority is product quality and availability. Based on more than two years of experience in affiliate marketing, we carefully select and test FB accounts for advertising Facebook Ad and Facebook BMs. We also try to maintain a low cost in the accounts market. </p>
                 </div>
            </div>
            <div className="col-md-3">
                <div className="footer-part3">
                  <Link > <span> <FaTelegram /> </span> Support </Link>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-footer">
        <div className="container">
          <div className="row">
            <div className="col">
              <p> All rights reserved @ 2023 | <Link to="/"> www.dmgurd.com</Link> </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer

