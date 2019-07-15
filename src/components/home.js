import React from 'react';
import Header from './header';
import Sidebar from './sidebar';
import '../css/styles.css';
import Chart from './chart';

class Home extends React.Component {

  render() {
    return (
      <div className="Home">
      <Header/>
      <Sidebar/>
      <div className="chart"> <Chart/></div>
      </div>
    );
  }
}

export default Home;
