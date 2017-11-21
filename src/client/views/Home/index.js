import React, { PureComponent } from 'react'
import StackGrid from 'react-stack-grid'
import MemePreview from '../../components/MemePreview'

class Home extends PureComponent {
  render() {
    return (
      <div>
        {/*<h1>Welcome to the React Starter!</h1>*/}
        <div style={{maxWidth: 1090}}>
          <StackGrid
            columnWidth={350}
            gutterWidth={10}
            gutterHeight={10}
            monitorImagesLoaded
          >
            <MemePreview id={1}/>
            <MemePreview id={2}/>
            <MemePreview id={3}/>
            <MemePreview id={4}/>
            <MemePreview id={5}/>
          </StackGrid>
        </div>
      </div>
    )
  }
}

export default Home
