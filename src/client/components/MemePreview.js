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
      thumbnailURL,
      fullURL,
      description = ''
    } = this.props
    return (
      <a href={fullURL}>
        <div style={containerStyle}>
          <img src={thumbnailURL}/>
          <span style={descriptionStyle}>
          {description}
          </span>
        </div>
      </a>
    )

  }
}

export default MemePreview