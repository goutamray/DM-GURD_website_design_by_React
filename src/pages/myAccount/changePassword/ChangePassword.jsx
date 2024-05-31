
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

import "./ChangePassword.css"
import { useState } from "react";

const ChangePassword = () => {
   const [showPass, setShowPass ] = useState(false); 
   const [showPass2, setShowPass2 ] = useState(false); 
   const [showPass3, setShowPass3 ] = useState(false); 


  return (
    <>
      <div className="changw-password p-5">
        <div className="form-data">
          <h4> Password Change </h4>
          <form action="">
              <div className="row mb-3">
                <div className="col-sm-10 pass-field ">
                <label  className="col-sm-3 col-form-label"> Current password </label>
                  <input type={showPass === false ? "password" : "text"} className="form-control" />
                   <span className="show-hide"  onClick={() => setShowPass(!showPass)}>                          
                          {
                             showPass === true ? <FaRegEye />  :  <FaEyeSlash /> 
                           }
                                                                               
                    </span>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-sm-10 pass-field ">
                <label  className="col-sm-3 col-form-label"> New password </label>
                  <input type={showPass2 === false ? "password" : "text"} className="form-control" />
                  <span className="show-hide"  onClick={() => setShowPass2(!showPass2)}>                          
                          {
                             showPass2 === true ? <FaRegEye />  :  <FaEyeSlash /> 
                           }
                                                                               
                    </span>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-sm-10 pass-field ">
                <label  className="col-sm-3 col-form-label"> Confirm password </label>
                  <input type={showPass3 === false ? "password" : "text"} className="form-control" />
                  <span className="show-hide"  onClick={() => setShowPass3(!showPass3)}>                          
                          {
                             showPass3 === true ? <FaRegEye />  :  <FaEyeSlash /> 
                           }
                                                                               
                    </span>
                </div>
              </div>
              <button> Save Changes </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default ChangePassword; 








