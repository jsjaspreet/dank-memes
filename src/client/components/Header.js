import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import FontAwesome from 'react-fontawesome'

const leftArrowStyle = {
  marginRight: 20
}

const headerStyle = {
  fontFamily: "'Ewert', cursive",
  fontSize: 69
}

const rightArrowStyle = {
  marginLeft: 20
}

class Header extends PureComponent {
  render() {
    const {
      showRight,
      showLeft,
      currPageNumber
    } = this.props
    return (
      <div>
        {
          showLeft &&
          <Link to={`/memes/${currPageNumber - 1}`}>
            <FontAwesome
              name="arrow-left"
              size="2x"
              style={leftArrowStyle}
            />
          </Link>
        }
        <span style={headerStyle}>
          TOP KEKKLE
        </span>
        {
          showRight &&
          <Link to={`/memes/${currPageNumber + 1}`}>
            <FontAwesome
              name="arrow-right"
              size="2x"
              style={rightArrowStyle}
            />
          </Link>
        }
      </div>
    )
  }
}

export default Header