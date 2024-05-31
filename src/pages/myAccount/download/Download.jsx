import { MdShoppingBag } from "react-icons/md";

import "./Download.css"
const Download = () => {
  return (
    <>
     <div className="download p-4">
        <div className="download-text">
           <span> <MdShoppingBag /> </span>
           <p> No downloads available yet. </p>
        </div>
        <div className="download-btn">
           <button> Browse Product </button>
        </div>
     </div>
    </>
  )
}

export default Download




