import { Link } from "react-router-dom"
import Counter from "../counter/Counter"




const Product = () => {
  return (
    <>
          <div className="single-product">
                <div className="product-name">
                     <h3> Buy Reinstated+ Business manager 250/50$ PAY UP BM3 </h3>
                </div>
                 <div className="product-count">
                      <h4> 7.99$ <span> / 1 pcs </span></h4>
                </div>
                <div className="product-buy">
                  <div className="count-box">
                      <Counter />
                    </div>
                    <div className="buy-btn">
                      <Link to=""> Buy Now</Link>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Product













