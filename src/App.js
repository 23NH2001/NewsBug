import './App.css';

import React, { Component } from 'react'
import {Navbar} from './MyComponent/Navbar';
import News from './MyComponent/News';

export default class App extends Component {

  render() {
    return (
      <>
      <div><Navbar/></div>
      <div>
        <News/>
      </div>
      </>
      
    )
  }
}
