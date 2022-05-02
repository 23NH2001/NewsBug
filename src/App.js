import './App.css';

import React, { Component } from 'react'
import {Navbar} from './MyComponent/Navbar';

export default class App extends Component {
  myName = 'Neveel';
  render() {
    return (
      <>
      <div><Navbar/></div>
      <div>Hello My name is {this.myName}</div>
      </>
      
    )
  }
}
