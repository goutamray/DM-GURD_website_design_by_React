



import ProductBox from "../../components/productBox/ProductBox"
import "./Shop.css"
const Shop = () => {
  return (
    <>
      <div className="shop">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="text-center"> Shop </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="shop-product">
         <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="shop-title">
                <h5> Showing all 14 results </h5>
              </div>
            </div>
            <div className="col-md-6">
                <div className="cat-select">
                  <select name="" id="">
                    <option value="menu_order"> Default sorting </option>
                    <option value="popularity"> Sort by popularity </option>
                    <option value="rating"> Sort by average rating</option>
                    <option value="price"> Sort by price: low to high</option>
                    <option value="price"> Sort by price: high to low </option>
                  </select>
                </div>
            </div>
          </div>
          <div className="row">
            <ProductBox />
            <ProductBox />
            <ProductBox />
            <ProductBox />
            <ProductBox />
            <ProductBox />
            <ProductBox />
            <ProductBox />
          </div>
         </div>
      </div>
    </>
  )
}

export default Shop; 





















