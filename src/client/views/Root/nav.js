import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Nav extends Component {

  render() {
    return (
      <nav>
        <Link to="/">
          <button style={{ padding: 5 }}>
            Home
          </button>
        </Link>
      </nav>
    )
  }

}

export default Nav
