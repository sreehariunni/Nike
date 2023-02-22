import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
function Header() {
  return (
    <>
    
    <Navbar  expand="lg" style={{backgroundColor:"black"}} >
      <Container>
        <Navbar.Brand href="home">
            <img style={{width:"90px",marginBottom:"-10px"}} src='https://i.postimg.cc/wBQRx7yW/seo-title.jpg'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={{fontSize:"20px",fontFamily:'cursive',marginRight:"10px",color:"white"}}  href="/">HOME</Nav.Link>
            <Nav.Link style={{fontSize:"20px",fontFamily:"cursive",marginRight:"10px",color:'white'}}  href="/about">ABOUT</Nav.Link>
            {/* <Nav.Link style={{fontSize:"20px",fontFamily:'cursive',marginRight:"10px",color:"white"}}  href="/login">LOGIN</Nav.Link>

            <Nav.Link style={{fontSize:"20px",fontFamily:'cursive',marginRight:"10px",color:"white"}}  href="/register">REGISTER</Nav.Link> */}

            {/* <NavDropdown style={{fontSize:"20px",fontFamily:"cursive",marginRight:"10px",color:'white'}}  title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item  href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <Nav.Link style={{fontSize:"20px",fontFamily:"cursive",marginRight:"10px",color:'white'}}  href="/store">OFFERS</Nav.Link>
            <Nav.Link style={{fontSize:"20px",fontFamily:"cursive",marginRight:"10px",color:'white'}} href="/contactus"  >
              CONTACT US
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header