import React, { Component } from 'react'
import axios from 'axios'

const headerStyle = {
  fontFamily: "'Ewert', cursive",
  fontSize: 69,
  marginBottom: 20
}

class NoMatch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gifURL: false
    }
  }

  async componentDidMount() {
    const { data } = await axios.get('https://api.giphy.com/v1/gifs/random?api_key=QfjP1HpvJqYu9iIIXo4BpuNNG4PrI38L&tag=404&rating=R')
    const gifURL = data.data.image_url
    this.setState({ gifURL })
  }

  render() {
    return (
      <div>
        <h1 style={headerStyle}>VERE JU GOING ? 404 :'(</h1>
        {
          this.state.gifURL &&
          <img src={this.state.gifURL}/>
        }
      </div>
    )
  }
}

export default NoMatch
