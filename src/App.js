import './App.css';

import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';

export default class App extends Component {
  a = 'Ritesh Pandey';
  render() {
    return (
      <div>
        <Navbar />
        <News pageSize={6} country='in' category='science'/>
      </div>
    )
  }
}
