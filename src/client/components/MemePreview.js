import React, { PureComponent } from 'react'

const descriptionStyle = {
  fontFamily: "'Assistant', sans-serif",
  fontSize: 20
}

const containerStyle = {
  width: 350,
  display: 'flex',
  justifyContent: 'center'
}

class MemePreview extends PureComponent {
  render() {
    const {
      thumbnailURL = 'http://lorempixel.com/350/300/abstract/',
      description = ''
    } = this.props
    return (
      <div style={containerStyle}>
        <img src={thumbnailURL}/>
        <span style={descriptionStyle}>
          {description}
          </span>
      </div>
    )

  }
}

export default MemePreview