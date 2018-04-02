const base = 'https://s3-us-west-1.amazonaws.com/top-kekkle';

const generateFullURL = (imageId) => `${base}/enumerated/${imageId}`;

const generateThumbnailURL = (imageId) => {
  const [name, ext] = imageId.split('.');
  const thumbnailFile = `${name}-T.${ext}`;
  return `${base}/enumerated-thumbnails/${thumbnailFile}`;
};

export const generateAdditionalFields = (imageId) => {
  const thumbnailURL = generateThumbnailURL(imageId);
  const fullURL = generateFullURL(imageId);
  return {
    thumbnailURL,
    fullURL
  };
};

