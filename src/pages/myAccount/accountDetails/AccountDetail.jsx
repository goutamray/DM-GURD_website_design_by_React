

import "./AccountDetails.css"
const AccountDetail = () => {
  return (
    <>
     <div className="account-details p-5">
          <div className="form">
            <form action="">
              <div className="row">
                <div className="col">
                  <label  className="form-label"> First name</label>
                  <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
                </div>
                <div className="col">
                  <label  className="form-label"> Last name</label>
                  <input type="text" className="form-control" placeholder="Last name" aria-label="Last name"/>
                </div>
              </div>
              <div className="row mt-2">
              <div className="col-12">
                  <label className="form-label"> Display name </label>
                  <input type="text" className="form-control" id="inputAddress" placeholder=""/>
                </div>
                <div className="col-12">
                  <label  className="form-label"> Email address </label>
                  <input type="text" className="form-control" id="inputAddress2" placeholder=""/>
                </div>
              </div>
              <button> Save Changes </button>
            </form>
          </div>
     </div>
    </>
  )

}

export default AccountDetail; 
