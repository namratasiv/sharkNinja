import React from 'react';
import Header from './header';
import Sidebar from './sidebar';
import '../css/styles.css';

class Home extends React.Component {

  render() {
    return (
      <div className="Home">
      <Header/>
      <Sidebar/>
      </div>
    );
  }
}

export default Home;
