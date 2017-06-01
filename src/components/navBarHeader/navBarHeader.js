import React, { Component } from 'react';
import {Navbar,NavItem,Nav} from 'react-bootstrap';
import Scroll from 'react-scroll';
import './navBarHeader.css'

const scroll = Scroll.scroller;
class NavBarHeader extends Component{

    onNavItemClick = (event) => {
      let elementTo = event.currentTarget.hash.split('#')[1];
       scroll.scrollTo(elementTo, {
            duration: 1200,
            delay: 100,
            smooth: "easeInOutQuint"
        });
    }

    render(){
        return (
        <Navbar inverse collapseOnSelect className="navBarHeader"> 
          <Navbar.Header>
            <Navbar.Toggle />
            </Navbar.Header>  
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1}  onClick={ this.onNavItemClick } href="#home">Home</NavItem>
              <NavItem eventKey={2}  onClick={ this.onNavItemClick } href="#quienesSomos">Quienes somos</NavItem>
              <NavItem eventKey={3}  onClick={ this.onNavItemClick } href="#nuestroEstilo">Nuestro estilo</NavItem>
              <NavItem eventKey={4}  onClick={ this.onNavItemClick } href="#galeria">Galeria</NavItem>
              <NavItem eventKey={5}  onClick={ this.onNavItemClick } href="#contactate">Contactate</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar> 
        );   
    }
}

export default NavBarHeader;