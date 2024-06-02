import logo from "../../assets/DM-GURD.png"

import "./About.css"; 
const About = () => {
  return (
    <>
      <div className="about">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="head-title"> 
                <h3 className="text-center"> About Us </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-6 ">
              <div className="photo">
                <img src={logo} alt="" />
              </div>
            </div>
            <div className="col-md-6 col-sm-6">
               <div className="about-content">
                <h2> DEAR CUSTOMERS </h2>
                <h5> We Are Working since 2016 to till now with hour thousand satisfied clients from the world. Our main priority is product quality and availability. Based on more than two years of experience in affiliate marketing, we carefully select and test FB accounts for advertising Facebook Ad and Facebook BMs. We also try to maintain a low cost in the accounts market. You can buy from us: facebook warmed up accounts, Facebook Softreg PVA Accounts, Facebook Softreg PVA Accounts with BM, Business Manager Facebook 250 $, Verified & Unlimited FB BM, Softreg tiktok ads, etc. </h5>
                <h4> - DMGurd </h4>
               </div>
            </div>
          </div>
        </div>
      </div>
      <div className="thank-you">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="text-center"> Thank You So Much... </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About    


