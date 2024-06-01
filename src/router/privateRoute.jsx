import Layout from "../components/layout/Layout";
import Cart from "../pages/cart/Cart";
import Checkout from "../pages/checkout/Checkout";
import Shop from "../pages/shop/Shop";


// create private router 
const privateRoute = [
  {
    element : <Layout />,
    children : [
      {
        path : "/shop",
        element : <Shop /> 
      },
      {
        path : "/checkout",
        element : <Checkout /> 
      },
      {
        path : "/cart",
        element : <Cart /> 
      }
    ]

  }
]



// export default private router
export default privateRoute; 

