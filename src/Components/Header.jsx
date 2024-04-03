import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
import { GiLaptop } from "react-icons/gi";

function Header() {
  return (
    <div>
      <MDBNavbar light bgColor='dark'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <GiLaptop className='text-light' /> &nbsp;
            <span style={{ color: 'white' }}>Project Fair</span>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header