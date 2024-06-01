

import { Link } from "react-router-dom";
import "./Checkout.css"; 
const Checkout = () => {
  return (
    <>
      <div className="checkout">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="text-center"> Checkout  </h2>
            </div>
          </div>
        </div>
      </div>


      <div className="checkout-details">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
        
              <div className="contact-form p-5">
                <h2> Billing Details </h2>
                <div className="form">
                  <form action="">
                    <div className="row my-3">
                      <div className="col">
                        <label  className="form-label"> First name <span> * </span> </label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="col">
                        <label  className="form-label"> Last name <span> * </span> </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>

          
                    <div className="row ">
                       <div className="col-12">
                          <label className="form-label"> Company Name <span> * </span> </label>
                          <input type="text" className="form-control"  />
                       </div>
                       <div className="col-12 mt-3">
                          <label className="form-label"> Town / City <span> * </span> </label>
                          <input type="text" className="form-control"  />
                       </div>               
                    </div>

                    <div className="row mt-3">
                       <div className="col-12">
                          <label className="form-label"> Country / Region <span> * </span> </label>
                          <select name="" id=""  className="form-control form-select" >
                            <option value="Bangladesh"> Bangladesh </option>
                            <option value="India"> India </option>
                            <option value="Pakistan"> Pakistan </option>
                            <option value="Nepal"> Nepal </option>
                            <option value="Sri Lanka"> Sri Lanka </option>
                          </select>
                       </div>               
                    </div>

                    <div className="row my-3">
                       <div className="col-12">
                          <label className="form-label"> Phone <span> * </span> </label>
                          <input type="text" className="form-control"  />
                       </div>
                       <div className="col-12 mt-3">
                          <label className="form-label"> Email Address <span> * </span> </label>
                          <input type="text" className="form-control"  />
                       </div>               
                    </div>
                    
                  </form>
                </div>
              </div>
          
              <div className="additional p-5 mt-4">
                 <h3> Additional Information </h3>
                 <p> Order Notes (optional) </p>
                 <textarea name="" id="" rows="3" className="form-control"></textarea>
              </div>

            </div>

            <div className="col-md-5">
               <div className="additional p-5">
                   <h3> Your Order </h3>
                   <div className="row">
                      <div className="col">
                         <div className="all-data-product">
                            <div className="product-title-data">
                               <h4> Product </h4>
                                <h4> Subtotal </h4>  
                            </div>
                             <div className="product-name">
                                <h6> Buy BM5 NOLIMIT OLD Business Manager 4 slots empty, the limit does not fall  × 1 </h6>
                                <p> 359.99$ </p>
                             </div>
                             <div className="product-sub">
                                <h5> Subtotal </h5>
                                <p> 359.99$ </p>
                             </div>
                             <div className="product-total">
                               <h5> Total </h5>
                               <h5> 359.99$ </h5>
                             </div>
                         </div>
                      </div>
                   </div>
               
               </div>

               <div className="payment-box-all p-5 mt-4">
                   <h5> Cash on delivery</h5>
                   <p className="mt-3"> Pay with cash upon delivery. </p>


                   <p className="mt-5"> <input type="checkbox" /> Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <Link to="#"> privacy policy </Link> . </p>
           
                 <button> Place Order </button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Checkout; 
