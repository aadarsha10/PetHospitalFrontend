import React, { useState } from 'react';
import styled from "styled-components";

import { Link } from 'react-router-dom'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // var navitem = localStorage.getItem('token')

  if (localStorage.getItem('token') && localStorage.getItem('username') === "admin") {
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
  else if (localStorage.getItem('token') && localStorage.getItem('username')!== null) {
    var menu =
      <div>
        <Link to='/home'><MenuLink >Home</MenuLink></Link>
        <Link to='/contact'><MenuLink href="">Contact</MenuLink></Link>
        <Link to='/pets/user'><MenuLink href="">View Pets</MenuLink></Link>
        <Link to='/about'><MenuLink href="">About</MenuLink></Link>
        <Link to='/pet/insert'><MenuLink href="">Add Pets</MenuLink></Link>
        <Link to='/booking/user' ><MenuLink href="">My bookings</MenuLink></Link>
        <Link to='/logout' ><MenuLink href="">Logout</MenuLink></Link>
      </div>
  }
  else {
    var menu =
      <div>
        <Link to='/home' ><MenuLink >Home</MenuLink></Link>
        <Link to='/about' ><MenuLink href="">About</MenuLink></Link>
        <Link to='/contact'><MenuLink href="">Contact</MenuLink></Link>
        <Link to='/register' ><MenuLink href="">Register</MenuLink></Link>
        <Link to='/login' ><MenuLink href="">Login</MenuLink></Link>
      </div>
  }

  return (
    <div><Nav>
      <Logo href="/home">
        <img src="../logo.png"></img>
        
        Vet For Pet 
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
export default Navbar;
const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #696969;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  &:hover {
    color: #52BE94;
  }
`;

const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: white;
  top: 0;
  left: 0;
  right: 0;
`;

const Logo = styled.a`
  padding: 1rem 0;
  color: #778899;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;
  span {
    font-weight: 300;
    font-size: 1.3rem;
  }

  &:hover {
    color: #52BE94;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #7b7fda;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;