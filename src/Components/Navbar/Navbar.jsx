//BEM -> Block element modifier
import React, {useState} from 'react'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../../Assets/logo.svg';
import './Navbar.css';


const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#Solution">Solution</a></p>
  <p><a href="#Pricing">Pricing</a></p>
  <p><a href="#Learn">Learn</a></p>
  <p><a href="#Contact">Contact</a></p>
  </>
)

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);



  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Login</p>
        <button type="button">Start Free Trial</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={ () => setToggleMenu(false)} />        
          : <RiMenu3Line color="#fff" size={27} onClick={ () => setToggleMenu(true)} />        
        }

        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <Menu/>
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
              <p>Login</p>
              <button type="button">Start Free Trial</button>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default Navbar;