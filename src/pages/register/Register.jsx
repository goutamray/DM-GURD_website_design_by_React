import { useState } from "react";
import { Link } from "react-router-dom"
import { FaRegEyeSlash } from "react-icons/fa";
import { FiEye } from "react-icons/fi";


import "./Register.css"; 
const Register = () => {
  const [showPassword2, setShowPassword2 ] = useState(false); 
  return (
    <>
       <div className="login py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <div className="register-form p-4 shadow">
                <h3 className="text-center mb-3"> Register </h3>
                <form action="">
                <div className=" mb-3">
                   <label htmlFor="floatingData"> Name </label>
                    <input type="text" className="form-control" id="floatingData" />
                   
                  </div>
                 <div className=" mb-3">
                    <label htmlFor="floatingInput">Email address</label>
                    <input type="email" className="form-control" id="floatingInput" />           
                  </div>
                  <div className="mb-3 show-pass">
                    <label htmlFor="Password"> Password </label>
                    <input type={ showPassword2 === false ? "password" : "text"} className="form-control" id="Password" />
                    <span className="icon" onClick={() => setShowPassword2(!showPassword2)}>
                        {
                           showPassword2 === false ? <FaRegEyeSlash /> : <FiEye />
                        }
                                  
                      </span>
                  </div>
                  <button className="btn btn-primary w-100 mt-3"> Register </button>
                </form>
                <div className="account-btn text-center mt-3">
                  <p>   <Link to="/login" className="link-underline-primary"> Already have an account </Link> </p>
                    
                </div>
              </div>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register





