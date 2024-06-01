import { RxCross2 } from "react-icons/rx";
import Counter from "../../components/counter/Counter"
import pro1 from "../../assets/asset1.jpeg"

import "./Cart.css"
const Cart = () => {
  return (
    <>
          <div className="cart">
            <div className="container">
              <div className="row">
                <div className="col">
                  <h2 className="text-center"> Cart  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="cart-details py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-7">
                   <div className="cart-product">
                      <table className="table ">
                        <thead>
                           <tr>
                            <th className="remove"> remove </th>
                            <th> PRODUCT </th>
                            <th> PRICE </th>
                            <th> QUANTITY </th>
                            <th> SUBTOTAL </th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                            <td> 
                              <div className="pro-img">
                                  <span> <RxCross2 /> </span>
                                  <img src={pro1} alt="" />
                              </div>
                            </td>
                            <td> <h6> Buy BM5 NOLIMIT OLD Business Manager 4 slots empty, the limit does not fall </h6> </td>
                            <td> 359.99$ </td>
                            <td>
                              <Counter />
                            </td>
                            <td> 	719.98$ </td>
                           </tr>
                        </tbody>
                      </table>
                      <button className="w-100"> Update Cart </button>
                   </div>
                </div>

                <div className="col-md-5">
                 <div className="additional p-5">
                    <h3 className="mb-3"> Cart Totals </h3>
                    <div className="row">
                      <div className="col">
                         <div className="all-data-product">                  
                             <div className="product-sub">
                                <h5> Subtotal </h5>
                                <h6> 359.99$ </h6>
                             </div>
                             <div className="product-total">
                               <h5> Total </h5>
                               <h6> 359.99$ </h6>
                             </div>
                         </div>
                      </div>
                   </div>
                   <button className="w-100 mt-5"> PROCEED TO CHECKOUT </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default Cart
