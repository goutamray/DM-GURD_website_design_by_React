
import "./Address.css"
const Address = () => {
  return (
    <>
      <div className="address">
        <p> The following addresses will be used on the checkout page by default. </p>
        <div className="container py-4">
          <div className="row">
            <div className="col-md-6">
               <div className="billing">
                <h4> Billing address </h4>
                <div className="edit-data ">
                  <button> Edit </button>
                  <p> Goutam Ray </p>
                  <p> Rangpur, Bangladesh </p>
                </div>
               </div>
            </div>
            <div className="col-md-6">
                <div className="shipping ">
                  <h4> Shipping address </h4>
                  <div className="edit-data">
                  <button> Add </button>
                  <p> You have not set up this type of address yet.</p>
                 <p> Dhaka, Bangladesh </p>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Address
