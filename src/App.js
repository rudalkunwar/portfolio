import React, { Component } from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
import About from './Components/About'
export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Home/>
        <About/>
      </div>
    )
  }
}
