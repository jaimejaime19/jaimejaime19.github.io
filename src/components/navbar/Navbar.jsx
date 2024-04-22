import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import reactlogo from "../../assets/logo192.png";


const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#whoami">Who am I</a></p>
  <p><a href="#experience">Experience</a></p>
  <p><a href="#education">Education</a></p>
  {/* <p><a href="#brand">Brands</a></p> */}
  </>

)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="my__navbar">
      <div className="my__navbar-links">
        <div className='my__navbar-links_logo'>
          <img src={reactlogo} alt='reactlogo'/>
        </div>
        <div className='my__navbar-links_container'>
          <Menu/>
        </div>
      </div>
      <div className='my__navbar-sign' title='Sign in functionality WIP'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className='my__navbar-menu'>
        {
          toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        }
        {
          toggleMenu && (
          <div className='my__navbar-menu_container scale-up-center'>
            <div className='my__navbar-menu_container_links'>
              <Menu/>
            </div>
            <div className='my__navbar-menu_container-links-sign'>
              <p>Sign in</p>
              <button type='button'>Sign up</button>
            </div>
          </div>
          )}
      </div>
    </div>
  );
};

export default Navbar;
