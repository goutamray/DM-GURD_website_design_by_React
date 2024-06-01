import { MdShoppingBag } from "react-icons/md";

import "./Download.css"
import { Link } from "react-router-dom";
const Download = () => {
  return (
    <>
     <div className="download p-4">
        <div className="download-text">
           <span> <MdShoppingBag /> </span>
           <p> No downloads available yet. </p>
        </div>
        <div className="download-btn">
            <Link to="/shop"> Browse Product </Link>  
        </div>
     </div>
    </>
  )
}

export default Download




