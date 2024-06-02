

import img1 from "../../assets/DM-GURD.png"
import img2 from "../../assets/asset1.jpeg"
import img3 from "../../assets/asset2.jpeg"


import "./Home.css"
import Product from "../../components/product/Product"
import Testimonial from "../../components/testimonial/Testimonial"
const Home = () => {
  return (
    <>
      <div className="banner">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="banner-left">
                 <h2> DM Gurd.. </h2>
                  <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis dolore veritatis quia minima quod sapiente vero voluptate sit facere culpa. Qui impedit eos quam quae facilis est corrupti porro perspiciatis?</p>
              </div>
            
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="heading-content">
                <img src={img3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

    {/* facebook account section */}
     <div className="facebook-account">
        <div className="container">
          <div className="row">
           
              <div className="col-md-6 col-sm-12">
                  <div className="facebook-content">
                    <h5> Exclusive benefits </h5>
                    <h2> Buy Facebook Accounts For Ad From DM Gurd.</h2>
                    <p> Our main priority is product quality and availability. Based on more than two years of experience in affiliate marketing, we carefully select and test FB accounts for advertising Facebook Ad and Facebook BMs. We also try to maintain a low cost in the accounts market. <br/> You can buy from us: facebook warmed up accounts, Facebook Softreg PVA Accounts, Facebook Softreg PVA Accounts with BM, Business Manager Facebook 250 $, Verified & Unlimited FB BM, Softreg tiktok ads, etc. </p>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="all-image">
                      <div className="all-right-photo">
                        <div className="image-1">
                            <img src={img2} alt="" />
                        </div>
                        <div className="image-2">
                            <img src={img1} alt="" />
                        </div>
                      </div>
                  </div>
                </div>
            </div>
         
        </div>
     </div>

    {/* Top Items */}
      <div className="top-item">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="text-center py-3"> Top Items For You </h2>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="product-box">
                 <Product />
                 <Product />
                 <Product />
                 <Product />
                 <Product />
                 <Product />
                 <Product />           
              </div>
            </div>
          </div>
        </div>
      </div>


    {/* Top Items */}
      <div className="top-item-account py-5">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="text-center py-3"> Accounts With $250/Nolimit </h2>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="product-box">
                 <Product />
                 <Product />
                 <Product />
                 <Product />
                 <Product />
                 <Product />
                 <Product />
              </div>
            </div>
          </div>
        </div>
      </div>
 

    {/*  Testimonial section */}
    <div className="testimonial">
      <div className="container">
        <div className="row">
          <div className="col">
            <Testimonial /> 
          </div>
        </div>
      </div>
    </div>
    </>

  )
}

export default Home    
