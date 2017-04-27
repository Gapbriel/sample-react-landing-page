import React, { Component } from 'react';
import {Navbar,NavItem,Nav} from 'react-bootstrap';
import './navBarHeader.css'

class NavBarHeader extends Component{
    render(){
        return (
        <Navbar inverse collapseOnSelect className="navBarHeader"> 
          <Navbar.Header>
            <Navbar.Toggle />
            </Navbar.Header>  
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href="#home">Home</NavItem>
              <NavItem eventKey={2} href="#quienesSomos">Quienes somos</NavItem>
              <NavItem eventKey={3} href="#nuestroEstilo">Nuestro estilo</NavItem>
              <NavItem eventKey={4} href="#galeria">Galeria</NavItem>
              <NavItem eventKey={5} href="#contactate">Contactate</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar> 
        );   
    }
}

export default NavBarHeader;