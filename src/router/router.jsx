import { createBrowserRouter } from "react-router-dom";
import publicRoute from "./publicRoute";
import privateRoute from "./privateRoute";



// create Router 
const router = createBrowserRouter([...publicRoute, ...privateRoute])


// export default router 
export default router; 



