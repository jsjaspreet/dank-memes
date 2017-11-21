import React, { Component } from 'react'
import Nav from './nav'
import App from './app'

class Root extends Component {

  render() {
    return ([
      <Nav key="nav"/>,
      <App key="app"/>
    ])
  }
}

export default Root
