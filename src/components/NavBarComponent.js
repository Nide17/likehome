import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, NavbarBrand } from 'reactstrap'

function NavBarComponent() {
  return (
    <div className="Navigation">
    <Navbar dark color="primary">
        <div className="container">
        <NavbarBrand href="/">
        <span>🍕LikeHome Dishes🍗</span> 
        </NavbarBrand>
        </div>
    </Navbar>
      
      
    </div>
  )
}

export default NavBarComponent
