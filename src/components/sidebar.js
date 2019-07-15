import React from 'react';
import '../css/side.css';
import ninja from '../img/ninja.jpeg';

export default class Sidebar extends React.Component {

  render() {
    return (
      <div className="Sidebar">
      <div className="sidenav">
<img src={ninja} height="100px" alt="ninja"/>
<a href="#">Shark Ninja</a>
<p> Magic Bullet Nutri-Bullet 12-piece</p>
<p>High-Speed Blender/Mixer System </p>
<a href="#overview">OVERVIEW</a>
<a href="#sales">SALES</a>

</div>
      </div>
    );
  }
}
