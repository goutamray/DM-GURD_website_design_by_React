
import { MdEmail } from "react-icons/md"; 
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa"; 
import { FaTwitterSquare } from "react-icons/fa"; 
import { IoLogoYoutube } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";

import "./Contact.css"
const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="text-center"> Contact us </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-details">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="contact-left">
                  <div className="contact-box">
                    <span> <MdEmail /> </span>
                    <div className="data-box">
                       <h6> EMAIL ADDRESS </h6>
                       <p> developergoutam53@gmail.com </p>
                    </div> 
                  </div>
        
            
                  <div className="contact-box">
                    <span> <IoLocation />  </span>
                    <div className="data-box">
                       <h6> ADDRESS</h6>
                       <p> Shalbon, Mistripara, Rangpur </p>
                    </div>
                  </div>
       
          
                  <div className="contact-box">
                    <span> <FaPhoneAlt /> </span>
                    <div className="data-box">
                       <h6> PHONE NUMBER</h6>
                       <p> +8801755302053 </p>
                     </div>
                  </div>

              </div>

              <div className="newslater-box">
                 <h2> NEWSLETTER </h2>
                 <div className="news-btn">
                  <input type="email" />
                  <button> Subscribe </button>
                 </div>

              </div>

              <div className="follow-btn">
                <h2> Follow us : </h2>
                <span> <FaFacebook />  </span>
                <span> <FaLinkedin /> </span>
                <span> <FaTwitterSquare /> </span>
                <span> <IoLogoYoutube /> </span>
                <span> <FaInstagram /> </span>
           
              </div>
            </div>

            <div className="col-md-8">
             <div className="contact-form p-5">
                <div className="form">
                  <form action="">
                    <div className="row">
                      <div className="col">
                        <label  className="form-label"> First name <span> * </span> </label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="col">
                        <label  className="form-label"> Last name <span> * </span> </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>

                    <div className="row py-3">
                      <div className="col">
                        <label  className="form-label"> Phone Number <span> * </span></label>
                        <input type="text" className="form-control"  />
                      </div>
                      <div className="col">
                        <label  className="form-label"> Email Address <span> * </span> </label>
                        <input type="email" className="form-control" />
                      </div>
                    </div>
                    <div className="row ">
                       <div className="col-12">
                          <label className="form-label"> Subject <span> * </span> </label>
                          <input type="text" className="form-control"  />
                       </div>
                       <div className="col-12 mt-3">
                          <label  className="form-label"> Message <span> * </span> </label>
                          <textarea name="" id="" rows="5" className="form-control"></textarea>
                        </div>
                    </div>
                    <button className="w-100"> Submit </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
