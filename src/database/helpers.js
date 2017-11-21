const generateFullURL = (imageId) => `https://s3-us-west-1.amazonaws.com/top-kekkle/enumerated/${imageId}`

const generateThumbnailURL = (imageId) => {
  const [name, ext] = imageId.split('.')
  const thumbnailFile = `${name}-T.${ext}`
  return `https://s3-us-west-1.amazonaws.com/top-kekkle/enumerated-thumbnails/${thumbnailFile}`
}

export const generateAdditionalFields = (imageId) => {
  const thumbnailURL = generateThumbnailURL(imageId)
  const fullURL = generateFullURL(imageId)
  return {
    thumbnailURL,
    fullURL
  }
}

