import { useState } from "react";
import { Link } from "react-router-dom"
import { FaRegEyeSlash } from "react-icons/fa";
import { FiEye } from "react-icons/fi";

import "./Login.css"
const Login = () => {
  const [showPassword, setShowPassword ] = useState(false); 

  return (
    <>
      <div className="login py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <div className="login-form p-4 shadow">
                <h3 className="text-center mb-3"> Login </h3>
                <form action="">
                 <div className=" mb-3">
                    <label htmlFor="Input">Email address</label>
                    <input type="email" className="form-control" id="Input"/>           
                  </div>
                  <div className="mb-3 show-pass">
                    <label htmlFor="Password"> Password </label>
                    <input type={ showPassword === false ? "password" : "text"} className="form-control" id="Password" />
                    <span className="icon" onClick={() => setShowPassword(!showPassword)}>
                           {
                              showPassword === false ? <FaRegEyeSlash /> : <FiEye />
                           }
                                  
                      </span>
                  </div>
                  <button className="btn btn-primary w-100 mt-3"> Login </button>
                </form>
                <div className="account-btn mt-3 text-center">
                  <p>  <Link to="/register" className=" link-underline-primary"> Create New Account </Link> </p>
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

export default Login

