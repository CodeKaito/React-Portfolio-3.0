import React from 'react'
import './navbar.css'
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';

const Navbar = () => {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
  const [menu_class, setMenuClass] = useState("menu hidden")
  const [isMenuClicked, setIsMenuClicked] = useState(false)

  const updateMenu = () => {
    if(!isMenuClicked) {
      setBurgerClass("burger-bar clicked")
      setMenuClass("menu visible")
    } else {
      setBurgerClass("burger-bar unclicked")
      setMenuClass("menu hidden")
    }
    setIsMenuClicked(!isMenuClicked) //
  }

  return (
    <nav className='app__navbar'>
        
        <div className='app__navbar-logo'>
            <img src="/logo.png" alt='app__logo' />
        </div>
        
        <div className='app__navbar-icons'>
          <div className='app__navbar-rightside'>
            <div className='burger-menu' onClick={updateMenu}>
              <div className={burger_class} ></div>
              <div className={burger_class} ></div>
              <div className={burger_class} ></div>
            </div>

          </div>
        </div>

    </nav>
  )
}

export default Navbar
