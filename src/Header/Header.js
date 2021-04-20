import React, {useState} from 'react';
import styled from "styled-components";

import {Link} from 'react-router-dom'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  var navitem = localStorage.getItem('token')

  if(localStorage.getItem('token') &&  localStorage.getItem('username')=== "admin" )
  {
    var menu = 
    <div>
        <Link to='/home'><MenuLink >Home</MenuLink></Link>
        <Link to='/bookings'><MenuLink href="">Bookings</MenuLink></Link>
        <Link to='/pets/all'><MenuLink href="">Pets</MenuLink></Link>
        {/* <Link to='/about' ><MenuLink href="">My Users</MenuLink></Link> */} 
        {/* future work */}
        <Link to='/logout'><MenuLink href="">Logout</MenuLink></Link> 
    </div>
     
  }
  else if(localStorage.getItem('token') && localStorage.getItem('username'))
  {
    var menu = 
    <div>
        <Link to='/home'><MenuLink >Home</MenuLink></Link>
        <Link to='/contact'><MenuLink href="">Contact</MenuLink></Link>
        <Link to= '/pets/user'><MenuLink href="">Pets</MenuLink></Link>
        <Link to='/about' ><MenuLink href="">About</MenuLink></Link> 
        <Link to='/booking/user' ><MenuLink href="">My bookings</MenuLink></Link> 
        <Link to='/logout' ><MenuLink href="">Logout</MenuLink></Link> 
    </div>
  }
  else{
    var menu = 
      <div>
        <Link to='/home' ><MenuLink >Home</MenuLink></Link>
        <Link to='/about' ><MenuLink href="">About</MenuLink></Link> 
        <Link to='/contact'><MenuLink href="">Contact</MenuLink></Link>
        <Link to= '/register' ><MenuLink href="">Register</MenuLink></Link>
        <Link to='/login' ><MenuLink href="">Login</MenuLink></Link>
      </div>
  }

  return (
    <div><Nav>
    <Logo href="/">
      Hire  For Audit
    </Logo>
    <Hamburger onClick={() => setIsOpen(!isOpen)}>
      <span />
      <span />
      <span />
    </Hamburger>
    <Menu isOpen={isOpen}>
        {menu}
    </Menu>
  </Nav>
 
  </div>
    
  );
};
export default Header;
