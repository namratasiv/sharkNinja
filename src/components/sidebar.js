import React from 'react';
import '../css/side.css';
import ninja from '../img/ninja.jpeg';

export default class Sidebar extends React.Component {

  render() {
    return (
      <div className="Sidebar">
      <div className="sidenav">
<img src={ninja} height="150px" alt="ninja"/>
<a href="#">Shark Ninja</a>
<p> Magic Bullet Nutri-Bullet 12-piece</p>
<p>High-Speed Blender/Mixer System </p>
<hr size="4"/>
<p> Pantry | Obsolete | Blender </p>
<p>Lightning Deal </p>
<hr size="4"/>
<a href="#overview">Overview</a>
<a className="active" href="#sales">Sales</a>

</div>
      </div>
    );
  }
}
