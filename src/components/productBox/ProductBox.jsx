

import product1 from "../../assets/asset1.jpeg"

const ProductBox = () => {
  return (
    <>
            <div className="col-md-4 col-sm-6 col-xs-6"> 
              <div className="product-box">
                  <img src={product1} alt="" />
                  <div className="all-product-data">
                    <h2> Buy Account 3 line Reinstated+ PH 50+ Friends. Create Date 2005-2018 </h2>
                    <p> 14.99$ </p>
                    <button> Buy Now </button>
                  </div>
              </div>
            </div>
    </>
  )
}

export default ProductBox
