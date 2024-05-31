

import { Link } from "react-router-dom"
import "./Order.css"
const Order = () => {
  return (
    <>
      <div className="order p-4">
          <div className="order-table">
            <table className="table table-bordered">
              <thead>
                 <tr>
                  <th> Order </th>
                  <th> Date </th>
                  <th> Status </th>
                  <th> Total </th>
                  <th> Actions </th>
                 </tr>
              </thead>
              <tbody>
                <tr>
                  <td> #351 </td>
                  <td> May 31, 2024 </td>
                  <td> On hold </td>
                  <td> 7.99$ for 1 item</td>
                  <td > <Link to="" className="view-btn"> View </Link>  </td>
                </tr>
              </tbody>
            </table>
          </div>
      </div>
    </>
  )
}

export default Order














