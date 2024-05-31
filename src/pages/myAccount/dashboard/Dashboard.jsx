
import { Link } from "react-router-dom"
import "./Dashboard.css"
const Dashboard = () => {
  return (
    <>
       <div className="dashboard p-4">
          <p> Hello <b> goutamr362 </b>  (not <b> goutamr362 </b>? <Link to="">Log out </Link>) <br/>
              From your account dashboard you can view your recent <Link> orders </Link> , manage your  <Link> shipping and billing addresses </Link> , and <Link> edit your password and account details </Link> .
           </p>  
       </div>
    </>
  )
}

export default Dashboard
