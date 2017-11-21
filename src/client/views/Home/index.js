import React, { PureComponent } from 'react'
import StackGrid from 'react-stack-grid'
import MemePreview from '../../components/MemePreview'
import db from '../../../database/dao'

class Home extends PureComponent {
  render() {
    return (
      <div>
        {/*<h1>Welcome to the React Starter!</h1>*/}
        <div style={{ maxWidth: 1090 }}>
          <StackGrid
            columnWidth={350}
            gutterWidth={10}
            gutterHeight={10}
            monitorImagesLoaded
          >
            {
              db.getPage(0).map(meme => <MemePreview key={meme.imageId} {...meme} />)
            }
          </StackGrid>
        </div>
      </div>
    )
  }
}

export default Home
