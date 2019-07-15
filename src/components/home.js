import React from 'react';
import Header from './header';
import Sidebar from './sidebar';
import '../css/styles.css';
import Chart from './chart';
import { connect } from 'redux';
class Home extends React.Component {
  constructor(props){
    super(props);


  }

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
function mapStateToProps(state) { return {
data: state.data };
}

export default Home;
