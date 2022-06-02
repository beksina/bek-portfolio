import { Fragment as Fr } from "react";
import Navbar from "./navbar";

const Layout = ({children}) => {
  return (
    <Fr>
      <Navbar />
      <Fr>
        {children}
      </Fr>
    </Fr>
  )
}

export default Layout
