import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import FontAwesome from 'react-fontawesome'

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 12,
  marginBottom: 12,
}

const leftArrowStyle = {
  marginRight: 30,
  width: 40,
  color: 'black'
}

const headerStyle = {
  fontFamily: "'Ewert', cursive",
  fontSize: 69
}

const rightArrowStyle = {
  marginLeft: 30,
  width: 40,
  color: 'black'
}

class Header extends Component {
  render() {
    const {
      showRight,
      showLeft,
      currPageNumber
    } = this.props
    return (
      <div style={containerStyle}>
        {
          showLeft ?
            <Link to={`/memes/${currPageNumber - 1}`}>
              <FontAwesome
                name="arrow-left"
                size="3x"
                style={leftArrowStyle}
              />
            </Link> : <div style={{ width: 70 }}/>
        }
        <span style={headerStyle}>
          TOP KEKKLE
        </span>
        {
          showRight ?
            <Link to={`/memes/${currPageNumber + 1}`}>
              <FontAwesome
                name="arrow-right"
                size="3x"
                style={rightArrowStyle}
              />
            </Link> : <div style={{ width: 70 }}/>
        }
      </div>
    )
  }
}

export default Header