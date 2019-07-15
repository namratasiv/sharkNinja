import React from 'react';
import logo from '../img/logo.png';
import '../css/header.css';

class Header extends React.Component {

  render() {
    return (
      <div className="Header">
      <ul>

  <li><a> <img src={logo} height= "20px" alt="logo" /> StackLine</a></li>

</ul>
      </div>
    );
  }
}

export default Header;
