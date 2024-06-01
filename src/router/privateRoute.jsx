import Layout from "../components/layout/Layout";
import Shop from "../pages/shop/Shop";


// create private router 
const privateRoute = [
  {
    element : <Layout />,
    children : [
      {
        path : "/shop",
        element : <Shop /> 
      }
    ]

  }
]



// export default private router
export default privateRoute; 

