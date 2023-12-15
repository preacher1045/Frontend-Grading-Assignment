import React from 'react';
import './header.css'

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li className="login"><a href="#">Login</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;