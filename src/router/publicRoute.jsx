
import Layout from "../components/layout/Layout";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Home from "../pages/home/Home";
import MyAccount from "../pages/myAccount/MyAccount";

import Replace from "../pages/replace/Replace";
import Tips from "../pages/tips/Tips";

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
      path : "/tips",
      element : <Tips />
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
      element : <MyAccount /> 
    },

    ]
  }
]





// export default router 
export default publicRoute;

