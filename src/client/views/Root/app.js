import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Home'
import NoMatch from './nomatch'


class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route component={NoMatch}/>
      </Switch>
    )
  }
}

export default App
