import React from 'react';
import '../css/side.css';

export default class Sidebar extends React.Component {

  render() {
    return (
      <div className="Sidebar">
      <div className="sidenav">
  <a href="#about">About</a>
  <a href="#services">Services</a>
  <a href="#clients">Clients</a>
  <a href="#contact">Contact</a>
</div>
      </div>
    );
  }
}
