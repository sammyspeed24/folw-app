import React from 'react';
import {Navbar, Nav,NavDropdown,Container,Button } from 'react-bootstrap'
import '../Components/Navcss.css';
import { Link } from 'react-router-dom';
import pix from "../folwImages/RCCG.png";


const CustomNavbar = ()=>{


    return(
        <div>

<Navbar bg="myGreen" expand="sm" fixed="top">
  <Container>
    <Navbar.Brand> {/*=========logoSection*/}
         <Link to='/' className='navbar-logo wow bounceIn'  data-wow-delay="1s" data-wow-duration="1s" >
         <img src ={pix}  className="rccgPix" alt="pix" />
          <h3 className="text-white rccgpix_title shadow">Fountain Of Living Waters</h3>
         </Link>
         {/*=========logoSection*/}</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="m-auto">
        <Nav.Link className="nav-link" href="/">Home</Nav.Link>
        <Nav.Link className="nav-link" href="/about">About</Nav.Link>
        <Nav.Link className="nav-link" href="/contact">Contact</Nav.Link>
        <NavDropdown title="Explore" id="basic-nav-dropdown">
            <NavDropdown.Item  href="/connect/3.1">Follow-Us</NavDropdown.Item>
          <NavDropdown.Item href="/DepartmentsPage/3.2">Join A Department</NavDropdown.Item>
          <NavDropdown.Item href="/gallery/3.3">Gallery</NavDropdown.Item>
          
          <NavDropdown.Item href="/giving/3.4">Give</NavDropdown.Item>   
          <NavDropdown.Item href="/testimonies/3.5">Testimonies</NavDropdown.Item>  
          </NavDropdown>   
      </Nav>
      <Nav.Link className="giving_link" href="/giving/3.4">Give</Nav.Link>
      <Nav.Link className="donate_link" href="/donate">Donate</Nav.Link>
    </Navbar.Collapse>
    
  </Container>
</Navbar>
        </div>
    );
} 
export default CustomNavbar;


















