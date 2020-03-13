import React, { Component } from 'react'
import {Container, Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink} from 'reactstrap'
import {Link} from 'react-router-dom'

export default class NavigationBar extends Component {
  constructor(props){
    super(props)
    this.state = {
      cookie: window.localStorage.getItem('jwt')
    }
  }
  logout(){
    window.localStorage.removeItem('jwt')
    this.props.history.push('/')
  }
  render() {
    return (
      <Navbar color='dark' dark expand='md'>
        <Container>
          <NavbarBrand>Food Delivery</NavbarBrand>
          <NavbarToggler />
          <Collapse isOpen={true} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <Link to='/' className='nav-link'>Home</Link>
              </NavItem>
              <NavItem>
                <Link to='/about' className='nav-link'>About</Link>
              </NavItem>
              <NavItem>
                <Link to='/contact-us' className='nav-link'>Contact Us</Link>
              </NavItem>
              {this.props.isLogin&&
                <>
                  <NavItem>
                    <NavLink onClick={this.logout} href='/'>Logout</NavLink>
                  </NavItem>
                </>
              }
              {!this.props.isLogin&&
                <>
                <NavItem>
                  <Link to='/login' className='nav-link'>Login</Link>
                </NavItem>
                </>
              }
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    )
  }
}
