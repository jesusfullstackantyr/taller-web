import React from "react";

const Header = () => {
    return (
        <header id="header">
          <div className="main-content">
            <a href="" className="brand">
              GameVerse
            </a>
            <nav className='main-navigation '>
              <a className='nav-link' href="">Inicio</a>
              <a className='nav-link' href="">Tienda</a>
              <a className='nav-link' href="">Galería</a>
            </nav>
          </div>
        </header>
    );
};

export default Header;