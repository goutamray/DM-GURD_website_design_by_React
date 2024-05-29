
import { Outlet } from "react-router-dom"
import Footer from "../footer/Footer"
import Header from "../header/Header"


// layout 
const Layout = () => {
  return (
    <>
      <Header />

        <Outlet />

      <Footer />

    </>
  )
}

export default Layout



