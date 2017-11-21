import React, { PureComponent } from 'react'
import loremIpsum from 'lorem-ipsum'

const descriptionStyle = {
  fontFamily: "'Assistant', sans-serif",
  fontSize: 20
}

const containerStyle = {
  width: 350,
}

class MemePreview extends PureComponent {
  render() {
    const {
      previewURL = 'http://lorempixel.com/350/300/abstract/',
      id = 1,
      description = loremIpsum({ count: 3, units: 'words' })
    } = this.props
    return (
      <div style={containerStyle}>
        <img src={previewURL + id}/>
        <span style={descriptionStyle}>
          {description}
          </span>
      </div>
    )

  }
}

export default MemePreview