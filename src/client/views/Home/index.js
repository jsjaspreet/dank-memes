import React, { PureComponent } from 'react'
import { Redirect } from 'react-router-dom'
import StackGrid from 'react-stack-grid'
import { MemePreview, Header } from '../../components'
import db from '../../../database/dao'

const totalPages = db.getTotalPages()

class Home extends PureComponent {
  render() {
    const { match } = this.props
    const { page } = match.params
    const pageNumber = parseInt(page)

    if (isNaN(pageNumber) || pageNumber >= totalPages || pageNumber < 0) {
      return <Redirect to="/memes/0"/>
    }

    return (
      <div style={{ maxWidth: 1090, marginLeft: 'auto', marginRight: 'auto' }}>
        <Header
          showLeft={pageNumber > 0}
          showRight={pageNumber < (totalPages - 1)}
          currPageNumber={pageNumber}
        />
        <StackGrid
          columnWidth={350}
          gutterWidth={10}
          gutterHeight={10}
          monitorImagesLoaded
        >
          {
            db.getPage(pageNumber).map(meme => <MemePreview key={meme.imageId} {...meme} />)
          }
        </StackGrid>
      </div>
    )
  }
}

export default Home
