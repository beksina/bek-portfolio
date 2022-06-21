import { Fragment as Fr } from "react";
import Navbar from "./Navbar";
import Particle from "./Particle";

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
