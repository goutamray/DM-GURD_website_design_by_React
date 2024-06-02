
import Layout from "../components/layout/Layout";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Dashboard from "../pages/myAccount/dashboard/Dashboard";
import Order from "../pages/myAccount/order/Order";
import Home from "../pages/home/Home";
import MyAccount from "../pages/myAccount/MyAccount";



import Replace from "../pages/replace/Replace";
import Download from "../pages/myAccount/download/Download";
import Address from "../pages/myAccount/address/Address";
import AccountDetail from "../pages/myAccount/accountDetails/AccountDetail";
import Logout from "../pages/myAccount/logout/Logout";
import ChangePassword from "../pages/myAccount/changePassword/ChangePassword";



// create public Router 
const publicRoute = [
  {
    element : <Layout />,
    children : [
     {
       path : "/",
       element : <Home /> 
     }, 
    {
      path : "/about-us",
      element : <About />
    },
    {
      path : "/replace-rule",
      element : <Replace />
    },
    {
      path : "/contact",
      element : <Contact />
    },
    {
      path : "/my-account",
      element : <MyAccount />,
      children : [
        {
          path : "dashboard",
          element : <Dashboard />
        
        },
        {
          path : "orders",
          element : <Order /> 
        },
        {
          path : "downloads",
          element : <Download /> 
        },
        {
          path : "address",
          element : <Address /> 
        },
        {
          path : "account-details",
          element : <AccountDetail /> 
        },
        {
          path : "change-password",
          element : <ChangePassword />  
        },
        {
          path : "logout",
          element : <Logout />
        },
      ] 

    }
  ]

  }
]





// export default router 
export default publicRoute;

